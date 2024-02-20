import "./DistanceCards.css";

export default function DistanceCards(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={props.imgLink} />
      <p>{props.itemName}</p>
      <p>{props.itemDuration}</p>
      <p>{props.itemCost}</p>
      <button
        className="more-info-button"
        onClick={() => props.buttonClick({ props })}
      >
        Click here for more info
      </button>
    </div>
  );
}
