import { useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState(false);
  return (
    <>
      <div className={mode ? "dark" : "light"}>
        <h1>Hello</h1>
        <button onClick={() => setMode(!mode)}>
          {mode ? "Light" : "Dark"}
        </button>
      </div>
      <style>{`
        .light {
          background: #fff;
          color: #222;
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: background 0.3s, color 0.3s;
        }
        .dark {
          background: #222;
          color: #fff;
          min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: background 0.3s, color 0.3s;
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background: #007bff;
          color: #fff;
          font-size: 16px;
        }
      `}</style>
    </>
  );
}

export default App
