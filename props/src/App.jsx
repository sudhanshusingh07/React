import Welcome from "../public/Welcome"
function App() {

  return (
    <>
      <Welcome name="Sudhanshu" /> {/*Calling a component with props */}
      <Welcome name="Ram" />
      <Welcome name="Raj" />
    </>
  );
}

export default App
