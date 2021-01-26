import BackgroundImage from "../src/components/BackgroundImage";
import EnglishQuiz from "../src/components/EnglishQuiz";
import db from "../db.json";
import EnglishQuizLogo from "../src/components/EnglishQuizLogo";
import ButtonEnter from "../src/components/ButtonEnter";

export default function Home() {
  return (
    <BackgroundImage backgroundImage={db.bg}>
      <EnglishQuizLogo>
        <EnglishQuizLogo.Text>
          English
          <br />
          Quiz
        </EnglishQuizLogo.Text>
      </EnglishQuizLogo>
      <EnglishQuiz>
        <ButtonEnter borderRadius={db.theme.borderRadius}>{db.button}</ButtonEnter>
      </EnglishQuiz>
    </BackgroundImage>
  );
}
