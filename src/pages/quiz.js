import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import LoadingScreen from "../components/LoadingScreen";
import Question from '../components/Question';

import db from "../../db";
import Introduction from "../components/Introduction";
import Button from "../components/ButtonEnter";

const Quiz = () => {

  const [loading, setLoading] = React.useState(true);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [choseAnswer,setChoseAnswer] = React.useState(0);

  const timer = () => {
    setTimeout(() => setLoading(false), 1500);
  }
  timer();

  const checkRightAnswer = (answer, rightAnswer) => {
    if(answer == rightAnswer) {
      console.log("right");
    }
  }

  return (
    <BackgroundImage backgroundImage={db.bg}>
      {loading && <LoadingScreen></LoadingScreen>}
      {!loading && <Introduction style={{ marginTop: '300px' }}>
        <Question>
            <Question.Title>
              {db.questions[currentQuestion].title}
            </Question.Title>
          <Question.OptionContainer>
            {db.questions[currentQuestion].alternatives.map((question, index) => {
              return (
                <Question.Option borderColor={db.theme.borderColor} onClick={()=>setChoseAnswer(index)} key={index}>{question}</Question.Option>
              );
            })}
          </Question.OptionContainer>
        </Question>
        <Button
          borderRadius={db.theme.borderRadius}
          onClick={() => checkRightAnswer(choseAnswer,db.questions[currentQuestion].answer)}
        >
          {db.buttonCheck}
        </Button>
      </Introduction>}
    </BackgroundImage>
  );
};

export default Quiz;
