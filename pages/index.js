import BackgroundImage from "../src/components/BackgroundImage";
import EnglishQuizLogo from "../src/components/EnglishQuizLogo";
import ButtonEnter from "../src/components/ButtonEnter";
import LabelName from "../src/components/Introduction/LabelInput";
import Introduction from "../src/components/Introduction";
import IntroText from "../src/components/IntroText";
import InputContainer from "../src/components/Introduction/Input";

import { useRouter } from "next/router";

import db from "../db.json";




export default function Home() {
  const router = useRouter();

  const [name, setName] = React.useState('');
  const [isErrorName, setIsErrorName] = React.useState(false);

  const validateName = (name) => {
    console.log(name);
    if(name.length > 0) return true;
    return false;
  }

  const handleChangedInput = (value) => {
    setName(value);
  }

  return (
    <BackgroundImage backgroundImage={db.bg}>
      <EnglishQuizLogo>
        <EnglishQuizLogo.Text>
          English
          <br />
          Quiz
        </EnglishQuizLogo.Text>
      </EnglishQuizLogo>
      <Introduction>
      <IntroText textIntroColor={db.theme.colors.textColor}>Test your English skills</IntroText>
        <LabelName>
          <LabelName.Label textColor={db.theme.colors.textColor}>
            Name:
          </LabelName.Label>
        </LabelName>
        <InputContainer
          borderRadius={db.theme.borderRadius}
          borderColor={db.theme.borderColor}
          placeholder="Enter your name"
          errorMessage="Please enter your name"
          isError={isErrorName}
          onChangeValue={handleChangedInput}
        ></InputContainer>
        <ButtonEnter
          borderRadius={db.theme.borderRadius}
          onClick={() => {validateName(name) ? router.push(`/quiz?name=${name}`) : setIsErrorName(true);}}
        >
          {db.button}
        </ButtonEnter>
      </Introduction>
    </BackgroundImage>
  );
}
