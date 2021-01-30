import React from "react";
import BackgroundImage from "../src/components/BackgroundImage";
import LoadingScreen from "../src/components/LoadingScreen";
import Question from '../src/components/Question';

import db from "../db.json";
import Introduction from "../src/components/Introduction";
import Button from "../src/components/ButtonEnter";

const Quiz = () => {

  const [loading, setLoading] = React.useState(true);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const timer = () => {
    setTimeout(() => setLoading(false), 1500);
  }
  timer();


  return (
    <BackgroundImage backgroundImage={db.bg}>
      {loading && <LoadingScreen></LoadingScreen>}
      {!loading && <Introduction style={{ marginTop: '300px' }}>
        <Question>
          <Question.TitleContainer>
            <Question.Title>
              {db.questions[currentQuestion].title}
            </Question.Title>
          </Question.TitleContainer>
          <Question.OptionContainer>
            {db.questions[currentQuestion].alternatives.map((question, index) => {
              return (
                <Question.Option key={index}>{question}</Question.Option>
              );
            })}
          </Question.OptionContainer>
        </Question>
        <Button
          borderRadius={db.theme.borderRadius}
        >
          {db.buttonCheck}
        </Button>


      </Introduction>}
    </BackgroundImage>
  );
};

export default Quiz;
