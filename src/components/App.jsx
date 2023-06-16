import { useState } from "react";
import Feedback from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Sections/Sections";
import Notification from "./Notification/Notification";


  const App = () => {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0
      });
      //const [options, setOptions] = useState(["good", "neutral", "bad"])
      const onHandleClick = (option) => {
        if(option === 'good') setState(prev => ({
          ...prev, [option]:
          prev[option] + 1
        }))
        if(option === 'neutral') setState(prev => ({
          ...prev, [option]:
          prev[option] + 1
        }))
        if(option=== 'bad') setState(prev => ({
          ...prev, [option]:
          prev[option] + 1
        }))
    }
      const countTotalFeedback = () => {
      return parseFloat(state.good + state.neutral + state.bad)
    }
      const countPositiveFeedbackPercentage = () => {
      const result = parseFloat((state.good / (state.good + state.neutral + state.bad)) * 100);
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
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={countTotalFeedback()}
        positivePercentage = {countPositiveFeedbackPercentage()}
        />
        )}
        </Section>
        </div>
      )

    }
export default App;
