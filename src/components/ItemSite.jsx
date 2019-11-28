import React from 'react';
import '../assets/styles/components/ItemSite.scss'; 


const ItemSite = (props) => {
  const {
    id, cat, nameSite, description, rating, type, comments, address, city, country, socialMedia, images, source, isList, lat, lng,
  } = props;

  console.log(`===============> ${id}`);
  return (
    <section className="item">
      <div className="card">
        <img src={images} alt="" />
        <h4>Nombre: {nameSite}</h4>
        <p>Descipción: {description}</p>
        <p>Puntaje: {rating}</p>
        <p>Categoria: {type}</p>
        <p>Dirección: {address}</p>
        <p>Ciudad: {city}</p>
        <p>Pais: {country}</p>
        <p>Comentarios: {comments}</p>
        
      </div>
    </section>
  );
};

export default ItemSite;
