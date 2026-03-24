import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavBar = styled.nav`
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  display: flex;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  z-index: 999;
`;

const NavItem = styled(Link)`
  position: relative;
  flex: 1;
  text-align: center;
  padding: 14px;
  font-size: 0.9rem;
  color: ${({ $active }) => ($active ? "#111" : "#777")};
  &::after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? "20px" : "0")};
    height: 2px;
    background: #111;
    transition: 0.2s;
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <NavBar>
      <NavItem href="/" $active={router.pathname === "/"}>
        Spotlight
      </NavItem>
      <NavItem href="/gallery" $active={router.pathname === "/gallery"}>
        Gallery
      </NavItem>
      <NavItem href="/favorites" $active={router.pathname === "/favorites"}>
        Favorites
      </NavItem>
    </NavBar>
  );
}
