import rez from "./Test";
import Learn from "./Learn1";
import { findByPlaceholderText } from "@testing-library/react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const Generator = () => {
  var materii = rez.API.getMaterii();
  var capitole = rez.API.getCapitole();
  var frecventa = rez.API.getFrecventa();
  var gresite = rez.API.getGresite();

  var capitoleGresiteInformatica = rez.API.getCapitoleGresiteInformatica();
  var capitoleGresiteMatematica = rez.API.getCapitoleGresiteMatematica();
  var capitoleGresiteAlt = rez.API.getCapitoleGresiteAlt();

  var counterCapitoleInformatica = 0;
  var counterCapitoleMatematica = 0;
  var counterCapitoleAlt = 0;

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

  class saptfw {
    constructor(luni, marti, miercuri, joi, vineri) {
      this.luni = "";
      this.marti = "";
      this.miercuri = "";
      this.joi = "";
      this.vineri = "";
    }
  }

  function closestNumber(n, m) {
    let q = parseInt(n / m);

    let n1 = m * q;

    let n2 = n * m > 0 ? m * (q + 1) : m * (q - 1);

    if (Math.abs(n - n1) < Math.abs(n - n2)) return n1;

    return n2;
  }

  daysTime = closestNumber(daysTime, 7);

  var saptNoWeek = [];
  for (var i = 0; i <= daysTime / 7; i++) {
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
    (raspunsuriGresiteInformatica.length * 3) / diffLevel;

  var currDiffMatematica = (raspunsuriGresiteMatematica.length * 3) / diffLevel;

  var currDiffAlt = (raspunsuriGresiteAlt.length * 3) / diffLevel;

  var hours = daysTime * 24;

  var currSapt = 0;

  var pasInformatica = daysTime / currDiffInformatica;

  var pasMatematica = daysTime / currDiffMatematica;

  var pasAlt = daysTime / currDiffAlt;

  //Informatica
  var lastzi1 = 0;
  var currSapt1 = -1;

  //Matematica
  var lastzi2 = 0;
  var currSapt2 = -1;

  //Romana
  var lastzi3 = 0;
  var currSapt3 = -1;

  function ore(zi, sapt) {
    if (zi == "luni") {
      return saptNoWeek[sapt].luni.split(" ").length - 1;
    } else if (zi == "marti") {
      return saptNoWeek[sapt].marti.split(" ").length - 1;
    } else if (zi == "miercuri") {
      return saptNoWeek[sapt].miercuri.split(" ").length - 1;
    } else if (zi == "joi") {
      return saptNoWeek[sapt].joi.split(" ").length - 1;
    } else if (zi == "vineri") {
      return saptNoWeek[sapt].vineri.split(" ").length - 1;
    } else if (zi == "sambata") {
      return saptNoWeek[sapt].sambata.split(" ").length - 1;
    } else if (zi == "duminica") {
      return saptNoWeek[sapt].duminica.split(" ").length - 1;
    }
  }

  //Fill informatica fw
  const fillInformaticaFW = () => {
    for (
      var i = 0;
      i <= daysTime && currSapt1 * 7 < daysTime;
      i += Math.round(pasInformatica)
    ) {
      console.log("\n" + "I: " + i);
      console.log("\n" + "currSapt1: " + currSapt1);
      if (i % 5 <= lastzi1) {
        currSapt1++;
      }
      if (days[i % 5] == "luni") {
        saptNoWeek[currSapt1].luni += "Informatica ";
      }
      if (days[i % 5] == "marti") {
        saptNoWeek[currSapt1].marti += "Informatica ";
      }
      if (days[i % 5] == "miercuri") {
        saptNoWeek[currSapt1].miercuri += "Informatica ";
      }
      if (days[i % 5] == "joi") {
        saptNoWeek[currSapt1].joi += "Informatica ";
      }
      if (days[i % 5] == "vineri") {
        saptNoWeek[currSapt1].vineri += "Informatica ";
      }
      lastzi1 = i % 5;
    }
  };

  //Fill matematica fw
  const fillMatematicaFW = () => {
    for (
      var i = 0;
      i <= daysTime && currSapt2 * 7 < daysTime;
      i += Math.round(pasMatematica)
    ) {
      if (i % 5 <= lastzi2) {
        currSapt2++;
      }
      if (days[i % 5] == "luni") {
        if (ore("luni", currSapt2) >= 1) {
          if (ore("miercuri", currSapt2) == 0) {
            saptNoWeek[currSapt2].miercuri += "Matematica ";
          } else if (ore("joi", currSapt2) == 0) {
            saptNoWeek[currSapt2].joi += "Matematica ";
          } else if (ore("vineri", currSapt2) == 0) {
            saptNoWeek[currSapt2].vineri += "Matematica ";
          } else if (ore("marti", currSapt2) == 0) {
            saptNoWeek[currSapt2].marti += "Matematica ";
          } else {
            var lowest = Math.min(
              ore("luni", currSapt2),
              ore("miercuri", currSapt2),
              ore("joi", currSapt2),
              ore("vineri", currSapt2),
              ore("marti", currSapt2)
            );
            if (lowest == ore("luni", currSapt2)) {
              saptNoWeek[currSapt2].luni += "Matematica ";
            } else if (lowest == ore("miercuri", currSapt2)) {
              saptNoWeek[currSapt2].miercuri += "Matematica ";
            } else if (lowest == ore("joi", currSapt2)) {
              saptNoWeek[currSapt2].joi += "Matematica ";
            } else if (lowest == ore("vineri", currSapt2)) {
              saptNoWeek[currSapt2].vineri += "Matematica ";
            } else if (lowest == ore("marti", currSapt2)) {
              saptNoWeek[currSapt2].marti += "Matematica ";
            }
          }
        } else {
          saptNoWeek[currSapt2].luni += "Matematica ";
        }
      }
      if (days[i % 5] == "marti") {
        if (ore("marti", currSapt2) >= 1) {
          if (ore("joi", currSapt2) == 0) {
            saptNoWeek[currSapt2].joi += "Matematica ";
          } else if (ore("vineri", currSapt2) == 0) {
            saptNoWeek[currSapt2].vineri += "Matematica ";
          } else if (ore("miercuri", currSapt2) == 0) {
            saptNoWeek[currSapt2].miercuri += "Matematica ";
          } else if (ore("luni", currSapt2) == 0) {
            saptNoWeek[currSapt2].luni += "Matematica ";
          } else {
            var lowest = Math.min(
              ore("marti", currSapt2),
              ore("joi", currSapt2),
              ore("vineri", currSapt2),
              ore("miercuri", currSapt2),
              ore("luni", currSapt2)
            );
            if (lowest == ore("marti", currSapt2)) {
              saptNoWeek[currSapt2].marti += "Matematica ";
            } else if (lowest == ore("joi", currSapt2)) {
              saptNoWeek[currSapt2].joi += "Matematica ";
            } else if (lowest == ore("vineri", currSapt2)) {
              saptNoWeek[currSapt2].vineri += "Matematica ";
            } else if (lowest == ore("miercuri", currSapt2)) {
              saptNoWeek[currSapt2].miercuri += "Matematica ";
            } else if (lowest == ore("luni", currSapt2)) {
              saptNoWeek[currSapt2].luni += "Matematica ";
            }
          }
        } else {
          saptNoWeek[currSapt2].marti += "Matematica ";
        }
      }
      if (days[i % 5] == "miercuri") {
        if (ore("miercuri", currSapt2) >= 1) {
          if (ore("vineri", currSapt2) == 0) {
            saptNoWeek[currSapt2].vineri += "Matematica ";
          } else if (ore("luni", currSapt2) == 0) {
            saptNoWeek[currSapt2].luni += "Matematica ";
          } else if (ore("joi", currSapt2) == 0) {
            saptNoWeek[currSapt2].joi += "Matematica ";
          } else if (ore("marti", currSapt2) == 0) {
            saptNoWeek[currSapt2].marti += "Matematica ";
          } else {
            var lowest = Math.min(
              ore("miercuri", currSapt2),
              ore("luni", currSapt2),
              ore("joi", currSapt2),
              ore("vineri", currSapt2),
              ore("marti", currSapt2)
            );
            if (lowest == ore("miercuri", currSapt2)) {
              saptNoWeek[currSapt2].miercuri += "Matematica ";
            } else if (lowest == ore("luni", currSapt2)) {
              saptNoWeek[currSapt2].luni += "Matematica ";
            } else if (lowest == ore("joi", currSapt2)) {
              saptNoWeek[currSapt2].joi += "Matematica ";
            } else if (lowest == ore("vineri", currSapt2)) {
              saptNoWeek[currSapt2].vineri += "Matematica ";
            } else if (lowest == ore("marti", currSapt2)) {
              saptNoWeek[currSapt2].marti += "Matematica ";
            }
          }
        } else {
          saptNoWeek[currSapt2].miercuri += "Matematica ";
        }
      }
      if (days[i % 5] == "joi") {
        if (ore("joi", currSapt2) >= 1) {
          if (ore("luni", currSapt2) == 0) {
            saptNoWeek[currSapt2].luni += "Matematica ";
          } else if (ore("marti", currSapt2) == 0) {
            saptNoWeek[currSapt2].marti += "Matematica ";
          } else if (ore("miercuri", currSapt2) == 0) {
            saptNoWeek[currSapt2].miercuri += "Matematica ";
          } else if (ore("vineri", currSapt2) == 0) {
            saptNoWeek[currSapt2].vineri += "Matematica ";
          } else {
            var lowest = Math.min(
              ore("joi", currSapt2),
              ore("luni", currSapt2),
              ore("marti", currSapt2),
              ore("miercuri", currSapt2),
              ore("vineri", currSapt2)
            );
            if (lowest == ore("joi", currSapt2)) {
              saptNoWeek[currSapt2].joi += "Matematica ";
            } else if (lowest == ore("luni", currSapt2)) {
              saptNoWeek[currSapt2].luni += "Matematica ";
            } else if (lowest == ore("marti", currSapt2)) {
              saptNoWeek[currSapt2].marti += "Matematica ";
            } else if (lowest == ore("miercuri", currSapt2)) {
              saptNoWeek[currSapt2].miercuri += "Matematica ";
            } else if (lowest == ore("vineri", currSapt2)) {
              saptNoWeek[currSapt2].vineri += "Matematica ";
            } else {
              saptNoWeek[currSapt2].joi += "Matematica ";
            }
          }
        } else {
          saptNoWeek[currSapt2].joi += "Matematica ";
        }
      }
      if (days[i % 5] == "vineri") {
        if (ore("vineri", currSapt2) >= 1) {
          if (ore("marti", currSapt2) == 0) {
            saptNoWeek[currSapt2].marti += "Matematica ";
          } else if (ore("miercuri", currSapt2) == 0) {
            saptNoWeek[currSapt2].miercuri += "Matematica ";
          } else if (ore("joi", currSapt2) == 0) {
            saptNoWeek[currSapt2].joi += "Matematica ";
          } else if (ore("luni", currSapt2) == 0) {
            saptNoWeek[currSapt2].luni += "Matematica ";
          } else {
            var lowest = Math.min(
              ore("vineri", currSapt2),
              ore("marti", currSapt2),
              ore("miercuri", currSapt2),
              ore("joi", currSapt2),
              ore("luni", currSapt2)
            );
            if (lowest == ore("vineri", currSapt2)) {
              saptNoWeek[currSapt2].vineri += "Matematica ";
            } else if (lowest == ore("marti", currSapt2)) {
              saptNoWeek[currSapt2].marti += "Matematica ";
            } else if (lowest == ore("miercuri", currSapt2)) {
              saptNoWeek[currSapt2].miercuri += "Matematica ";
            } else if (lowest == ore("joi", currSapt2)) {
              saptNoWeek[currSapt2].joi += "Matematica ";
            } else if (lowest == ore("luni", currSapt2)) {
              saptNoWeek[currSapt2].luni += "Matematica ";
            } else {
              saptNoWeek[currSapt2].vineri += "Matematica ";
            }
          }
        } else {
          saptNoWeek[currSapt2].vineri += "Matematica ";
        }
      }
      lastzi2 = i % 5;
    }
  };

  //Fill romana fw
  const fillRomanaFW = () => {
    for (
      var i = 0;
      i <= daysTime && currSapt3 * 7 < daysTime;
      i += Math.round(pasAlt)
    ) {
      if (i % 5 <= lastzi3) {
        currSapt3++;
      }
      if (days[i % 5] == "luni") {
        if (ore("luni", currSapt3) >= 1) {
          if (ore("miercuri", currSapt3) == 0) {
            saptNoWeek[currSapt3].miercuri += "Romana ";
          } else if (ore("marti", currSapt3) == 0) {
            saptNoWeek[currSapt3].marti += "Romana ";
          } else if (ore("joi", currSapt3) == 0) {
            saptNoWeek[currSapt3].joi += "Romana ";
          } else if (ore("vineri", currSapt3) == 0) {
            saptNoWeek[currSapt3].vineri += "Romana ";
          } else {
            currSapt3++;
          }
        } else {
          saptNoWeek[currSapt3].luni += "Romana ";
        }
      }
      if (days[i % 5] == "marti") {
        if (ore("marti", currSapt3) >= 1) {
          if (ore("vineri", currSapt3) == 0) {
            saptNoWeek[currSapt3].vineri += "Romana ";
          } else if (ore("miercuri", currSapt3) == 0) {
            saptNoWeek[currSapt3].luni += "Romana ";
          } else if (ore("joi", currSapt3) == 0) {
            saptNoWeek[currSapt3].joi += "Romana ";
          } else if (ore("luni", currSapt3) == 0) {
            saptNoWeek[currSapt3].luni += "Romana ";
          } else {
            currSapt3++;
          }
        } else {
          saptNoWeek[currSapt3].marti += "Romana ";
        }
      }
      if (days[i % 5] == "miercuri") {
        if (ore("miercuri", currSapt3) >= 1) {
          if (ore("luni", currSapt3) == 0) {
            saptNoWeek[currSapt3].luni += "Romana ";
          } else if (ore("joi", currSapt3) == 0) {
            saptNoWeek[currSapt3].joi += "Romana ";
          } else if (ore("vineri", currSapt3) == 0) {
            saptNoWeek[currSapt3].vineri += "Romana ";
          } else if (ore("marti", currSapt3) == 0) {
            saptNoWeek[currSapt3].marti += "Romana ";
          } else {
            currSapt3++;
          }
        } else {
          saptNoWeek[currSapt3].miercuri += "Romana ";
        }
      }
      if (days[i % 5] == "joi") {
        if (ore("joi", currSapt3) >= 1) {
          if (ore("luni", currSapt3) == 0) {
            saptNoWeek[currSapt3].luni += "Romana ";
          } else if (ore("marti", currSapt3) == 0) {
            saptNoWeek[currSapt3].marti += "Romana ";
          } else if (ore("miercuri", currSapt3) == 0) {
            saptNoWeek[currSapt3].miercuri += "Romana ";
          } else if (ore("vineri", currSapt3) == 0) {
            saptNoWeek[currSapt3].vineri += "Romana ";
          } else {
            currSapt3++;
          }
        } else {
          saptNoWeek[currSapt3].joi += "Romana ";
        }
      }
      if (days[i % 5] == "vineri") {
        if (ore("vineri", currSapt3) >= 1) {
          if (ore("marti", currSapt3) == 0) {
            saptNoWeek[currSapt3].marti += "Romana ";
          } else if (ore("miercuri", currSapt3) == 0) {
            saptNoWeek[currSapt3].miercuri += "Romana ";
          } else if (ore("joi", currSapt3) == 0) {
            saptNoWeek[currSapt3].joi += "Romana ";
          } else if (ore("luni", currSapt3) == 0) {
            saptNoWeek[currSapt3].luni += "Romana ";
          } else {
            currSapt3++;
          }
        } else {
          saptNoWeek[currSapt3].vineri += "Romana ";
        }
      }
      lastzi3 = i % 5;
    }
  };

  const debugGen = () => {
    fillInformaticaFW();
    fillMatematicaFW();
    fillRomanaFW();

    for (var i = 1; i <= currSapt1; i++) {
      console.log(
        "Saptamana " +
          i +
          ": " +
          "\n Luni : " +
          saptNoWeek[i].luni +
          "\n " +
          "Marti : " +
          saptNoWeek[i].marti +
          "\n " +
          "Miercuri : " +
          saptNoWeek[i].miercuri +
          "\n " +
          "Joi : " +
          saptNoWeek[i].joi +
          "\n " +
          "Vineri : " +
          saptNoWeek[i].vineri
      );
    }
  };

  const renderTable = () => {
    "testing";
  };

  function createData(
    function1,
    function2,
    function3,
    saptamana,
    luni,
    marti,
    miercuri,
    joi,
    vineri
  ) {
    return {
      function1,
      function2,
      function3,
      saptamana,
      luni,
      marti,
      miercuri,
      joi,
      vineri,
    };
  }

  function logsapt() {
    fillInformaticaFW();
    fillMatematicaFW();
    fillRomanaFW();
    console.log(saptNoWeek[1]);
  }

  const rows = [
    createData(
      fillInformaticaFW(),
      fillMatematicaFW(),
      fillRomanaFW(),
      1,
      saptNoWeek[1].luni,
      saptNoWeek[1].marti,
      saptNoWeek[1].miercuri,
      saptNoWeek[1].joi,
      saptNoWeek[1].vineri
    ),
  ];

  const [index, setIndex] = useState(1);

  const returnCapitol = (materie) => {
    if (materie == "Informatica ") {
      return capitoleGresiteInformatica[counterCapitoleInformatica++];
    } else if (materie == "Matematica ") {
      return capitoleGresiteMatematica[counterCapitoleMatematica++];
    } else if (materie == "Romana ") {
      return capitoleGresiteAlt[counterCapitoleAlt++];
    }
  };

  const returnOutput = (materie) => {
    if (materie == "Informatica ") {
      if (counterCapitoleInformatica + 1 > capitoleGresiteInformatica.length) {
        counterCapitoleInformatica = 0;
      }
      return " : " + capitoleGresiteInformatica[counterCapitoleInformatica++];
    } else if (materie == "Matematica ") {
      if (counterCapitoleMatematica + 1 > capitoleGresiteMatematica.length) {
        counterCapitoleMatematica = 0;
      }
      return " : " + capitoleGresiteMatematica[counterCapitoleMatematica++];
    } else if (materie == "Romana ") {
      if (counterCapitoleAlt + 1 > capitoleGresiteAlt.length) {
        counterCapitoleAlt = 0;
      }
      return " : " + capitoleGresiteAlt[counterCapitoleAlt++];
    }
  };

  return (
    <table
      className="table table-striped position-absolute top-50 start-50 translate-middle table-responsive table-hover"
      style={{ textAlign: "center", minHeight: "20%", maxWidth: "50%" }}
    >
      <thead class="thead-light">
        <tr>
          <th scope="col">
            <center>Saptamana</center>
          </th>
          <th scope="col">
            <center>Luni</center>
          </th>
          <th scope="col">
            <center>Marti</center>
          </th>
          <th scope="col">
            <center>Miercuri</center>
          </th>
          <th scope="col">
            <center>Joi</center>
          </th>
          <th scope="col">
            <center>Vineri</center>
          </th>
        </tr>
      </thead>
      <tbody>
        {saptNoWeek.map((element, index) => (
          <tr>
            <th scope="row">
              <center>
                <middle>{index + 1}</middle>
              </center>
            </th>
            <td>
              <b>{element.luni}</b>
              {returnOutput(element.luni)}
            </td>
            <td>
              <b>{element.marti}</b>
              {returnOutput(element.marti)}
            </td>
            <td>
              <b>{element.miercuri}</b>
              {returnOutput(element.miercuri)}
            </td>
            <td>
              <b>{element.joi}</b>
              {returnOutput(element.joi)}
            </td>
            <td>
              <b>{element.vineri}</b>
              {returnOutput(element.vineri)}
            </td>
          </tr>
        ))}
        {debugGen()}
      </tbody>
    </table>
  );
  {
    /*<TableContainer component={Paper}>
      {logsapt()}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Saptamana</TableCell>
            <TableCell align="right">Luni</TableCell>
            <TableCell align="right">Marti</TableCell>
            <TableCell align="right">Miercuri</TableCell>
            <TableCell align="right">Joi</TableCell>
            <TableCell align="right">Vineri</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.saptamana}
              sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {row.saptamana}
              </TableCell>
              <TableCell align="right">{row.luni}</TableCell>
              <TableCell align="right">{row.marti}</TableCell>
              <TableCell align="right">{row.miercuri}</TableCell>
              <TableCell align="right">{row.joi}</TableCell>
              <TableCell align="right">{row.vineri}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </TableContainer>*/
  }

  /*return (
    <div className="generator">
      {debugGen()}
      {console.log(
        " days: " +
          daysTime +
          "\n currDiffInformatica : " +
          currDiffInformatica +
          "\n currDiffMatematica : " +
          currDiffMatematica +
          "\n currDiffRomana : " +
          currDiffAlt +
          "\n pasInformatica : " +
          pasInformatica +
          "\n pasMatematica : " +
          pasMatematica +
          "\n pasRomana : " +
          pasAlt +
          "\n currSapt1 : " +
          currSapt1 +
          "\n currSapt2 : " +
          currSapt2 +
          "\n currSapt3 : " +
          currSapt3
      )}
    </div>
  );*/
};

export default Generator;
