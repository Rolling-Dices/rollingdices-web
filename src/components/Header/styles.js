import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: #24222c;
  color: #fbfcfc;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin: 0 5px;
    text-decoration: none;
    color: #fbfcfc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      margin-left: 5px;
    }

    div {
    }
  }

  div {
    a {
      margin: 0 5px;
      text-decoration: none;
      color: #fbfcfc;
      display: inline-block;
    }
  }

  h2 {
    font-weight: normal;
    display: inline-block;
  }
`;

export const Menu = styled.div``;
