import React from "react";

import { Container } from "./styles";

import { MdAccountCircle, MdMenu } from "react-icons/md";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

function Header() {
  return (
    <Container>
      <a href="/">
        <h2>Rolling Dices</h2>
        <GiDiceTwentyFacesTwenty size={32} />
      </a>
      <div>
        <a href="/">
          <MdAccountCircle size={26}></MdAccountCircle>
        </a>
        <a href="/">
          <MdMenu size={26}></MdMenu>
        </a>
      </div>
    </Container>
  );
}

export default Header;
