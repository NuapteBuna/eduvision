import rez from "./Test";
import Learn from "./Learn1";
import { findByPlaceholderText } from "@testing-library/react";

const Generator = () => {
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
  var weekend = Learn.LAPI.getWeekend();

  var diffLevelInitial = Learn.LAPI.getDifficultyLevel();

  var diffLevel = 0;

  if (diffLevelInitial === "easy") {
    diffLevel = 1;
  } else if (diffLevelInitial === "medium") {
    diffLevel = 2;
  } else if (diffLevelInitial === "hard") {
    diffLevel = 3;
  }

  var daysTime = Learn.LAPI.getGlobalTime();

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

  const generate = () => {
    alert("testing");
  };

  /*function test(intrebare, raspuns, materie, capitol, input, raspunsuri = []) {
    this.intrebare = intrebare;
    this.raspuns = raspuns;
    this.materie = materie;
    this.capitol = capitol;
    this.input = input;
    this.raspunsuri = raspunsuri;
  }*/

  class saptfw {
    constructor(luni, marti, miercuri, joi, vineri) {
      this.luni = "";
      this.marti = "";
      this.miercuri = "";
      this.joi = "";
      this.vineri = "";
    }
  }

  var saptNoWeek = [];
  for (var i = 0; i <= 100; i++) {
    saptNoWeek[i] = new saptfw();
  }

  function saptn(
    luni = [],
    marti = [],
    miercuri = [],
    joi = [],
    vineri = [],
    sambata = [],
    duminica = []
  ) {
    this.luni = luni;
    this.marti = marti;
    this.miercuri = miercuri;
    this.joi = joi;
    this.vineri = vineri;
    this.sambata = sambata;
    this.duminica = duminica;
  }

  var daysWeekend = [
    "luni",
    "marti",
    "miercuri",
    "joi",
    "vineri",
    "sambata",
    "duminica",
  ];

  var days = ["luni", "marti", "miercuri", "joi", "vineri"];

  var currDiffInformatica =
    (raspunsuriGresiteInformatica.length * diffLevel) / 1.5;

  var currDiffMatematica =
    (raspunsuriGresiteMatematica.length * diffLevel) / 1.5;

  var currDiffAlt = (raspunsuriGresiteAlt.length * diffLevel) / 1.5;

  var hours = daysTime * 24;

  var currSapt = 0;

  var pasInformatica = daysTime / currDiffInformatica;

  var pasMatematica = daysTime / currDiffMatematica;

  var pasAlt = daysTime / currDiffAlt;

  //Informatica
  var lastzi1 = 0;
  var currSapt1 = 0;

  //Fill informatica
  const fillInformaticaFW = () => {
    for (var i = 0; i <= daysTime; i += Math.round(pasInformatica)) {
      console.log(lastzi1);
      if (i % 5 <= lastzi1) {
        currSapt1++;
      }
      if (days[i % 5] == "luni") {
        saptNoWeek[currSapt1].luni += "Informatica";
      }
      if (days[i % 5] == "marti") {
        saptNoWeek[currSapt1].marti += "Informatica";
      }
      if (days[i % 5] == "miercuri") {
        saptNoWeek[currSapt1].miercuri += "Informatica";
      }
      if (days[i % 5] == "joi") {
        saptNoWeek[currSapt1].joi += "Informatica";
      }
      if (days[i % 5] == "vineri") {
        saptNoWeek[currSapt1].vineri += "Informatica";
      }
      lastzi1 = i % 5;
    }
  };

  const debugGen = () => {
    fillInformaticaFW();
    for (var i = 1; i <= currSapt1; i++) {
      console.log(
        "Saptamana " +
          i +
          ": " +
          saptNoWeek[i].luni +
          " " +
          saptNoWeek[i].marti +
          " " +
          saptNoWeek[i].miercuri +
          " " +
          saptNoWeek[i].joi +
          " " +
          saptNoWeek[i].vineri
      );
    }
  };

  const renderTable = () => {};

  return <div className="generator">{debugGen()}</div>;
};

export default Generator;
