import {ReactComponent as Logo} from './logo2.svg';
const Navbar = () => {
    return (  
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
    );
}
 
export default Navbar;