import { clsx } from "clsx";

export const Sort = ({ className }) => {
  return (
    <svg
      className={clsx({ "size-6": !className }, className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 20V4M17 4L20 7M17 4L14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4V20M7 20L10 17M7 20L4 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
