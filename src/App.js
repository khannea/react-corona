import React, { Component } from "react";
import "./App.css";
import younes from "./younes.gif";
import lucas from "./lucas.gif";
import lapuerta from "./lapuerta.gif";
import bau from "./bau.gif";
import romain from "./romain.gif";
import Modal from "./Modal";

function auth(name) {}

class App extends Component {
  state = {
    modalActive: false,
    to: null,
    nb_younes: 0,
    nb_lucas: 0,
    nb_lapuerta: 0,
    nb_bau: 0,
    nb_romain: 0
  };

  componentDidMount() {
    this.refreshVote();
  }

  refreshVote = () => {
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
      to: null
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
  vote_lapuerta = () => {
    this.setState({
      modalActive: true,
      to: "lapuerta"
    });
  };
  vote_bau = () => {
    this.setState({
      modalActive: true,
      to: "bau"
    });
  };
  vote_romain = () => {
    this.setState({
      modalActive: true,
      to: "romain"
    });
  };

  render() {
    let { nb_younes, nb_lucas, nb_lapuerta, nb_bau, nb_romain } = this.state;
    return (
      <div className="App">
        {this.state.to !== null && (
          <Modal
            active={this.state.modalActive}
            closing={this.close}
            to={this.state.to}
            refresh={this.refreshVote}
          />
        )}

        <div className="question">
          <h1>Choisis lequel de tes amis attrapera le COVID-19 en premier!!</h1>
        </div>
        <div>
          <button onClick={this.vote_younes}>
            <img
              src={younes}
              alt="younes"
              style={{
                height: "400px"
              }}
            ></img>
            <div>
              <b> Vote: {nb_younes} </b>
            </div>
          </button>
        </div>
        <div>
          <button onClick={this.vote_lucas}>
            <img
              src={lucas}
              alt="lucas"
              style={{
                height: "400px"
              }}
            ></img>
            <div>
              <b> Vote: {nb_lucas} </b>
            </div>
          </button>
        </div>
        <div>
          <button onClick={this.vote_lapuerta}>
            <img
              src={lapuerta}
              alt="lapuerta"
              style={{
                height: "400px"
              }}
            ></img>
            <div>
              <b> Vote: {nb_lapuerta} </b>
            </div>
          </button>
        </div>
        <div>
          <button onClick={this.vote_bau}>
            <img
              src={bau}
              alt="bau"
              style={{
                height: "400px"
              }}
            ></img>
            <div>
              <b> Vote: {nb_bau} </b>
            </div>
          </button>
        </div>
        <div>
          <button onClick={this.vote_romain}>
            <img
              src={romain}
              alt="romain"
              style={{
                height: "400px"
              }}
            ></img>
            <div>
              <b> Vote: {nb_romain} </b>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
