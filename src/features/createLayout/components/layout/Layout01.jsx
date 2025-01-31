"use client";

import LayoutComponent from "./LayoutComponent";
import LayoutTemplate from "./LayoutTemplate";

const Layout01 = () => {
  return (
    <LayoutTemplate>
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
    </LayoutTemplate>
  );
}

export default Layout01;
