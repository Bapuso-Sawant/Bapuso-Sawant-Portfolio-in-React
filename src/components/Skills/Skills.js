import classes from './Skills.module.css';
import PageHeader from './../PageHeader/PageHeader';
import codeThinking from './../../img/code_thinking.svg';

const listTitleStyle = {fontWeight: 900, color: '#7594EE', marginBottom: '4px'}

const backendSkills = 
    <ul>
        <li style={ listTitleStyle }>BACKEND</li>
        <li>Python - SQL</li>
        <li>JavaScript - MongoDB</li>
    </ul>

const frontendSkills = 
<ul>
    <li style={ listTitleStyle }>FRONTEND</li>
    <li>ReactJS-HTML-CSS-Redux</li>    
</ul>

const Projects = 
<ul>
    <li style={ listTitleStyle }>PROJECTS</li>
    <li>In-Python-Javascript</li>    
</ul>

const languages = 
<ul>
    <li style={ listTitleStyle }>LANGUAGES</li>
    <li>JavaScript-Python-Java-C</li>    
</ul>

const webTechnologies = 
<ul>
    <li style={ listTitleStyle }>WEB TECHNOLOGIES</li>
    <li>M-E-R-N -- Python-Django</li>    
</ul>


const otherSkills = 
<ul>
    <li style={ listTitleStyle }>OTHER</li>
    <li>Git-Machine Learning Basics-OpenCV</li>    
</ul>

const totalSkills = [backendSkills,frontendSkills,Projects,
                    languages,webTechnologies,otherSkills]


const Skills = () =>{
    return(
        <div className={classes.Skills} id="skills">
            <PageHeader title={'What about the skills ?'}/>
            <p>
                I'm life long learner and enjoy learning new stuff !
                Below are some programming languages, tools, frameworks and libraries 
                that i worked with and like most. 
                Some of them I control better than the others.
            </p>
            <div className={classes.Container}>
                <img src={codeThinking} alt="CodeThinking"></img>
                {totalSkills.map(Skills => {
                    return(
                        <div className={classes.List}>
                            {Skills}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Skills;