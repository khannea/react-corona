import React, { Component } from "react";
import "./App.css";
import younes from "./younes.gif";
import lucas from "./lucas.gif";
import lapuerta from "./lapuerta.gif";
import bau from "./bau.gif";
import romain from "./romain.gif";
import dudu from "./dudu.gif";
import jerem from "./jerem.gif";

import Modal from "./Modal";
import Vote_layout from "./Vote_layout";

class App extends Component {
  state = {
    to: null,
    nb_younes: 0,
    nb_lucas: 0,
    nb_lapuerta: 0,
    nb_bau: 0,
    nb_romain: 0,
    nb_dudu: 0,
    nb_jerem: 0
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
    window.scrollTo(0, 0);
    this.setState({
      modalActive: true,
      to: "younes"
    });
  };
  vote_lucas = () => {
    window.scrollTo(0, 0);
    this.setState({
      modalActive: true,
      to: "lucas"
    });
  };
  vote_lapuerta = () => {
    window.scrollTo(0, 0);
    this.setState({
      modalActive: true,
      to: "lapuerta"
    });
  };
  vote_bau = () => {
    window.scrollTo(0, 0);
    this.setState({
      modalActive: true,
      to: "bau"
    });
  };
  vote_romain = () => {
    window.scrollTo(0, 0);
    this.setState({
      modalActive: true,
      to: "romain"
    });
  };
  vote_dudu = () => {
    window.scrollTo(0, 0);
    this.setState({
      modalActive: true,
      to: "dudu"
    });
  };
  vote_jerem = () => {
    window.scrollTo(0, 0);
    this.setState({
      modalActive: true,
      to: "jerem"
    });
  };

  render() {
    let {
      nb_younes,
      nb_lucas,
      nb_lapuerta,
      nb_bau,
      nb_romain,
      nb_dudu,
      nb_jerem
    } = this.state;

    let tab = [
      {
        nom: "younes",
        image: younes,
        function: this.vote_younes,
        nb: this.state.nb_younes
      },
      {
        nom: "lucas",
        image: lucas,
        function: this.vote_lucas,
        nb: this.state.nb_lucas
      },
      {
        nom: "lapuerta",
        image: lapuerta,
        function: this.vote_lapuerta,
        nb: this.state.nb_lapuerta
      },
      {
        nom: "bau",
        image: bau,
        function: this.vote_bau,
        nb: this.state.nb_bau
      },
      {
        nom: "romain",
        image: romain,
        function: this.vote_romain,
        nb: this.state.nb_romain
      },
      {
        nom: "jerem",
        image: jerem,
        function: this.vote_jerem,
        nb: this.state.nb_jerem
      },
      {
        nom: "dudu",
        image: dudu,
        function: this.vote_dudu,
        nb: this.state.nb_dudu
      }
    ];
    return (
      <div className="App">
        {this.state.to !== null && (
          <Modal
            closing={this.close}
            to={this.state.to}
            refresh={this.refreshVote}
          />
        )}

        <div className="question">
          Choisis lequel de tes amis attrapera le COVID-19 en premier!!
        </div>

        {this.state.to === null && (
          <div className="App">
            {tab.map((item, index) => (
              <Vote_layout
                nom={item.nom}
                image={item.image}
                vote_function={item.function}
                nombre_vote={item.nb}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
