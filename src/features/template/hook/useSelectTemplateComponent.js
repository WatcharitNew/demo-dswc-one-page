import { useCallback, useContext, useState } from "react";
import { usePostGenComponents } from "@/services";
import { getUserData } from "@/lib/helpers/cookie";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import dayjs from "dayjs";

export const useSelectTemplateComponent = () => {
  const [disasterIdx, setDisasterIdx] = useState(0);
  const [step, setStep] = useState(1);
  const [option, setOption] = useState(); /// type: {name, value, icon, custom} custom for type text and image
  const { mutate: postGenComponents, isPending: generating } =
    usePostGenComponents();
  const {
    setCreateLayoutData,
    createLayoutData,
    selectedTempComponent,
    setSelectedTempComponent,
    closeTemplateComponentModal: closeModal,
    currentBoxId,
    setCurrentBoxId,
    selectedLayout,
  } = useContext(CreateLayoutContext);

  const getGenComponentPayload = () => {
    const userData = JSON.parse(getUserData());
    const params = {
      component_id: selectedTempComponent?.data.component_id,
      province_id: userData?.province.id,
      date: userData?.date
        ? dayjs(userData?.date).format("YYYY-MM-DD")
        : undefined,
      box_id: currentBoxId,
      layout_id: selectedLayout?.layout_id,
      content:
        selectedTempComponent?.type === "text"
          ? selectedTempComponent?.data?.content
          : undefined,
    };

    const file = new FormData();
    file.append("file_content", selectedTempComponent?.data?.file?.[0]);

    return {
      params,
      file: selectedTempComponent?.type === "image" ? file : undefined,
    };
  };

  const postGenComponentApi = () => {
    postGenComponents(getGenComponentPayload(), {
      onSuccess: (response) => {
        setSelectedTempComponent((prev) => {
          const {
            mock_img_url: _not_use_1,
            empty_data_img_url: not_use_2,
            ...rest
          } = prev?.data;

          return {
            ...prev,
            data: {
              ...rest,
              ...response,
            },
          };
        });
        setStep((prev) => prev + 1);
      },
      onError: () => {
        console.log("error->", error);
      },
    });
  };

  const onCancel = () => {
    if (step === 2) setStep(1);
  };

  const onSaveData = () => {
    const formatData = {
      box_id: currentBoxId,
      component_id: selectedTempComponent?.data.component_id,
      img_url: selectedTempComponent?.data?.img_url,
      empty_url: selectedTempComponent?.data?.empty_img_url,
    };

    const existIndex = createLayoutData?.component?.findIndex(
      (item) => item.box_id === formatData.box_id
    );

    if (existIndex > -1) {
      createLayoutData.component[existIndex] = formatData;
      setCreateLayoutData(createLayoutData);
    } else {
      setCreateLayoutData({
        ...createLayoutData,
        component: (createLayoutData.component ?? []).concat(formatData),
      });
    }
  };

  const onProceed = async () => {
    if (step === 2) {
      onSaveData();
      closeModal();
      setCurrentBoxId();
      return;
    }
    if (selectedTempComponent) {
      postGenComponentApi();
      return;
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const resetSelected = useCallback(() => {
    setSelectedTempComponent(undefined);
    setOption(undefined);
  }, []);

  const resetAll = useCallback(() => {
    setStep(1);
    setDisasterIdx(0);
    setSelectedTempComponent(undefined);
    setOption(undefined);
  }, []);

  return {
    disasterIdx,
    setDisasterIdx,
    resetSelected,
    onCancel,
    step,
    onProceed,
    resetAll,
    option,
    setOption,
    generating,
  };
};
