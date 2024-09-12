import { useContext, useState, useContext, createContext } from "react";

const Solutions = () => {

//     const [todoList, setTodoList] = useState([
//         { id: 1, title: "Issue 1" , severity: "High" },
//         { id: 2, title: "Issue 5" , severity: "Low" }
//     ]);

//     const [inProgressList, setInProgressList] = useState([
//         { id: 1, title: "Issue 4" , severity: "Low" },
//         { id: 2, title: "Issue 2" , severity: "Low" }
//     ])
// ;

//     const [doneList, setDoneList] = useState([
//         {
//             id: 1, title: "Issue 3", severity: "Medium"
//         }
//     ]);

    const todoList = useContext(listContext).todoList;
    const inProgressList = useContext(listContext).inProgressList;
    const doneList = useContext(listContext).doneList;

    return (
        <listContext.Provider value={{ todoList: todoList, inProgressList: inProgressList, doneList:doneList }}>
        <>
            <div>Marketing Compaign Project</div>
            <div className="flex gap-10 py-10">
                <SolutionsCard title={"To do"} list={'todoList'} />
                <SolutionsCard title={"In Progress"} list={'inProgressList'} />
                <SolutionsCard title={"Done"} list={'doneList'} />
            </div>
        </>
        </listContext.Provider>
    )
}

export const SolutionsCard = (props) => {
    const [isAddTask, setIsAddTask] = useState(false);
   
    const [todoList, setTodoList] = useState(useContext(listContext).todoList);
    const [inProgressList, setInProgressList] = useState(useContext(listContext).inProgressList);
    const [doneList, setDoneList] = useState(useContext(listContext).doneList);

   const list = props.list === 'todoList' ? todoList : props.list === 'inProgressList' ? inProgressList : doneList;

    const [taskTitle, setTaskTitle] = useState("");

    return (
        <div className="[w-200px] [h-300px] block bg-gray-300 border-cyan-800 p-10">
             <div>{props.title}</div>
             
            {
                list.map(item => (
                    <div className="bg-gray-400 p-5 m-5" key={item.id}> 
                        <div>{item.title}</div>
                        <div>{item.severity}</div>
                    </div>
                ))
            }

            <button className="bg-white" onClick={() => {
                console.log(isAddTask);
                setIsAddTask(true);
                console.log(isAddTask , "Add Task");
            }}>Add Task</button>
            

            { isAddTask && <div className="bg-gray-400 p-5 m-5">
                <input type="text" placeholder="Enter Task: "  value= {taskTitle}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setTaskTitle(e.target.value); 
                        console.log(taskTitle)}} />
                {/* <input type="text" placeholder="Enter severity: " /> */}
                <button onClick={(e) => {
                    const newTask = { id: list.length + 1, title: taskTitle, severity: "Low" };
                    console.log(newTask);
                    setTodoList([...todoList, newTask]);
                    setIsAddTask(false);
                    console.log("Task Added");
                }}>Add Task</button>
            </div> }

            
            

        </div>
    )
}

const listContext = createContext({
    todoList: [
        { id: 1, title: "Issue 1" , severity: "High" },
        { id: 2, title: "Issue 5" , severity: "Low" }
    ],
    inProgressList: [
        { id: 1, title: "Issue 4" , severity: "Low" },
        { id: 2, title: "Issue 2" , severity: "Low" }
    ],
    doneList: [ { id: 1, title: "Issue 3", severity: "Medium" } ]   
});


export default Solutions;