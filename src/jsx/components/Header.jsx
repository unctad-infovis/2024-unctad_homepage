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
          <div className="quick_links mt-2 d-flex justify-content-end">
            <a href="quick_link" className="quick_link quick_link_1 ms-1 text-center d-flex align-items-center justify-content-center"><div>UNCTAD 60</div></a>
            <a href="quick_link" className="quick_link quick_link_2 ms-1 text-center d-flex align-items-center justify-content-center"><div>Global Supply Chain Forum</div></a>
            <a href="quick_link" className="quick_link quick_link_3 ms-1 text-center d-flex align-items-center justify-content-center"><div>Global Crisis</div></a>
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
