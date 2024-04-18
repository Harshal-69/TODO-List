import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  const handleAddButtonClick = () => {
    if (inputText !== "") props.addList(inputText);
    setInputText(""); // Clear the input after adding
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />

      <button className="add-btn" onClick={handleAddButtonClick}>
        +
      </button>
    </div>
  );
}

export default TodoInput;
