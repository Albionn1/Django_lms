import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function CategoryCourses(){
    useEffect(() =>{
            document.title = 'Courses by Category';
        });
    return(
        
        <div className="container mt-3">
        {/* Latest Courses */}
            <h3 className="pb-1 mb-4">Web Development Courses</h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to={"/detail/1"}><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={"/detail/1"}>Course title</Link></h5>
                    </div>
                </div>
                </div>
            </div>
            {/* Pagination Start */}
            <nav aria-label="Page navigation example">
                <ul className="pagination mt-5 justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* Pagination End */}
      </div>
      
    );
}

export default CategoryCourses;