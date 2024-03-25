import React, { } from 'react';
import '../styles/styles.scss';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';

// Load components.
import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Highlight from './components/Highlight.jsx';
import Publications from './components/Publications.jsx';
import Datavisualisations from './components/Datavisualisations.jsx';
import Media from './components/Media.jsx';
import News from './components/News.jsx';
import Events from './components/Events.jsx';
import Statements from './components/Statements.jsx';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Menu />
      <Highlight />
      <div className="row container-xxl me-auto ms-auto">
        <div className="row m-auto">
          <div className="col content pt-3">
            <div className="row m-auto background h-100">
              <div className="col">
                <div className="row justify-content-evenly">
                  <div className="col-7">
                    <Publications />
                    <Datavisualisations />
                    <Media />
                  </div>
                  <div className="col-4">
                    <News />
                    <Events />
                    <Statements />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
