import { useState, useEffect } from "react";

const useUserData = (id) => {
    
    useEffect(() => { fetchData() },[]);
    const [userData, setUserData] = useState(null);

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
        const json = await data.json();
        setUserData(json);
    }

    return userData;
};



export default useUserData;