import { useState } from "react";
import "./App.css";
import { HiX } from "react-icons/hi";
import BoxHeader from "./components/boxHeader";

function App() {
  const [text, setText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [todoList, setTodoList] = useState([]);

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
    object.text ? newTodoList.push(object) : null;

    // check date that is created ***********
    const createdAt = new Date();
    const [day, month, year] = [
      createdAt.getDate(),
      createdAt.getMonth() + 1,
      createdAt.getFullYear(),
    ];
    object.created = `created ${day}:${month}:${year}`;

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

  return (
    <>
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-[20rem]"></header>
      <div className="flex justify-center mt-[-8rem] ">
        <div
          className="menu bg-base-200 w-[50%] h-auto rounded-box items-center justify-around min-h-[10rem]
      gap-[2rem] py-7 min-w-[37rem] shadow-lg shadow-zinc-600"
        >
          {errorText ? (
            <div className="alert alert-error transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errorText}</span>
            </div>
          ) : null}
          <div className="flex justify-between items-center w-[80%]">
            <h2 className="text-4xl font-extrabold ">T O D O</h2>
            <input type="checkbox" className="toggle toggle-info" checked />
          </div>

          <div className="w-[90%] flex justify-between gap-5 items-center mx-5 ">
            <input
              className="input input-bordered input-secondary w-[80%] text-center "
              type="text"
              placeholder="Type here"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />

            <button onClick={addTextToList} className="btn btn-primary ">
              Add To Do
            </button>
          </div>
          <ul className="menu bg-base-200 w-full rounded-box p-0 ">
            {todoList.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" menu bg-base-200 w-full rounded-box flex-row items-center justify-between "
                >
                  <h2 className="w-full justify-between text-lg font-semibold">
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={item.check}
                          className="checkbox checkbox-success"
                          readOnly
                          onClick={() => {
                            addCheck(index);
                          }}
                        />
                      </label>
                    </div>

                    {item !== {} ? item.text : null}
                    <div className="flex items-center gap-2">
                      <div className="badge badge-accent badge-outline">
                        {item.created}
                      </div>
                      <button
                        onClick={() => {
                          deleteList(index);
                        }}
                        className="flex items-center h-7 w-7 rounded-lg bg-red-500 "
                      >
                        <HiX className="w-[100%]" />
                      </button>
                    </div>
                  </h2>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
