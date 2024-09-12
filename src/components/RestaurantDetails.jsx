import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useUserData from "../utils/useUserData";


const RestaurantDetails = () => {

    const { id } = useParams();


    // ----------This is by using useState and useEffect ---------

    //const [userData, setUserData] = useState(null);
    
    //useEffect(() => { fetchUser() },[]);

    // const fetchUser = async() => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //     const data = await response.json();
    //     console.log(data);
    //     setUserData(data);
    // }


    //-------------By using custom hook useUserData-------------

    const userData = useUserData(id);

    const [expand, setExpand] = useState(false);



    return (
        
        <div className=" border w-[600px] gap-4 p-6 bg-red-100">
            <div className="flex justify-between">
                <div className="gap-4">
                    <h1 className="font-bold text-lg">Restaurant Details</h1>
                    <h4>User Id: {userData?.userId}</h4>
                    <h4>User Title: {userData?.title}</h4>
                </div>
                <div onClick={() => {
                    setExpand(!expand);
                }}>{ !expand ? "+" : "-" }</div>
            </div>
            { expand && <div>
                <hr />
               <h4>User Body: {userData?.body}</h4> 
            </div> }
            
        </div>
    )
};

export default RestaurantDetails;