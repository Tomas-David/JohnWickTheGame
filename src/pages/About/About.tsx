import classes from './About.module.css';


const About = () => {
  return (
    <div>
        <div className={classes.background} >
          <h2>About Idea</h2>
          <p>Chtěl jsem udělat fanmade hru na téma Johna Wicka.The original idea was to make a game based on the scene in episode 4 where he trys to get to the cathedral for the final duel. But the timing didn't work out. So I took the scene from the first episode where he goes to get his car. For the first time I tried to go through a project in unity from start to finish. This attempt didn't go so well, the bridle is quite buggy but I did the best I could.</p>

          <h2>Gameplay</h2>
          <p>Movemant: WSAD</p>
          <p>Shooting: Left mouse</p>
          <p>Reload: R</p>
          <video className={classes.video} controls>
          <source src="src\assets\ANJ_PROJEKT.mov"/>
        </video>
        </div>
        
    </div>
    
  );
}

export default About;