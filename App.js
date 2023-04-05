import './App.css';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

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

        <div className="section-two">
          <Introduction />
        </div>

        <div className="section-three">
          <Experience />
        </div>

        <div className="section-four">
          <Skills />
        </div>

        <div className="section-five">
          <Projects />
        </div>

        <div className="section-six">
          <Contact />
        </div>

        <footer>© 2023 Alyson's portfolio copyright</footer>
      </div>
    </div>
  );
}

export default App;
