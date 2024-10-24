import GameLink from "../../components/GameLink/GameLink";
import classes from "./StartingPage.module.css";


const StartingPage = () => {
  return (
    <div className={classes.container} >
    <div className={classes.background}>
    <h1 className={classes.heading}>John Wick The Game</h1>
    <GameLink title="Play" route="/Game"/>
    </div>
        
    </div>
  );
}

export default StartingPage;