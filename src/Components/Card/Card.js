import React, { useState } from 'react'
import { Card, CardBody, CardTitle,CardText,CardLink } from 'reactstrap';
import EditTask from '../Modal/EditTask'
import './Card.css'
function CardItem(props) {
    const {Name,Description}= props.taskobj
    const {taskobj,updateListArray,index}= props
    console.log(index);
    const [modal,setModal]= useState(false)
    const toggle = ()=>{ setModal(!modal)}
   
    
    const updateTask = (obj)=>{
       updateListArray(obj,index);
       
    }
  return (
    
    <div className='cardItem'>
        <Card>
        <CardBody>
            <CardTitle tag="h5">
            {Name}
            </CardTitle>
        </CardBody>
        <CardBody>
            <CardText>
            {Description}
            </CardText>
        </CardBody>
        <CardBody className='cardFooter'>
            <CardLink href="#" onClick={()=> {setModal(true)}}>
            Edit
            </CardLink>
            <CardLink href="#" onClick={()=> props.handleDelete(index)}>
            remove
            </CardLink>
        </CardBody>
    </Card>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskobj={taskobj}/>
    </div>
  );
}

export default CardItem;