import styled from 'styled-components';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  background: white;
  padding: 2rem 2rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 36px;
    width: auto;

    @media (max-width: 768px) {
      height: 30px;
    }

    @media (max-width: 425px) {
      height: 26px;
    }
  }

  span {
    margin-left: 0.5rem;
    font-weight: bold;
    color: var(--primary);
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 425px) {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const FooterLink = styled.a`
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Logo>
        <Image src="/images/logo/logo.png" alt="Логотип" width={36} height={36} />
        <span>Прокат лодок, сапов, катамаранов</span>
      </Logo>

      <FooterLinks>
        <FooterLink href="#about">О нас</FooterLink>
        <FooterLink href="#location">Как нас найти</FooterLink>
        <FooterLink href="#gallery">Галерея</FooterLink>
        <FooterLink href="#order">Заказать</FooterLink>
      </FooterLinks>
    </FooterWrapper>
  );
}
