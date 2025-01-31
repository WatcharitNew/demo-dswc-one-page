"use client";

import LayoutComponent from "./LayoutComponent";

const LayoutTemplate = ({ children }) => {
  return (
    <div className="flex flex-col w-full max-w-7xl max-h-full mx-auto p-4 gap-1">
      <div className="flex flex-col gap-1 basis-[13%] w-full bg-gray-300 p-1">
        <div className="flex gap-1 basis-[75%]">
          <LayoutComponent className='basis-[13%]' />
          <div className="basis-[74%] flex flex-col gap-1">
            <LayoutComponent className='basis-[50%] bg-inherit' />
            <LayoutComponent className='basis-[50%]' />
          </div>
          <LayoutComponent className='basis-[13%]' />
        </div>
        <div className="flex gap-1 basis-[25%]">
          <LayoutComponent className='w-full' />
        </div>
      </div>
      {children}
      <div className="flex gap-1 basis-[7%]">
        <LayoutComponent className='basis-[69%]' />
        <LayoutComponent className='basis-[31%]' />
      </div>
    </div>
  );
}

export default LayoutTemplate;
