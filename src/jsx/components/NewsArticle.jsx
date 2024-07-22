import React, { } from 'react';

// https://www.npmjs.com/package/uuid4
function App() {
  return (
    <div className="main-content">
      <div className="title_container inter">
        <div>[Date] 27 March 2024</div>
        <h3>[H3] H3 is a subheading, it is usually a full sentence or two sentences.</h3>
        <figure>
          <img src="https://dummyimage.com/1600x900/000/fff" alt="Main" />
          <figcaption>
            <strong>© Shutterstock/Somchai_Stock</strong>
            {' '}
            | Images are in 16:9 ratio. The main image is full width.
          </figcaption>
        </figure>
      </div>
      <div className="content_container inter">
        <h4>
          <ul>
            <li>Top three messages are list items inside a h4</li>
            <li>The are surrounded with a thin line</li>
            <li>And they have a small margin so they pop up even more.</li>
          </ul>
        </h4>
        <p>[p] The maximum width of the content container is 800px. Jowl ham prosciutto flank spare ribs. Kevin salami burgdoggen, porchetta jowl turducken landjaeger. Bresaola chuck rump porchetta filet mignon sausage frankfurter flank jerky. Leberkas landjaeger meatball short loin. Turkey tri-tip prosciutto short loin pig filet mignon pork swine leberkas flank pork chop hamburger boudin pancetta cupim.</p>
        <p>[p] Body text is 18px. Easy to read with enough line-height. Pork belly spare ribs meatball ham hock pancetta picanha buffalo ground round filet mignon strip steak turkey flank chislic shoulder prosciutto. Hamburger kielbasa short loin filet mignon turducken venison meatloaf chislic ham hock landjaeger. Venison ham capicola doner sirloin pancetta alcatra shankle picanha tri-tip bresaola strip steak pork belly. Spare ribs leberkas porchetta, chicken burgdoggen corned beef boudin turkey brisket bacon prosciutto landjaeger. Picanha ham andouille pork chop bresaola flank cupim pig cow jowl capicola. Brisket pork belly sirloin bresaola.</p>
        <p>
          [p]
          <strong>[strong] Bold text is with 600, it is bold enought but not too bold.</strong>
          {' '}
          Filet mignon kielbasa biltong cow bacon doner. Bacon porchetta ham hock meatball. Cow turkey beef ribs short loin, fatback venison flank pig porchetta tenderloin kielbasa drumstick brisket prosciutto. Sirloin tongue hamburger capicola ham hock. Buffalo meatball porchetta strip steak ground round turkey prosciutto ribeye. Landjaeger strip steak t-bone ham hock filet mignon short ribs kielbasa shank, jowl sirloin biltong meatball.
        </p>
        <p>
          [p]
          <em>[em] We should avoid italics as it is hard to read.</em>
          {' '}
          Andouille tail alcatra short ribs hamburger, bresaola meatloaf pastrami. Ground round leberkas bacon, burgdoggen ribeye fatback beef ribs jowl chislic frankfurter cow pork chop shoulder. Drumstick kevin jerky beef. Leberkas doner brisket ham hock, boudin fatback pancetta drumstick alcatra venison.
        </p>
        <p>[p] For quotes, instead of using italics, “we should use unified quotation marks”. Tongue picanha frankfurter, prosciutto andouille boudin pastrami landjaeger.</p>
        <p>[p] Body text is 18px. Easy to read with enough line-height. Spare ribs leberkas porchetta, chicken burgdoggen corned beef boudin turkey brisket bacon prosciutto landjaeger. Picanha ham andouille pork chop bresaola flank cupim pig cow jowl capicola. Brisket pork belly sirloin bresaola.</p>
        <ul>
          <li>Lists should be like body text</li>
        </ul>
        <ol>
          <li>Lists should be like body text</li>
        </ol>
        <h3>[h3] Subtitles are h3</h3>
        <p>
          [p]
          {' '}
          <a href="https://unctadstat.unctad.org/EN/Biotrade.html">[a] Links are visualised with border-bottom, instead of underline. Looks more stylish. Also in all black.</a>
          {' '}
          Tongue picanha frankfurter, prosciutto andouille boudin pastrami landjaeger.
        </p>
        <p>
          [p]
          {' '}
          <u>[u] Links are visualised with border-bottom, instead of underline. Looks more stylish. This is with underline.</u>
          {' '}
          Tongue picanha frankfurter, prosciutto andouille boudin pastrami landjaeger.
        </p>
        <figure>
          <img src="https://dummyimage.com/1600x900/000/fff" alt="Main" />
          <figcaption>
            <strong>© Shutterstock/Somchai_Stock</strong>
            {' '}
            | Images in body text have extra margin on the sides to make them standout
          </figcaption>
        </figure>
        <h4>[h4] In case we need categorisational headings, we use h4</h4>
        <p>[p] Text under the category. Bacon turducken prosciutto, tenderloin doner ham hock short loin kielbasa andouille burgdoggen rump fatback.</p>
        <h4>[h4] Colours</h4>
        <p>
          <span style={{ backgroundColor: '#009edb', padding: '2px 5px', display: 'inline-block' }}>#009edb UN BLUE</span>
        </p>
        <p>
          <span style={{ backgroundColor: '#fbaf17', padding: '2px 5px', display: 'inline-block' }}>#fbaf17 UN YELLOW</span>
        </p>
        <p>
          <span style={{ backgroundColor: '#aea29a', padding: '2px 5px', display: 'inline-block' }}>#aea29a UN GREY</span>
        </p>
        <p>
          <span style={{ backgroundColor: '#a05fb4', padding: '2px 5px', display: 'inline-block' }}>#a05fb4 UN PURPLE</span>
        </p>
        <p>
          <span style={{ backgroundColor: '#72bf44', padding: '2px 5px', display: 'inline-block' }}>#72bf44 UN GREEN</span>
        </p>
        <p>
          <span style={{ backgroundColor: '#ed1847', padding: '2px 5px', display: 'inline-block' }}>#ed1847 UN RED</span>
        </p>
        <h4>[h4] Is slightly bigger and bolder than just body text that is strong</h4>
        <p>[p] Datawrapper charts behave like images in terms of width. Buffalo meatball porchetta strip steak ground round turkey prosciutto ribeye. Landjaeger strip steak t-bone ham hock filet mignon short ribs kielbasa shank, jowl sirloin biltong meatball.</p>
        <figure>
          <img src="https://dummyimage.com/1600x900/000/fff&text=Datawrapper" alt="Main" />
          <figcaption>
            <strong>© Possible source</strong>
            {' '}
            | Possible caption, usually no
          </figcaption>
        </figure>
      </div>
    </div>

  );
}

export default App;
