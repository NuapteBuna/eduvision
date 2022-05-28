import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { render } from "@testing-library/react";

import { useState } from "react";

import Learn from "./Learn1";

import { useHistory } from "react-router-dom";

var intrebari = [
  new test("Ce este o matrice?", "2", "Informatica", "Matrici", "", [
    "Un tablou unidimensional",
    "Un tablou bidimensional",
    "Un tablou cu 3 dimensiuni",
    "Un tablou cu 4 dimensiuni",
  ]),
  new test(
    "Indicați expresia C/C++ cu valoarea 0",
    "3",
    "Informatica",
    "Expresii",
    "",
    ["sqrt(16)==4", "45*5==200+5*5", "25/10==15/10", "64/4==8*2"]
  ),
  new test(
    "Numim pădure un graf neorientat în care fiecare componentă conexă a sa este un arbore. Orice pădure cu cel putin doi arbori este un graf care:",
    "1",
    "Informatica",
    "Grafuri",
    "",
    [
      "Are cicluri şi este conex",
      "Are cicluri şi nu este conex",
      "Nu are cicluri şi este conex",
      "Nu are cicluri şi nu este conex",
    ]
  ),
  new test(
    "Valoarea expresiei C/C++: 42/10*29/10 este:",
    "3",
    "Informatica",
    "Expresii",
    "",
    ["9", "10", "11", "15"]
  ),
  new test(
    "Valoarea expresiei C/C++: 25/10*15/10 este:",
    "1",
    "Informatica",
    "Expresii",
    "",
    ["3", "4", "5", "1"]
  ),
  new test(
    "Variabilele x și y sunt întregi. Indicați expresia C/C++ echivalentă cu (x<3)&&(y>=5).",
    "1",
    "Informatica",
    "Expresii",
    "",
    [
      "!(!(x<3)||!(y>=5))",
      "!(x>=3)&&(y<5)",
      "!((x>=3)&&(y<5))",
      "!((x<3)||(y>=5))",
    ]
  ),
  new test(
    "Valorile care pot reprezenta gradele nodurilor unui graf neorientat, cu 6 noduri, sunt:",
    "3",
    "Informatica",
    "Grafuri",
    "",
    ["2,2,5,5,0,1", "6,5,4,3,2,1", "2,2,3,4,0,3", "1,0,0,2,2,2"]
  ),
  new test(
    "Utilizând metoda backtracking, se generează toate băuturile obținute amestecând sucurile a cel puțin două fructe distincte din mulţimea {afine, caise, lămâi, mere, pere}. Primele cinci soluţii obţinute sunt, în această ordine: (afine, caise), (afine, caise, lămâi), (afine, caise, lămâi, mere), (afine, caise, lămâi, mere, pere) şi (afine, caise, lămâi, pere). A șasea soluţie este:",
    "3",
    "Informatica",
    "Backtracking",
    "",
    [
      "(afine, mere, pere)",
      "(afine, lămâi, mere, pere)",
      "(afine, caise, mere)",
      "(afine, caise, mere, pere)",
    ]
  ),
  new test(
    "Variabilele i şi j sunt de tip întreg, iar variabila m memorează un tablou bidimensional cu 5 linii şi 5 coloane, numerotate de la 0 la 4, cu elemente numere întregi. O expresie C/C++ a cărei valoare este egală cu produsul dintre primul element de pe linia i și ultimul element de pe coloana j din acest tablou este:",
    "3",
    "Informatica",
    "Matrici",
    "",
    ["m(0,i)*m(j,4)", "m(i)(0)*m(4)(j)", "m[i][0]*m[4][j]", "m[0,i]*m[j,4]"]
  ),
  new test(
    "Utilizând metoda backtracking se generează toate modalităţile de a scrie numărul 6 ca sumă de numere naturale impare. Termenii fiecărei sume sunt în ordine crescătoare. Cele patru soluţii sunt obţinute în această ordine: 1+1+1+1+1+1; 1+1+1+3; 1+5; 3+3. Aplicând acelaşi algoritm, numărul soluţiilor obţinute pentru scrierea lui 8 este:",
    "2",
    "Informatica",
    "Backtracking",
    "",
    ["9", "6", "5", "8"]
  ),
  new test(
    'Cine este purtătorul mesajului moralizator al nuvelei "Moara cu Noroc" ',
    "2",
    "Romana",
    "Literatura",
    "",
    ["Lică Sămădăul", "Soacra lui Ghiță", "Ghiță", "Ana"]
  ),
  new test(
    'Ce tip de opera este "Povestea lui Harap-Alb"?',
    "1",
    "Romana",
    "Literatura",
    "",
    ["Basm", "Nuvelă", "Roman", "Comedie"]
  ),
  new test("Cine a scris Floare Albastra?", "3", "Romana", "Literatura", "", [
    "Ion Creanga",
    "Ioan Slavici",
    "Mihai Eminescu",
    "Ion Pillat",
  ]),
  new test(
    'Cine a scris "Povestea lui Harap-Alb"?',
    "2",
    "Romana",
    "Literatura",
    "",
    ["Ioan Slavici", "Ion Creanga", "Mihai Eminescu", "Ion Luca Caragiale"]
  ),
  new test(
    'Poemul "Luceafărul" apare pentru prima dată:',
    "3",
    "Romana",
    "Marii Clasici",
    "",
    [
      "la București",
      "la Timisoara, în anul 1883",
      'la Viena, în Almanahul societății academice social-literare "România jună"',
      'în revista "Convorbiri literare" din Iași',
    ]
  ),
  new test(
    "Ecuatia dreptei care trece prin punctele M(1,2) si N(2,5)  este:",
    "4",
    "Matematica",
    "Geometrie",
    "",
    ["2x + y = 2", "x = 0", "y = 3", "3x - y = 1"]
  ),
  new test(
    "Sa se determine coordonatele mijlocului segmentului AB, unde A(-3,4) si B(7,-2)",
    "1",
    "Matematica",
    "Geometrie",
    "",
    ["(2,1)", "(1,2)", "(7,-2)", "(-3,4)"]
  ),
  new test(
    "Aria cercului de diametru 2 este:",
    "2",
    "Matematica",
    "Geometrie",
    "",
    ["3π", "π;", "6π;", "4π;"]
  ),
  new test("Daca x ≤ 3 - 2x atunci:", "4", "Matematica", "Algebra", "", [
    "x ≤ -5 ",
    "x = 0 ",
    "x ≤ -11",
    "x ≤ 1 ",
  ]),
  new test(
    "Solutia ecuatiei 5x-12=3x este:",
    "2",
    "Matematica",
    "Algebra",
    "",
    ["-5", "6", "4", "5"]
  ),
];
//TODO: Add more questions

var materii = [];
var capitole = [];

var gresite = 0;

var testing = Learn.returnvalues();

var weekend = testing[4];

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
  getWeekend: function () {
    return weekend;
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
