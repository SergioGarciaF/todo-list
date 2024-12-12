import { motion } from "framer-motion";

const InputTask = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="absolute flex gap-4 font-yellowTail top-44">
      <motion.input
        className="w-48 p-1 text-xl placeholder-white border rounded-md border-primary bg-background"
        type="text"
        placeholder="Add task"
        value={newTask}
        onChange={setNewTask}
      />
      <motion.button 
      whileHover={{scale: 0.95}}
      className="w-20 p-1 text-xl border rounded-md border-primary hover:bg-secondary" onClick={addTask}>
        Save task
      </motion.button>
    </div>
  );
};

export default InputTask;
