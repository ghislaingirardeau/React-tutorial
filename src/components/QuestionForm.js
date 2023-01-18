// SIMILAIRE A V MODEL

import { useState } from "react";

function QuestionForm() {
  const [inputValue, setInputValue] = useState("Posez votre question ici");
  const isInputError = inputValue.includes("f") ? "cant write f" : inputValue;

  const checkValue = (e) => {
    console.log(e);
    if (e.length === 0) {
      alert("the field cant be empty");
    }
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => checkValue(e.target.value)}
      />
      <span>{isInputError}</span>
    </div>
  );
}

export default QuestionForm;
