export const LayoutIcon = ({ size, style, ...others }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#707070"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <rect
        x="6.33301"
        y="6.33301"
        width="19.3333"
        height="19.3333"
        rx="1.66667"
        strokeWidth="2"
      />
      <line x1="16" y1="16.333" x2="25.3333" y2="16.333" strokeWidth="2" />
      <path
        d="M6.33301 7.99968C6.33301 7.0792 7.0792 6.33301 7.99967 6.33301H16.333V25.6663H7.99968C7.0792 25.6663 6.33301 24.9201 6.33301 23.9997V7.99968Z"
        strokeWidth="2"
      />
      <path
        d="M16.6667 5.99967H24C25.1046 5.99967 26 6.89511 26 7.99967V16.6663H16.6667V5.99967Z"
        strokeWidth="1.33333"
      />
    </svg>
  );
};
