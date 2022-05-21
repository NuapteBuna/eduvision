import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/learn-setup');
    };

    return (  
        <div className="home">
            <div class="position-absolute top-50 start-50 translate-middle">
                <h1>Edu Vision</h1>
            </div>
            
            <button type="button" class="btn btn-primary position-absolute start-50 translate-middle btn-lg" style={{position:"fixed", bottom:"80px"}} onClick={handleClick}>Learn</button>
        </div>
    );
}
 
export default Home;