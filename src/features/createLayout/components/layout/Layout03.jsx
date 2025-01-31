"use client";

import LayoutComponent from "./LayoutComponent";
import LayoutTemplate from "./LayoutTemplate";

const Layout03 = () => {
  return (
    <LayoutTemplate>
      <div className="flex flex-col gap-1 basis-[80%]">
        <LayoutComponent className='basis-[19%]' />
        <div className="flex gap-1 basis-[41%]">
          <LayoutComponent className='basis-[61%]' />
          <LayoutComponent className='basis-[39%]' />
        </div>
        <div className="flex gap-1 basis-[40%]">
          <LayoutComponent className='basis-[31%]' />
          <LayoutComponent className='basis-[30%]' />
          <div className="flex flex-col gap-1 basis-[39%]">
            <LayoutComponent className='basis-[49%]' />
            <LayoutComponent className='basis-[51%]' />
          </div>
        </div>
      </div>
    </LayoutTemplate>
  );
}

export default Layout03;
