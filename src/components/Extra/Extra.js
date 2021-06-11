import classes from './Extra.module.css';
import PageHeader from './../PageHeader/PageHeader';

const Extra = () =>{
    return(
        <div className={classes.Container} id="extra">
            <PageHeader title={"My Co-curricular activities"}/><br/>
            <div className={classes.ExtraActivities}>
                <div className={classes.Paragraph}> 
                    <p>
                        Here is my extra co-curricular Activities which 
                        i have done during the college time.                        
                    </p>
                </div>
                <div className={classes.blocks}>
                        <div className={classes.block}>
                            <h2>CERTIFICATIONS</h2>
                            <p>
                                <ul>
                                    <li>Certification of web developement using Django in Python from MySirG.com</li>
                                    <li>Certification of Machine Learning with Python from cognitiveclasses.com.</li>
                                    <li>Certification of Python for Data Science from cognitiveclasses.com</li>                                
                                </ul>
                            </p>
                        </div>
                        <div className={classes.block}>
                            <h2>HONOR AND AWARDS</h2>
                            <p>
                                <ul>
                                    <li>Winner in HACKATHON State level event held on 14 st Feb 2020 at SKN SINHGAD
                                    COLLEGE OF ENGINEERING, Pandharpur.</li>
                                    <li>Winner in C Programming State level event held on 28th Jan 2020 at Dahiwadi
                                    College, Dahiwadi.</li>
                                    <li>Runner-up in Blind-C (Expert) &amp; Code Debugging State level event held on 15th Sept
                                    2019 at SVERI College, Pandharpur</li>                                                                    
                                </ul>
                            </p>
                        </div>                        
                        <div className={classes.block}>
                            <h2>INTERNSHIP</h2>
                            <p>
                                <ul>

                                    <li>Full Stack developement Intern at Newton School</li>
                                    <li>Spent 6months mastering algorithms, data structures
                                        and full-stack development while simultaneously developing projects
                                        with Nodejs, Expressjs, JavaScript, React, and Redux.
                                        Gained professional experience with industry best practices
                                        (Git Flow, pair programming, OOP).
                                        Mastered mainstream technologies in web development 
                                        ( React/Redux, Nodejs, JavaScript (ES6), SQL) by building 25+real-world projects.
                                    </li>                                                                    
                                </ul>
                            </p>
                        </div>                        
                    </div>                                    
            </div>            
        </div>
    );
}

export default Extra;