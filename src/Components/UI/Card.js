import './Card.css';

function Card (props) {
// anything classname which coming from props that can be added dynamically to custim component
  const classes = 'card '+ props.className;
 return <div className={classes}>
  {props.children}
 </div>
}

export default Card; 