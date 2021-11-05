import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, 
        LinkItem, LinkList, LinkTitle, LinkTitles, Slogan, SocialContainer, 
        SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Vamos Conversar</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=5571981916470&text=" target="_blank">
             Whatsapp
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitles >            
            Email
          </LinkTitles>
          <LinkItem href="mailto:julio@andersoncode.com" target="_blank"> 
           Me Envie Um Email 
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Se você deseja bater um papo comigo, não hesite em me enviar uma
        mensagem.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/kbaths"  target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/julio-anderson-6070201a0/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/_kbath/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
