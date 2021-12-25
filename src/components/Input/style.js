import styled from "styled-components";

export const Input = styled.input`
  padding-left: 1rem;
  width: 80%;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  height: 2.5rem;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: none;

  background-image: linear-gradient(
      ${({ borderColor }) => borderColor},
      ${({ borderColor }) => borderColor}
    ),
    linear-gradient(#fff, #fff);
  background-size: 0 2px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.2s ease-out;

  &:hover {
    
  }
  &:focus {
    background-size: 100% 2px, auto;
    outline: none;
  }
`;

export const ErrorMessage = styled.span `
  color:red;
`