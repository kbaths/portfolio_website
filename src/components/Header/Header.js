import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginTop: "-15px" }}>
          <DiCssdeck size="3em" /> <Span>Portifolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>  
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Conhecimentos</NavLink>
        </Link>  
      </li> 
      <li>
        <Link href="#about">
          <NavLink>Quem Sou</NavLink>
        </Link>  
      </li> 
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/kbaths"  target="_blank"> 
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/julio-anderson-6070201a0/" target="_blank"> 
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_kbath/" target="_blank"> 
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
