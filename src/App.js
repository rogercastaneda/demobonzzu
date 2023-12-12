import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <nav>
        <Button url="/" title="Home" />
        <Button url="/about" title="About" />
        <Button url="/contact" title="Contact" />
      </nav>
    </div>
  );
}

export default App;
