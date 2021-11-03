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
          <NavLink>Sobre Mim</NavLink>
        </Link>  
      </li> 
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'> 
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'> 
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'> 
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
