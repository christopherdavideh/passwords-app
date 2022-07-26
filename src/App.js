import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';

function App() {
  return (
    <div className="App">
      <UseState />
      <hr />
      <ClassState />
    </div>
  );
}

export default App;
