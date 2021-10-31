import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { AiOutlineAndroid } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Já trabalhei com uma variedade de tecnologia no mundo do desenvolvimento, 
      do back ao front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br/>
            React.js            
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiência com <br/>
            NodeJs e Banco de Dados            
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <AiOutlineAndroid size="2.5rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experiência com <br/>
            React Native           
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  <SectionDivider/>

  </Section>
);

export default Technologies;
