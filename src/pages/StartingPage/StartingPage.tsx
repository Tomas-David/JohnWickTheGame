import GameLink from "../../components/GameLink/GameLink";
import classes from "./StartingPage.module.css";
import img from "../../assets/rain.png";

const StartingPage = () => {
  return (
    <div className={classes.container} >
    <img src={img} alt="rain" className={classes.img}/>
    <img src={img} alt="rain" className={classes.img_delai}/>

    <div className={classes.background}>
    <h1 className={classes.heading}>John Wick The Game</h1>
    
    <GameLink title="Play" route="/Game"/>
    </div>
        
    </div>
  );
}

export default StartingPage;