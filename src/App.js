import './App.css';
import Button from './components/Button';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FormExample from './components/FormExample';
import RefExample from './components/RefExample';
import FormExampleWithHookForm from './components/FormExampleWithHookForm';
// import LifecycleExample from './components/LifecycleExample';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
      </Helmet>
      <div className="wrapper">
        <nav>
          <Button url="/" title="Home" />
          <Button url="/about" title="About" />
          <Button url="/contact" title="Contact" />
        </nav>
        <h1>Hola!</h1>
        {/* <LifecycleExample /> */}
        <FormExample />
        <br />
        <RefExample />
        <br />
        <FormExampleWithHookForm />
      </div>
    </HelmetProvider>
  );
}

export default App;
