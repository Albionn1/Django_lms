import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api";

function TeacherCourses(){
    const [courseData, setCourseData] = useState([]);

    const teacherId = localStorage.getItem('teacherId')
    console.log(teacherId)
    useEffect(() =>{
        document.title = 'Courses';

        try{
            axios.get(baseUrl + '/teacher-courses/' + teacherId, {
                headers: {'Authorization': 'Token 11982a75535052e919ccbf0cf09d0640e653f57f'}
            }).then((response) => {
                setCourseData(response.data)
            })
        }catch(error){
            console.log(error);
        }
    },[]);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                    <h5 className='card-header'>My Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Created by</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) => 
                                    <tr>
                                        <td>{course.title}</td>
                                        <td><img src={course.featured_img} width='80' className='rounded' alt={course.title} /></td>
                                        <td><Link to={'/'}>Albion Berisha</Link></td>
                                        <td>
                                            <button className='btn btn-danger btn-sm'>Delete</button>
                                            <Link to={'/add-chapter/2'} className='btn btn-success btn-sm ms-2'>Add Chapters</Link>
                                        </td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherCourses;