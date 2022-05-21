const LearnSetup = () => {

    var currentclass = 0;

    const activate9 = () => {
        currentclass = 9;
        document.getElementById('9').classList.add('active');
        document.getElementById('10').classList.remove('active');
        document.getElementById('11').classList.remove('active');
        document.getElementById('12').classList.remove('active');
    }
    const activate10 = () => {
        currentclass = 10;
        document.getElementById('9').classList.remove('active');
        document.getElementById('10').classList.add('active');
        document.getElementById('11').classList.remove('active');
        document.getElementById('12').classList.remove('active');
    }
    const activate11 = () => {
        currentclass = 11;
        document.getElementById('9').classList.remove('active');
        document.getElementById('10').classList.remove('active');
        document.getElementById('11').classList.add('active');
        document.getElementById('12').classList.remove('active');
    }
    const activate12 = () => {
        currentclass = 12;
        document.getElementById('9').classList.remove('active');
        document.getElementById('10').classList.remove('active');
        document.getElementById('11').classList.remove('active');
        document.getElementById('12').classList.add('active');
    }

    return (  
        <div className="learn1">

            <div className="card position-absolute top-50 start-50 translate-middle" style={{width:"36rem", height:"36rem"}}>
                <div className="card-body">
                <h5 className="card-title">Setup</h5>
                <p className="card-text">Pentru a-ti genera calendarul de invatare, va trebui sa ne oferi cateva informatii.</p>
                    <div className="card" style={{width: "10rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Clasa</h5>
                        <p className="card-text"></p>
                        <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action" onClick={activate9} id="9">9</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={activate10} id="10">10</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={activate11} id="11">11</button>
                        <button type="button" className="list-group-item list-group-item-action" onClick={activate12} id="12">12</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LearnSetup;