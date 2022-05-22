import { useHistory } from "react-router-dom";

var currentobjects = 2, timeValue, globalTime = 0, difficultyLevel ="", learningMode="", weekend=0;

function returnvalues() {
    return [currentobjects, globalTime, learningMode, difficultyLevel, weekend];
}

const LearnSetup = () => {

    //var currentobjects = 2, timeValue, globalTime = 0, difficultyLevel ="", learningMode="", weekend=0;

    const saveData = () => {

    }

    const disableAllBut = (mat) => {
        document.getElementById('mat3').disabled = true;
        document.getElementById('mat4').disabled = true;
        document.getElementById('mat5').disabled = true;
        document.getElementById('mat6').disabled = true;
        document.getElementById('mat' + mat).disabled = false;
    }
 
    const enableAll= () => {
        document.getElementById('mat3').disabled = false;
        document.getElementById('mat4').disabled = false;
        document.getElementById('mat5').disabled = false;
        document.getElementById('mat6').disabled = false;
    }

    const activatemat3 = () => {      
        if(document.getElementById('mat3').classList.contains('active')){
            document.getElementById('mat3').classList.remove('active');
            currentobjects--;
        }
        else{
            document.getElementById('mat3').classList.add('active');
            currentobjects++;
        }
        if(currentobjects >= 3)
            disableAllBut(3);
        else
            enableAll();
    }

    const activatemat4 = () => {
        if(document.getElementById('mat4').classList.contains('active')){
            document.getElementById('mat4').classList.remove('active');
            currentobjects--;
        }
        else{
            document.getElementById('mat4').classList.add('active');
            currentobjects++;
        }        
        if(currentobjects >= 3) 
            disableAllBut(4);
        else 
            enableAll();
    }

    const activatemat5 = () => {
        if(document.getElementById('mat5').classList.contains('active')){
            document.getElementById('mat5').classList.remove('active');
            currentobjects--;
        }
        else{
            document.getElementById('mat5').classList.add('active');
            currentobjects++;
        }
        if(currentobjects >= 3)
            disableAllBut(5);
        else
            enableAll();
    }

    const activatemat6 = () => {
        if(document.getElementById('mat6').classList.contains('active')){
            document.getElementById('mat6').classList.remove('active');
            currentobjects--;
        }
        else{
            document.getElementById('mat6').classList.add('active');
            currentobjects++;
        }
        if(currentobjects >= 3)
            disableAllBut(6);
        else
            enableAll();
    }

    const activateDays = () => {
        if(document.getElementById('days').classList.contains('active')){
            document.getElementById('days').classList.remove('active');
            timeValue = "";
        }
        else{
            timeValue = "zile";
            document.getElementById('days').classList.add('active');
            document.getElementById('weeks').classList.remove('active');
            document.getElementById('months').classList.remove('active');
        }
    }

    const activateWeeks = () => {
        if(document.getElementById('weeks').classList.contains('active')){
            document.getElementById('weeks').classList.remove('active');
            timeValue = "";
        }
        else{
            timeValue = "săptămâni";
            document.getElementById('days').classList.remove('active');
            document.getElementById('weeks').classList.add('active');
            document.getElementById('months').classList.remove('active');
        }
    }

    const activateMonths = () => {
        if(document.getElementById('months').classList.contains('active')){
            document.getElementById('months').classList.remove('active');
            timeValue = "";
        }
        else{
            timeValue = "luni";
            document.getElementById('days').classList.remove('active');
            document.getElementById('weeks').classList.remove('active');
            document.getElementById('months').classList.add('active');
        }
    }

    const RememberTime = () =>
    {
        var time = document.getElementById('time-input-value').value;
        return time;
    }

    function ChangeTimeToDays () 
    {
        var time = RememberTime();
        if(timeValue == "zile")
            globalTime = time;
        if(timeValue == "săptămâni")
            globalTime = time * 7;
        if(timeValue == "luni")
            globalTime = time * 30;
    }

    const activateEasy = () => {
        difficultyLevel = "easy";
        document.getElementById('easy').classList.add('active');
        document.getElementById('medium').classList.remove('active');
        document.getElementById('hard').classList.remove('active');
    }

    const activateMedium = () => {
        difficultyLevel = "medium";
        document.getElementById('easy').classList.remove('active');
        document.getElementById('medium').classList.add('active');
        document.getElementById('hard').classList.remove('active');
    }

    const activateHard = () => {
        difficultyLevel = "hard";
        document.getElementById('easy').classList.remove('active');
        document.getElementById('medium').classList.remove('active');
        document.getElementById('hard').classList.add('active');
    }

    const activateDa = () => {
        weekend = 1;
        document.getElementById("da").classList.add("active");
        document.getElementById("nu").classList.remove("active");
    }

    const activateNu = () => {
        weekend = 0;
        document.getElementById("da").classList.remove("active");
        document.getElementById("nu").classList.add("active");
    }
    

    const history = useHistory();

    const submit = () => {
        ChangeTimeToDays();
        {/*
            globalTime = nr de zile
            learningMode = dimi/dupa
            difficultyLevel = easy/medium/hard
            weekend = 1/0
        */}
        alert("Nr de obiecte: " + currentobjects + "\n" + "Nr de zile: " + globalTime + "\n" + "Mod de invatare: " + learningMode + "\n" + "Nivel de dificultate: " + difficultyLevel + "\n" + "Weekend: " + weekend);
        history.push("/test");
    }



    return (  
        <div className="learn1">

            <div className="card position-absolute top-50 start-50 translate-middle" style={{width:"34rem", height:"45rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Setup</h5>
                    <p className="card-text">Pentru a-ți genera calendarul de învățare, va trebui să ne oferi câteva informații.</p>
                        <div className = "card" style={{width:"21rem", height:"7rem", marginTop:"1rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Cât timp ai la dispoziție?</h5>
                                <div class="input-group">
                                    <input type="number" class="form-control" placeholder="10" aria-label="Time left for studying" id="time-input-value"/>
                                    <button className ="list-group-item btn btn-outline-primary" type="button" id = "days" onClick = {activateDays}>Zile</button>
                                    <button className ="list-group-item btn btn-outline-primary" type="button" id = "weeks" onClick = {activateWeeks}>Săptămâni</button>
                                    <button className ="list-group-item btn btn-outline-primary" type="button" id = "months" onClick = {activateMonths}>Luni</button>
                                </div>
                            </div> 
                            <div className="card position-absolute top-0" style={{width:"10rem", marginLeft:"22rem", marginTop:"", height:"22.93rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Materii</h5>
                                    <p className="card-text"></p>
                                    <div className="list-group position-absolute top-50 start-50 translate-middle" style={{marginTop:"1rem"}}>
                                        <button type="button" className="list-group-item list-group-item-action active" id="mat1">Lb. Română</button>
                                        <button type="button" className="list-group-item list-group-item-action active" id="mat2">Matematică</button>
                                        <button type="button" className="list-group-item list-group-item-action" id="mat3" onClick={activatemat3}>Informatică</button>
                                        <button type="button" className="list-group-item list-group-item-action" id="mat4" onClick={activatemat4}>Fizică</button>
                                        <button type="button" className="list-group-item list-group-item-action" id="mat5" onClick={activatemat5}>Biologie</button>
                                        <button type="button" className="list-group-item list-group-item-action" id="mat6" onClick={activatemat6}>Chimie</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card position-absolute top-0" style={{width:"10rem", marginLeft:"22rem", marginTop:"23.93rem", height:"11.93rem"}}>
                                <div className="card-body">
                                    <h6 className="card-title">Dorești să înveți în weekend?</h6>
                                    <p className="card-text"></p>
                                    <div className="list-group">
                                        <button type="button" className="list-group-item list-group-item-action" id="da" onClick={activateDa}>Da</button>
                                        <button type="button" className="list-group-item list-group-item-action" id="nu" onClick={activateNu}>Nu</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className = "card" style={{width:"21rem", height:"15rem", marginTop:"1rem",}}>
                            <div className="card-body">
                                <h6 className="card-title">Ce nivel de dedicație dorești să ai?</h6>
                                <div class="btn-group translate-middle-x" role="group" style={{marginLeft:"9rem",marginTop:"0.8rem"}} >
                                    <button className ="btn btn-outline-success" type="button" id = "easy" onClick = {activateEasy} >Ușor</button>
                                    <button className ="btn btn-outline-warning" type="button" id = "medium" onClick={activateMedium}>Mediu</button>
                                    <button className ="btn btn-outline-danger" type="button" id = "hard" onClick={activateHard}>Ridicat</button>
                                </div>
                                <br/><br/>
                                <p class="easymean">Ușor -&gt; 5-7 ore / săptămână</p>
                                <p class="mediummean">Mediu -&gt; 7-9 ore / săptămână</p>
                                <p class="hardmean">Ridicat -&gt; 10 ore / săptămână</p>
                            </div>
                        </div>
                        <div className = "card" style={{width:"21rem", height:"12rem", marginTop:"1rem",}}>
                            <div className="card-body">
                                <h6 className="card-title">Când ai ore la liceu?</h6>
                                <div class="input-group" style={{marginLeft:"2rem",marginTop:"0.8rem"}}>
                                    <span class="input-group-text">Orele de început și sfârșit</span>
                                    <input type="text" aria-label="Ora de început" class="form-control"/>
                                    <input type="text" aria-label="Ora de sfârșit" class="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "button" style={{marginTop:"0.85rem"}}>
                        <button type ="button" className ="btn btn-success btn-lg" id ="submit" onClick={submit}>Submit</button>
                    </div>     
                </div>
            </div>
    </div>
    );
}

export default {
    LearnSetup,
    returnvalues
};