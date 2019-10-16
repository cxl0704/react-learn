import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Snapshot.css";

export default class Snapshot extends PureComponent {
  state = {
    messages: [],
  };

  handNewMessage() {
    this.setState(prev => ({
      messages: [`msg ${prev.messages.length}`, ...prev.messages],
    }));
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handNewMessage();
    this.setInterval = window.setInterval(() => {
      if (this.state.messages.length > 200) {
        window.clearInterval(this.setInterval);
        return;
      }
      this.handNewMessage();
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    const scrollTop = this.rootNode.scrollTop;
    if (scrollTop < 5) return;
    this.rootNode.scrollTop =
      scrollTop + (this.rootNode.scrollHeight - prevScrollHeight);
  }

  render() {
    return (
      <div className="snapshot-sample" ref={n => (this.rootNode = n)}>
        {this.state.messages.map(msg => (
          <div>{msg}</div>
        ))}
      </div>
    );
  }
}
