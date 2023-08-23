import { useState } from "react";
import "./App.css";
import { HiX } from "react-icons/hi";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTextToList = () => {
    const newTodoList = [...todoList];
    const object = {};
    text ? (object.text = text) : null;
    object.check = "";
    object.text ? newTodoList.push(object) : null;
    setTodoList(newTodoList);
    setText("");
  };

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
    <div className="flex justify-center mt-[25%]">
      <div
        className="menu bg-base-200 w-[50%] h-auto rounded-box items-center justify-around min-h-[10rem]
      gap-[2rem] py-7"
      >
        <h2 className="text-4xl font-extrabold ">T O D O</h2>
        <div className="w-[90%] flex justify-between gap-5 items-center mx-5 ">
          <input
            className="input input-bordered input-secondary w-[80%] text-center "
            type="text"
            placeholder="Type here"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button onClick={addTextToList} className="btn btn-primary">
            Add To Do
          </button>
        </div>
        <ul className="menu bg-base-200 w-full rounded-box p-0 ">
          {todoList.map((item, index) => {
            return (
              <li
                key={index}
                className="menu bg-base-200 w-full rounded-box flex-row items-center justify-between "
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

                  <button
                    onClick={() => {
                      deleteList(index);
                    }}
                    className="flex items-center h-7 w-7 rounded-lg bg-red-500 "
                  >
                    <HiX className="w-[100%]" />
                  </button>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
