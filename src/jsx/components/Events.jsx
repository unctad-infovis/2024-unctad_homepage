import React, { } from 'react';

// https://www.npmjs.com/package/uuid4
import uuid4 from 'uuid4';

function App() {
  return (
    <div className="events_container mb-3">
      <div className="row">
        <div className="col">
          <h2>Meetings and events</h2>
        </div>
      </div>
      <div className="row">
        <div className="col main_event p-0 mb-3">
          <div className="row ps-2 pt-3 pb-3">
            <div className="col">
              <h4>Featured meeting</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="./assets/img/image.jpg" alt="Desc" className="mb-2" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <h4>9 April 2024</h4>
              <h3>Awesome title for an event</h3>
            </div>
          </div>
        </div>
      </div>
      {
        Array(6).fill('').map(() => (
          <div className="row" key={uuid4()}>
            <div className="col mb-3">
              <div className="row">
                <div className="col">
                  <h4>9 April 2024</h4>
                  <h3>Awesome title for an event</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      <div className="row d-flex text-center pb-3">
        <div className="col">
          <button href="link" className="all" type="button">All meetings and events</button>
        </div>
      </div>
    </div>
  );
}

export default App;
