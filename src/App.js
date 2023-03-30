import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        {/* <h2>Whoop, it's Wednesday  </h2> */}
        <h2> Its {dayName}🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
  {toDos.map((obj, index) => {
    return (
      <div className="todo">
        <div className="left">
          <input
            onChange={(e) => {
              setToDos(
                toDos.map((obj2) => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked;
                  }
                  return obj2;
                })
              );
            }}
            checked={obj.status}
            type="checkbox"
            name=""
            id=""
          />
           <p className={obj.status ? "strikethrough" : ""}>{obj.text}</p>
        </div>
        <div className="right">
          <i
            onClick={() => {
              const newToDos = toDos.filter((obj2) => obj2.id !== obj.id);
              setToDos(newToDos);
            }}
            className="fas fa-times"
          ></i>
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
}

export default App;
