function CardPizza({ name, price, ingredients, img }) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p><strong>${price.toLocaleString("es-CL")}</strong></p>
          <p>Ingredientes: {ingredients.join(", ")}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Ver más 👀</button>
            <button className="btn btn-success">Añadir 🛒</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardPizza;
  