import './App.css';
import Canvas from './Component/Canvas/Index';
import SideBer from './Component/SideBer/Index';
import Background from './Context/Background';

function App() {
  return (
    <div className="App">
      <Background>
        <SideBer />
        <Canvas />
      </Background>
    </div>
  );
}

export default App;
