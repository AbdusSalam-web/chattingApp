import React from "react";

const CommonUsers = ({userName, userPhoto}) => {
  return (
    <>
      <div className="flex gap-5 items-center ">
        <div className="flex gap-5 items-center justify-between ">
          <div className="common_user_img w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-500 border-[2px] border-brandClr  ">
            <img src= {userPhoto} alt= {userName} />
          </div>
          <h2 className="text-xl font-medium text-[#000]">{ userName}</h2>
        </div>
      </div>
    </>
  );
};

export default CommonUsers;
