import styled from "styled-components";

const Input = styled.input`
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
  background-size: 0 1.5px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.2s ease-out;

  &:hover {
    background-size: 100% 1.5px, auto;
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ borderColorFocus }) => borderColorFocus};
  }
`;

const ErrorMessage = styled.span `
  color:red;
`

const InputContainer = ({onChangeValue ,borderColor, borderRadius, placeholder, errorMessage, isError}) => {

    var borderColorCheck = borderColor;
    isError ? borderColorCheck = 'red' : borderColorCheck = borderColor;

    const handleInput = (event) => {
        onChangeValue(event.target.value)
    }

  return (
      <>
    <Input
      borderColor={borderColorCheck}
      borderColorFocus = {borderColorCheck}
      borderRadius={borderRadius}
      placeholder={placeholder}
      onChange={handleInput}
    ></Input>
        {isError ? (<ErrorMessage>
            {errorMessage}
        </ErrorMessage>) : ''}
    </>
  );
};

export default InputContainer;
