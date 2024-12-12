import { motion, AnimatePresence } from "framer-motion";

const TaskList = ({ tasks, handleDelete }) => {
  return (
    <div className="absolute flex flex-col items-center gap-2 text-xl font-yellowTail top-64 ">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.div
            className="flex gap-4 w-72"
            key={task.id} // Asegúrate de usar un identificador único
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }} // Animación al eliminar
            transition={{ duration: 0.3 }}
          >
            <p className="w-48 p-1 rounded-md shadow-md bg-secondary">{task.content}</p>
            <motion.button
              whileHover={{ scale: 0.95 }}
              className="w-20 border border-white rounded-md hover:bg-secondary"
              onClick={() => handleDelete(index)}
            >
              Delete
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
