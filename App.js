import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='container'>
      <div className='center-area'>
        <div className="section-one">
          <Navigation />

          <div className="grid-home">
            <div className='intro'>
              <h1>Hi, My Name is Alyson</h1>
              <div class="text-container">
                <div class="typed-out">I'm a Web Developer!</div>
              </div>
              <h3>Based in South Brisbane, Australia</h3>
              <button>LET'S START</button>
            </div>

            <img className='photo' src={require('./images/img1.jpg')} alt='img1' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
