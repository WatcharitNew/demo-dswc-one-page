"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";

import { useReloadReport } from "../services";

import { RefreshReportModal, ReporterComponentModal } from "../components";
import { Button, Image } from "@mantine/core";
import { Refresh, Multiplier1, Multiplier15, Multiplier2 } from "@/icons";
import { useAuthContext } from "@/lib/providers/auth";
import { ReporterCustomizableComponent } from "../components/ReporterCustomizableComponent";
import { usePostGenComponents } from "@/services";
import dayjs from "dayjs";
import { SaveModal } from "@/components/SaveModal";
import { SaveCompleteModal } from "@/components/SaveCompleteModal";
import { usePostCreateReport } from "@/services/postCreateReport";

const getInitialReloadParams = (id, data) => {
  return {
    template_id: id,
    province_id: data?.province?.id,
    date: data?.date ? dayjs(data?.date).format("YYYY-MM-DD") : undefined,
    customizable_component: [],
  };
};

export const ReporterCreateContainer = () => {
  const { id } = useParams();
  const { data } = useAuthContext();
  const [opened, { open, close }] = useDisclosure(false);
  const { mutate: reload, data: reloadedReport } = useReloadReport();
  const [customComponents, setCustomComponents] = useState(undefined);
  const [component, setComponent] = useState(undefined);
  const [content, setContent] = useState();
  const [templateName, setTemplateName] = useState("");
  const [
    openedSaveModal,
    { open: openSaveModal, close: closeSaveModal },
  ] = useDisclosure(false);
  const [
    openedSaveCompleteModal,
    { open: openSaveCompleteModal, close: closeSaveCompleteModal },
  ] = useDisclosure(false);

  const [
    openedCustomModal,
    { open: openCustomModal, close: closeCustomModal },
  ] = useDisclosure(false);
  const { mutate: postGenComponents } = usePostGenComponents();
  const { mutate: postCreateReport } = usePostCreateReport();

  const imageSrc = useMemo(() => {
    return reloadedReport?.data?.img_url;
  }, [reloadedReport?.data]);

  const router = useRouter();

  const reloadReport = (options = {}) => {
    open();
    reload(
      { ...getInitialReloadParams(id, data), ...options },
      {
        onSettled() {
          close();
        },
      }
    );
  };

  const getGenComponentPayload = () => {
    const params = {
      component_id: component?.component_id,
      province_id: data?.province.id,
      date: data?.date ? dayjs(data?.date).format("YYYY-MM-DD") : undefined,
      box_id: component?.box?.box_id,
      layout_id: reloadedReport?.data?.layout?.layout_id,
      content: component?.customization_type === "text" ? content : undefined,
    };

    let formFile;
    if (component?.customization_type === "image" && content) {
      formFile = new FormData();
      formFile.append("file_content", content[0]);
    }

    return {
      params,
      file: formFile,
    };
  };

  const postGenComponentApi = () => {
    postGenComponents(getGenComponentPayload(), {
      onSuccess: (response) => {
        const componentIdx = customComponents.findIndex((comp) => {
          return comp.component_id === component.component_id;
        });
        setCustomComponents([
          ...customComponents.slice(0, componentIdx),
          { ...customComponents[componentIdx], imgUrl: response.img_url },
          ...customComponents.slice(componentIdx + 1),
        ]);

        setContent(undefined);
        closeCustomModal();
      },
      onError: () => {},
    });
  };

  const postCreateReportApi = () => {
    postCreateReport(
      {
        params: {
          img_url: reloadedReport?.data?.img_url,
          template_id: 1,
          date: data?.date,
          province_id: data?.province.id,
          name: templateName,
        }
      },
      {
        onSuccess: () => {
          closeSaveModal();
          openSaveCompleteModal();
        },
        onError: () => {},
      }
    );
  };

  const handleCloseSaveCompleteModal = () => {
    closeSaveCompleteModal();
    router.push("/reporter");
  }

  useEffect(() => {
    if (id && data?.province) {
      reloadReport();
    }
  }, [id, data]);

  useEffect(() => {
    if (customComponents === undefined) {
      setCustomComponents(reloadedReport?.data?.customizable_component);
    }
  }, [reloadedReport?.data]);

  return (
    <>
      <div className="col h-full">
        <div className="grow row justify-center pt-2 pb-8 overflow-auto">
          <div className="w-full h-fit max-w-[34rem] col gap-2">
            <div className="row items-end justify-between">
              <p className="font-medium text-gray-300">
                ตัวอย่างรายงานสาธารณภัย
              </p>
              <Button.Group>
                <Button
                  className="h-10 px-3 !border-0 !rounded-r-none"
                  variant="default"
                  onClick={() => reloadReport()}
                >
                  <Refresh />
                </Button>
                <Button
                  className="h-10 px-3 !border-0 !rounded-none"
                  variant="default"
                >
                  <Multiplier1 />
                </Button>
                <Button
                  className="h-10 px-3 !border-0 !rounded-none"
                  variant="default"
                >
                  <Multiplier15 />
                </Button>
                <Button
                  className="h-10 px-3 !border-0 !rounded-l-none"
                  variant="default"
                >
                  <Multiplier2 />
                </Button>
              </Button.Group>
            </div>
            <div className="relative">
              <Image
                alt="report-by-id-image"
                src={imageSrc}
                className="w-full"
                fit="contain"
              />
              {customComponents?.map((comp, idx) => (
                <ReporterCustomizableComponent
                  key={`${comp.component_id}-${idx}`}
                  box={comp.box}
                  imgUrl={comp.imgUrl}
                  onClick={() => {
                    setComponent(comp);
                    openCustomModal();
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white h-16 p-3 row items-center justify-center">
          <div className="row items-center justify-end gap-4 w-full max-w-[34rem]">
            <Button className="h-10 min-w-40" variant="outline">
              แก้ไข
            </Button>
            <Button
              disabled={!customComponents?.every((comp) => comp.imgUrl)}
              variant="primary"
              className="h-10 min-w-40"
              onClick={openSaveModal}
            >
              ส่งอนุมัติ
            </Button>
          </div>
        </div>

        <RefreshReportModal opened={opened} />
        <ReporterComponentModal
          type={component?.customization_type}
          opened={openedCustomModal}
          onClose={closeCustomModal}
          onProcess={postGenComponentApi}
          content={content}
          setContent={setContent}
        />
        <SaveModal
          opened={openedSaveModal}
          close={closeSaveModal}
          setTemplateName={setTemplateName}
          onSave={postCreateReportApi}
          showTags={false}
        />
        <SaveCompleteModal
          templateName={templateName}
          opened={openedSaveCompleteModal}
          close={handleCloseSaveCompleteModal}
        />
      </div>
    </>
  );
};
