import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api";

function TeacherLogin(){
    const [teacherLoginData, setTeacherLoginData] = useState({
        email : '',
        password : ''
    });
    const handleChange = (event) => {
        setTeacherLoginData({
            ...teacherLoginData,
            [event.target.name] : event.target.value
        });
    }
    const submitForm = () => {
        const teacherFormData = new FormData();
        teacherFormData.append('email', teacherLoginData.email);
        teacherFormData.append('password', teacherLoginData.password);
        
        try{
            axios.post(baseUrl + '/teacher-login', teacherFormData, {
                headers: {'Authorization': 'Token 11982a75535052e919ccbf0cf09d0640e653f57f'},
            }).then((response) => {
                if(response.data.bool === true){
                    localStorage.setItem('teacherLoginStatus', true)
                    localStorage.setItem('teacherId', response.data.teacher_id)
                    window.location.href = '/teacher-dashboard'
                }
            })
        }catch(error){
            console.log(error);
        }
    }

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus === 'true'){
        window.location.href = '/teacher-dashboard'
    }

    useEffect(() =>{
            document.title = 'Login';
        });
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <h5 className='card-header'>Teacher Login</h5>
                        <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input value={teacherLoginData.email} type="email" name="email" onChange={handleChange} className="form-control"/>
                                
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input value={teacherLoginData.password} type="password" name="password"  onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input name='remember_me' type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Remember Me</label>
                            </div>
                            <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin;