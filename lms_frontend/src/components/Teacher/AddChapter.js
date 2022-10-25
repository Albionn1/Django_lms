import TeacherSidebar from "./TeacherSidebar"
import {useEffect} from 'react';
function AddChapter(){
    useEffect(() =>{
            document.title = 'Add Chapter';
        });
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Chapter</h5>
                        <div className='card-body'>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Title</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-12">
                                    <textarea type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Video</label>
                                <div className="col-sm-12">
                                    <input type="file" className="form-control" id="inputPassword" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Remarks</label>
                                <div className="col-sm-12">
                                    <textarea type="text" placeholder="This video will teach you Advanced ReactJS" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <hr />
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddChapter;