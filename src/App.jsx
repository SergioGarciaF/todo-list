import { useEffect, useState } from "react";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Aside from "./components/Aside";


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = { id: uuidv4(), content: newTask };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Aside/>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="absolute top-0 mt-20 text-3xl md:mt-4 md:text-5xl font-knewave">
          Todo List App 📜✏️
        </h1>

        <InputTask
          newTask={newTask}
          setNewTask={handleChange}
          addTask={addTask}
        />
        <TaskList tasks={tasks} handleDelete={handleDelete} />
      </div>
      
    </div>
  );
}

export default App;
