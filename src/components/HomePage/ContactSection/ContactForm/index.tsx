import { Input } from '@/components/common';
import * as S from './styled';

export const ContactForm = () => (
  <S.Form>
    <S.Label htmlFor="name">
      <p>Imie</p>
      <Input id="name" type="text" required />
    </S.Label>
    <S.Label htmlFor="email">
      <p>E-mail</p>
      <Input id="email" type="email" required />
    </S.Label>
    <S.Label htmlFor="guests">
      <p>Liczba gości</p>
      <Input id="guests" type="number" />
    </S.Label>
    <S.Label htmlFor="date">
      <p>Data imprezy</p>
      <Input id="date" type="date" />
    </S.Label>
    <S.FullWidthLabel htmlFor="subject">
      <p>Temat wiadomości</p>
      <Input id="subject" type="text" required />
    </S.FullWidthLabel>
    <S.FullWidthLabel htmlFor="content">
      <p>Treść wiadomości</p>
      <S.Textarea as="textarea" id="content" required />
    </S.FullWidthLabel>
    <S.SubmitButton type="submit">Wyślij</S.SubmitButton>
  </S.Form>
);
