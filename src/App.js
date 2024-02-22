import './App.css';
import Form from './Component/Form';
import Pricing from './Pages/Pricing';
import { Features, Hero } from './UI';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
