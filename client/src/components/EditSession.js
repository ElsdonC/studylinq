import React, { useState } from 'react'

const EditSession = ({session}) => {
  const [name, setName] = useState(session.name)
  const updateName = async (e) => {  
    e.preventDefault()
    try {
      await fetch(`http://localhost:8001/sessions/${session.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: name})
      })
      .then(res=>res.json())
      .then(data=>alert(data))
      window.location = '/'
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Session</h5>
            </div>
              <div className="modal-body">
                  <input defaultValue={session.name} onChange={e=>{
                    console.log(e.target.value)
                    setName(e.target.value)
                  }}/>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={e=>updateName(e)} className="btn btn-success">Save changes</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditSession