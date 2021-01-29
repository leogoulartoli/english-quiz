import React from "react";
import BackgroundImage from "../src/components/BackgroundImage";
import LoadingScreen from "../src/components/LoadingScreen";

import db from "../db.json";

const Quiz = () => {

const [loading,setLoading] = React.useState(true);

const timer = () => {
    setTimeout(() => setLoading(false),2500);
}
timer();


  return (
    <BackgroundImage backgroundImage={db.bg}>
        {loading && <LoadingScreen></LoadingScreen>}
      
    </BackgroundImage>
  );
};

export default Quiz;
