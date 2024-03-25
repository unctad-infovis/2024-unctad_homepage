import React, { /* useState, */ } from 'react';

function App() {
  return (
    <div className="top_bar_container">
      <div className="top_bar p-1">
        <div className="row justify-content-between container-xxl m-auto">
          <div className="col">
            <div className="welcome_message">Welcome to the United Nations Conference on Trade and Development</div>
          </div>
          <div className="col text-end">
            <div className="language_selector_container">
              <div className="active me-1 ms-1 d-inline-block"><a href="/">English</a></div>
              <div className="me-1 ms-1 d-inline-block"><a href="/fr">Français</a></div>
              <div className="me-1 ms-1 d-inline-block"><a href="/sp">Español</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
