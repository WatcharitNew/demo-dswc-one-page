export const Back2Icon = ({
  size,
  style,
  color = "#999DA6",
  ...others
}) => {
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
        d="M15 6L9 12L15 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
