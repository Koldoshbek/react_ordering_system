import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css';
import Header from './components/header/Header';
import Banner from './components/indexPage/Banner'
import WelcomeArea from './components/indexPage/WelcomeArea'


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <WelcomeArea/>
    </div>
  );
}

export default App;
