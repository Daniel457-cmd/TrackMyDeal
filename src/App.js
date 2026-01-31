import logo from './logo.svg';
import './App.css';

function Select(event)
  {
    const elementos = event.target.parentElement.querySelectorAll("*")
    const div = event.target
    elementos.forEach(elemento => {
      if(div.tagName == "DIV")
      {
        elemento.style.background = "#f3f3f3"
      }
    });
    
    div.style.background = "#5f7cfd"
  }

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <h1>TrackMyDeal</h1>
        <div className="options">
          <div className = "Produtos" onClick={Select}><p><b>Produtos</b></p></div>
          <div className = "Configurações" onClick={Select}><p><b>Configurações</b></p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
