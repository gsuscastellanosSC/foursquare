import React from 'react';


const ItemSite = (props) => {
  const {
    id, cat, nameSite, description, rating, type, comments, address, city, country, socialMedia, images, source, isList, lat, lng,
  } = props;
  return (
    <section>
      <h3>{cat.id}</h3>
      <h5>{nameSite}</h5>
      <img src={images} alt="" />
      <br />
    </section>
  );
};

export default ItemSite;
