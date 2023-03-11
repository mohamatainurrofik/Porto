import React from "react";

const Button = ({ styles = '', children, text, ...Props }) => (
  <button {...Props} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gradient-to-r from-blue-500 to-blue-300  hover:from-pink-500 hover:to-yellow-500 rounded-[10px]  outline-none ${styles}`}>
    {children || text}
  </button>
);

export default Button;
