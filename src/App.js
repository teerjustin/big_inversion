import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return ( 
    <div>
      <div>
        <Person firstName="Doe" lastName="Jane" age={ 45 } hairColor="Black" /> 
      </div>
      <div>
        <Person firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
      </div>
      <div>
        <Person firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown" /> 
      </div>
      <div>
        <Person firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown" /> 
      </div>
    </div>
  );
}

export default App;
