import React, { useState } from 'react';

// https://www.npmjs.com/package/uuid4
import uuid4 from 'uuid4';

import MegaMenu from './MegaMenu.jsx';

function App() {
  const [menuContent, setMenuContent] = useState('');

  const menu = (event, name) => {
    setMenuContent(MegaMenu(name));
  };
  return (
    <div className="menu_container">
      <div className="row justify-content-between container-xxl m-auto">
        <div className="col">
          <div className="row background m-auto">
            <div className="col col-10">
              <ul className="menu_items_container">
                {
                  ['About »', 'Statistics and data »', 'Publications »', 'Technical assistance »', 'Meetings and events »', 'Media centre »'].map((text) => (
                    <li className="menu_item_container" key={uuid4()}><a href="link" className="menu_item pe-3 ps-3 pt-2 pb-2" onFocus={(event) => menu(event, text)} onMouseOver={(event) => menu(event, text)}>{text}</a></li>
                  ))
                }
              </ul>
            </div>
            <div className="col col-2 text-end">
              <ul className="search_container text-end">
                <li className="text-end">
                  <button type="button">Search</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="megamenu_container"><div className="col">{menuContent}</div></div>
      </div>
    </div>
  );
}

export default App;
