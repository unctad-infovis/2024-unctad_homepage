import React, { } from 'react';

// https://www.npmjs.com/package/uuid4
import uuid4 from 'uuid4';

function App() {
  return (
    <div className="datavisualisations_container">
      <div className="row bg-white mb-3">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2>Data visualisations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="./assets/img/image5.jpg" alt="" />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h3>Review of Martitime Transport 2023</h3>
            </div>
          </div>
          <div className="row">
            <div className="row d-flex flex-wrap align-content-center h-100 m-auto">
              {
                Array(2).fill('').map(() => (
                  <div className="w-50 pe-4" key={uuid4()}>
                    <div className="row d-flex flex-row pb-3 mb-3 pt-3 justify-content-between" style={{ backgroundColor: 'rgba(245,245,245,1)' }}>
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <img src="./assets/img/image5.jpg" alt="" className="cover" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h3>Title for an awesome data visualisation</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="row d-flex justify-content-end text-end">
            <div className="col col-6 me-3 mb-3">
              <button href="link" className="all" type="button">All visualisations</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
