import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
  0% {
    opacity:0
  }
  100% {
    opacity:1
  }
`

const Introduction = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: #FFFFFF66;
  width:100%;
  max-width: 400px;
  margin:1rem auto;
  border-radius: 14px;
  opacity:1;
  animation: ${opacityAnimation} 2s;
`;

export default Introduction