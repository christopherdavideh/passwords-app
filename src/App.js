import './App.css';
import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';

function App() {
  return (
    <div className="App">
      <UseState name = {"Use State"}/>
      <hr />
      <ClassState name = {"Use Class"} />
    </div>
  );
}

export default App;
