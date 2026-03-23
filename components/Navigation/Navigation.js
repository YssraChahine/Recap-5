import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 10;
`;

const NavItem = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 16px;
  background-color: #d9d9d9;
  border: 1px solid black;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #c0c0c0;
  }
`;

export default function Navigation() {
  return (
    <NavBar>
      <NavItem href="/">Spotlight</NavItem>
      <NavItem href="/gallery">Gallery</NavItem>
      <NavItem href="/favorites">Favorites</NavItem>
    </NavBar>
  );
}
