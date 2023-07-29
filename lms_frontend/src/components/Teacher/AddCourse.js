import TeacherSidebar from "./TeacherSidebar"
import {useEffect, useState} from 'react';
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function AddCourse(){
    const [cats, setCats] = useState([])
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img: '',
        techs: '',
    })
    useEffect(() =>{
            document.title = 'Add Course';

            try{
                axios.get(baseUrl + '/category', {
                    headers: {'Authorization': 'Token ed5c1ab8fd1f466978049d422c6adf3ff1241e58'},
                }).then((response) => {
                    setCats(response.data)
                })
            }catch(error){
                console.log(error);
            }
        },[]);
        // console.log(cats)
    const handleChange = (event) =>{
        setCourseData({
            ...courseData,
            [event.target.name] : event.target.value
        })
    }

    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name] : event.target.files[0]
        })
    }

    const formSubmit = () =>{
        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', 1);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        _formData.append('techs', courseData.techs);

        try{
            axios.post(baseUrl + '/course/', _formData, {
                headers: {
                'Authorization': 'Token ed5c1ab8fd1f466978049d422c6adf3ff1241e58',
                //'content-type': 'multipart/form-data' //Me hek qita bon me ba POST nServer sdi pse
                }
            }).then((response) => {
                //console(response.data)
                window.location.href = '/add-course'
            })
        }catch(error){
            console.log(error);
        }

    }
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Category</label>
                                <div className="col-sm-12">
                                    <select name="category" onChange={handleChange} className="form-control">
                                        {cats.map((category, index) => {return <option key={index} value={category.id}>{category.title}</option>})}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Title</label>
                                <div className="col-sm-12">
                                    <input type="text" onChange={handleChange} name="title" className="form-control" id="title" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-12">
                                    <textarea type="text" onChange={handleChange} name="description" className="form-control" id="description"></textarea>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Featured Image</label>
                                <div className="col-sm-12">
                                    <input type="file" onChange={handleFileChange} name="f_img" className="form-control" id="video" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Technologies</label>
                                <div className="col-sm-12">
                                    <textarea type="text" placeholder="PHP, Python, JavaScript, C++" onChange={handleChange} name="techs" className="form-control" id="techs"></textarea>
                                </div>
                            </div>
                            <hr />
                            <button className='btn btn-primary' onClick={formSubmit}>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddCourse;