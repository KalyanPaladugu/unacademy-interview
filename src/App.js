import logo from './logo.svg';
import './App.css';
import style from './style';
import Pure from './Pure';
import Home from './Home';
import Main from './components/Main';
import Hook from './components/Hook';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <div className="App">
      {/* <h1 style={{...style,...style.heading1}}> Welcome</h1> */}
   
    {/* <Pure /> */}
    {/* <Home /> */}
    {/* <Main /> */}
    {/* <Hook /> */}
    <ErrorBoundary >
          <Hero heroName="PawanKalyan" >


      </Hero>
      </ErrorBoundary>
      <ErrorBoundary >
      <Hero heroName="Kalyan">

      </Hero>
      
      </ErrorBoundary>
      <ErrorBoundary >
      <Hero heroName="Joker"></Hero>
    </ErrorBoundary>
   
    </div>
  );
}

export default App;
