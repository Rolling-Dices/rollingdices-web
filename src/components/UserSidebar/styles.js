import styled from "styled-components";

export const Container = styled.div`
  div {
    padding: 20px;
  }
`;

export const UserHeader = styled.div`
  display: grid;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  grid-template-columns: 1fr 2fr;
  margin-bottom: 20px;

  img {
    width: 120px;
    height: auto;
    border-radius: 50%;
  }

  div {
    display: block;
    box-shadow: none;
    padding-left: 3px;
    padding-bottom: 0;
  }

  h2 {
    font-weight: normal;
  }
`;

export const UserMenu = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  div {
    width: 100%;
    padding: 0;
    margin: 5px 0;
    transition: 0.7s;

    a {
      padding: 20px;
      font-size: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  div:hover {
    background: #fbfcfc;
    color: #24222c;
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);

    a {
      color: #24222c;
    }
  }
`;
