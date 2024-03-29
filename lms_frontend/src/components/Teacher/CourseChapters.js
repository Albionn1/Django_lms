import TeacherSidebar from "./TeacherSidebar"
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function CourseChapters(){
    const [chapterData, setChapterData] = useState([]);
    const {course_id} = useParams();
    
    useEffect(() =>{
        document.title = 'Courses';

        try{
            axios.get(baseUrl + '/course-chapters/' + course_id, {
                headers: {'Authorization': 'Token ed5c1ab8fd1f466978049d422c6adf3ff1241e58'}
            }).then((response) => {
                setChapterData(response.data)
            })
        }catch(error){
            console.log(error);
        }
    },[]);
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">All Chapters</h5>
                        <div className="card-body">
                            <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Video</th>
                                            <th>Remarks</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {chapterData.map((chapter, index) => 
                                    <tr>
                                        <td><Link to='#'>{chapter.title}</Link></td>
                                        <td>
                                            <video controls width="250">
                                                <source src={chapter.video.url} type="video/webm"/>
                                                <source src={chapter.video.url} type="video/mp4"/>

                                                Sorry, your browser doesn't support embedded videos.
                                            </video>
                                        </td>
                                        <td>{chapter.remarks}</td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-info ms-2'>Edit</button>
                                            
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
    )
}

export default CourseChapters;