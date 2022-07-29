import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal,toggle,taskobj,updateTask}) {
    const [taskName,setTaskName] = useState('')
    const [descName,setDescName] = useState('')
    const handleChange = (e)=>{
        const {name,value} = e.target;
        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescName(value)
        }
    }
    const handleUpdate =(e)=>{
      e.preventDefault();
        let temObj = {};
        temObj["Name"] = taskName;
        temObj["Description"] = descName; 
        updateTask(temObj)
    }
    useEffect(()=>{
     setTaskName(taskobj.Name);
     setDescName(taskobj.Description);
    }, [])
   
  return (
    <div>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Update Task</ModalHeader>
          <ModalBody>
            <form>
            <div className='form-group mb-3'>
              <label htmlFor="" className='mb-2'>Title</label>
              <input type="text" className='form-control' name="taskName" onChange={handleChange} value={taskName}/>
            </div>
            <div className='form-group'>
            <label htmlFor="" className='mb-2'>Description</label>
              <textarea rows="5" type="textarea" className='form-control' name="descName" value={descName} onChange={handleChange}></textarea>
            </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e)=>{handleUpdate(e)}}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
      </Modal>
    </div>
  )
}

export default CreateTask;