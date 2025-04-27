import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute size-48">
      <img src={LOGO_URL} alt="Logo" />
    </div>
  );
};

export default Header;
