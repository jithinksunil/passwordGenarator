import React, { useContext } from "react";
import MainButton from "./subComponents/MainButton";
import useCreateModal from "../customHooks/useCreateModal";
import SignUp from "./SignUp";
import Login from "./Login";
import { MyContext } from "../store/Context";

function NavBar() {
  const { userLoggedIn, setUserLoggedIn } = useContext(MyContext);
  const [showLoginModal, openLoginModalFunction, closeLoginUpModalFunction] =
    useCreateModal("login-modal");
  const [showSignUpModal, openSignUpModalFunction, closeSignUpModalFunction] =
    useCreateModal("signUp-modal");
  const handleSignUp = () => {
    openSignUpModalFunction();
  };
  const handleLogin = () => {
    openLoginModalFunction();
  };
  const handleLogOut = () => {
    sessionStorage.removeItem("accessToken");
    setUserLoggedIn(null);
    setPassword(null);
  };
  return (
    <div className="shadow-2xl flex justify-between items-center px-10 py-4 z-10">
      <p className="font-sans text-2xl font-extrabold text-blue-950">
        Password Genarator
      </p>
      <div className="flex justify-between items-center w-44">
        {userLoggedIn ? (
          <p className="font-sans text-lg font-bold text-gray-700">
            {userLoggedIn.email?.split("@")[0].toUpperCase()}
          </p>
        ) : (
          <MainButton name={"Sing up"} onClick={handleSignUp} />
        )}
        {userLoggedIn ? (
          <MainButton name={"Log out"} onClick={handleLogOut} />
        ) : (
          <MainButton name={"Log in"} onClick={handleLogin} />
        )}
      </div>
      {showSignUpModal && (
        <div
          id="signUp-modal"
          className="fixed md:absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0"
        >
          <SignUp
            openLoginModalFunction={openLoginModalFunction}
            closeSignUpModalFunction={closeSignUpModalFunction}
          />
        </div>
      )}
      {showLoginModal && (
        <div
          id="login-modal"
          className=" fixed md:absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0"
        >
          <Login closeLoginUpModalFunction={closeLoginUpModalFunction} />
        </div>
      )}
    </div>
  );
}

export default NavBar;
