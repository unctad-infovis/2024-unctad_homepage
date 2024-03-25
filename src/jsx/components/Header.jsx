import React, { } from 'react';

function App() {
  return (
    <div className="header_container">
      <div className="row justify-content-between container-xxl m-auto">
        <div className="col">
          <div className="logo_container mt-3 mb-3">
            <img src="./assets/img/logo_en.png" alt="UNCTAD Logo" className="logo" />
          </div>
        </div>
        <div className="col text-end d-flex flex-column justify-content-between">
          <div className="quick_links">
            <img src="https://dummyimage.com/100x30/c5dfef/000&text=Ticket" alt="Ticket" />
            <img src="https://dummyimage.com/100x30/c5dfef/000&text=Ticket" alt="Ticket" />
            <img src="https://dummyimage.com/100x30/c5dfef/000&text=Ticket" alt="Ticket" />
          </div>
          <div className="login_container">
            <a href="/login/">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
