import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

export async function downloadJpg(pngUrl) {
  try {
    const img = await loadImage(pngUrl);

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const jpgUrl = canvas.toDataURL("image/jpeg", 0.9);

    const link = document.createElement("a");
    const imageName = getImageName(pngUrl);
    link.download = `${imageName}.jpg`;
    link.href = jpgUrl;
    link.click();
    link.remove();
  } catch (_err) {
    notifications.show({
      title: "เกิดข้อผิดพลาด",
      message: "เกิดข้อผิดพลาดระหว่างดาวน์โหลดรูปภาพ",
      color: "red",
      position: "top-center",
      icon: <IconX />,
    });
  }
}

export function downloadPng(url) {
  const link = document.createElement("a");
  link.download = true;
  link.href = url;
  link.click();
  link.remove();
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

const getImageName = (link) => {
  const url = new URL(link);
  return url.pathname.slice(1).split("/").pop().split(".").shift();
};
