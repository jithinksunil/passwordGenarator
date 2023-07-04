import React, { useContext } from "react";
import "./loading.css";
import { MyContext } from "../../store/Context";

function Loading() {
  const { isLoading } = useContext(MyContext);
  return (
    isLoading && (
      <span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10">
        <div className="lds-dual-ring"></div>
      </span>
    )
  );
}

export default Loading;
