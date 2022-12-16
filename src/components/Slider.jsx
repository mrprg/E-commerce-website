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
`

const Slider = () => {
  return (
    <Container>
      <Arrow directon="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow directon="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider