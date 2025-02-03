import { useCallback, useContext, useState } from "react";
import { format } from "date-fns";
import { SPECIAL_TYPE } from "@/constants";
import { usePostGenComponents } from "@/services";
import { getUserData } from "@/lib/helpers/cookie";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";

export const useSelectTemplateComponent = () => {
  const [disasterIdx, setDisasterIdx] = useState(0);
  const [step, setStep] = useState(1);
  const [option, setOption] = useState(); /// type: {name, value, icon, custom} custom for type text and image
  const { mutate: postGenComponents } = usePostGenComponents();
  const {
    setCreateLayoutData,
    createLayoutData,
    selectedTempComponent,
    setSelectedTempComponent,
    closeTemplateComponentModal: closeModal,
  } = useContext(CreateLayoutContext);

  const getGenComponentPayload = () => {
    const userData = JSON.parse(getUserData());
    const params = {
      component_id: selectedTempComponent?.data.component_id,
      province_id: userData?.province.id,
      date: format(userData?.date, "yyyy-mm-dd"),
      box_id: 1, // mock
      layout_id: 1, //mock
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
        setSelectedTempComponent({
          ...selectedTempComponent,
          data: { ...selectedTempComponent?.data, ...response },
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
      box_id: 3,
      component_id: selectedTempComponent?.data.component_id,
      img_url:
        selectedTempComponent?.data?.mock_img_url ||
        selectedTempComponent?.data?.img_url,
      empty_url:
        selectedTempComponent?.data?.empty_data_img_url ||
        selectedTempComponent?.data?.empty_img_url,
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
      return;
    }
    if (SPECIAL_TYPE.includes(selectedTempComponent?.type)) {
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
  };
};
