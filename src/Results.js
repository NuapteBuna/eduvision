import rez from "./Test";
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import Test from "./Test";
import { generatePath } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Results = () => {
  var materii = rez.API.getMaterii();
  var capitole = rez.API.getCapitole();
  var frecventa = rez.API.getFrecventa();
  var gresite = rez.API.getGresite();
  var string = "",
    string2 = "",
    string3 = "";
  for (var i = 0; i < gresite; i++) {
    string += materii[i] + " ";
  }
  for (var i = 0; i < gresite; i++) {
    string2 += capitole[i] + " ";
  }
  for (var i = 0; i < gresite; i++) {
    string3 += frecventa[materii[i]] + " ";
  }
  var x = [],
    a = 0;
  for (var i = 0; i < gresite; i++) {
    var sc = true;
    for (var j = 0; j < a; j++) {
      if (materii[i] == x[j]) sc = false;
    }
    if (sc) x[a++] = materii[i];
  }
  var string4 = "";
  for (var i = 0; i < a; i++) {
    string4 += x[i] + " ";
  }

  //API Calls
  var capitoleGresiteInformatica = rez.API.getCapitoleGresiteInformatica();
  var capitoleGresiteMatematica = rez.API.getCapitoleGresiteMatematica();
  var capitoleGresiteAlt = rez.API.getCapitoleGresiteAlt();

  var intrebariInformatica = rez.API.getIntrebariInformatica();
  var intrebariMatematica = rez.API.getIntrebariMatematica();
  var intrebariAlt = rez.API.getIntrebariAlt();

  var raspunsuriCorecteInformatica = rez.API.getRaspunsuriCorecteInfo();
  var raspunsuriGresiteInformatica = rez.API.getRaspunsuriGresiteInfo();
  var raspunsuriCorecteMatematica = rez.API.getRaspunsuriCorecteMate();
  var raspunsuriGresiteMatematica = rez.API.getRaspunsuriGresiteMate();
  var raspunsuriCorecteAlt = rez.API.getRaspunsuriCorecteAlt();
  var raspunsuriGresiteAlt = rez.API.getRaspunsuriGresiteAlt();

  var raspInfCorectContor = 0;
  var raspInfGresitContor = 0;
  var raspMatCorectContor = 0;
  var raspMatGresitContor = 0;
  var raspAltCorectContor = 0;
  var raspAltGresitContor = 0;

  var state = {
    listitems: intrebariInformatica,
  };

  var state2 = {
    listitems: intrebariMatematica,
  };

  var state3 = {
    listitems: intrebariAlt,
  };

  const [show, setShow] = useState("hidden");

  const returnWord = (number) => {
    if (number == undefined) return "raspunsuri";
    if (number == 1) return "raspuns";
    else return "raspunsuri";
  };

  const returnWord2 = (number) => {
    if (number == undefined) return "gresite";
    if (number == 1) return "gresit";
    else return "gresite";
  };

  const history = useHistory();

  const generate = () => {
    history.push("/generator");
  };

  return (
    <div className="results">
      <h1
        className="display-2 position-absolute top-0 start-50"
        style={{ marginTop: "3.5rem" }}
      >
        Rezultate
      </h1>
      <button
        className="btn btn-primary"
        style={{ marginTop: "6rem" }}
        onClick={() => {
          generate();
        }}
      >
        Generare orar
      </button>
      <div
        className="card position-absolute top-50 start-0 translate-middle-y"
        style={{
          width: "34rem",
          height: "45rem",
          marginLeft: "3rem",
          marginTop: "4rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{"Informatica"}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {frecventa[x[0]] == undefined
              ? "0"
              : frecventa[x[0]] +
                " " +
                returnWord(frecventa[x[0]]) +
                " " +
                returnWord2(frecventa[x[0]])}
          </h6>
          <ul className="list-group">
            {state.listitems.map((listitem) => (
              <li className="list-group-item list-group-item-primary">
                <b>
                  {capitoleGresiteInformatica[
                    intrebariInformatica.indexOf(listitem)
                  ] + ": "}
                </b>
                {listitem + " "}
                <div className="badge bg-success">
                  ✓{raspunsuriCorecteInformatica[raspInfCorectContor++]}
                </div>
                <div
                  className="badge bg-danger"
                  style={{ marginLeft: "0.3rem" }}
                >
                  ☓{raspunsuriGresiteInformatica[raspInfGresitContor++]}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{
          width: "34rem",
          height: "45rem",
          marginLeft: "0rem",
          marginTop: "4rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{"Matematica"}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {frecventa["Matematica"] == undefined
              ? "0"
              : frecventa["Matematica"] +
                " " +
                returnWord(frecventa["Matematica"]) +
                " " +
                returnWord2(frecventa["Matematica"])}
          </h6>
          <ul className="list-group">
            {state2.listitems.map((listitem) => (
              <li className="list-group-item list-group-item-primary">
                <b>
                  {capitoleGresiteMatematica[
                    intrebariMatematica.indexOf(listitem)
                  ] + ": "}
                </b>
                {listitem + " "}
                <div className="badge bg-success">
                  ✓{raspunsuriCorecteMatematica[raspMatCorectContor++]}
                </div>
                <div
                  className="badge bg-danger"
                  style={{ marginLeft: "0.3rem" }}
                >
                  ☓{raspunsuriGresiteMatematica[raspMatGresitContor++]}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="card position-absolute top-50 start-100 translate-middle"
        style={{
          width: "34rem",
          height: "45rem",
          marginLeft: "-20rem",
          marginTop: "4rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{"Romana"}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {frecventa["Romana"] == undefined
              ? "0"
              : frecventa["Romana"] +
                " " +
                returnWord(frecventa["Romana"]) +
                " " +
                returnWord2(frecventa["Romana"])}
          </h6>
          <ul className="list-group">
            {state3.listitems.map((listitem) => (
              <li className="list-group-item list-group-item-primary">
                <b>
                  {capitoleGresiteAlt[intrebariAlt.indexOf(listitem)] + ": "}
                </b>
                {listitem + " "}
                <div className="badge bg-success">
                  ✓{raspunsuriCorecteAlt[raspAltCorectContor++]}
                </div>
                <div
                  className="badge bg-danger"
                  style={{ marginLeft: "0.3rem" }}
                >
                  ☓{raspunsuriGresiteAlt[raspAltGresitContor++]}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Results;
