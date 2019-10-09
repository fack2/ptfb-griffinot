import React from 'react';
import { Redirect } from 'react-router-dom'
import { Title, LandingImg, Paragraph, Button, ResourceLink, Link, Container } from './index.style';
import landing from '../../assets/landing-img.jpeg';

class LandingPage extends React.Component {

  state = {
    redirectBtn: false,
    renderLink: false
  }

  setRedirect = () => {
    this.setState({
      redirectBtn: true
    })
  }

  renderBtn = () => {
    if (this.state.redirectBtn) {
      return <Redirect to='/schema' />
    }
  }



  setRender = () => {
    this.setState({
      renderLink: true
    })
  }

  renderLink = () => {
    if (this.state.renderLink) {
      return <Redirect to='/resources' />
    }
  }

  render() {
    return (
      <>
        <Container>
          <Title>Supporting you with your child’s journey </Title>
          <LandingImg alt="landing" src={landing} />
          <Paragraph>
            Griffin Occupational Therapy provides online training and programmes for parents and teachers of children with motor skill delays and sensory processing challenges. We offer affordables online supports which teach you how to help your child.
        </Paragraph>

          {this.renderBtn()}
          <Button onClick={this.setRedirect} type="button">Get Started</Button>

          {this.renderLink()}
          <ResourceLink>
            View our resources page
          <Link onClick={this.setRender}> here</Link>
          </ResourceLink>
        </Container>
      </>
    );
  }
}

export default LandingPage;
