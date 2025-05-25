import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: var(--footer-bg);
  padding: 2rem;
  text-align: center;
  color: var(--text);
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <a href="#about">О нас</a> |{' '}
      <a href="#location">Как нас найти</a> |{' '}
      <a href="#gallery">Галерея</a> |{' '}
      <a href="#order">Заказать</a>
    </FooterWrapper>
  );
}
