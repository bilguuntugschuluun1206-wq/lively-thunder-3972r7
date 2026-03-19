import React, { useState } from "react";
import "./styles.css";
import { recipeData } from "./recipes"; 

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);

  const searchRecipe = () => {
    const input = userInput.toLowerCase();
    const matches = recipeData.filter(r => 
      r.ing.some(i => input.includes(i))
    );
    setResults(matches);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>👨‍🍳 AI Хоол Санал Болгогч</h1>
        <p>Гэрт байгаа орцоо бичээд юу хийж болохыг хараарай</p>
        
        <div className="search-box">
          <input 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
            placeholder="Жишээ нь: төмс, мах, өндөг..."
          />
          <button onClick={searchRecipe}>Хоол хайх</button>
        </div>

        <div className="results-grid">
          {results.length > 0 ? (
            results.map((r, i) => (
              <div key={i} className="recipe-card">
                <h3>{r.name}</h3>
                <p><b>Орц:</b> {r.ing.join(", ")}</p>
                <p><b>Заавар:</b> {r.step}</p>
              </div>
            ))
          ) : (
            userInput && <p className="no-result">Уучлаарай, тохирох жор олдсонгүй.</p>
          )}
        </div>
      </div>
    </div>
  );
}