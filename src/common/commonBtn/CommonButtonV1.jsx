import React from "react";

const CommonButtonV1 = ({common_button_v1_content, common_btn_v1_onClick}) => {
  return (
    <>
      <button onClick={common_btn_v1_onClick} className="py-[4px] px-[20px] rounded-[5px] text-[#504e4e] bg-brandClr text-[12px]   ">
        {common_button_v1_content}
      </button>
    </>
  );
};

export default CommonButtonV1;
