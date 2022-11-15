
import React from 'react'
import styled from 'styled-components'

const ProfileImage = styled.div`
  text-align: center;
  margin: 0;
  position: relative;
  top: 0%;
  left: 2%;
`
const Message = styled.div`
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 4rem;
  @media screen and (max-width: 900px) {
    white-space: default;
    font-size: 2rem;
  }
`

const Container = styled.div`
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

class BirthdayMessage extends React.Component {
  render() {
    return (
      <Container>
        <ProfileImage>
          <img src={'https://scontent.fzmm1-1.fna.fbcdn.net/v/t39.30808-6/307209069_5461378300598308_290059468305982863_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEN11rRwod6VZ6tFmcf-RbJSegNpH3G55RJ6A2kfcbnlIQWDEDohDbO0Wx00ZfxUK6tVUshNA985YWZJapWWWT4&_nc_ohc=WHPIzCc2k6IAX9QvVP3&_nc_ht=scontent.fzmm1-1.fna&oh=00_AfCCo9jtXwqIqu4CnC1W3og5Rit0J9xLzNx7A-Z0VTj-zg&oe=6377EA4A'} alt="pic" style={{ width: "15rem" }} />;
        </ProfileImage>
        <Message style={{ color: this.props.birthdayData.textColor }}>
          Feliz cumple <br/> {this.props.birthdayData.wishee}!
        </Message>
        
      </Container>
    )
  }
}

export default BirthdayMessage