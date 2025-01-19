import { Image } from "@mantine/core";

export function DisasterLabel({
  srcName,
  text,
  subtext,
  value,
  isSelected = false,
  onClick,
}) {
  const style = isSelected
    ? "w-32 scale-1 border-2 border-white"
    : "hover:ml-[0.32rem] hover:mr-[0.32rem] hover:scale-[1.085] hover:border-2 hover:border-white";

  return (
    <div
      onClick={() => onClick(value)}
      className={`relative ${style} cursor-pointer`}
      style={{
        transition: "margin 0.3s ease-in-out, transform 0.3s ease-in-out",
      }}
    >
      <Image src={`/${srcName}.svg`} alt={srcName} className="w-full h-full" />
      <div
        className="w-full h-full absolute"
        style={{
          top: 0,
          left: 0,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 33.23%, rgba(0, 0, 0, 0.72) 100%)",
        }}
      ></div>
      <div
        className="absolute text-white font-medium text-lg !scale-1"
        style={{ bottom: "0.25rem", left: "0.5rem" }}
      >
        <p>{text}</p>
        <p>{subtext}</p>
      </div>
    </div>
  );
}
