"use client";

import { LAYOUT_TEMPLATE_HEIGHT, LAYOUT_TEMPLATE_WIDTH } from "@/constants";
import LayoutComponent from "./LayoutComponent";

const Layout = ({ data }) => {
  return (
    <div className="relative">
      {data.map((item) => (
        <LayoutComponent
          key={item['box_id']}
          idx={item['box_id']}
          style={{
            'height': `calc(${item['bbox']['max_y']-item['bbox']['min_y']}*${LAYOUT_TEMPLATE_HEIGHT}px)`,
            'width': `calc(${item['bbox']['max_x']-item['bbox']['min_x']}*${LAYOUT_TEMPLATE_WIDTH}px)`,
            'top': `calc(${item['bbox']['min_y']}*${LAYOUT_TEMPLATE_HEIGHT}px)`,
            'left': `calc(${item['bbox']['min_x']}*${LAYOUT_TEMPLATE_WIDTH}px)`
          }}
        />
      ))}
    </div>
  )
}

export default Layout;