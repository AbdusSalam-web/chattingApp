import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  //  ****** redux data
  const userDataSlice = useSelector((state) => state.currentUser.value);


  return (
    <>
      <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div className="w-28 h-28 flex items-center justify-center bg-blue-700 mt-8 rounded-full border-4 overflow-hidden border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
          <img
            src={userDataSlice?.photoURL || "User name"}
            alt={userDataSlice?.displayName || "User name"}
          />
        </div>
        <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
          <span className="text-2xl font-semibold">
            {userDataSlice?.displayName || "User name"}
          </span>
          <p>{userDataSlice?.email || "User email address"}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
