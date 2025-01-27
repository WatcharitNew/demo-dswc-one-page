export const DisasterDefaultIcon = ({ size, style, color = "#999DA6", ...others }) => {
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
        d="M6 12H12M12 12H18M12 12V6M12 12V18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
