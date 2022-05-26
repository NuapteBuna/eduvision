import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { render } from "@testing-library/react";

import { useState } from "react";

import Learn from "./Learn1";

import { useHistory } from "react-router-dom";

var intrebari = [
  new test("Ce este un obiect?", "1", "Informatica", "1", "", [
    "a",
    "b",
    "c",
    "d",
  ]),
  new test("Ce este un numar?", "2", "Matematica", "3", "", [
    "a",
    "b",
    "c",
    "d",
  ]),
  new test("Ce sunt datele?", "4", "Informatica", "3", "", [
    "a",
    "b",
    "c",
    "d",
  ]),
  new test("Cine a scris Floare Albastra?", "3", "Romana", "Literatura", "", [
    "Ion Creanga",
    "Ioan Slavici",
    "Mihai Eminescu",
    "Ion Pillat",
  ]),
];
//TODO: Add more questions

var materii = [];
var capitole = [];

var gresite = 0;

//Frequency array for wrong answers
const frecventaMat = new Array(100).fill(0);
var wrongIntrebari0 = [];
var wrongIntrebari1 = [];
var wrongIntrebari2 = [];
var raspunsuriCorecteInformatica = [];
var raspunsuriGresiteInformatica = [];
var raspunsuriCorecteMatematica = [];
var raspunsuriGresiteMatematica = [];
var raspunsuriCorecteAlt = [];
var raspunsuriGresiteAlt = [];

//Simulate Struct
function test(intrebare, raspuns, materie, capitol, input, raspunsuri = []) {
  this.intrebare = intrebare;
  this.raspuns = raspuns;
  this.materie = materie;
  this.capitol = capitol;
  this.input = input;
  this.raspunsuri = raspunsuri;
}

//API Calls
var API = {
  getMaterii: function () {
    return materii;
  },
  getCapitole: function () {
    return capitole;
  },
  getFrecventa: function () {
    return frecventaMat;
  },
  getGresite: function () {
    return gresite;
  },
  getIntrebariInformatica: function () {
    return wrongIntrebari0;
  },
  getIntrebariMatematica: function () {
    return wrongIntrebari1;
  },
  getIntrebariAlt: function () {
    return wrongIntrebari2;
  },
  getRaspunsuriCorecteInfo: function () {
    return raspunsuriCorecteInformatica;
  },
  getRaspunsuriGresiteInfo: function () {
    return raspunsuriGresiteInformatica;
  },
  getRaspunsuriCorecteMate: function () {
    return raspunsuriCorecteMatematica;
  },
  getRaspunsuriGresiteMate: function () {
    return raspunsuriGresiteMatematica;
  },
  getRaspunsuriCorecteAlt: function () {
    return raspunsuriCorecteAlt;
  },
  getRaspunsuriGresiteAlt: function () {
    return raspunsuriGresiteAlt;
  },
};

var contor1 = 0;
var contor2 = 0;
var contor3 = 0;

var raspInfCorectContor = 0;
var raspInfGresitContor = 0;
var raspMatCorectContor = 0;
var raspMatGresitContor = 0;
var raspAltCorectContor = 0;
var raspAltGresitContor = 0;

var lastmaterie = "";

var currAns = "";

const Test = () => {
  //Only allow one answer per question
  const activateButton = (id) => {
    document.getElementById(id).classList.add("active");
    currAns = id - 1;
    for (var i = 1; i <= 4; i++) {
      if (i != id) document.getElementById(i).classList.remove("active");
    }
  };

  //Reactive variables, used to keep track of the current question and the current word for the button
  const [counter, setCounter] = useState(0);
  const [currWord, setWord] = useState("Next");

  const history = useHistory();

  //Tracks the wrong answers in the frequency array
  const submit = () => {
    if (currAns == intrebari[counter].raspuns - 1) console.log(currAns);
    else {
      materii[gresite] = intrebari[counter].materie;
      capitole[gresite++] = intrebari[counter].capitol;
      frecventaMat[materii[gresite - 1]] = frecventaMat[materii[gresite - 1]]
        ? frecventaMat[materii[gresite - 1]] + 1
        : 1;
      if (intrebari[counter].materie == "Informatica") {
        wrongIntrebari0[contor1++] = intrebari[counter].intrebare;
        raspunsuriGresiteInformatica[raspInfGresitContor++] =
          intrebari[counter].raspunsuri[currAns];
        raspunsuriCorecteInformatica[raspInfCorectContor++] =
          intrebari[counter].raspunsuri[intrebari[counter].raspuns - 1];
      } else if (intrebari[counter].materie == "Matematica") {
        wrongIntrebari1[contor2++] = intrebari[counter].intrebare;
        raspunsuriGresiteMatematica[raspMatGresitContor++] =
          intrebari[counter].raspunsuri[currAns];
        raspunsuriCorecteMatematica[raspMatCorectContor++] =
          intrebari[counter].raspunsuri[intrebari[counter].raspuns - 1];
      } else if (intrebari[counter].materie == "Romana") {
        wrongIntrebari2[contor3++] = intrebari[counter].intrebare;
        raspunsuriGresiteAlt[raspAltGresitContor++] =
          intrebari[counter].raspunsuri[currAns];
        raspunsuriCorecteAlt[raspAltCorectContor++] =
          intrebari[counter].raspunsuri[intrebari[counter].raspuns - 1];
      }
      console.log(currAns);
    }

    if (counter >= intrebari.length - 2) {
      setWord("Finish");
    }
    if (counter == intrebari.length - 1) {
      history.push("/results");
    }

    setCounter((count) => count + 1);
  };

  //Renders the questions and answers
  function renderQuestion(id) {
    return (
      <p className="card-text">
        <font size={6}>{intrebari[id].intrebare}</font>
        <div class="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            id="1"
            onClick={() => {
              activateButton(1);
            }}
          >
            {intrebari[id].raspunsuri[0]}
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            id="2"
            onClick={() => {
              activateButton(2);
            }}
          >
            {intrebari[id].raspunsuri[1]}
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            id="3"
            onClick={() => {
              activateButton(3);
            }}
          >
            {intrebari[id].raspunsuri[2]}
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            id="4"
            onClick={() => {
              activateButton(4);
            }}
          >
            {intrebari[id].raspunsuri[3]}
          </button>
        </div>
      </p>
    );
  }

  //Returns the appropriate content depending on the number of questions remaining
  const returnWord = (length) => {
    if (length == 1) return length + " intrebare";
    else return length + " intrebari";
  };

  //Starts from 0 : currentobjects, globalTime, learningMode, difficultyLevel, weekend
  var content = Learn.returnvalues();

  //Renders the final page
  return (
    <div className="test">
      <font size={24}>
        <h1
          className="display-1 position-absolute top-0 start-50"
          style={{ marginTop: "7.5rem" }}
        >
          Test
        </h1>
      </font>
      <div className="romana">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="row">
            <div className="col-sm-6">
              <div className="card" style={{ width: "40rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{intrebari[counter].materie}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {returnWord(
                      intrebari.filter(
                        (x) => x.materie == intrebari[counter].materie
                      ).length
                    )}
                  </h6>
                  {renderQuestion(counter)}
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={submit}
                  >
                    {currWord}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  Test,
  API,
};
