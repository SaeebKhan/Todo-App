import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { dateFormat, tabTitle } from '../helper';
import { Link } from 'react-router-dom';



function CreateTask(props) {
tabTitle("Create Tasks-Page");


  const{latestTask,recentTasks}=useContext(TaskContext);
  const [isUpdate,setIsUpdate]=useState(false);
 
  const edit=()=>{
    setIsUpdate(true);
  }

  const onCancle=()=>{
    setIsUpdate(false);
  }





    return (
        <div className='container-fluid h-100'>
           <div className="row h-100">
            <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center bg-primary text-white flex-column">
           <TaskForm isUpdate={isUpdate} data={latestTask} onCancle={onCancle}/>
            </div>

            <div className="col-lg-6 h-100 d-flex flex-column align-items-center justify-content-center">
              <div className="card bg-primary w-75">
             <div className="card-body text-white">
              <div className="d-flex">
                  <h3>{latestTask?.title}</h3>
                  <button className='btn btn-info ms-auto' onClick={edit}>Edit</button>
              </div>
              <p>{latestTask?.description}</p>
              <div className="d-flex align-item-center"> 
                  <p>Modified On: {dateFormat(latestTask?.modifiedon)}</p>
                  <p className='ms-auto'>Due On: {dateFormat(latestTask?.duedate)}</p>
              </div>
             </div>
              </div>
             <div className="card w-75  bg-primary mt-5">
                        <div className="card-body text-white">
                            <h3>Recent Tasks</h3>                                    
                        <div>
                            {
                                recentTasks?.map((item)=>{
                                    return(
                                        <div key={item.id} className='d-flex border border-warning p-2'>
                                            <p className='mb-0'>{item.title}</p>
                                            <p className='mb-0 ms-auto'>{dateFormat(item.duedate)}</p>
                                        </div>
                                    )
                                })
                            }
                            <Link className='mt-3 text-info d-inline-block' to="/task-list">View All</Link>
                        </div>
              </div>
              </div>
            </div>
           </div>
        </div>
    );
}

export default CreateTask; 