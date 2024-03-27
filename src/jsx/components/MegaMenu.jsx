import React from 'react';

const megaMenu = (name) => {
  let output;
  switch (name) {
    case 'About »':
      output = (
        <div className="megamenu_content p-3">
          <h2>About</h2>
          <div className="row">
            <div className="col">
              <p>We help developing countries benefit from the global economy more fairly and effectively, providing data and analysis, facilitating consensus-building and offering technical assistance on issues related to trade and development.</p>
            </div>
          </div>
          <div className="row">
            <div className="col col-7 left_column">
              <ul className="visual_list">
                <li>
                  <div>
                    <a href="/about/office-of-the-secretary-general">
                      <div><img src="./assets/img/photo1.jpg" alt="Rebeca" /></div>
                      <div>
                        <div>Secretary-General</div>
                        <div className="label">Rebeca Grynspan</div>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="/about/office-of-the-secretary-general/deputy-secretary-general">
                      <div><img src="./assets/img/photo2.jpg" alt="Rebeca" /></div>
                      <div>
                        <div>Deputy Secretary-General</div>
                        <div className="label">Pedro Manuel-Moreno</div>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="/publication/unctad-15-outcome-spirit-speightstown-and-bridgetown-covenant">
                      <div><img src="https://dummyimage.com/300" alt="Rebeca" /></div>
                      <div>
                        <div>UNCTAD15 outcome documents</div>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="/publication/unctad-annual-report-20229">
                      <div><img src="https://dummyimage.com/300" alt="Rebeca" /></div>
                      <div>
                        <div>Annual Report 2022</div>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="/system/files/official-document/UNCTAD-at-a-glance_en.pdf">
                      <div><img src="https://dummyimage.com/300" alt="Rebeca" /></div>
                      <div>
                        <div>UNCTAD at a Glance</div>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col col-5 right_column">
              <ul>
                <li><a href="/about/accountability">Accountability</a></li>
                <li><a href="/about/history">History</a></li>
                <li><a href="/about/membership">Member States</a></li>
                <li><a href="/about/organization">Organigramme</a></li>
                <li><a href="/about/partnership">Partnerships</a></li>
                <li><a href="/topics">Topics of work</a></li>
                <li><a href="/meetings-search?f%5B0%5D=product%3A317">Trade and Development Board</a></li>
              </ul>

            </div>
          </div>
        </div>
      );
      break;
    case 'Publications »':
      output = (
        <div className="megamenu_content p-3">
          <h2>Publications</h2>
          <div className="row">
            <div className="col">
              <p>Our research and publications provide authoritative and evidence-based analysis on trade and development and policy recommendations to help countries tackle today’s biggest challenges.</p>
            </div>
          </div>
          <div className="row">
            <div className="col col-7 left_column">
              <h2>Featured publications</h2>
              <ul>
                <li><a href="/publications-search?f%5B0%5D=product%3A588">Commodities and Development Report</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A598">Digital Economy Report</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A390">Economic Development in Africa Report</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A396">Handbook of Statistics</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A392">Least Developed Countries Report</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A393">Review of Maritime Transport</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A644">Technology and Innovation Report</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A394">Trade and Development Report</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A397">World Investment Report</a></li>
              </ul>
              <p><a href="/publications-search">Publication search</a></p>
            </div>
            <div className="col col-5 right_column">
              <h2>In focus</h2>
              <ul>
                <li><a href="/publications-search?f%5B0%5D=product%3A609">Global Investment Trends Monitor</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A1572">Global Trade Update</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A655">Policy briefs</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A389">Working Papers</a></li>
                <li><a href="/publications-search?f%5B0%5D=product%3A412">UNCTAD Rapid Assessments</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
      break;
    case 'Statistics and data »':
      output = (
        <div className="megamenu_content p-3">
          <h2>Statistics and data</h2>
          <div className="row">
            <div className="col">
              <p>We provide reliable and timely data and statistics to help countries better understand trade and development trends and design more effective economic, environmental and social policies. </p>
            </div>
          </div>
          <div className="row">
            <div className="col col-7 left_column">
              <h2>Featured</h2>
              <ul>
                <li><a href="#link">Data visualization (to be created)</a></li>
                <li>
                  <a href="https://unctadstat.unctad.org/">UNCTADstat</a>
                  <ul>
                    <li><a href="https://unctadstat.unctad.org/CountryProfile/en-GB/index.html">Country profiles</a></li>
                    <li><a href="https://unctadstat.unctad.org/datacentre/">Data centre</a></li>
                    <li><a href="https://unctadstat.unctad.org/EN/Nowcasts.html">Nowcasts</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col col-5 right_column">
              <h2>In focus</h2>
              <ul>
                <li><a href="/sdg-costing">Costs of achieving the SDGs</a></li>
                <li><a href="https://hbs.unctad.org/">Handbook of Statistics</a></li>
                <li><a href="/global-crisis/dashboard">Pulse of the global cost-of-living crisis</a></li>
                <li><a href="/topic/least-developed-countries/productive-capacities-index">Productive Capacities Index</a></li>
                <li><a href="https://sdgpulse.unctad.org/">SDG Pulse</a></li>
                <li><a href="/publication/world-of-debt/dashboard">World of Debt Dashboard</a></li>
                <li><a href="https://trainsonline.unctad.org/home">TRAINS Portal (trade regulations and non-tariff measures</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
      break;
    case 'Technical assistance »':
      output = (
        <div className="megamenu_content p-3">
          <h2>Technical assistance</h2>
          <div className="row">
            <div className="col">
              <p>Our technical assistance helps developing countries better integrate into the global economy by transforming their economies, tackling vulnerabilities, improving competitiveness and empowering people.</p>
            </div>
          </div>
          <div className="row">
            <div className="col col-7 left_column">
              <h2>Featured programmes</h2>
              <ul>
                <li><a href="/topic/transport-and-trade-logistics/customs-automation-ASYCUDA">Automated System for Customs Data (ASYCUDA)</a></li>
                <li><a href="/topic/debt-and-finance/dmfas">Debt Management and Financial Analysis System (DMFAS)</a></li>
              </ul>
            </div>
            <div className="col col-5 right_column">
              <h2>In focus</h2>
              <ul>
                <li><a href="/news-search?f[0]=sitemap%3A896">Impact stories</a></li>
                <li><a href="/projects/united-nations-development-account-projects">Map of UN Development Account projects</a></li>
                <li><a href="/projects/funding-sources">Project requests</a></li>
                <li><a href="/projects/funding-sources">Sources of funding</a></li>
                <li><a href="/projects/TOOLBOX">Technical assistance toolbox</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
      break;
    case 'Meetings and events »':
      output = (
        <div className="megamenu_content p-3">
          <h2>Meetings and events</h2>
          <div className="row">
            <div className="col">
              <p>Our meetings and events convene governments, businesses, civil society organizations, academia and international organizations to discuss and build consensus on the most pressing trade and development issues.</p>
            </div>
          </div>
          <div className="row">
            <div className="col col-7 left_column">
              <h2>Featured</h2>
              <ul>
                <li><a href="/meeting/unctads-60th-anniversary">UNCTAD at 60</a></li>
                <li><a href="/meeting/fifteenth-session-united-nations-conference-trade-and-development-unctad-15">UNCTAD15</a></li>
                <li><a href="/meetings-search?f%5B0%5D=product%3A317">Trade and Development Board</a></li>
                <li><a href="https://worldinvestmentforum.unctad.org/">World Investment Forum</a></li>
                <li><a href="/topic/ecommerce-and-digital-economy/unctad-eweek">eWeek</a></li>
                <li><a href="/topic/commission-on-science-and-technology-for-development">UN Commission on Science and Technology for Development</a></li>
                <li><a href="/calendar">Calendar</a></li>
              </ul>
              <p><a href="/meetings-search">Meetings search</a></p>
            </div>
            <div className="col col-5 right_column">
              <h2>Meeting series in focus</h2>
              <ul>
                <li><a href="/meetings-search?f%5B0%5D=product%3A316">Expert meetings</a></li>
                <li>
                  Commissions
                  <ul>
                    <li><a href="/meetings-search?f%5B0%5D=product%3A322">Investment, Enterprise and Development Commission</a></li>
                    <li><a href="/meetings-search?f%5B0%5D=product%3A319">Trade and Development Commission</a></li>
                  </ul>
                </li>
                <li>
                  Intergovernmental groups of experts
                  <ul>
                    <li><a href="/meetings-search?f%5B0%5D=product%3A1453">Competition law and policy</a></li>
                    <li><a href="/meetings-search?f%5B0%5D=product%3A1454">Consumer protection law and policy</a></li>
                    <li><a href="/meetings-search?f%5B0%5D=product%3A335">E-commerce and the digital economy</a></li>
                    <li><a href="/meetings-search?f%5B0%5D=product%3A336">Financing for development</a></li>
                    <li><a href="/meetings-search?f%5B0%5D=product%3A1459">International standards of accounting and reporting</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
      break;
    case 'Media centre »':
      output = (
        <div className="megamenu_content p-3">
          <div className="row">
            <div className="col col-7 left_column">
              <h2>For registered journalists</h2>
              <ul>
                <li>
                  <a href="/newsroom">Newsroom</a>
                  {' '}
                  (password required)
                </li>
              </ul>
            </div>
            <div className="col col-5 right_column">
              <h2>Latest</h2>
              <ul>
                <li><a href="/news-search?f[0]=sitemap%3A910">News</a></li>
                <li><a href="/pressmaterial-search?f[0]=type%3A265">Press releases</a></li>
                <li><a href="/osgstatements-search?f[0]=product%3A1638">Secretary-General statements</a></li>
                <li><a href="/podcast-search?f[0]=sub_type:1675">The Weekly Tradecast episodes</a></li>
                <li><a href="http://www.youtube.com/UNCTADOnline">Videos</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
      break;
    default:
      output = <div />;
      break;
  }
  return output;
};

export default megaMenu;
