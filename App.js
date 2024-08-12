//--------  to create a react elemnt ----------------
// const el = React.createElement("h1", {}, "Hello World using react");

// //need to create a root element to render the element
// const root = ReactDOM.createRoot(document.getElementById("demo"));

// //render the element
// root.render(el);



//--------  to create a nested react elemnt ----------------
const el = React.createElement("div", {}, 
            React.createElement("div", {}, 
                React.createElement("h1", {}, "Hello I am a nested element")));

const root = ReactDOM.createRoot(document.getElementById("demo")); 
root.render(el);               




//--------  to create a nested react elemnt ----------------
const el2 = React.createElement("div", {}, 
    React.createElement("div", {}, 
        [React.createElement("h1", {}, "Hello I am a nested element"),
         React.createElement("h2", {}, "Hello I am a sibling element")]));

const root1 = ReactDOM.createRoot(document.getElementById("demo1")); 
root.render(el2);               

