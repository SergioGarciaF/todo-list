import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Aside = () => {
  const [show, setShow] = useState(true);

  const toggleAside = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="relative ">
      {/* Botón para abrir/cerrar el Aside */}
      <button
        onClick={toggleAside}
        className="absolute z-20 w-32 p-2 text-white border border-white rounded-md shadow-md top-4 right-4 hover:bg-white hover:text-secondary"
      >
        {show ? "Cerrar" : "Información"}
      </button>

      {/* Animación del Aside con framer-motion */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="absolute top-0 right-0 z-10 w-1/4 min-h-screen text-black shadow-lg bg-secondary"
            initial={{ x: "100%" }} // Estado inicial fuera de la pantalla (a la derecha)
            animate={{ x: 0 }} // Estado animado (visible)
            exit={{ x: "100%" }} // Estado al salir (desliza hacia fuera)
            transition={{ duration: 0.3, ease: "easeInOut" }} // Configuración de la animación
          >
            <h1 className="p-4 mt-20 text-3xl text-white font-knewave">Bienvenido a mi todo list! 🎉</h1>
            <div className="flex flex-col gap-1 text-white">
              <p className="m-3 font-roboto">
              Este proyecto es una versión personalizada de una aplicación de Todo List, algo que sabemos que es un ejercicio clásico de &quot;primero de React&quot; 🙃. Sin embargo, he decidido agregar un par de características para darle una experiencia un poco más interesante y profesional.
              </p>
              <h2 className="m-3 text-2xl font-knewave">Local Storage 📥</h2>
              <p className="m-3 font-roboto">La primera mejora es el uso de LocalStorage. Esto permite que las tareas se guarden localmente en el navegador, por lo que incluso si recargas la página o cierras el navegador, las tareas siguen allí. Este pequeño detalle mejora la experiencia del usuario, ya que mantiene el progreso sin necesidad de una base de datos externa. 😎</p>
              <h2 className="m-3 text-2xl font-knewave">Framer-motion 💃</h2>
              <p className="m-3 font-roboto">La segunda mejora es el uso de Framer Motion para añadir animaciones fluidas y modernas, que hacen la UI más atractiva y mejoran la interacción con la aplicación. 🎨</p>
              <p className="m-3 font-roboto">En resumen, aunque el concepto básico es el de una lista de tareas, estas adiciones le dan un valor añadido que mejora la usabilidad y la experiencia del usuario. 😁</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Aside;
