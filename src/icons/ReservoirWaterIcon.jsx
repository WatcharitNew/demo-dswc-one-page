export const ReservoirWaterIcon = ({ size, style, color = "#707070", ...others }) => {
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
        d="M18.3128 7.90001H5.68724C5.64942 7.88697 5.61565 7.86379 5.58979 7.83272C5.55691 7.7932 5.53891 7.74342 5.53891 7.69201C5.53891 7.6406 5.55691 7.59081 5.58979 7.5513C5.61565 7.52022 5.64942 7.49704 5.68724 7.48401H18.3128C18.3506 7.49704 18.3844 7.52022 18.4102 7.5513C18.4431 7.59081 18.4611 7.6406 18.4611 7.69201C18.4611 7.74342 18.4431 7.7932 18.4102 7.83272C18.3844 7.86379 18.3506 7.88698 18.3128 7.90001Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M5.58979 10.4217C5.61565 10.3906 5.64942 10.3674 5.68724 10.3544H18.3128C18.3506 10.3674 18.3844 10.3906 18.4102 10.4217C18.4431 10.4612 18.4611 10.511 18.4611 10.5624C18.4611 10.6138 18.4431 10.6636 18.4102 10.7031C18.3844 10.7342 18.3506 10.7573 18.3128 10.7704H5.68724C5.64942 10.7573 5.61565 10.7342 5.58979 10.7031C5.55691 10.6636 5.53891 10.6138 5.53891 10.5624C5.53891 10.511 5.55691 10.4612 5.58979 10.4217Z"
        fill={color}
        stroke={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.372 12.72H5.62801C5.46256 12.7506 5.31305 12.8381 5.20544 12.9675C5.09783 13.0968 5.03891 13.2597 5.03891 13.428C5.03891 13.5962 5.09783 13.7592 5.20544 13.8885C5.31305 14.0178 5.46256 14.1054 5.62801 14.136H18.372C18.5374 14.1054 18.687 14.0178 18.7946 13.8885C18.9022 13.7592 18.9611 13.5962 18.9611 13.428C18.9611 13.2597 18.9022 13.0968 18.7946 12.9675C18.687 12.8381 18.5374 12.7506 18.372 12.72V12.72Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.372 15.6H5.62801C5.46256 15.6306 5.31305 15.7181 5.20544 15.8475C5.09783 15.9768 5.03891 16.1397 5.03891 16.308C5.03891 16.4762 5.09783 16.6392 5.20544 16.7685C5.31305 16.8978 5.46256 16.9854 5.62801 17.016H18.372C18.5374 16.9854 18.687 16.8978 18.7946 16.7685C18.9022 16.6392 18.9611 16.4762 18.9611 16.308C18.9611 16.1397 18.9022 15.9768 18.7946 15.8475C18.687 15.7181 18.5374 15.6306 18.372 15.6V15.6Z"
        fill={color}
      />
    </svg>
  );
};
