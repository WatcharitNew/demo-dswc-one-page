"use client";

import LayoutComponent from "./LayoutComponent";

const Layout01 = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl max-h-full mx-auto p-4 gap-1">
      <div className="flex flex-col gap-1 basis-[13%] w-full bg-gray-300 p-1">
        <div className="flex gap-1 basis-[75%]">
          <LayoutComponent className='basis-[10%]' />
          <div className="basis-[80%] flex flex-col gap-1">
            <LayoutComponent className='basis-[50%] bg-inherit' />
            <LayoutComponent className='basis-[50%]' />
          </div>
          <LayoutComponent className='basis-[10%]' />
        </div>
        <div className="flex gap-1 basis-[25%]">
          <LayoutComponent className='w-full' />
        </div>
      </div>
      <div className="flex gap-1 basis-[15%]">
        <LayoutComponent className='basis-[69%]' />
        <LayoutComponent className='basis-[31%]' />
      </div>
      <div className="flex gap-1 basis-[65%]">
        <div className="flex flex-col gap-1 basis-[61%]">
          <LayoutComponent className='basis-[58%]' />
          <LayoutComponent className='basis-[26%]' />
          <LayoutComponent className='basis-[16%]' />
        </div>
        <div className="flex flex-col gap-1 basis-[39%]">
          <LayoutComponent className='basis-[30%]' />
          <LayoutComponent className='basis-[39%]' />
          <LayoutComponent className='basis-[31%]' />
        </div>
      </div>
      <div className="flex gap-1 basis-[7%]">
        <LayoutComponent className='basis-[69%]' />
        <LayoutComponent className='basis-[31%]' />
      </div>
    </div>
  );
}

export default Layout01;
