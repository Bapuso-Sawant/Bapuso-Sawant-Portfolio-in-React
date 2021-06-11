import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader';
import me from './../../img/myimg.JPG';
import myCV from './../../img/cv1.jpg';
const About = () =>{
    return(
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'}/>            
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! &nbsp; I'm Bapuso,</h2>
                    <p>
                        I am web developer.
                        I have experience in web development in Python and javascript.
                        I have completed my computer science degree from Solapur University.
                        I have done my 10th from S.B.V.Banali with 92.40% while 12th from S.R.V.M.College Jath with 78%.
                        I am doing intern at Newton School of full stack web development course.                        
                    </p><br/><br/>

                    <h3>Download My Resume From Here :</h3>
                    <a href="https://drive.google.com/file/d/1K414GgSzjOdNXGu398atjuHNbpXN9Lop/view?usp=sharing" title="Download My Resume" target="_blank">
                        <img src={myCV} alt="My CV"/>
                    </a>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="my picture"></img>
                </div>
            </div>
        </div>
    );
}
export default About;