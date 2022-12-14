import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function PopularTeachers(){
    const [teacher, setTeacher] = useState(null);
    useEffect(() =>{
            document.title = 'Popular Teachers';

            axios.get(baseUrl + '/teacher/',{
                headers: {'Authorization': 'Token 11982a75535052e919ccbf0cf09d0640e653f57f'}
            }).then((response) =>{
                setTeacher(response.data);
            });
        },[]);
        console.log(teacher);
    return(
        
        <div className="container mt-3">
        {/* Latest Courses */}
            <h3 className="pb-1 mb-4">Popular Teachers </h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span> 
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>                           
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>                            
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>                            
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>                            
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>                            
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={'/teacher-detail/1'}><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/teacher-detail/1"}>Teacher Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Pagination Start */}
            <nav aria-label="Page navigation example">
                <ul className="pagination mt-5 justify-content-center">
                    <li className="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* Pagination End */}
      </div>
      
    );
}

export default PopularTeachers;