const About = () => {
    return (  
        <div className="about">
            <font size={24}>
                <h1 class="display-1 position-absolute top-0 start-50" style={{marginTop:"5rem"}}>About</h1>
            </font>
            <card>
                <div className="card position-absolute top-50 start-50 translate-middle" style={{width:"40rem", height:"25rem",marginTop:"5rem"}}>
                    <div className="card-body">
                        <p>Proiectul nostru constă într-o aplicație web destinată elevilor de clasa a XII-a ce au examenul vieții în față, Bacalaureatul.</p>
                        <p>Acesta îi testează pe elevi și utilizează rezultatele pentru a crea un program de învățare.</p>
                        <br/>
                        <p>Proiect realizat în cadrul concursului "InfoEducație 2022"</p>
                        <br/>
                        <p>Acest proiect a fost realizat de către: </p>
                        <strong><p>Andrei Stan și Serban Toader</p></strong>
                        <b><p>Liceul Teoretic "Tudor Vladimirescu"</p></b>
                    </div>
                </div>
            </card>
        </div>
    );
}
 
export default About;