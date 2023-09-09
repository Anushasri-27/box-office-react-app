import {Link} from 'react-router-dom';
const ShowCard =({name, image, id ,summary}) =>{
    return(
      
        <div>
            <div>
            <img src={image} />  
            </div>
            <h1>{name}</h1> 
            <p>summary</p>
            <div>
               <Link to="/">read more</Link>

               <button type="button">star me</button>
             
            </div>
            <br></br>
        </div>
        


    );
};

export default ShowCard;