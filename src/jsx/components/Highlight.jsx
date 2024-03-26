import React, { } from 'react';

// https://www.npmjs.com/package/uuid4
import uuid4 from 'uuid4';

// Load components.
import ShareContainer from './ShareContainer.jsx';

function App() {
  return (
    <div className="highlight_container">
      <div className="row m-auto container-xxl justify-content-between">
        <div className="col">
          <div className="row m-auto background h-100 position-relative">
            <div className="col-5 d-flex h-100 align-items-end">
              <div className="h-40">
                <div className="main_highlight_container m-4">
                  <div className="background position-absolute h-40" />
                  <div className="headlines position-relative">
                    <h3>Global trade growth returs but outlook for 2023 is poor</h3>
                    <h4>Read the full story</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="row d-flex flex-wrap align-content-center secondary_highlight_container h-100 m-4 position-relative">
                {
                  ['pt-2 ps-2 pe-1 pb-1', 'pt-2 ps-1 pe-2 pb-1', 'pt-1 ps-2 pe-1 pb-2', 'pt-1 ps-1 pe-2 pb-2'].map((padding) => (
                    <div className={`w-50 ${padding}`} key={uuid4()}>
                      <a href="link">
                        <div className="block_content p-2">
                          <div className="image_container">
                            <ShareContainer url="https://unctad.org" />
                            <img src="./assets/img/image.jpg" alt="Desc" className="mb-2" />
                          </div>
                          <h3 className="ms-3">Making artificial intelligence work better for consumers and societies</h3>
                        </div>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
