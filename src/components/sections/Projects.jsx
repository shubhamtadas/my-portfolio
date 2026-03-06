import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* SmartBite */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">SmartBite – Online Food Ordering Platform</h3>
              <p className="text-gray-400 mb-4">
                A modern food ordering web application with a responsive UI,
                dynamic menu browsing, cart management, and seamless checkout
                experience.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/shubhamtadas/food-ordering-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* IntelliChat */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">IntelliChat – AI Powered Chatbot</h3>
              <p className="text-gray-400 mb-4">
                An AI chatbot interface built with React that enables real-time
                conversation with intelligent responses and a smooth chat UI.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "OpenAI API", "JavaScript", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/shubhamtadas/react-ai-chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* TaskFlow */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">TaskFlow – Smart To-Do Manager</h3>
              <p className="text-gray-400 mb-4">
                A productivity-focused task management application allowing users
                to add, track, update, and organize tasks efficiently with a
                clean and responsive UI.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "JavaScript", "LocalStorage", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/shubhamtadas/react-todo-list"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* WorkSphere */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">WorkSphere – Employee Management Dashboard</h3>
              <p className="text-gray-400 mb-4">
                A responsive admin dashboard for managing employee records,
                tracking workforce data, and visualizing organizational
                information.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Chart.js", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/shubhamtadas/employee-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};