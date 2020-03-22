import React, { Component } from "react";
import "./Modal.scss";
import younes from "./younes.jpg";
import lucas from "./lucas2.jpg";
import lapuerta from "./lapuerta2.png";
import bau from "./bau.png";
import romain from "./romain.png";
import dudu from "./dudu.png";
import jerem from "./jerem2.png";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "null",
      to: props.to,
      value: ""
    };
  }

  send_vote(from, to) {
    console.log("from:" + from + " to:" + to);
    fetch("/ap2/corona/addvote", {
      method: "POST",
      body: JSON.stringify({ from, to }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res);
        if (res.status === 401) {
          this.setState({ falsePassword: true });
        } else if (res.status === 404) {
          console.log("Probleme serveur");
        } else {
          console.log(res.headers.get("pseudo"));
        }
      })
      .catch(error => console.error("Error:", error));
  }

  test_reponse = e => {
    e.preventDefault();

    if (this.state.from == "younes") {
      if (this.state.value.toLowerCase() == "tonus") {
        alert("Bonne réponse! Ton vote est bien pris en compte");
        this.send_vote("younes", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    } else if (this.state.from == "lucas") {
      if (
        this.state.value.toLowerCase() == "camera" ||
        this.state.value.toLowerCase() == "cameras" ||
        this.state.value.toLowerCase() == "caméras" ||
        this.state.value.toLowerCase() == "caméra"
      ) {
        alert("Bonne réponse! Ton vote est bien pris en compte");
        this.send_vote("lucas", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    } else if (this.state.from == "lapuerta") {
      if (
        this.state.value.toLowerCase() == "double penne" ||
        this.state.value.toLowerCase() == "double pennes" ||
        this.state.value.toLowerCase() == "doublepéné" ||
        this.state.value.toLowerCase() == "double pene" ||
        this.state.value.toLowerCase() == "doublepenne"
      ) {
        alert("Bonne réponse! Ton vote est bien pris en compte");
        this.send_vote("lapuerta", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    } else if (this.state.from == "bau") {
      if (
        this.state.value.toLowerCase() == "tatacoa" ||
        this.state.value.toLowerCase() == "tattacoa"
      ) {
        alert("Bonne réponse! Ton vote est bien pris en compte");
        this.send_vote("bau", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    } else if (this.state.from == "romain") {
      if (this.state.value.toLowerCase() == "42") {
        alert("Bonne réponse! Ton vote est bien pris en compte");
        this.send_vote("romain", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    } else if (this.state.from == "dudu") {
      if (this.state.value.toLowerCase() == "delta") {
        alert("Bonne réponse! Ton vote est bien pris en compte");
        this.send_vote("dudu", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    } else if (this.state.from == "jerem") {
      if (this.state.value.toLowerCase() == "faucheur") {
        alert("Bonne réponse! Ton vote est bien pris en compte");
        this.send_vote("jerem", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    }

    this.setState({
      value: "",
      from: null
    });
    this.props.refresh();
    this.props.closing();
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <div id="modal">
        <div className="container auto">
          <div className="identification">
            <div className=" question">
              Qui es tu??
              <div className="close" onClick={this.props.closing}>
                RETOUR
              </div>
            </div>
            {(this.state.from === "null" || this.state.from === "younes") && (
              <div onClick={() => this.setState({ from: "younes" })}>
                <img
                  src={younes}
                  alt="younes"
                  className="image_profile"
                  style={{
                    height: "400px"
                  }}
                ></img>
              </div>
            )}
            {(this.state.from === "null" || this.state.from === "lucas") && (
              <div onClick={() => this.setState({ from: "lucas" })}>
                <img
                  src={lucas}
                  alt="lucas"
                  className="image_profile"
                  style={{
                    height: "400px"
                  }}
                ></img>
              </div>
            )}
            {(this.state.from === "null" || this.state.from === "lapuerta") && (
              <div onClick={() => this.setState({ from: "lapuerta" })}>
                <img
                  src={lapuerta}
                  alt="lapuerta"
                  className="image_profile"
                  style={{
                    height: "400px"
                  }}
                ></img>
              </div>
            )}
            {(this.state.from === "null" || this.state.from === "bau") && (
              <div onClick={() => this.setState({ from: "bau" })}>
                <img
                  src={bau}
                  alt="bau"
                  className="image_profile"
                  style={{
                    height: "400px"
                  }}
                ></img>
              </div>
            )}
            {(this.state.from === "null" || this.state.from === "romain") && (
              <div onClick={() => this.setState({ from: "romain" })}>
                <img
                  src={romain}
                  alt="romain"
                  className="image_profile"
                  style={{
                    height: "400px"
                  }}
                ></img>
              </div>
            )}
            {(this.state.from === "null" || this.state.from === "dudu") && (
              <div onClick={() => this.setState({ from: "dudu" })}>
                <img
                  src={dudu}
                  alt="dudu"
                  className="image_profile"
                  style={{
                    height: "400px"
                  }}
                ></img>
              </div>
            )}
            {(this.state.from === "null" || this.state.from === "jerem") && (
              <div onClick={() => this.setState({ from: "jerem" })}>
                <img
                  src={jerem}
                  alt="jerem"
                  className="image_profile"
                  style={{
                    height: "400px"
                  }}
                ></img>
              </div>
            )}
          </div>

          {this.state.from === "younes" && (
            <div id="identification">
              <div className="message"> Nom des soirées à Centrale ? </div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input_text"
                  />
                </label>
                <input type="submit" value="Envoyer" className="input_button" />
              </form>
            </div>
          )}

          {this.state.from === "lucas" && (
            <div id="identification">
              <div className="message">Il y en a 3 à coté de chez toi.</div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input_text"
                  />
                </label>
                <input type="submit" value="Envoyer" className="input_button" />
              </form>
            </div>
          )}

          {this.state.from === "lapuerta" && (
            <div id="identification">
              <div className="message">
                Titre d'une musique qu'on devait créer. En deux mots. Hommage a
                ton amour des pates
              </div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input_text"
                  />
                </label>
                <input type="submit" value="Envoyer" className="input_button" />
              </form>
            </div>
          )}

          {this.state.from === "bau" && (
            <div id="identification">
              <div className="message">Le désert de...</div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input_text"
                  />
                </label>
                <input type="submit" value="Envoyer" className="input_button" />
              </form>
            </div>
          )}

          {this.state.from === "romain" && (
            <div id="identification">
              <div className="message">
                Tu n'iras pas plus loin jeune padawan
              </div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input_text"
                  />
                </label>
                <input type="submit" value="Envoyer" className="input_button" />
              </form>
            </div>
          )}

          {this.state.from === "dudu" && (
            <div id="identification">
              <div className="message">
                Lorsque je suis inférieur à zero, les solutions sont complexes.
              </div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input_text"
                  />
                </label>
                <input type="submit" value="Envoyer" className="input_button" />
              </form>
            </div>
          )}

          {this.state.from === "jerem" && (
            <div id="identification">
              <div className="message">
                Attention à ne pas croiser mes 2 fusils à pompe. Tu me vois, tu
                me vois plus, je suis derriére toi!
              </div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input_text"
                  />
                </label>
                <input type="submit" value="Envoyer" className="input_button" />
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
