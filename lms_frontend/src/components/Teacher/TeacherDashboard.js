import {Link} from 'react-router-dom';
import TeacherCourses from './TeacherCourses';
import {useEffect} from 'react';
import TeacherSidebar from './TeacherSidebar';

function TeacherDashboard(){
    useEffect(() =>{
            document.title = 'Dashboard';
        });
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    Dashboard
                </section>
            </div>
        </div>
    )
}

export default TeacherDashboard;