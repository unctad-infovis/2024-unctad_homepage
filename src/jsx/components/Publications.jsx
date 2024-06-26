import React, { } from 'react';

// https://www.npmjs.com/package/uuid4
import uuid4 from 'uuid4';

function App() {
  return (
    <div className="publications_container">
      <div className="row bg-white mb-3">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2>Featured publications</h2>
            </div>
          </div>
          <div className="block_content">
            <div className="row">
              <div className="col">
                <a href="#link">
                  <img src="./assets/img/image3.jpg" alt="Publication" />
                </a>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <a href="#link">
                  <h3>Review of Martitime Transport 2023</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row d-flex flex-wrap align-content-center h-100 m-auto">
              {
                Array(4).fill('').map(() => (
                  <div className="w-50 pe-4" key={uuid4()}>
                    <div className="row d-flex flex-row mb-3 pt-3 pb-3 justify-content-between block_content " style={{ backgroundColor: 'rgba(226,236,246,1)' }}>
                      <div className="col-5">
                        <a href="#link">
                          <img src="./assets/img/image4.jpg" alt="Publication" className="cover" />
                        </a>
                      </div>
                      <div className="col-7 h-100">
                        <a href="#link">
                          <h3>Review of Martitime Transport 2023</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="row d-flex justify-content-end text-end">
            <div className="col col-6 me-3 mb-3">
              <button href="link" className="all" type="button">All publications</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
