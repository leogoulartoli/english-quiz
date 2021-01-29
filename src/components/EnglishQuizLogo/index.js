import styled from 'styled-components'
import { keyframes } from 'styled-components'


const expanding = keyframes`
  0% {
    font-size:3rem;
  }

  50% {
    font-size:4rem;
    color: #FFFFFF;
  }

  100{
    font-size:3rem;
  }
`;

const EnglishQuizLogo = styled.div`
  width: 100%;
  max-width: 400px;
  height:250px;
  margin: 0 auto
`;

EnglishQuizLogo.Text = styled.h1`
  text-align:center;
  font-size: 3rem;
  font-weight:700;
  padding-top:5rem;
  margin:0;
  animation: ${expanding} 4s infinite
`;


export default EnglishQuizLogo