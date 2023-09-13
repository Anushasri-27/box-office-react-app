const ShowMainData = ({image,name,rating,genres ,summary}) =>{
    return(
        <div>
                <img height="200"  width="200" alt={name} src={image?image.original : '/imagePlaceHolder.png'} />
                <div>
                   <h1> name :{name}</h1>
                   <div> {rating.average || 'N/A'}   </div>
                   <div dangerouslySetInnerHTML={{__html:  summary}} />
                   <div> 
                        Genres:
                        <div>
                          {genres.map((genres) => <span key={genres}>{genres}</span> )}
                        </div>
                   </div>
                </div>
        
        </div>
    );
};

export default ShowMainData;