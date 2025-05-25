import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #f0f0f0;
  padding: 2rem;
  text-align: center;
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
