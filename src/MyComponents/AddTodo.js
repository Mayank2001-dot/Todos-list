import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !description){
            alert("Title cannot be blank")
        }
        else{
            props.addTodo(title, description);
            settitle("");
            setdescription("");
        }
        
        
    }
    return (
        <div className="container my-3 mx-25">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} 
                    className="form-control" id="title" aria-descriptionribedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} 
                    className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">ADD</button>
            </form>
        </div>
    )
}

