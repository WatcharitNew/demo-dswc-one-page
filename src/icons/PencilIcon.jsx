export const PencilIcon = ({ size, style, color = "#707070", ...others }) => {
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
        d="M3 21H12H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2198 5.82843L15.0483 3L19.998 7.94975L17.1696 10.7781M12.2198 5.82843L6.6132 11.435C6.42567 11.6225 6.32031 11.8769 6.32031 12.1421V16.6776H10.8559C11.1211 16.6776 11.3754 16.5723 11.563 16.3847L17.1696 10.7781M12.2198 5.82843L17.1696 10.7781"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
