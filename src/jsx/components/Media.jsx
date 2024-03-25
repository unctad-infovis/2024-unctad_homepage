import React, { } from 'react';

// https://www.npmjs.com/package/uuid4
import uuid4 from 'uuid4';

function App() {
  return (
    <div className="media_container">
      <div className="row bg-white mb-3">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2>Video and podcasts</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="youtube_container">
                <iframe width="100%" src="https://www.youtube.com/embed/SYgByZpF1zY?si=Il34uLhE2LSWMx9n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="youtube_video" />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h3>Trade and Development Report 2023</h3>
            </div>
          </div>
          <div className="row">
            <div className="row d-flex flex-wrap align-content-center m-auto">
              {
                ['video', 'podcast', 'podcast', 'video'].map((type) => ((type === 'video')
                  ? (
                    <div className="w-50 pe-4" key={uuid4()}>
                      <div className="row d-flex flex-row pb-3 mb-3 pt-3 justify-content-between" style={{ backgroundColor: 'rgba(245,245,245,1)' }}>
                        <div className="col">
                          <div className="row">
                            <div className="col">
                              <iframe title="87. K-popification: Why South Korea’s creative economy is an inspiration for others" height="100" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)', height: '150px' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=a4ta9-15badc5-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Verdana&skin=f6f6f6&font-color=000000&logo_link=none&btn-skin=60a0c8" loading="lazy" className="podbean_podcast" />
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
                  )
                  : (
                    <div className="w-50 pe-4" key={uuid4()}>
                      <div className="row d-flex flex-row pb-3 mb-3 pt-3 justify-content-between" style={{ backgroundColor: 'rgba(245,245,245,1)' }}>
                        <div className="col">
                          <div className="row">
                            <div className="youtube_container">
                              <iframe width="100%" src="https://www.youtube.com/embed/SYgByZpF1zY?si=Il34uLhE2LSWMx9n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="youtube_video" />
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
                  )))
              }
            </div>
          </div>
          <div className="row d-flex justify-content-end">
            <div className="col col-6 mb-3">
              <button href="link" className="all" type="button">All podcast</button>
            </div>
            <div className="col col-6  mb-3">
              <button href="link" className="all" type="button">All videos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
