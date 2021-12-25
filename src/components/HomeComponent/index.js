import BackgroundImage from "../../components/BackgroundImage";
import EnglishQuizLogo from "../../components/EnglishQuizLogo";
import IntroText from "../../components/IntroText";
import InputContainer from "../Input";
import Button from "../../components/ButtonEnter";

import { useRouter } from "next/router";

import db from "../../../db";
import { Introduction, Label, LabelContainer } from "./style";

export default function HomeComponent() {
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
        <LabelContainer>
          <Label textColor={db.theme.colors.textColor}>
            Name:
          </Label>
        </LabelContainer>
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
