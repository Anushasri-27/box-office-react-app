import { Link } from 'react-router-dom';
const ActorCard = ({ name, image, gender, country, birthday ,deathday}) => {
  

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
       <h1>{name}</h1>
      
      <div>
         <p>{gender}</p>
         <p>{country}</p>
         
         <p>{birthday}</p>
         <p>{deathday}</p>
       
      </div>
      <br></br>
    </div>
  );
};

export default ActorCard;
