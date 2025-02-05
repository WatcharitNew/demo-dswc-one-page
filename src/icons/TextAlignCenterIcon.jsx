export const TextAlignCenterIcon = ({ size, style, fill, ...others }) => {
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
        d="M3 6H21M3 14H21M17 10H7M17 18H7"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
