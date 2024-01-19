import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';

function TaskForm(props) {
  
  const init={
    title:"",
    description:"",
    duedate:"",
    
  }

  const {isUpdate,data,onCancle,isPopup,btn} = props;
  const {createTask,updateTask}=useContext(TaskContext);
   const{message,setMessage,user}=useContext(AuthContext);
   const [formData,setFormData]=useState(init);



    useEffect(()=>{
        setMessage("");
    },[])

    useEffect(()=>{
      if(isUpdate){
        setFormData(data);
      }else{
        setFormData(init);
      }
    },[isUpdate,data])




const submitCancle=(e)=>{
  e.preventDefault();
  if(isPopup){
    btn.current.click();
  }else{
    onCancle();
  }
}



// This method is use in every from 
// 1st is get value from user
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
            userid:user.id,
            modifiedon: Date()
        }))
    }



    const submitForm=(e)=>{
        e.preventDefault();
        createTask(formData);
        setFormData(init);
      }

      const submitUpdate=(e)=>{
         e.preventDefault();
         updateTask(formData);
      }

    return (
        <div className='p-3 w-50'>
            <h2 className='fs-3 text-white'>{isUpdate?"Update Task":"Create Task"}</h2>
            <div className='card p-3'>
            <form>
          <div className='mb-3'>
            <label htmlFor="title">Title</label>
            <input type='text' name='title' id='title' value={formData?.title} className='form-control' onChange={handleChange}/>
          </div>

          <div className='mb-3'>
            <label htmlFor="description">Description</label>
            <textarea type='text' name='description' id='title' className='form-control'  onChange={handleChange} value={formData?.description}></textarea>
          </div>

          <div className='mb-3'>
            <label htmlFor="duedate">Date & Time</label>
            <input type='datetime-local' name='duedate' id='duedate' className='form-control' onChange={handleChange} value={formData?.duedate}/>
          </div>
          <p>{message}</p>
          {
            isUpdate ? <>
            <button className='btn btn-primary me-2' onClick={submitUpdate}>Update Task</button>
            <button className='btn btn-warning' onClick={submitCancle}>Cancel</button>
            </> :
          <button className='btn btn-primary' onClick={submitForm}>Create Task</button>
          }
            </form>
            </div>
        </div>
    );
}
export default TaskForm;