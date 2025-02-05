export const TextAlignLeftIcon = ({ size, style, fill, ...others }) => {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path
        d="M5 6H19M5 10H15M5 14H19M5 18H15"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
