import React from 'react';

import {
  Container, Item, Image, MenuItem, StyledLink,
} from './index.style';
import home from '../../assets/home.png';
import aboutUs from '../../assets/aboutus.png';
import resources from '../../assets/resources.png';
import levels from '../../assets/levels.png';
import contactUS from '../../assets/contactus.png';

const Menu = () => (
  <>
    <Container>
      {/* The height and width are for some of the images because they have a different size form the rest */}
      <MenuItem>
        <Image alt="home icon" src={home} />
        <StyledLink to="/">
          <Item>Home</Item>
        </StyledLink>
      </MenuItem>
      <MenuItem marginTop="12rem">
        <Image width="7.4rem" height="7.4rem" alt="about us icon" src={aboutUs} />
        <StyledLink to="/about-us" margin="2rem">
          <Item margin="2rem 0rem 4rem 7rem">About Us</Item>
        </StyledLink>
      </MenuItem>
      <MenuItem>
        <Image width="10rem" height="10rem" alt="resources icon" src={resources} />
        <StyledLink to="/resources" margin="3rem 2rem 0rem 1rem">
          <Item margin="3rem 0rem 4rem 7rem">Resources</Item>
        </StyledLink>
      </MenuItem>
      <MenuItem>
        <Image alt="level icon" src={levels} />
        <StyledLink to="/levels">
          <Item margin="3.7rem 0rem 4rem 7rem" fontSize="3.9rem">
						Levels
          </Item>
        </StyledLink>
      </MenuItem>
      <MenuItem>
        <Image alt="contact us icon " src={contactUS} />
        <StyledLink margin="5rem -1rem 0rem 2rem" to="/contact-us">
          <Item>Contact Us</Item>
        </StyledLink>
      </MenuItem>
    </Container>
  </>
);

export default Menu;
