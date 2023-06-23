import { useState } from "react";
import Feedback from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Sections/Sections";
import Notification from "./Notification/Notification";


  const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    //const [state, setState] = useState({
        //good: 0,
        //neutral: 0,
       // bad: 0
      //});

      const onHandleClick = (option) => {
        if(option === 'good') setGood(prev => prev + 1)
        //setState(prev => ({
         // ...prev, [option]:
         // prev[option] + 1 }))
        if(option === 'neutral') setNeutral(prev => prev + 1)
        //setState(prev => ({
          //...prev, [option]:
         // prev[option] + 1 }))
        if(option=== 'bad') setBad(prev => prev + 1)
        //setState(prev => ({
         // ...prev, [option]:
         // prev[option] + 1 }))
    }
      const countTotalFeedback = () => {
      //return parseFloat(state.good + state.neutral + state.bad)
      return parseFloat(good + neutral + bad)
    }
      const countPositiveFeedbackPercentage = () => {
      //const result = parseFloat((state.good / (state.good + state.neutral + state.bad)) * 100);
      const result = parseFloat((good / (good + neutral + bad)) * 100)
      return result.toFixed(0);
    }
      return (
      <div>
        <Section
        title = "Please leave feedback">
        <Feedback
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={onHandleClick}
        />
        </Section>
        <Section
        title = "Statistics:">
        {countTotalFeedback() === 0 ? (
         <Notification
          message = 'There is no feedback'/>
        ) : (
        <Statistics
        good={good}//{state.good}
        neutral={neutral}//{state.neutral}
        bad={bad}//{state.bad}
        total={countTotalFeedback()}
        positivePercentage = {countPositiveFeedbackPercentage()}
        />
        )}
        </Section>
        </div>
      )

    }
export default App;
