import {Link} from 'react-router-dom';
import MyCourses from './MyCourses';
import {useEffect} from 'react';
import {Routes as Switch, Route} from 'react-router-dom';
import Sidebar from './Sidebar';

function Dashboard(){
    useEffect(() =>{
            document.title = 'Student Dashboard';
        });
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>

                </section>
            </div>
        </div>
    )
}

export default Dashboard;