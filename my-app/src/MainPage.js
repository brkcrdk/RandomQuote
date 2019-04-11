import React, { Component } from "react";
import "./App.scss";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      text: "",
      author: "",
      colors: [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857"
      ],
      color: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(res => res.json())
      .then(result => {
        const yazi = [...result.quotes];
        const randomStart = Math.floor(Math.random() * yazi.length);
        const renk = [...this.state.colors];
        const renkRan = Math.floor(Math.random() * renk.length);
        this.setState({
          quotes: yazi,
          text: yazi[randomStart].quote,
          author: yazi[randomStart].author,
          color: renk[renkRan]
        });
        document.body.style.backgroundColor = renk[renkRan];
        document.body.style.transition = "1s ease";
      });
    setInterval(() => {
      this.handleClick();
    }, 5000);
  }
  handleClick = () => {
    const randomClick = Math.floor(Math.random() * this.state.quotes.length);
    const renk = [...this.state.colors];
    const renkRan = Math.floor(Math.random() * renk.length);
    this.setState({
      text: this.state.quotes[randomClick].quote,
      author: this.state.quotes[randomClick].author,
      color: renk[renkRan]
    });
    document.body.style.backgroundColor = renk[renkRan];
    document.body.style.transition = "1s ease";
  };
  render() {
    return (
      <div id="quote-box">
        <div id="wrapper">
          <h1 id="text" className="quote-text">
            <span id="byk">"</span>
            {this.state.text}
          </h1>
          <p id="author" className="quote-author">
            - {this.state.author}
          </p>
          <div className="buttons">
            <a
              id="tweet-quote"
              className="button"
              href="twitter.com/intent/tweet"
            >
              <i class="fab fa-twitter" />
            </a>
            <a id="tumblr-quote" className="button" href="tumblr.com/">
              <i class="fab fa-tumblr" />
            </a>
            {/* <button
              className="button"
              id="new-quote"
              onClick={this.handleClick}
            >
              New quote
            </button> */}
          </div>
          <div class="footer">
            {" "}
            by <a href="https://codepen.io/brkcrdk/">dasburak</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
