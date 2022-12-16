import styled from '@emotion/styled';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; 
  position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.directon === "left" && "10px"};
    right: ${props => props.directon === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex; 1;
    padding: 50px;
`

const Slider = () => {
  return (
    <Container>
      <Arrow directon="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
              <Image src='https://i.pinimg.com/originals/79/a6/bb/79a6bb483e693c5f4c73130434478bc0.jpg'/>
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow directon="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider