export const RejectedIcon = ({ size, style, ...others }) => {
  return (
    <svg
      width="44"
      height="43"
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path
        d="M43.5 7.7766L35.4766 0L0.5 35.2234L8.63277 43L43.5 7.7766Z"
        fill="#D60000"
      />
      <path
        d="M0.5 7.7766L8.52344 0L43.5 35.2234L35.3672 43L0.5 7.7766Z"
        fill="#D60000"
      />
    </svg>
  );
};
