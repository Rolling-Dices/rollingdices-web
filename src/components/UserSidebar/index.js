import React from "react";

import { Container, UserHeader, UserMenu } from "./styles";

import {
  GiVisoredHelm,
  GiRoundTable,
  GiFullFolder,
  GiChest
} from "react-icons/gi";

export default function UserSidebar({ slug, activeItem }) {
  return (
    <Container>
      <div>
        <UserHeader>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="User"
          />
          <div>
            <h2>Nome do usuario</h2>
            <div>
              <p>Status: Online</p>
              <p>Ultimo login: 13/12/2000</p>
            </div>
          </div>
        </UserHeader>
        <UserMenu>
          <div>
            <a href={`/${slug}/profile`}>
              <p>Perfil</p>
              <GiVisoredHelm size={32} />
            </a>
          </div>
          <div>
            <a href={`/${slug}/tables`}>
              <p>Mesas</p>
              <GiRoundTable size={32} />
            </a>
          </div>
          <div>
            <a href="/">
              <p>Fichas</p>
              <GiFullFolder size={32} />
            </a>
          </div>
          <div>
            <a href="/">
              <p>Compras</p>
              <GiChest size={32} />
            </a>
          </div>
        </UserMenu>
      </div>
    </Container>
  );
}
