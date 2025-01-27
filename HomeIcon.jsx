export const HomeIcon = ({ size, style, stroke = "#707070", ...others }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path
        d="M22.6667 28.0003H9.33333C6.38781 28.0003 4 25.6124 4 22.6669V14.2771C4 12.4121 4.97415 10.6826 6.56905 9.716L13.2357 5.6756C14.9348 4.64589 17.0652 4.64589 18.7643 5.6756L25.4309 9.716C27.0259 10.6826 28 12.4121 28 14.2771V22.6669C28 25.6124 25.6121 28.0003 22.6667 28.0003Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.667H20"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
