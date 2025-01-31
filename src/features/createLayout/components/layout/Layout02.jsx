"use client";

import LayoutComponent from "./LayoutComponent";
import LayoutTemplate from "./LayoutTemplate";

const Layout02 = () => {
  return (
    <LayoutTemplate>
      <div className="flex gap-1 basis-[80%]">
        <div className="flex flex-col gap-1 basis-[61%]">
          <LayoutComponent className='basis-[20%]' />
          <LayoutComponent className='basis-[42%]' />
          <LayoutComponent className='basis-[24%]' />
          <LayoutComponent className='basis-[14%]' />
        </div>
        <div className="flex flex-col gap-1 basis-[39%]">
          <LayoutComponent className='basis-[48%]' />
          <LayoutComponent className='basis-[34%]' />
          <LayoutComponent className='basis-[18%]' />
        </div>
      </div>
    </LayoutTemplate>
  );
}

export default Layout02;
