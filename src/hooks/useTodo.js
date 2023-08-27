import { useState } from "react";

const useTodo = () => {
  const [text, setText] = useState("");
  const [errorText, setErrorText] = useState("");

  const [todoList, setTodoList] = useState(() => {
    // set default is getting item from localStorage *********
    const output = localStorage.getItem("todoList");
    let result;
    if (output) {
      result = JSON.parse(output);
    } else {
      result = [];
    }
    return result;
  });

  const [darkMode, setDarkMode] = useState({
    dark: "light",
    checkBox: "check",
  });

  const addTextToList = () => {
    const newTodoList = [...todoList];
    const object = {};
    if (text && text.length < 36) {
      object.text = text;
      setErrorText("");
    } else {
      setErrorText("Text must less than 36 character");
    }
    object.check = "";

    // check date that is created ***********
    const createdAt = new Date();
    const [day, month, year] = [
      createdAt.getDate(),
      createdAt.getMonth() + 1,
      createdAt.getFullYear(),
    ];
    object.created = `created ${day}:${month}:${year}`;
    object.text ? newTodoList.push(object) : null;

    setTodoList(newTodoList);
  };

  // check box condition ************
  const addCheck = (getIndex) => {
    const newTodoList = [...todoList];
    if (todoList[getIndex].check === "") {
      newTodoList[getIndex].check = "checked";
    } else {
      newTodoList[getIndex].check = "";
    }
    setTodoList(newTodoList);
  };

  const deleteList = (getIndex) => {
    const newTodoList = todoList.filter((item, index) => {
      return index !== getIndex;
    });

    setTodoList(newTodoList);
  };

  const changeMode = () => {
    if (darkMode.dark === "dark") {
      setDarkMode({ dark: "light", checkBox: "check" });
    } else {
      setDarkMode({ dark: "dark", checkBox: "checkbox" });
    }
  };

  return {
    errorText,
    todoList,
    darkMode,
    setText,
    addTextToList,
    addCheck,
    deleteList,
    changeMode,
  };
};
export default useTodo;
