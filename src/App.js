import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DeleteForever } from "@mui/icons-material";
function App() {
  const [count, setCount] = useState(0);
  // enter your name
  const [name, setName] = useState("");
  function enteryourname(e) {
    setName(e.target.value);
  }
  // change  your name
  const [set, changeName] = useState("Best Poovarasan");
  // increment & decrement
  const [incre, decre] = useState(0);
  // add list items
  const [list, setList] = useState([]);
  const [add, addList] = useState("");
  let addtask = () => {
    setList([...list, { id: list.length + 1, name: add, isstrike: false }]);
  };
  // strike & un strike
  let markdone = (id) => {
    let itemIndex = list.findIndex((obj) => obj.id === id);
    // list[itemIndex].isstrike = true;
    if (list[itemIndex].isstrike === false) {
      list[itemIndex].isstrike = true;
    } else if (list[itemIndex].isstrike == true) {
      list[itemIndex].isstrike = false;
    }
    setList([...list]);
  };
  // delete function
  let deletetask = (id) => {
    let removetask = list.findIndex((obj) => obj.id === id);
    list.splice(removetask, 1);
    setList([...list]);
  };

  return (
    <>
      <h2 className="usestate">Using the State Hook</h2>
      <section className="use">
        <div>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Click me
          </Button>
          <h4>You clicked {count} times</h4>
        </div>
        {/* enter your name */}
        <div>
          <TextField
            id="outlined-required"
            label="Enter your Name"
            value={name}
            onChange={enteryourname}
          />
          <h4>Your name is :{name}</h4>
        </div>
        {/* change your name */}
        <div>
          <TextField
            id="outlined-required"
            label="change your Name"
            value={set}
            onChange={(e1) => changeName(e1.target.value)}
          />
          <h4>Change Your name is : {set}</h4>
        </div>
        {/* increment & decrement */}
        <div className="increm">
          <Button
            variant="contained"
            color="warning"
            onClick={() => decre(incre - 1)}
          >
            -
          </Button>{" "}
          <Button variant="outlined">{incre}</Button>{" "}
          <Button variant="contained" onClick={() => decre(incre + 1)}>
            +
          </Button>
        </div>
        {/* add list */}
        <div>
          <TextField
            label="ToDoTask "
            id="outlined-size-small"
            size="small"
            onChange={(e2) => addList(e2.target.value)}
          />{" "}
          <span>
            <Button className="success" onClick={addtask} variant="contained">
              Add
            </Button>
          </span>
          <ul>
            {list.map((item) => {
              return (
                <li className={item.isstrike ? "mark-done" : ""}>
                  {item.name}
                  {"  "}
                  <span>
                    <button onClick={() => markdone(item.id)}>strike</button>{" "}
                    <span>
                      <button onClick={() => deletetask(item.id)}>
                        Remove
                      </button>
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
export default App;
