import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingScreenContainer = styled.div`
    display:relative;
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF66;
`
const circleMovement1 = keyframes `
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`
const circleMovement2 = keyframes `
    0% {
      transform: translate(0, 0);
      background-color:#d9d9d9
    }
    100% {
      transform: translate(48px, 0);
      background-color:	#666666
    }
` 
const circleMovement3 = keyframes `
    0% {
      transform: translate(0, 0);
      background-color:	#666666
    }
    100% {
      transform: translate(48px, 0);
      background-color: #333333
    }
    
`
const circleMovement4 = keyframes `
    0% {
      transform: scale(1);
      background-color: #333333
    }
    100% {
      transform: scale(0);
      background-color:#000000
    }

`

const CircleLoading = styled.div `
  position: absolute;
  top: 50%;
  left:47%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`
const Circle = styled.div `
    position: absolute;
    top: 33px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
        left: 8px;
        animation: ${circleMovement1} 0.6s infinite;
    }
    &:nth-child(2) {
        left: 8px;
        animation: ${circleMovement2} 0.6s infinite;
    }
    &:nth-child(3) {
        left: 64px;
        animation: ${circleMovement3} 0.6s infinite;
    }
    &:nth-child(4) {
        left: 128px;
        animation: ${circleMovement4} 0.6s infinite;
    }
    
`

const LoadingScreen = () => {
    return (
        <LoadingScreenContainer>
            <CircleLoading>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
            </CircleLoading>
        </LoadingScreenContainer>
    );
};

export default LoadingScreen;