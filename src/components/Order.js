import * as S from '../styles/StyledOrder'

export default function Order() {
  return (
    <S.Section
      id="order"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <S.Title>Заказать</S.Title>
      <S.PhoneLink href="tel:+79159738804">+7 (915) 973-88-04</S.PhoneLink>
      <S.Name>Владимир</S.Name>
    </S.Section>
  );
}
