
import Image from 'next/image';
import { scrollTo } from '../utils/scrollTo';
import * as S from '../styles/StyledFooter'

export default function Footer({ locationRef }) {
  return (
    <S.FooterWrapper>
      <S.Logo>
        <Image src="/images/logo/logo.png" alt="Логотип" width={36} height={36} />
        <span>Прокат лодок, сапов, катамаранов в Переславле</span>
      </S.Logo>

      <S.FooterLinks>
        <S.FooterLink onClick={() => scrollTo(document.getElementById('about'))}>О нас</S.FooterLink>
        <S.FooterLink onClick={() => scrollTo(locationRef)}>Как нас найти</S.FooterLink>
        <S.FooterLink onClick={() => scrollTo(document.getElementById('gallery'))}>Галерея</S.FooterLink>
        <S.FooterLink onClick={() => scrollTo(document.getElementById('order'))}>Заказать</S.FooterLink>
      </S.FooterLinks>
    </S.FooterWrapper>
  );
}
