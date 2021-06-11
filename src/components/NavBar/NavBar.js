// we are going to make stateless components
import classes from './NavBar.module.css';//classes imported means bcz of module file

const NavBar = () =>{
    return(
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About Me</a>
                    </li>
                    <li>
                        <a href="/#skills">Skills</a>
                    </li>
                    <li>
                        <a href="/#extra">Extra Activities</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;