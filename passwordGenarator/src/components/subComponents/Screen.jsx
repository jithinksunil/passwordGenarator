import React, { useContext } from "react";
import { MyContext } from "../../store/Context";

function Screen() {
  const { password } = useContext(MyContext);
  const handleCopy = () => {
    const cb = navigator.clipboard;
    const screen = document.getElementById("screen");
    cb.writeText(screen.innerText).then(() => alert("Text copied"));
  };
  return (
    <div className="w-3/4 h-24 outline-gray-400 outline outline-1 p-3 my-4 bg-gray-200 rounded-lg flex justify-center items-center relative z-0">
      <p id="screen" className="font-sans text-3xl font-extrabold">
        {password || "Genearate password"}
      </p>
      {password && (
        <button
          className="absolute right-0 px-4 py-1 rounded-lg outline-1 mx-4 outline-black outline hover:bg-white"
          onClick={handleCopy}
        >
          Copy
        </button>
      )}
    </div>
  );
}

export default Screen;
