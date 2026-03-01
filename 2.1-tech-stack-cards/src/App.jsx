import TechCard from "./TechCard"
import reactLogo from "./assets/react.png"
import gitLogo from "./assets/git.png"
import javaLogo from "./assets/java.png"
import linuxLogo from "./assets/linux.png"
import postgreLogo from "./assets/postgre.png"
import pythonLogo from "./assets/python.png"

function App() {
  return (
    <>
    <div className="card-container">
      <TechCard
        image={reactLogo}
        placeholder="React Logo"
        title="React"
        description="A JavaScript library for building user interface"
      />

      <TechCard
        image={gitLogo}
        placeholder="Git Logo"
        title="Git"
        description="A version control system for tracking code changes"
      />

      <TechCard
        image={javaLogo}
        placeholder="Java Logo"
        title="Java"
        description="An object-oriented language for building scalable applications"
      />

      <TechCard
        image={linuxLogo}
        placeholder="Linux Logo"
        title="Linux"
        description="An open-source operating system for servers and development"
      />

      <TechCard
        image={postgreLogo}
        placeholder="PostgreSQL Logo"
        title="PostgreSQL"
        description="An open-source relational database management system"
      />

      <TechCard
        image={pythonLogo}
        placeholder="Python Logo"
        title="Python"
        description="A high-level language for general-purpose programming"
      />
    </div>
    </>
  )
}

export default App
