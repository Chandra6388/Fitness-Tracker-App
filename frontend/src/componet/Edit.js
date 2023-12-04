// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Edit() {

  let navigate = useNavigate();

  const { id } = useParams();



  const [workOutObj, setWorkOutObj] = useState({
    workoutname: '',
    workoutduration: '',
    burncalories: '',
    notes: ''
})
  const WorkOutconfigList = [
    {
      label: "WorkOut name",
      placeholder: "enter workout name",
      key: 'workoutname'
    },
    {
      label: "WorkOut Duration",
      placeholder: "enter workout duration",
      key: 'workoutduration'
    },
    {
      label: "Burn Calories",
      placeholder: "enter burn calories",
      key: 'burncalories'
    },
    {
      label: "Notes",
      placeholder: "enter notes",
      key: 'notes'
    },
  ]
  const onsubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/fitnessDetails/${id}`, workOutObj)
     
    navigate("/")
  }
 
  const loadWorkOut = async (e) => {
    const result = await axios.get(`http://localhost:3000/fitnessDetails/${id}`)
    setWorkOutObj(result.data.studentGetDataById);
  }
  
 
  useEffect(() => {
    loadWorkOut();  // eslint-disable-next-line
  },[])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 rounded border p-4 mt-4 shadow'>
          <h3 className='text-center m-3'>Edit WorkOut</h3>
          <form className='needs-validation' onSubmit={onsubmit} >
            <div className=''>
            {
                WorkOutconfigList.map((workout, index) => {
 
                  return (
                    <div key={index}>
                      <label htmlFor="name" className='form-label my-2'>{workout.label}</label>
                      <input type="text"
                        required
                        className='form-control'
                        placeholder={workout.placeholder}
                        value={workOutObj[workout.key]}
                        onChange={(event) => {
                          setWorkOutObj({
                            ...workOutObj,
                            [workout.key]: event.target.value
                          })
                        }}

                      />
                    </div>
                  )
                })
            }
              <div className='text-center my-3'>
                <button type='Submit' className='btn btn-outline-primary text-center mx-2' >Submit</button>
                <Link className='btn btn-outline-danger' to={"/"}>Cancel</Link>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

 

 