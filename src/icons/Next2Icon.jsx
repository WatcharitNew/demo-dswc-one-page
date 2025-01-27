export const Next2Icon = ({ size, style, color = "#999DA6", ...others }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, color: color, ...style }}
      {...others}
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="#707070"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
