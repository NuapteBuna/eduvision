import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/learn-setup');
    };
    
    return (  
        <div className="home">
            <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/NuapteBuna/eduvision" target={"_blank"}>GitHub</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
            </li>
            </ul>
                <font size={24}>
                    <h1 class="display-1">EDU&#10;VISION</h1>
                </font>
            <button type="button" class="btn btn-primary position-absolute start-50 translate-middle btn-lg" style={{position:"fixed", bottom:"80px"}} onClick={handleClick}>Learn</button>
        </div>
    );
}
 
export default Home;