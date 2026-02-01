import "./cli.scss";
import MacWindow from "./macWindow";
import Terminal from "react-console-emulator";


const Title = ({ children }) => (
  <div style={{ color: "#00ff88", fontWeight: "bold", marginBottom: 6 , marginTop : 8 , fontFamily: 'monospace' }}>
    {children}
  </div>
);

const Command = ({ children }) => (
  <span style={{ color: "#bd93f9", fontWeight: "bold" }}>
    {children}
  </span>
);

const Label = ({ children }) => (
  <span style={{ color: "#f1fa8c" }}>{children}</span>
);

const Text = ({ children }) => (
  <div style={{ color: "#e8e8e3" , fontFamily: 'monospace' }}>{children}</div>
);

const Muted = ({ children }) => (
  <div style={{ color: "#8a8a8a", marginTop: 4 }}>{children}</div>
);

const Link = ({ href, children }) => (
  <span
    style={{
      color: "#4ea8ff",
      cursor: "pointer",
      textDecoration: "underline",
    }}
    onClick={() => window.open(href, "_blank")}
  >
    {children}
  </span>
);


const Cli = ({setWindowState , windowName}) => {
  const commands = {
    // help: {
    //   description: "Display all available commands",
    //   fn: () => (
    //     <div>
    //       <Title>Available Commands</Title>
    //       <Text><Command>about</Command> – Professional summary</Text>
    //       <Text><Command>skills</Command> – Technical skill set</Text>
    //       <Text><Command>projects</Command> – Academic and personal projects</Text>
    //       <Text><Command>experience</Command> – Internship and work experience</Text>
    //       <Text><Command>contact</Command> – Contact information</Text>
    //       <Text><Command>resume</Command> – Resume</Text>
    //       <Text><Command>clear</Command> – Clear the terminal</Text>
    //       <Muted>Type a command and press Enter</Muted>
    //     </div>
    //   ),
    // },

    about: {
      description: "Professional summary",
      fn: () => (
        <div>
          <Title>Professional Summary</Title>
          <Text>
            Hello, I’m Archi Jain, an aspiring Software Engineer with a
            strong interest in frontend development.
          </Text>
          <Text>
            I am actively seeking internship or entry-level opportunities
            where I can contribute to real-world projects while
            continuously improving my technical and problem-solving skills.
          </Text>
        </div>
      ),
    },

   skills: {
  description: "Technical skills",
  fn: () => (
    <div>
      <Title>Technical Skills</Title>

      <Text>
        <Label>Frontend:</Label> React, JavaScript, HTML, CSS, SCSS
      </Text>

      <Text>
        <Label>Backend:</Label> Node.js, Express (Foundational knowledge)
      </Text>

      <Text>
        <Label>Programming:</Label> Java, Data Structures and Algorithms
      </Text>

      <Text>
        <Label>Tools:</Label> Git, GitHub, VS Code, IntelliJ IDEA
      </Text>
    </div>
  ),
},

    projects: {
      description: "Projects",
      fn: () => (
        <div>
          <Title>Projects</Title>
          <Text>
            • Portfolio Website – React-based personal portfolio with a
            macOS-inspired user interface
          </Text>
          <Text>
            • CLI Portfolio – Interactive terminal-style portfolio built
            using React
          </Text>
          <Text>
            • Responsive UI Components – Reusable and accessible UI
            components
          </Text>
        </div>
      ),
    },

    experience: {
      description: "Experience",
      fn: () => (
        <div>
          <Title>Experience</Title>
          <Text>
            Frontend Developer Intern – Contributed to UI development,
            creation of reusable components, and enhancement of overall
            user experience.
          </Text>
        </div>
      ),
    },

    contact: {
      description: "Contact information",
      fn: () => (
        <div>
          <Title>Contact Information</Title>
          <Text>
            <Label>Email:</Label> archijain.dev@email.com
          </Text>
          <Text>
            <Label>LinkedIn:</Label>{" "}
            <Link href="https://linkedin.com/in/archijain">
              linkedin.com/in/archijain
            </Link>
          </Text>
          <Text>
            <Label>GitHub:</Label>{" "}
            <Link href="https://github.com/archijain">
              github.com/archijain
            </Link>
          </Text>
        </div>
      ),
    },
    academics: {
  description: "Academic Records",
  fn: () => (
    <div>
      <Title>Academic Records</Title>
      <Text>
        <Label>B.Tech:</Label> Computer Science – CGPA 8.03
      </Text>
       <Text>
        <Label>12th Grade:</Label> 89% / CGPA 8.9
      </Text>
       <Text>
        <Label>10th Grade:</Label> 84% / CGPA 8.4
      </Text>
    </div>
  ),
},


    resume: {
      description: "Resume",
      fn: () => (
        <div>
          <Title>Resume</Title>
          <Text>
            View Resume:{" "}
            <Link href="https://your-resume-link.com">
              Click here
            </Link>
          </Text>
        </div>
      ),
    },
  };

  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName}>
      <div className="cli-window">
        <Terminal
          className="terminal"
          commands={commands}
          welcomeMessage={
            <div>
              <Title className='welcome'>Welcome</Title>
              <Text>
                Archi Jain — Aspiring Software Engineer
              </Text>
              <Muted>
                Type <Command>help</Command> and press Enter to view
                available commands
              </Muted>
            </div>
          }
          promptLabel={"archijain@portfolio:~$"}
          promptLabelStyle={{ color: "#00ff88" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
