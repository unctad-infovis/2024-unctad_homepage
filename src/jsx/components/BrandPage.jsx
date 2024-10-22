import React, { } from 'react';

const openLink = (url) => {
  window.open(url, '_blank');
};
function App() {
  return (
    <>
      <div className="brand_book" />
      <div className="brand_heading">
        <div className="content">
          <h2>Welcome to Our New Brand Hub!</h2>
          <p>We are thrilled to introduce our new brand webpage, designed to inspire and guide you through our exciting reimagined visual identity. Explore our comprehensive brand guidelines, including our innovative logo, modern design principles, and cohesive visual elements. Dive in and see how we are shaping the future of our brand with clarity, creativity, and consistency.</p>
        </div>
      </div>
      <div className="brand_logos">
        <div className="d-flex">
          <div><img src="https://storage.unctad.org/brand/brandpage/_web_BRAND_page_v0_III_logo_AR_.jpg" alt="" /></div>
          <div><img src="https://storage.unctad.org/brand/brandpage/_web_BRAND_page_v0_III_logo_CN_.jpg" alt="" /></div>
          <div><img src="https://storage.unctad.org/brand/brandpage/_web_BRAND_page_v0_III_logo_EN_.jpg" alt="" /></div>
          <div><img src="https://storage.unctad.org/brand/brandpage/_web_BRAND_page_v0_III_logo_FR_.jpg" alt="" /></div>
          <div><img src="https://storage.unctad.org/brand/brandpage/_web_BRAND_page_v0_III_logo_RU_.jpg" alt="" /></div>
          <div><img src="https://storage.unctad.org/brand/brandpage/_web_BRAND_page_v0_III_logo_ES_.jpg" alt="" /></div>
        </div>
      </div>
      <div className="brand_intro">
        <div className="overlay">
          <button className="anchor" onClick={() => openLink('https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/brand.aspx')} type="button">
            <div className="content">
              <h2>Brand book</h2>
              <p>
                What defines our brand and visual identity? This document will guide you through our visual identity system and show you how to apply it consistently.
              </p>
              <div className="download button">Download</div>
            </div>
          </button>
        </div>
      </div>
      <div className="brand_materials">
        <div className="arrow" />
        <div className="content">
          <h2>Quick downloads</h2>
          {
            /* First row */
          }
          <div className="layout_wrapper">
            <div className="layout layout--fourcol-section">
              <div className="layout__region layout__region--first">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => openLink('https://storage.unctad.org/brand/UN%20Trade%20and%20development%20logo.zip')} type="button">
                    <div className="downloads_container white">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_logos_.png" /></div>
                        <h3>Logos</h3>
                        <h4>5 languages</h4>
                        <div className="download button">Download</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="layout__region layout__region--second">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => openLink('https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/brand.aspx')} type="button">
                    <div className="downloads_container white">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_font_.png" /></div>
                        <h3>Font</h3>
                        <h4>Inter</h4>
                        <div className="download button">Download</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="layout__region layout__region--third">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => openLink('https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/brand.aspx')} type="button">
                    <div className="downloads_container white">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_ptt_.png" /></div>
                        <h3>Powerpoint</h3>
                        <h4>Template</h4>
                        <div className="download button">Download</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="layout__region layout__region--fourth">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => openLink('https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/brand.aspx')} type="button">
                    <div className="downloads_container white">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_word_.png" /></div>
                        <h3>Word</h3>
                        <h4>Template</h4>
                        <div className="download button">Download</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {
            /* Second row */
            }
            <div className="layout layout--fourcol-section">
              <div className="layout__region layout__region--first">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => openLink('https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/brand.aspx')} type="button">
                    <div className="downloads_container white">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_icons_.png" /></div>
                        <h3>Icons</h3>
                        <h4>Library</h4>
                        <div className="download button">Download</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="layout__region layout__region--second">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => openLink('https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/brand.aspx')} type="button">
                    <div className="downloads_container white">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_assets_.png" /></div>
                        <h3>Assets</h3>
                        <h4>Our visuals</h4>
                        <div className="download button">Download</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="layout__region layout__region--third">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => openLink('https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/brand.aspx')} type="button">
                    <div className="downloads_container white">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_color_.png" /></div>
                        <h3>Color library</h3>
                        <h4>Swatches kit</h4>
                        <div className="download button">Download</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="layout__region layout__region--fourth">
                <div className="block block-layout-builder block-inline-blockbasic">
                  <button className="anchor" onClick={() => { window.location.href = 'web@unctad.org'; }} type="button">
                    <div className="downloads_container blue">
                      <div className="download_container">
                        <div className="image_container"><img alt="" src="https://storage.unctad.org/brand/brandpage/_btn_what_else_.png" /></div>
                        <h3>What else?</h3>
                        <h4>For any missing item</h4>
                        <div className="contact button">Contact us</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
