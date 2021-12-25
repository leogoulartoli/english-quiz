import { ErrorMessage, Input } from "./style";

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
