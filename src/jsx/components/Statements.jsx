import React, { } from 'react';

// https://www.npmjs.com/package/uuid4
import uuid4 from 'uuid4';

function App() {
  return (
    <div className="statements_container mb-3">
      <div className="row">
        <div className="col">
          <h2>SG Statements</h2>
        </div>
      </div>
      <div className="row">
        <div className="col main_statement p-0 mb-3">
          <div className="row ps-2 pt-3 pb-3">
            <div className="col">
              <h4>Meet our Secretary-General</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="./assets/img/image.jpg" alt="Desc" className="mb-2" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <h4>Geneva</h4>
              <h3>Rebeca Grynspan</h3>
              <p>Awesome title for a main news story. Awesome title for a main news story. Awesome title for a main news story. Awesome title for a main news story</p>
            </div>
          </div>
        </div>
      </div>
      {
        Array(4).fill('').map(() => (
          <div className="row" key={uuid4()}>
            <div className="col mb-3">
              <div className="row">
                <div className="col with_border">
                  <h4>9 April 2024</h4>
                  <h3>Awesome title for a statement</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      <div className="row d-flex text-center pb-3">
        <div className="col">
          <button href="link" className="all" type="button">All statements</button>
        </div>
      </div>
    </div>
  );
}

export default App;
