import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Aside = () => {
  const [show, setShow] = useState(false);

  const toggleAside = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Botón para abrir/cerrar el Aside */}
      <button
        onClick={toggleAside}
        className="absolute z-20 w-32 p-2 text-white border border-white rounded-md shadow-md bg-secondary top-4 right-4 hover:bg-white hover:text-secondary"
      >
        {show ? "Cerrar" : "Información"}
      </button>

      {/* Animación del Aside con framer-motion */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed top-0 left-0 z-10 w-full h-full overflow-y-auto text-white bg-secondary"
            initial={{ opacity: 0, y: "100%" }} // Aparece desde abajo con opacidad 0
            animate={{ opacity: 1, y: 0 }} // Transición a visible
            exit={{ opacity: 0, y: "100%" }} // Sale hacia abajo con opacidad 0
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Contenido del Aside */}
            <div className="p-4 mt-10">
              <h1 className="mt-12 text-2xl font-bold md:mt-10 md:text-3xl">Bienvenido a mi Todo List! 🎉</h1>
              <div className="flex flex-col gap-4 mt-4">
                <p>
                  Este proyecto es una versión personalizada de una aplicación de Todo List, algo que sabemos que es un ejercicio clásico de
                  &quot;primero de React&quot; 🙃. Sin embargo, he decidido agregar un par de características para darle una experiencia un poco más interesante y profesional.
                </p>
                <h2 className="text-2xl font-semibold">Local Storage 📥</h2>
                <p>
                  La primera mejora es el uso de LocalStorage. Esto permite que las tareas se guarden localmente en el navegador, por lo que incluso si recargas la página o cierras el navegador, las tareas siguen allí. Este pequeño detalle mejora la experiencia del usuario, ya que mantiene el progreso sin necesidad de una base de datos externa. 😎
                </p>
                <h2 className="text-2xl font-semibold">Framer-motion 💃</h2>
                <p>
                  La segunda mejora es el uso de Framer Motion para añadir animaciones fluidas y modernas, que hacen la UI más atractiva y mejoran la interacción con la aplicación. 🎨
                </p>
                <p>
                  En resumen, aunque el concepto básico es el de una lista de tareas, estas adiciones le dan un valor añadido que mejora la usabilidad y la experiencia del usuario. 😁
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Aside;