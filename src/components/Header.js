import styled from 'styled-components';
import Image from 'next/image';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 36px;
    width: auto;
  }

  span {
    margin-left: 0.5rem;
    font-weight: bold;
    color: var(--primary);
    font-size: 1.1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  margin-left: 1rem;
  font-weight: bold;
  color: var(--primary);

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo>
        <Image src="/images/logo/logo.png" alt="Логотип" width={36} height={36} />
        <span>Прокат лодок, сапов, катамаранов Переславль</span>
      </Logo>

      <NavLinks>
        <NavLink href="#about">О нас</NavLink>
        <NavLink href="#location">Как нас найти</NavLink>
        <NavLink href="#gallery">Галерея</NavLink>
        <NavLink href="#order">Заказать</NavLink>
      </NavLinks>
    </Nav>
  );
}
