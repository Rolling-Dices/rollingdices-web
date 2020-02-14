import styled from "styled-components";

export const Container = styled.div`
  height: 93.5%;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;

  div {
    background: #24222c;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
    color: #fbfcfc;
  }
`;

export const UserTables = styled.div`
  padding: 20px;
  gap: 20px;

  div {
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    list-style: none;
  }
`;

export const Table = styled.div`
  border-radius: 5px;
  transition: 0.5s;
  height: 100%;

  :hover {
    background: #fbfcfc;
    color: #24222c;
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
  }

  h3 {
    font-weight: normal;
  }

  ul {
    display: block;
  }

  p {
    div {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      display: inline;
      background: transparent;
    }
  }

  div {
    padding: 0;
    margin-top: 5px;
    box-shadow: none;
    background: transparent;

    img {
      margin-left: 5px;
      border-radius: 50%;
      width: 32px;
    }

    div {
      display: flex;
      align-items: center;
    }
  }
`;
