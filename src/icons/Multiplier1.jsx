import { clsx } from "clsx";

export const Multiplier1 = ({ className }) => {
  return (
    <svg
      className={clsx({ "size-6": !className }, className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17L21 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7168 13.9985L11.6178 11.3776L9.77342 8.78906H11.3265L12.4024 10.3422L13.4864 8.78906H15.0395L13.1951 11.3776L15.0961 13.9985H13.5268L12.4024 12.4211L11.2861 13.9985H9.7168Z"
        fill="currentColor"
      />
      <path
        d="M7.75394 13.9993V9.98708L6.89648 10.1246V9.03255L9.0563 8.70898V13.9993H7.75394Z"
        fill="currentColor"
      />
    </svg>
  );
};
