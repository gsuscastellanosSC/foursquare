import React from 'react';
import '../assets/styles/components/ItemSite.scss'; 


const ItemSite = (props) => {
  const {
    id, cat, nameSite, description, rating, type, comments, address, city, country, socialMedia, images, source, isList, lat, lng,
  } = props;
  return (
    <section className="item">
      <div className="card">
        <img src={images} alt="" />
        <h4>{nameSite}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ItemSite;
