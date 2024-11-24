import React from "react";

const RejectBtn = ({reject_btn_content, reject_btn_onClick}) => {
    return (
      <>
            <button className="py-[4px] px-[20px] rounded-[5px] text-[#FFF] bg-red-500 text-[12px]">{ reject_btn_content}</button>
      </>
    );
};

export default RejectBtn;
