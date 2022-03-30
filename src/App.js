import './App.css';
import { Header } from "./components/Header/Header";

import danki from "./res/danki.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='stories'>
        <div className='storiesCard' style={{backgroundImage: `url(${danki})`}}>
          <p>Dani P.</p>
          
        </div>
        <div className='storiesCard' style={{backgroundImage: `url(${danki})`}}>
          <p>Dani P.</p>
          
        </div>
        <div className='storiesCard' style={{backgroundImage: `url(${danki})`}}>
          <p>Dani P.</p>
          
        </div>
        <div className='storiesCard' style={{backgroundImage: `url(${danki})`}}>
          <p>Dani P.</p>
          
        </div>
        <div className='storiesCard' style={{backgroundImage: `url(${danki})`}}>
          <p>Dani P.</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
