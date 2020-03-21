import React, { Component } from "react";
import "./Modal.scss";
import younes from "./younes.png";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: null,
      to: props.to,
      value: ""
    };
  }

  send_vote(from, to) {
    console.log("from:" + from + " to:" + to);
    fetch("ap2/corona/addvote", {
      method: "POST",
      body: JSON.stringify(this.state),
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
      if (this.state.value == "naruto") {
        alert("Bonne réponse!");
        this.send_vote("younes", this.props.to);
      } else {
        alert("Mauvaise réponse!");
      }
    }
    this.setState({
      value: "",
      from: null
    });
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
      <div id="modal" className={this.props.active === true ? "open" : ""}>
        <div className="mask"></div>
        <div className="container auto">
          {this.state.from === null && (
            <div id="identification">
              <div className="message"> Qui es tu??</div>
              <div
                className="younes_choice"
                onClick={() => this.setState({ from: "younes" })}
              >
                <img src={younes} alt="younes" style={{ width: "200px" }}></img>
              </div>
            </div>
          )}
          <button className="close" onClick={this.props.closing}>
            &times;
          </button>

          {this.state.from === "younes" && (
            <div id="identification">
              <div className="message"> Que vaut 1000 ans de douleur ? </div>

              <form onSubmit={this.test_reponse}>
                <label>
                  Réponse :
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Envoyer" />
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
