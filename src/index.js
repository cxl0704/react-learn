import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld/hello.js';
import HelloWorld01 from './HelloWorld01/hello.js';
import Chat from './Chat/chat.js'
import './index.css';

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px",
};

const routeMap = {
  "HelloWorld": HelloWorld,
  "HelloWorld01": HelloWorld01,
  "Chat": Chat,
};

class App extends React.PureComponent {
  handleLinkClick = key => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || HelloWorld;
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
