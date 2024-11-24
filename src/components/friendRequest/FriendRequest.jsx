import React, { useEffect, useState } from "react";
import CommonUsers from "../../common/CommonUsers";
import CommonButtonV1 from "../../common/commonBtn/CommonButtonV1";
import RejectBtn from "../../common/rejectBtn/RejectBtn";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const FriendRequest = () => {
  // all variable
  const [request, setRequest] = useState([]);

  const currentUser = useSelector((state) => state.currentUser.value);

  // redux data

  // firebase variable
  const db = getDatabase();
  // realtime database

  // all function
  // ...... printing all friend request data
  useEffect(() => {
    onValue(ref(db, "addFriend/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().reciverId == currentUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setRequest(arr);
    });
  }, []);
    console.log(currentUser.uid, "=", request.map((item) => (
      item.reciverId
  )));

  return (
    <div>
      <section className="allUser px-[250px] py-[50px]">
        <h2 className="font-poppins font-bold text-[20px] text-brandClr text-center ">
          All requests
        </h2>
        {request.map((item) => (
          <div
            key={item.key}
            className="container flex justify-between items-center mb-[20px]"
          >
            <CommonUsers
              userName={item.requsterName}
              userPhoto={item.requsterPhoto}
            />
            <div className="flex gap-[10px]">
              <CommonButtonV1 common_button_v1_content={"Confirm"} />
              <RejectBtn reject_btn_content={"Reject"} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FriendRequest;
