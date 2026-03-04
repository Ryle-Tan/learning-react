import Student from "./Student"

function App() {
  return(
    <>
        <Student name="Frances" age={30} isStudent={true} />
        <Student name="Ryle" age={42} isStudent={false} />
        <Student name="Razalo" age={18} isStudent={true} />
        <Student name="Tan" age={21} isStudent={false} />
        <Student />
    </>
  )
}

export default App
