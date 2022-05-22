import { useHistory } from "react-router-dom";

const Contact = () => {

    const history = useHistory();

    const backClick = () => {
        history.push('/');
    };
    
    return(
        <div className="contact">
            <button type ="button" className="btn btn-danger position-absolute start-50 translate-middle btn-lg" style={{position:"fixed", bottom:"80px"}} onClick={backClick}>Back</button>
            <font size={24}>
                    <h1 class="display-1 position-absolute top-50 start-50" style={{marginTop:"-20rem"}}>CONTACT</h1>
                </font>
            <card>
                <div className="card position-absolute top-50 start-50 translate-middle" style={{width:"30rem", height:"25rem",marginTop:"5rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Email</h5>
                            <p className="card-text">Stan Andrei: andrei.cristian.stan@lttvb.ro</p>
                            <p className="card-text">Toader Serban: serban.toader@lttvb.ro</p>
                        <h5 className="card-title">Discord</h5>
                            <p className="card-text">Stan Andrei: 𝔰𝔭𝔢𝔢𝔡𝔶#3305</p>
                            <p className="card-text">Toader Serban: Sbn06#4954</p>
                        <h5 className="card-title">GitHub</h5>
                            <p className="card-text">Stan Andrei: <a href="https://github.com/Andrei9383">Andrei9383</a></p>
                            <p className="card-text">Toader Serban: <a href="https://github.com/Sbn6">Sbn6</a></p>                        
                    </div>
                </div>
            </card>
        </div>
    );
}
export default Contact;