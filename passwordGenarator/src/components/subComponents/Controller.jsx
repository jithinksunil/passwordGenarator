import React, { useContext, useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import Scroll from "./Scroll";
import MainButton from "./MainButton";
import { createPassword } from "../../api/user/createPassword";
import { MyContext } from "../../store/Context";

function Controller() {
  const [length, setLength] = useState(6);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [specialCharacter, setSpecialCharacter] = useState();
  const [number, setNumber] = useState();
  const checkBoxArray = [
    { name: "Include upper case", value: "upperCase", setValue: setUpperCase },
    { name: "Include lower case", value: "lowerCase", setValue: setLowerCase },
    {
      name: "Include special charactor",
      value: "specialCharacter",
      setValue: setSpecialCharacter,
    },
    { name: "Include number", value: "number", setValue: setNumber },
  ];

  const { setLoading, setPassword, userLoggedIn } = useContext(MyContext);
  const handleGenaratePassword = () => {
    setLoading(true);
    createPassword({ lowerCase, upperCase, specialCharacter, number, length })
      .then((response) => {
        const password = response.data.password;
        setPassword(password);
      })
      .catch(() => {
        window.alert("axios error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    sessionStorage.removeItem('accessToken')
    document.getElementById(0).checked = true;
    document.getElementById(1).checked = true;
  }, []);
  return (
    <div className="w-3/4 outline-gray-400 outline outline-1 p-3 bg-gray-200 rounded-lg flex flex-col items-center">
      <p className="text-xl font-bold font-sans">Customize your password</p>
      <div className="w-full flex">
        <div className="w-1/2 flex justify-center items-center">
          <p>Length</p>
          <Scroll setValue={setLength} value={length} />
          <p>{length}</p>
        </div>
        <div className="">
          {checkBoxArray.map((element, index) => {
            return (
              <div className="py-1" key={index}>
                <CheckBox
                  name={element.name}
                  value={element.value}
                  setValue={element.setValue}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-2">
        {userLoggedIn ? (
          <MainButton name={"Genarate"} onClick={handleGenaratePassword} />
        ) : (
          "Login to genarate password"
        )}
      </div>
    </div>
  );
}

export default Controller;
