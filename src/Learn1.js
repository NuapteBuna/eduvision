import { useHistory } from "react-router-dom";
import { Collapse } from "bootstrap";

var currentobjects = 2,
  timeValue,
  globalTime = 0,
  difficultyLevel = "",
  learningMode = "",
  weekend = 0;

function returnvalues() {
  return [currentobjects, globalTime, learningMode, difficultyLevel, weekend];
}

var LAPI = {
  getWeekend: function () {
    return weekend;
  },
  getCurrentObjects: function () {
    return currentobjects;
  },
  getGlobalTime: function () {
    return globalTime;
  },
  getLearningMode: function () {
    return learningMode;
  },
  getDifficultyLevel: function () {
    return difficultyLevel;
  },
};

//reset values for number inputs
const LearnSetup = () => {
  //var currentobjects = 2, timeValue, globalTime = 0, difficultyLevel ="", learningMode="", weekend=0;

  const saveData = () => {};

  const resetButtons = () => {
    document.getElementById("mat3").classList.remove("active");
    document.getElementById("mat4").classList.remove("active");
    document.getElementById("mat5").classList.remove("active");
    document.getElementById("mat6").classList.remove("active");
    document.getElementById("days").classList.remove("active");
    document.getElementById("weeks").classList.remove("active");
    document.getElementById("months").classList.remove("active");
    document.getElementById("da").classList.remove("active");
    document.getElementById("nu").classList.remove("active");
  };

  const disableAllBut = (mat) => {
    document.getElementById("mat3").disabled = true;
    document.getElementById("mat4").disabled = true;
    document.getElementById("mat5").disabled = true;
    document.getElementById("mat6").disabled = true;
    document.getElementById("mat" + mat).disabled = false;
  };

  const enableAll = () => {
    document.getElementById("mat3").disabled = false;
    document.getElementById("mat4").disabled = false;
    document.getElementById("mat5").disabled = false;
    document.getElementById("mat6").disabled = false;
  };

  const activatemat3 = () => {
    if (document.getElementById("mat3").classList.contains("active")) {
      document.getElementById("mat3").classList.remove("active");
      currentobjects--;
    } else {
      document.getElementById("mat3").classList.add("active");
      currentobjects++;
    }
    if (currentobjects >= 3) disableAllBut(3);
    else enableAll();
  };

  const activatemat4 = () => {
    if (document.getElementById("mat4").classList.contains("active")) {
      document.getElementById("mat4").classList.remove("active");
      currentobjects--;
    } else {
      document.getElementById("mat4").classList.add("active");
      currentobjects++;
    }
    if (currentobjects >= 3) disableAllBut(4);
    else enableAll();
  };

  const activatemat5 = () => {
    if (document.getElementById("mat5").classList.contains("active")) {
      document.getElementById("mat5").classList.remove("active");
      currentobjects--;
    } else {
      document.getElementById("mat5").classList.add("active");
      currentobjects++;
    }
    if (currentobjects >= 3) disableAllBut(5);
    else enableAll();
  };

  const activatemat6 = () => {
    if (document.getElementById("mat6").classList.contains("active")) {
      document.getElementById("mat6").classList.remove("active");
      currentobjects--;
    } else {
      document.getElementById("mat6").classList.add("active");
      currentobjects++;
    }
    if (currentobjects >= 3) disableAllBut(6);
    else enableAll();
  };

  const activateDays = () => {
    if (document.getElementById("days").classList.contains("active")) {
      document.getElementById("days").classList.remove("active");
      timeValue = "";
    } else {
      timeValue = "zile";
      document.getElementById("days").classList.add("active");
      document.getElementById("weeks").classList.remove("active");
      document.getElementById("months").classList.remove("active");
    }
  };

  const activateWeeks = () => {
    if (document.getElementById("weeks").classList.contains("active")) {
      document.getElementById("weeks").classList.remove("active");
      timeValue = "";
    } else {
      timeValue = "săptămâni";
      document.getElementById("days").classList.remove("active");
      document.getElementById("weeks").classList.add("active");
      document.getElementById("months").classList.remove("active");
    }
  };

  const activateMonths = () => {
    if (document.getElementById("months").classList.contains("active")) {
      document.getElementById("months").classList.remove("active");
      timeValue = "";
    } else {
      timeValue = "luni";
      document.getElementById("days").classList.remove("active");
      document.getElementById("weeks").classList.remove("active");
      document.getElementById("months").classList.add("active");
    }
  };

  const RememberTime = () => {
    var time = document.getElementById("time-input-value").value;
    return time;
  };

  function ChangeTimeToDays() {
    var time = RememberTime();
    if (timeValue == "zile") globalTime = time;
    if (timeValue == "săptămâni") globalTime = time * 7;
    if (timeValue == "luni") globalTime = time * 30;
  }

  const activateEasy = () => {
    difficultyLevel = "easy";
    document.getElementById("easy").classList.add("active");
    document.getElementById("medium").classList.remove("active");
    document.getElementById("hard").classList.remove("active");
  };

  const activateMedium = () => {
    difficultyLevel = "medium";
    document.getElementById("easy").classList.remove("active");
    document.getElementById("medium").classList.add("active");
    document.getElementById("hard").classList.remove("active");
  };

  const activateHard = () => {
    difficultyLevel = "hard";
    document.getElementById("easy").classList.remove("active");
    document.getElementById("medium").classList.remove("active");
    document.getElementById("hard").classList.add("active");
  };

  const activateDa = () => {
    weekend = 1;
    document.getElementById("da").classList.add("active");
    document.getElementById("nu").classList.remove("active");
  };

  const activateNu = () => {
    weekend = 0;
    document.getElementById("da").classList.remove("active");
    document.getElementById("nu").classList.add("active");
  };

  const history = useHistory();

  const submit = () => {
    ChangeTimeToDays();
    {
      /*
            globalTime = nr de zile
            learningMode = dimi/dupa
            difficultyLevel = easy/medium/hard
            weekend = 1/0
        */
    }
    if (!checkTime()) {
      history.push("/test");
    }
  };

  const back = () => {
    history.push("/");
  };

  function checkTime() {
    if (startTime() == 0) {
      alert("Ora de început nu poate să fie 0!");
      return true;
    }
    if (startTime() > 24) {
      alert("Ora de început nu poate să fie mai mare de 24!");
      return true;
    }
    if (startTime() < 0) {
      alert("Ora de început nu poate să fie mai mică de 0!");
      return true;
    }
    if (endTime() == 0) {
      alert("Ora de sfârșit nu poate să fie 0!");
      return true;
    }
    if (endTime() > 24) {
      alert("Ora de sfârșit nu poate să fie mai mare de 24!");
      return true;
    }
    if (endTime() < 0) {
      alert("Ora de sfârșit nu poate să fie mai mică de 0!");
      return true;
    }
    if (startTime() > endTime()) {
      alert("Ora de început nu poate să fie mai mare decât ora de sfârșit!");
      return true;
    }
    return false;
  }

  const startTime = () => {
    return document.getElementById("start").value;
  };

  const endTime = () => {
    return document.getElementById("end").value;
  };

  const timeInterval = () => {
    return startTime() - endTime();
  };

  const activateMulti1 = () => {
    if (
      document.getElementById("multiCollapse1").classList.contains("collapse")
    ) {
      document.getElementById("multiCollapse1").classList.remove("collapse");
      document.getElementById("multiCollapse2").classList.add("collapse");
      document.getElementById("multiCollapse3").classList.add("collapse");
    } else {
      document.getElementById("multiCollapse1").classList.add("collapse");
    }
  };

  const activateMulti2 = () => {
    if (
      document.getElementById("multiCollapse2").classList.contains("collapse")
    ) {
      document.getElementById("multiCollapse2").classList.remove("collapse");
      document.getElementById("multiCollapse1").classList.add("collapse");
      document.getElementById("multiCollapse3").classList.add("collapse");
    } else {
      document.getElementById("multiCollapse2").classList.add("collapse");
    }
  };

  const activateMulti3 = () => {
    if (
      document.getElementById("multiCollapse3").classList.contains("collapse")
    ) {
      document.getElementById("multiCollapse3").classList.remove("collapse");
      document.getElementById("multiCollapse1").classList.add("collapse");
      document.getElementById("multiCollapse2").classList.add("collapse");
    } else {
      document.getElementById("multiCollapse3").classList.add("collapsed");
    }
  };

  return (
    <div className="learn1">
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{ width: "34rem", height: "45rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">Setup</h5>
          <p className="card-text">
            Pentru a-ți genera calendarul de învățare, va trebui să ne oferi
            câteva informații.
          </p>
          <div
            className="card"
            style={{ width: "21rem", height: "7rem", marginTop: "1rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Cât timp ai la dispoziție?</h5>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="10"
                  aria-label="Time left for studying"
                  id="time-input-value"
                />
                <button
                  className="list-group-item btn btn-outline-primary"
                  type="button"
                  id="days"
                  onClick={activateDays}
                >
                  Zile
                </button>
                <button
                  className="list-group-item btn btn-outline-primary"
                  type="button"
                  id="weeks"
                  onClick={activateWeeks}
                >
                  Săptămâni
                </button>
                <button
                  className="list-group-item btn btn-outline-primary"
                  type="button"
                  id="months"
                  onClick={activateMonths}
                >
                  Luni
                </button>
              </div>
            </div>
            <div
              className="card position-absolute top-0"
              style={{
                width: "10rem",
                marginLeft: "22rem",
                marginTop: "",
                height: "22.93rem",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Materii</h5>
                <p className="card-text"></p>
                <div
                  className="list-group position-absolute top-50 start-50 translate-middle"
                  style={{ marginTop: "1rem" }}
                >
                  <button
                    type="button"
                    className="list-group-item list-group-item-action active"
                    id="mat1"
                  >
                    Lb. Română
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action active"
                    id="mat2"
                  >
                    Matematică
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    id="mat3"
                    onClick={activatemat3}
                  >
                    Informatică
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    id="mat4"
                    onClick={activatemat4}
                  >
                    Fizică<div className="badge text-bg-danger">WIP</div>
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    id="mat5"
                    onClick={activatemat5}
                  >
                    Biologie<div className="badge text-bg-danger">WIP</div>
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    id="mat6"
                    onClick={activatemat6}
                  >
                    Chimie<div className="badge text-bg-danger">WIP</div>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card position-absolute top-0"
              style={{
                width: "10rem",
                marginLeft: "22rem",
                marginTop: "23.93rem",
                height: "11.93rem",
              }}
            >
              <div className="card-body">
                <h6 className="card-title">Dorești să înveți în weekend?</h6>
                <p className="card-text"></p>
                <div className="list-group">
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    id="da"
                    onClick={activateDa}
                  >
                    Da
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    id="nu"
                    onClick={activateNu}
                  >
                    Nu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "21rem", height: "15rem", marginTop: "1rem" }}
          >
            <div className="card-body">
              <h6 className="card-title">
                Ce nivel de dedicație dorești să ai?
              </h6>
              <div
                class="btn-group translate-middle-x"
                role="group"
                style={{ marginLeft: "9rem", marginTop: "0.8rem" }}
              >
                <button
                  className="btn btn-outline-success"
                  type="button"
                  id="easy"
                  onClick={activateEasy}
                >
                  Ușor
                </button>
                <button
                  className="btn btn-outline-warning"
                  type="button"
                  id="medium"
                  onClick={activateMedium}
                >
                  Mediu
                </button>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  id="hard"
                  onClick={activateHard}
                >
                  Ridicat
                </button>
              </div>
              <font size={2}>
                <p style={{ marginTop: "0.5rem" }}>
                  <strong>Ce presupun nivelele de dedicație?</strong>
                </p>
                <p>
                  <strong>
                    Nivelul Ușor : între 5 și 7 sesiuni săptămânale.
                  </strong>
                </p>
                <p>
                  <strong>
                    Nivelul Mediu : între 7 și 9 sesiuni săptămânale.
                  </strong>
                </p>
                <p>
                  <strong>Nivelul Ridicat :s 10 sesiuni săptămânale.</strong>
                </p>
              </font>
            </div>
          </div>
          {/* TODO: sa se deschida doar una la orice moment ^ */}
          <div
            className="card"
            style={{ width: "21rem", height: "12rem", marginTop: "1rem" }}
          >
            <div className="card-body">
              <h4 className="card-title">Când ai ore la liceu?</h4>
              <br />
              <div class="input-group" style={{ marginTop: "0.8rem" }}>
                <span class="input-group-text">Ore</span>
                <input
                  type="number"
                  aria-label="Ora de început"
                  class="form-control"
                  placeholder="Început"
                  id="start"
                />
                <input
                  type="number"
                  aria-label="Ora de sfârșit"
                  class="form-control"
                  placeholder="Sfârșit"
                  id="end"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-warning btn-lg"
            id="toback"
            onClick={back}
          >
            Back
          </button>
          <button
            type="button"
            class="btn btn-danger btn-lg"
            id="resetbutton"
            onClick={resetButtons}
          >
            Reset
          </button>
          <button
            type="button"
            class="btn btn-success btn-lg"
            id="submit"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default {
  LearnSetup,
  returnvalues,
  LAPI,
};
