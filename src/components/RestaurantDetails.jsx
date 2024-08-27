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




    return (
        
        <div>
            <h1>Restaurant Details</h1>
            <h4>User Id: {userData?.userId}</h4>
            <h4>User Title: {userData?.title}</h4>
            <h4>User Body: {userData?.body}</h4>
        </div>
    )
};

export default RestaurantDetails;