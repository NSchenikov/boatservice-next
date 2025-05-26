
import Image from 'next/image';
import { scrollTo } from '../utils/scrollTo';
import * as S from '../styles/StyledHeader'

export default function Header({ locationRef }) {
  return (
    <S.Nav>
      <S.Logo>
        <Image src="/images/logo/logo.png" alt="Логотип" width={36} height={36} />
        <span>Прокат лодок, сапов, катамаранов в Переславле</span>
      </S.Logo>

      <S.NavLinks>
        <S.NavLink onClick={() => scrollTo(document.getElementById('about'))}>О нас</S.NavLink>
        <S.NavLink onClick={() => scrollTo(locationRef)}>Как нас найти</S.NavLink>
        <S.NavLink onClick={() => scrollTo(document.getElementById('gallery'))}>Галерея</S.NavLink>
        <S.NavLink onClick={() => scrollTo(document.getElementById('order'))}>Заказать</S.NavLink>
      </S.NavLinks>
    </S.Nav>
  );
}
