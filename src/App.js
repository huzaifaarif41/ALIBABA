
import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import DenseAppBar from './components/Titles';
import Body from './components/Body';


function App() {
  return (
    <div >
    <Header />
    <DenseAppBar />
    <Body></Body>
    </div>
  );
}

export default App;
