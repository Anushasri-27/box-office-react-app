import { useParams } from "react-router-dom";

const Show = ()=>{
    const {ShowId} =useParams();
    console.log({ShowId});
    return(
      <div>
       show {ShowId}
      </div>
    )
}

export default Show;