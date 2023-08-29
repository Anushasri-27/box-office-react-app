export default function AppTitle( props){

    //setting default valu for props
    const{
         title="BOX OFFICE",
         subtitle="Looking for a movie or an actor?"  ,
    } =props;

    return(
       
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>



    )
};