import React from "react";

const Footer = () => {
  const getDate = () => {
    let date = new Date();
    return date;
  };

  console.log(getDate());

  return (
    <div
      style={{
        boxShadow: "0 -2px 3px rgba(0, 0, 0, 0.1)", // Corrected inline style
      }}
      className="py-7 flex justify-center text-center items-center rounded-t-3xl bg-[#303030] text-white"
    >
      <div className="py-7 text-xl">
        <p>All Rights Reserved</p>
        <p className="my-5">&#169; {getDate().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
