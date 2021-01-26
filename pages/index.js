import BackgroundImage from '../src/components/BackgroundImage'
import EnglishText from '../src/components/EnglishText';
import EnglishQuiz from '../src/components/EnglishQuiz';

import db from '../db.json'


export default function Home() {
  return (
    <BackgroundImage>
      <EnglishText>English<br/>
      Quiz</EnglishText>
      <EnglishQuiz>tes</EnglishQuiz>
    </BackgroundImage>
  );
}
