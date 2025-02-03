export const UploadIcon = ({ size, style, ...others }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path d="M 43.988281 23.542969 C 43.75 17.6875 38.910156 13 33 13 C 31.980469 13 31.003906 13.132813 30.035156 13.40625 C 27.796875 10.054688 24.019531 8 20 8 C 13.582031 8 8.324219 13.0625 8.015625 19.40625 C 3.324219 20.695313 0 25.027344 0 30 C 0 36.066406 4.933594 41 11 41 L 41 41 C 45.964844 41 50 36.964844 50 32 C 50 28.167969 47.515625 24.734375 43.988281 23.542969 Z M 30.292969 26.707031 L 26 22.414063 L 26 34 L 24 34 L 24 22.414063 L 19.707031 26.707031 L 18.292969 25.292969 L 25 18.585938 L 31.707031 25.292969 Z" />
    </svg>
  );
};
