import { useState } from 'react'
import './App.css'

function App() {
  const [like, setlike] = useState(false);

  const toggleLike = () => {
    setlike((like) => !like);
  }

  return (
    <div style={{ fontSize: "48px", cursor: "pointer" }} onClick={toggleLike}>
      {like ? "❤️" : "🤍"}
    </div>
  );
}

export default App
