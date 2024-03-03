import Student from "./Student";
function App() {

  return (
    <>
      <Student name="Star" age={23} isStudent={true} />
      <Student name="Moon" age={32} isStudent={false} />
      <Student name="Sun" age={66} isStudent={false} />
      <Student name="Earth" age={19} isStudent={true} />
      <Student/>
    </>
  );
}

export default App
