import BackgroundImage from "../components/BackgroundImage";
import EnglishQuizLogo from "../components/EnglishQuizLogo";
import LabelName from "../components/Introduction/LabelInput";
import Introduction from "../components/Introduction";
import IntroText from "../components/IntroText";
import InputContainer from "../components/Introduction/Input";
import Button from "../components/ButtonEnter";

import { useRouter } from "next/router";

import db from "../../db";

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
        <Button
          borderRadius={db.theme.borderRadius}
          onClick={() => {validateName(name) ? router.push(`/quiz?name=${name}`) : setIsErrorName(true);}}
        >
          {db.buttonPlay}
        </Button>
      </Introduction>
    </BackgroundImage>
  );
}
