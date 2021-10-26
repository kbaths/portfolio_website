import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem Vindo ao <br/>
        Meu Portifolio pessoal
      </SectionTitle>
      <SectionText>
        Ainda vou bolar algo para colocar aqui
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Entre em contato</Button>
    </LeftSection>
  </Section>
);

export default Hero;