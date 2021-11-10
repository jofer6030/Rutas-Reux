import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Footer = () => {
  const store = useSelector((state) => state.user.selected);

  return (
    <div className="l_footer__wrapper">
      Hero 20{store.year} Copyright © Todos los derechos reservados
    </div>
  );
};

export default Footer;
