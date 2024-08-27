import { CDN_URL } from "../utils/constants";   

const styleResCard = {  backgroundColor: '#d3d3d3' };

const RestaurantCardComponent = (props) => {
    //console.log(props);
    //const {resData} = props;
    // const { resName, cuisine, ratings, waitTime } = props.resData;
    const { title, body, ratings } = props.resData;
    return (
        <div className="restaurant-card" style={styleResCard}>
            <img alt="biryani" className="cust-image"
            src={CDN_URL}></img>
        
            {/* <div className="name">{ resName }</div>
            <div>{ cuisine }</div>
            <div>{ ratings }</div>
            <div>{ waitTime }</div> */}

            <div className="name">{ title }</div>
            <div>{ body }</div>
            <div>{ ratings }</div>
         </div>
    )
};

export default RestaurantCardComponent;