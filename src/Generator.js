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

  var currDiffMatematica = raspunsuriGresiteMatematica.length * diffLevel * 2;

  var currDiffAlt = raspunsuriGresiteAlt.length * diffLevel * 2;

  var hours = daysTime * 24;

  var currSapt = 0;

  var pasInformatica = daysTime / currDiffInformatica;

  var pasMatematica = daysTime / currDiffMatematica;

  var pasAlt = daysTime / currDiffAlt;

  //Informatica
  var lastzi1 = 0;
  var currSapt1 = 0;

  //Matematica
  var lastzi2 = 0;
  var currSapt2 = 0;

  //Romana
  var lastzi3 = 0;
  var currSapt3 = 0;

  function ore(zi, sapt) {
    if (zi == "luni") {
      return saptNoWeek[sapt].luni.split(" ").length;
    } else if (zi == "marti") {
      return saptNoWeek[sapt].marti.split(" ").length;
    } else if (zi == "miercuri") {
      return saptNoWeek[sapt].miercuri.split(" ").length;
    } else if (zi == "joi") {
      return saptNoWeek[sapt].joi.split(" ").length;
    } else if (zi == "vineri") {
      return saptNoWeek[sapt].vineri.split(" ").length;
    } else if (zi == "sambata") {
      return saptNoWeek[sapt].sambata.split(" ").length;
    } else if (zi == "duminica") {
      return saptNoWeek[sapt].duminica.split(" ").length;
    }
  }

  //Fill informatica fw
  const fillInformaticaFW = () => {
    for (var i = 0; i <= daysTime; i += Math.round(pasInformatica)) {
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
    for (var i = 0; i <= daysTime; i += Math.round(pasMatematica)) {
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
        //saptNoWeek[currSapt2].luni += "Matematica ";
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
    for (var i = 0; i <= daysTime; i += Math.round(pasAlt)) {
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
            var lowest = Math.min(
              ore("luni", currSapt3),
              ore("miercuri", currSapt3),
              ore("marti", currSapt3),
              ore("joi", currSapt3),
              ore("vineri", currSapt3)
            );
            if (lowest == ore("luni", currSapt3)) {
              saptNoWeek[currSapt3].luni += "Romana ";
            } else if (lowest == ore("miercuri", currSapt3)) {
              saptNoWeek[currSapt3].miercuri += "Romana ";
            } else if (lowest == ore("marti", currSapt3)) {
              saptNoWeek[currSapt3].marti += "Romana ";
            } else if (lowest == ore("joi", currSapt3)) {
              saptNoWeek[currSapt3].joi += "Romana ";
            } else if (lowest == ore("vineri", currSapt3)) {
              saptNoWeek[currSapt3].vineri += "Romana ";
            } else {
              saptNoWeek[currSapt3].luni += "Romana ";
            }
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
            var lowest = Math.min(
              ore("marti", currSapt3),
              ore("vineri", currSapt3),
              ore("miercuri", currSapt3),
              ore("joi", currSapt3),
              ore("luni", currSapt3)
            );
            if (lowest == ore("marti", currSapt3)) {
              saptNoWeek[currSapt3].marti += "Romana ";
            } else if (lowest == ore("vineri", currSapt3)) {
              saptNoWeek[currSapt3].vineri += "Romana ";
            } else if (lowest == ore("miercuri", currSapt3)) {
              saptNoWeek[currSapt3].miercuri += "Romana ";
            } else if (lowest == ore("joi", currSapt3)) {
              saptNoWeek[currSapt3].joi += "Romana ";
            } else if (lowest == ore("luni", currSapt3)) {
              saptNoWeek[currSapt3].luni += "Romana ";
            } else {
              saptNoWeek[currSapt3].marti += "Romana ";
            }
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
            var lowest = Math.min(
              ore("miercuri", currSapt3),
              ore("luni", currSapt3),
              ore("joi", currSapt3),
              ore("vineri", currSapt3),
              ore("marti", currSapt3)
            );
            if (lowest == ore("miercuri", currSapt3)) {
              saptNoWeek[currSapt3].miercuri += "Romana ";
            } else if (lowest == ore("luni", currSapt3)) {
              saptNoWeek[currSapt3].luni += "Romana ";
            } else if (lowest == ore("joi", currSapt3)) {
              saptNoWeek[currSapt3].joi += "Romana ";
            } else if (lowest == ore("vineri", currSapt3)) {
              saptNoWeek[currSapt3].vineri += "Romana ";
            } else if (lowest == ore("marti", currSapt3)) {
              saptNoWeek[currSapt3].marti += "Romana ";
            } else {
              saptNoWeek[currSapt3].miercuri += "Romana ";
            }
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
            var lowest = Math.min(
              ore("joi", currSapt3),
              ore("luni", currSapt3),
              ore("marti", currSapt3),
              ore("miercuri", currSapt3),
              ore("vineri", currSapt3)
            );
            if (lowest == ore("joi", currSapt3)) {
              saptNoWeek[currSapt3].joi += "Romana ";
            } else if (lowest == ore("luni", currSapt3)) {
              saptNoWeek[currSapt3].luni += "Romana ";
            }
            if (lowest == ore("marti", currSapt3)) {
              saptNoWeek[currSapt3].marti += "Romana ";
            } else if (lowest == ore("miercuri", currSapt3)) {
              saptNoWeek[currSapt3].miercuri += "Romana ";
            } else if (lowest == ore("vineri", currSapt3)) {
              saptNoWeek[currSapt3].vineri += "Romana ";
            } else if (lowest == ore("joi", currSapt3)) {
              saptNoWeek[currSapt3].joi += "Romana ";
            } else {
              saptNoWeek[currSapt3].joi += "Romana ";
            }
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
            var lowest = Math.min(
              ore("vineri", currSapt3),
              ore("marti", currSapt3),
              ore("miercuri", currSapt3),
              ore("joi", currSapt3),
              ore("luni", currSapt3)
            );
            if (lowest == ore("vineri", currSapt3)) {
              saptNoWeek[currSapt3].vineri += "Romana ";
            } else if (lowest == ore("marti", currSapt3)) {
              saptNoWeek[currSapt3].marti += "Romana ";
            } else if (lowest == ore("miercuri", currSapt3)) {
              saptNoWeek[currSapt3].miercuri += "Romana ";
            } else if (lowest == ore("joi", currSapt3)) {
              saptNoWeek[currSapt3].joi += "Romana ";
            } else if (lowest == ore("luni", currSapt3)) {
              saptNoWeek[currSapt3].luni += "Romana ";
            } else {
              saptNoWeek[currSapt3].vineri += "Romana ";
            }
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

  return (
    <div className="generator">
      {debugGen()}
      {console.log()}
    </div>
  );
};

export default Generator;
