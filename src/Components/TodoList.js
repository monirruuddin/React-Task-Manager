import React, { useEffect, useState } from 'react'
import CardItem from './Card/Card';
import CreateTask from './Modal/CreateTask';
import './Card/Card.css'

function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const toggle = () => setModal(!modal);

    useEffect(()=>{
        let arr = localStorage.getItem("tempTask")
        if(arr){
          let obj = JSON.parse(arr)
          setTaskList(obj)
        }
    },[])

    const handleDelete = (index)=>{
      let templist = taskList;
      templist.splice(index, 1)
      localStorage.setItem("tempTask",JSON.stringify(templist))
      setTaskList(templist)
      window.location.reload();
    }
  
    const saveTask= (taskObj)=>{
        let tempTask = taskList;
        tempTask.push(taskObj);
        localStorage.setItem("tempTask",JSON.stringify(tempTask))
        setTaskList(tempTask)
        setModal(false)
    }
    const updateListArray=(obj,index)=>{
        let tempList =taskList;
        tempList[index]= obj;
        // --------------------------
        setTaskList(tempList) 
        localStorage.setItem("tempTask",JSON.stringify(tempList))
        window.location.reload();
        
    }
  return (
    <div>
        <div className='text-center pt-5 mb-5'>
          <h4 className='mb-3'> Task App</h4>
          <button className='btn btn-primary' onClick={()=>{setModal(true)}}>Create Task</button>
          <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
        </div>
        <div>
          <div className='container'>
            <div className='allCard justify-content-center' style={{display:"flex"}}>
              {taskList && taskList.map((obj,index)=> <CardItem taskobj={obj} handleDelete={handleDelete}  index={index} key ={index} updateListArray={updateListArray}/>)}
            </div>
        </div> 
        </div> 
    </div>
   

  )
}

export default TodoList;