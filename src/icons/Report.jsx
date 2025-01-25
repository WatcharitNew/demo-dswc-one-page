import { clsx } from "clsx";

export const Report = ({ className }) => {
  return (
    <svg
      className={clsx({ "size-6": !className }, className)}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 12.5V6.24853C20.5 6.0894 20.4368 5.93679 20.3243 5.82426L17.1757 2.67574C17.0632 2.56321 16.9106 2.5 16.7515 2.5H5.1C4.76863 2.5 4.5 2.76863 4.5 3.1V21.9C4.5 22.2314 4.76863 22.5 5.1 22.5H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10.5H16.5M8.5 6.5H12.5M8.5 14.5H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21L22.5 22.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 18.5C15.5 20.1569 16.8431 21.5 18.5 21.5C19.3299 21.5 20.081 21.163 20.6241 20.6185C21.1654 20.0758 21.5 19.327 21.5 18.5C21.5 16.8431 20.1569 15.5 18.5 15.5C16.8431 15.5 15.5 16.8431 15.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 2.5V5.9C16.5 6.23137 16.7686 6.5 17.1 6.5H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
