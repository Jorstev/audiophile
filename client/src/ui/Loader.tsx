import React from "react";
import "./Loader.css";
const Loader: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
