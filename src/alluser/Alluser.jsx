import React, { useEffect, useState } from "react";
import CommonUsers from "../common/CommonUsers";
import CommonButtonV1 from "../common/commonBtn/CommonButtonV1";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";
const Alluser = () => {
  // ****** Redux data
  const currentUser = useSelector((state) => state.currentUser.value);

  // ****** state variable
  const [userData, setUserData] = useState([]);

  //  ****** firebase variable
  const db = getDatabase();
  // ****** function part
  const handleAdd = (userData) => {
    console.log(userData);

    set(push(ref(db, "addFriend/")), {
      requsterId: currentUser.uid,
      requsterName: currentUser.displayName,
      requsterPhoto: currentUser.photoURL,
      reciverId: userData.key,
      reciverName: userData.userName,
      reciverPhoto: userData.userPhotoURL,
    });
  };
  // ****** realtime data

  useEffect(() => {
    onValue(ref(db, "users/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.key != currentUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setUserData(arr);
    });
  }, []);

  return (
    <>
      <section className="allUser px-[250px] py-[50px]">
        <h2 className="font-poppins font-bold text-[20px] text-brandClr text-center ">
          All user
        </h2>
        {userData.map((item) => (
          <div
            className="container flex justify-between items-center mb-[20px]"
            key={item.key}
          >
            <CommonUsers
              userName={item.userName}
              userPhoto={item.userPhotoURL}
            />
            <CommonButtonV1
              common_btn_v1_onClick={() => handleAdd(item)}
              common_button_v1_content={"Add"}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Alluser;
