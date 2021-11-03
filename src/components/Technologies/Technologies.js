import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { AiOutlineAndroid } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br/>
    <SectionTitle>Conhecimentos</SectionTitle>
    <SectionText>
    Iniciei como Desenvolvedor Back-end em 2016, sair da área no final de 2017 
    e voltei em 2019 e em 2021 decidir aprender Front-end, tanto a parte web, 
    quanto a parte mobile. Vejo que estou no caminho certo, pois, 
    percebo os resultados em meus serviços desenvolvidos.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            CSS, Html, Javascript, <br />
            React.js       
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJs e Banco de Dados            
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            React Native           
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Adquirindo Conhecimentos</ListTitle>
          <ListParagraph>
            TypeScript, NextJs, Docker, Microsserviços            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  <SectionDivider/>

  </Section>
);

export default Technologies;
