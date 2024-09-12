import { CDN_URL } from "../utils/constants";   

const styleResCard = {  backgroundColor: '#d3d3d3' };

const RestaurantCardComponent = (props) => {
    //console.log(props);
    //const {resData} = props;
    // const { resName, cuisine, ratings, waitTime } = props.resData;
    const { title, body, ratings } = props.resData;
    return (
        <div className="m-4 p-4 w-[220px] bg-gray-100 hover:bg-green-200 border-gray-200">
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


//----higher order components--------------

//---input - RestaurantCard output - RestaurantCardPromoted

export const withPromotion = (RestaurantCardComponent) => {
    return (props) => {            
        return (
            <>
                <label className="absolute bg-black text-white p-1 m-1 rounded-lg">Promoted</label>
                <RestaurantCardComponent {...props} />
            </>
        )
    }
    
}





export default RestaurantCardComponent;