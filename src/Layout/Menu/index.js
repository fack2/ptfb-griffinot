import React from 'react';
import {
  Container,
  Item,
  Image,
  MenuItem,
  StyledLink,
  ImageClose,
  ButtonClose,
  CloseDiv,
} from './index.style';
import home from '../../assets/home.png';
import aboutUs from '../../assets/aboutus.png';
import resources from '../../assets/resources.png';
import levels from '../../assets/levels.png';
import contactUS from '../../assets/contactus.png';
import close from '../../assets/close.png';

const Menu = ({ history }) => {
  const onClick = () => {
    history.go(-1);
  };
  return (
    <>
      <CloseDiv>
        <ButtonClose onClick={onClick}>
          <ImageClose alt="close icon" src={close} />
        </ButtonClose>
      </CloseDiv>
      <Container>
        {/* The height and width are for some of the images because they have a different size form the rest */}

        <MenuItem>
          <Image alt="home icon" src={home} />
          <StyledLink to="/">
            <Item>Home</Item>
          </StyledLink>
        </MenuItem>
        <MenuItem margin="0% 7% 0% 13%" margin1="0% 7% 0% 8%">
          <Image
            alt="about us icon"
            src={aboutUs}
            width="10%"
            height="32px"
            width1="7%"
            margin="1%"
            width2="6%"
            height2="29px"
            margin2="2% 1% 0% 9%"
          />
          <StyledLink
            to="/about-us"
            margin="1% 0% 0% 9%"
            margin1="1% 0% 0% 4%"
            margin2=" 3% 0% 0% 5%"
          >
            <Item>About Us</Item>
          </StyledLink>
        </MenuItem>
        <MenuItem margin="0% 7% 0% 15%" margin1="0% 7% 0% 8%">
          <Image
            alt="resources icon"
            src={resources}
            width="14%"
            height="44px"
            width1="8%"
            margin="1%"
            width2="7%"
            height2="42px"
            margin2="0% 0% 0% 9%"
          />
          <StyledLink
            to="/resources"
            margin="3% 0% 0% 7%"
            margin1="2% 0% 0% 4%"
            margin2="2% 0% 0% 5%"
          >
            <Item>Resources</Item>
          </StyledLink>
        </MenuItem>
        <MenuItem margin="0% 7% 0% 4%" margin1="0% 7% 0% 4%">
          <Image
            alt="level icon"
            src={levels}
            width="15%"
            height="44px"
            width1="9%"
            margin="1%"
            width2="9%"
            height2="44px"
            margin2="0% 0% 0% 3%"
          />
          <StyledLink
            to="/levels"
            margin="3% 0% 0% 5%"
            margin1="2% 0% 0% 3%"
            margin2="2% 0% 0% 5%"
          >
            <Item>Levels</Item>
          </StyledLink>
        </MenuItem>
        <MenuItem margin="0% 7% 0% 14%" margin1="0% 7% 0% 8%">
          <Image
            alt="contact us icon "
            src={contactUS}
            width1="10%"
            margin="1%"
            width2="9%"
            height2="44px"
            margin2="0% 0% 0% 8%"
          />
          <StyledLink to="/contact" margin="6% 0% 0% 5%" margin2='2% 0% 0% 3%'>
            <Item>Contact Us</Item>
          </StyledLink>
        </MenuItem>
      </Container>
    </>
  );
};

export default Menu;
