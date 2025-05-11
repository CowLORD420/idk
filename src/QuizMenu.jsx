import { useState, useEffect } from "react";
import Buttons from "./Buttons";

function QuizMenu({ onSelectQuiz, isFadingOut }) {
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    if (isFadingOut) setFadeClass("fade-out");
  }, [isFadingOut]);

  return (
    <div className={`fade-container ${fadeClass}`}>
      <h1 className="question">Alege un quiz!</h1>
      <div className="buttons">
        <Buttons choice="Mood – Desertul potrivit pentru starea ta de spirit!" onClick={() => onSelectQuiz("Mood")} />
        <Buttons choice="Evenimente – Dulciurile potrivite pentru ocazia ta!" onClick={() => onSelectQuiz("Evenimente")} />
        <Buttons choice="Sărbători – Desertul perfect pentru spiritul festiv din tine!" onClick={() => onSelectQuiz("Sarbatori")} />
        <Buttons choice="Restricții Medicale – Deserturi fără griji!" onClick={() => onSelectQuiz("Restrictii")} />
        <Buttons choice="Zodii – Ce desert ți se potrivește în funcție de zodie?" onClick={() => onSelectQuiz("Zodii")} />
      </div>
    </div>
  );
}

export default QuizMenu;
