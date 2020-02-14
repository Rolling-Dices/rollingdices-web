import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

import UserSidebar from "../../components/UserSidebar";

import * as UserActions from "../../store/actions/user";

function User(props) {
  const { slug } = props.match.params;
  const dispatch = useDispatch();

  useSelector(state => state.user);

  useEffect(() => {
    dispatch(UserActions.loadUser(slug));
  }, []);

  return (
    <Container>
      <UserSidebar slug={slug} />
      <div>Teste</div>
    </Container>
  );
}

export default User;
