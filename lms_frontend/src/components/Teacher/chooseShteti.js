import React from "react";
import TeacherSidebar from "./TeacherSidebar"
import {useEffect, useState} from 'react';
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function ChooseShteti(){

    const [cats, setCats] = useState([])
    const [shtetiData, setShtetiData] = useState({
        emri: ''
    })

    useEffect(() =>{
        document.title='Zgjedh Shtetin'
    },[]);
    try{
        axios.get(baseUrl + '/choose-shteti', {
            headers: {'Authorization': 'Token ed5c1ab8fd1f466978049d422c6adf3ff1241e58'},
        }).then((response) => {
            setCats(response.data)
        })
    }catch(error){
        console.log(error);
    }
    const handleChange = (event) =>{
        setCourseData({
            ...shtetiData,
            [event.target.name] : event.target.value
        })
    }
};

    return (
        <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Category</label>
        <div className="col-sm-12">
            <select name="shteti" onChange={handleChange} className="form-control">
                {cats.map((shteti, index) => {return <option key={index} value={shteti.id}>{shteti.title}</option>})}
            </select>
        </div>
    </div>
    );
}

export default ChooseShteti;