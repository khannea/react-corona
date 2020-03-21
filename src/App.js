import React, { Component } from "react";
import "./App.css";
import younes from "./younes.png";
import lucas from "./lucas.jpg";
import Modal from "./Modal";

function auth(name) {}

class App extends Component {
  state = {
    modalActive: false,
    to: null,
    younes: 0,
    lucas: 0
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    const req = new Request("/ap2/corona/getvote", {
      method: "GET",
      cache: "default"
    });
    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(data);
      });
  };

  close = () => {
    this.setState({
      modalActive: false
    });
  };

  vote_younes = () => {
    this.setState({
      modalActive: true,
      to: "younes"
    });
  };
  vote_lucas = () => {
    this.setState({
      modalActive: true,
      to: "lucas"
    });
  };

  render() {
    let { younes, lucas } = this.props.state;
    return (
      <div className="App">
        <Modal
          active={this.state.modalActive}
          closing={this.close}
          to={this.state.to}
        />
        <h1>
          Choisis lequel de tes amis attrapera le COVID - 19 en premier!!{" "}
        </h1>
        <button onClick={this.vote_younes}>
          <img
            src={younes}
            alt="younes"
            style={{
              width: "200px"
            }}
          ></img>
          <div>
            <b> Vote: 0 </b>
          </div>
        </button>
        <button onClick={this.vote_lucas}>
          <img
            src={lucas}
            alt="lucas"
            style={{
              width: "200px"
            }}
          ></img>
          <div>
            <b> Vote: 0 </b>
          </div>
        </button>
      </div>
    );
  }
}

export default App;
