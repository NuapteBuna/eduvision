import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/learn-setup');
    };
    
    return (  
        <div className="home">

                <font size={48}>
                    <h1 class="display-1" id="titleedu" style={{userSelect:"none"}}>EDU&#10;VISION</h1>
                </font>
            <button type="button" class="btn btn-primary position-absolute start-50 translate-middle btn-lg" style={{position:"fixed", bottom:"80px"}} onClick={handleClick}>Learn</button>
        </div>
    );
}
 
export default Home;