// const Contact = () => {
//     return (
//         <div className="contact">
//             This is a contact page
//         </div>
//     )
// };

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/server';


const Contact = () => {

    const [todoList, setTodoList] = useState(null);
    //let newTodoItem = '';

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setTodoList(data));
    }, []);

    // async function fetchData() {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(data => setTodoList(data))
    // }

    const [newTodoItem, setNewTodoItem] = useState('');
    const [updateTodoItem, setupdateTodoItem] = useState('');

    myRef = React.createRef();

    return (
    <div>
        <div>Todo Application</div>

        <label>Add new title: </label>
        <input type="text" name="newTodoItem" value={newTodoItem}  onChange={(e) => {
              setNewTodoItem(e.target.value);
            }}/>
        <button onClick={(e)=> { console.log(newTodoItem);
          const obj = {
            "userId": todoList.length + 1,
            "id": todoList.length + 1,
            "title": newTodoItem,
            "completed": false
          }
            setTodoList([obj,...todoList])}
        }>Add</button>

        {/* <ul> */}
        
           { todoList?.map(item => {
                   return (
                    // <li key={item.id}>
                    //     {item?.title}
                    // </li>
                    <div key={item.id}>
                    <input id={item.id} type="text" value={item?.title} onChange={(e) => {
                        //let str = item?.title.replace(e.target.value);
                        item.title = e.target.value;
                        setupdateTodoItem(e.target.value);
                        console.log(updateTodoItem);
                     }
                    }
                    ></input>
                    <button onClick={(e) => {
                        console.log('clicked');
                        console.log(updateTodoItem);
                        //const newText = e.target.value;
                        //item.title = '';
                        //setupdateTodoItem(newText);
                        //console.log(item.title);
                        
                    }}>save</button>
                    <br />
                    </div>
                   ) 
                   
                })}
            
        {/* </ul> */}
    </div>
    )

};

export default Contact;