import classes from './Home.module.css';
import code from './../../img/code.png';
import nav_img from './../../img/navigation_img.jpg'
const Home = () =>{
    return(
        <div className={classes.Home} id="home">
            <div className={classes.Container}>                
                <h2><h1>Hello,</h1> Welcome on my website !</h2>
                <img className={classes.code} src={code} alt="code"></img>
                <img className={classes.nav_img} src={nav_img} alt="navigation img"></img>                
                
            </div>
        </div>
    );
}
export default Home;
