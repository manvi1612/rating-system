import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Star(props) {
  return (
  <FontAwesomeIcon
    icon={faStar} 
    className={props.selected? "star selected" : "star"}
    onClick={props.onSelect}/>
  );
}
export default Star;
