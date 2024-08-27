import React from 'react'

const styleUserCard = {  margin: 'unset' };


const User = (props) => {

   const [count, setCount] = React.useState(0);
   const [count2, setCount2] = React.useState(2);
   return (
    <div className="user-card">
        <h3>Count(functional): {count}</h3>
        <h3>Count2(functional): {count2}</h3>
        <p style={ styleUserCard }><b>Name:</b> {props.name}</p>
        <p style={ styleUserCard }><b>Location:</b> Mumbai</p>
        <p style={ styleUserCard }>Juliana is a software developer with 5 years of experience. She has worked with a variety of programming languages and frameworks. In her free time, she enjoys reading, cooking, and traveling.</p>
    </div>
   ) 
}

export default User;