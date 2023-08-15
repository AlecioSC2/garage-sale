
function Card({item}) {
    const {name, label, text} = item;
    return (
      <div className="card">
        <img src={`static/images/${name}.jpeg`}></img>
        <footer>
        <h3>{label}</h3>
        <p>{text}</p>
      </footer>
      </div>
    );
  }
  
  export default Card;