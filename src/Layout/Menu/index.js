import React from 'react';
import {
  Container, Item, Image, MenuItem,
} from './index.style';
import home from '../../assets/home.png';
import aboutUs from '../../assets/aboutus.png';
import resources from '../../assets/resources.png';
import levels from '../../assets/levels.png';
import contactUS from '../../assets/contactus.png';

const Menu = () => (
  <>
    <Container>
      {/* The orde attribute so I can order each MenuItem underneath the next because I'm using flexbox(go to its styling file to know more), the height and width are for some of the images because they have a different size form the rest */}
      <MenuItem order="1">
        <Image alt="home icon" src={home} />
        <Item>Home</Item>
      </MenuItem>
      <MenuItem marginTop="12rem" order="2">
        <Image width="7.4rem" height="7.4rem" alt="about us icon" src={aboutUs} />
        <Item margin="2rem 0rem 4rem 7rem">About Us</Item>
      </MenuItem>
      <MenuItem order="3">
        <Image width="10rem" height="10rem" alt="resources icon" src={resources} />
        <Item margin="3rem 0rem 4rem 7rem">Resources</Item>
      </MenuItem>
      <MenuItem order="4">
        <Image alt="level icon" src={levels} />
        <Item margin="3.7rem 0rem 4rem 7rem" fontSize="3.9rem">
					Levels
        </Item>
      </MenuItem>
      <MenuItem order="5">
        <Image alt="contact us icon " src={contactUS} />
        <Item>Contact Us</Item>
      </MenuItem>
    </Container>
  </>
);

export default Menu;
