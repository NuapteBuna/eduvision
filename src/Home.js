import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/learn-setup');
    };

    const handleClick2 = () => {
        history.push('/test');
    }
    
    return (  
        <div className="home">
            <div class="position-absolute top-50 start-50 translate-middle">
                <h1>Edu Vision</h1>
            </div>
            
            <button type="button" class="btn btn-primary position-absolute start-50 translate-middle btn-lg" style={{position:"fixed", bottom:"80px"}} onClick={handleClick}>Learn</button>
            <button type="button" class="btn btn-primary position-absolute start-50 translate-middle btn-lg" style={{bottom:"20px"}} onClick={handleClick2}>Shortcut to test</button>
        </div>
    );
}
 
export default Home;