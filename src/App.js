import './index.css';
import Header from '../src/components/Header/Header'
import Container from '../src/components/Container/Container'
import Converter from '../src/components/Converter/Converter';


function App() {
  return (
    <Container>
      <Header />
      <Converter />
    </Container>
  );
}

export default App;
