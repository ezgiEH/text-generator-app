import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Text from './components/Text';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Form />
        <Text />
        <Footer />
      </header>
    </div>
  );
}

export default App;
