import { clsx } from "clsx";

export const Home = ({ className }) => {
  return (
    <svg
      className={clsx({ "size-8": !className }, className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" fill="transparent" />
      <path
        d="M22.6667 28.0013H9.33333C6.38781 28.0013 4 25.6134 4 22.6679V14.2781C4 12.4131 4.97415 10.6836 6.56905 9.71698L13.2357 5.67658C14.9348 4.64687 17.0652 4.64687 18.7643 5.67658L25.4309 9.71698C27.0259 10.6836 28 12.4131 28 14.2781V22.6679C28 25.6134 25.6121 28.0013 22.6667 28.0013Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.666H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
