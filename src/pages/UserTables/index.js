import React from "react";

import { Container, UserTables, Table } from "./styles";

import UserSidebar from "../../components/UserSidebar";

function User(props) {
  const { slug } = props.match.params;

  return (
    <Container>
      <UserSidebar slug={slug} />
      <UserTables>
        <ul>
          <li>
            <a href="/table/:slug_table">
              <Table>
                <h3>Titulo da mesa</h3>
                <p>Status: Em jogo</p>
                <p>
                  Sistema: D<div>&</div>D
                </p>
                <div>
                  <div>
                    Mestre:
                    <img
                      src="https://api.adorable.io/avatars/285/user1"
                      alt=""
                    />
                  </div>
                </div>
              </Table>
            </a>
          </li>
          <li>
            <a href="/table/:slug_table">
              <Table>
                <h3>Titulo da mesa</h3>
                <p>Status: Em jogo</p>
                <p>
                  Sistema: D<div>&</div>D
                </p>
                <div>
                  <div>
                    Mestre:
                    <img
                      src="https://api.adorable.io/avatars/285/user1"
                      alt=""
                    />
                  </div>
                </div>
              </Table>
            </a>
          </li>
        </ul>
      </UserTables>
    </Container>
  );
}

export default User;
