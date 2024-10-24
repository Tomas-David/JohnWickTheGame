import { Link } from "react-router-dom";
import classes from './GameLink.module.css';
type GameLinkProps = {
    title: string;   
    route: string;
}

const GameLink: React.FC<GameLinkProps> = ({title, route}) => {
  return <Link className={classes.link} to={route}>{title}</Link>
}

export default GameLink;