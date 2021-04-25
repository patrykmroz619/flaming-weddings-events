import { Container, Heading } from '@/components/common';
import { ContactForm } from './ContactForm';
import { ContactItem } from './ContactItem';

import * as S from './styled';

export const ContactSection = () => (
  <S.Section id="contact">
    <Container>
      <Heading>Kontakt</Heading>
      <S.Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime est
        doloremque saepe, ipsam architecto quas provident consequatur nulla
        ratione quam perspiciatis commodi adipisci? Natus nobis molestiae non
        quisquam officia labore!
      </S.Paragraph>
      <ContactForm />
      <S.Paragraph>Możesz się ze mną skontaktować również poprzez:</S.Paragraph>
      <S.ContactDetails>
        <ContactItem
          text="690 996 169"
          href="phone:690996169"
          iconSrc="/icons/phone.svg"
        />
        <ContactItem
          text="flamingcocktailbar@wp.pl"
          href="mail:flamingcocktailbar@wp.pl"
          iconSrc="/icons/envelope.svg"
        />
        <ContactItem
          text="Messenger"
          href="https://www.facebook.com/flamingcocktailbar/"
          iconSrc="/icons/messenger.svg"
        />
      </S.ContactDetails>
    </Container>
  </S.Section>
);
