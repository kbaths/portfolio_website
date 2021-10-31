import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá, eu sou <br/>
        Julio Anderson.<br/>
        <h6>Sou freelancer Front-end e Back-end.</h6>
      </SectionTitle>
      <SectionText>
      Portfólio criado com o intuito de mostrar meus 
      projetos ao decorrer da minha carreira.<br/>
      "A persistência é o caminho do êxito." Charles Chaplin
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Entre em contato</Button>
    </LeftSection>
  </Section>
);

export default Hero;