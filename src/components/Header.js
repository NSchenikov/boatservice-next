import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled.a`
  margin: 0 1rem;
  font-weight: bold;
`;

export default function Header() {
  return (
    <Nav>
      <NavLink href="#about">О нас</NavLink>
      <NavLink href="#location">Как нас найти</NavLink>
      <NavLink href="#gallery">Галерея</NavLink>
      <NavLink href="#order">Заказать</NavLink>
    </Nav>
  );
}
