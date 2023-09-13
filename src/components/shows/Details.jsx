const Details = ({status,premiered,network}) =>{
    return(
        <div>
           <p>status:{status}</p>
           <p>
            premiered:{premiered} {network  ?`on ${network.name}`:null}
           </p>

        </div>
    )
};

export default Details;