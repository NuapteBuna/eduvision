import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { render } from "@testing-library/react";

import {useState} from 'react';

const Test = () => {

    var currAns;

    function test(intrebare, raspuns, materie, capitol, input, raspunsuri = []){
        this.intrebare = intrebare;
        this.raspuns = raspuns;
        this.materie = materie;
        this.capitol = capitol;
        this.input = input;
        this.raspunsuri = raspunsuri;
    }

    var intrebari = [new test("Ce este un obiect?", "1", "Informatica", "1", "", ["a", "b", "c", "d"]), new test("Ce este un numar?", "2", "Matematica", "3", "", ["a", "b", "c", "d"]), new test("Ce sunt datele?", "4", "Informatica", "3", "", ["a", "b", "c", "d"]) ];

    var materii = [];
    var capitole = [];

    var gresite = 0;

    const activateButton = (id) => {
        document.getElementById(id).classList.add('active');
        currAns = id;
        for(var i = 1; i<=4; i++){
            if(i != id)
                document.getElementById(i).classList.remove('active');
        }
    }

    const frecventaMat = new Array(10).fill(0);

    const [counter, setCounter] = useState(0);

    const submit = () => {
        if(currAns == intrebari[counter].raspuns){
            console.log("CORECT");
        }
        else{
            materii[gresite] = intrebari[counter].materie;
            capitole[gresite++] = intrebari[counter].capitol; 
            frecventaMat[materii[gresite-1]] = frecventaMat[materii[gresite-1]] ? frecventaMat[materii[gresite-1]] + 1 : 1;
            console.log("Frecventa la " + materii[gresite-1] + " este " + frecventaMat[materii[gresite-1]]);
        }
        setCounter(count=>count+1);
    }
    
    var globalId = 0;

    function renderQuestion(id){ 
        return (
            <p className="card-text">
                <font size={6}>
                    {intrebari[id].intrebare}
                </font>
                    <div class="list-group">
                        <button type="button" className="list-group-item list-group-item-action" id="1" onClick={() => {activateButton(1)}}>{intrebari[id].raspunsuri[0]}</button>
                        <button type="button" className="list-group-item list-group-item-action" id="2" onClick={() => {activateButton(2)}}>{intrebari[id].raspunsuri[1]}</button>
                        <button type="button" className="list-group-item list-group-item-action" id="3" onClick={() => {activateButton(3)}}>{intrebari[id].raspunsuri[2]}</button>
                        <button type="button" className="list-group-item list-group-item-action" id="4" onClick={() => {activateButton(4)}}>{intrebari[id].raspunsuri[3]}</button>
                    </div>
            </p>
        );
    }
    
    var test2 = 0;

    const returnWord = (length) => {
        if(length == 1)
            return length + " intrebare";
        else 
            return length + " intrebari";
    }

    return ( 
        <div className="test">
            <h1>Test</h1>
            <div className="romana">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card" style={{width:"40rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{intrebari[counter].materie}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        {returnWord(intrebari.filter(x => x.materie == intrebari[counter].materie).length)} 
                                    </h6>
                                    {renderQuestion(counter)}
                                    <button type="button" className="btn btn-success" onClick={submit}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Test;