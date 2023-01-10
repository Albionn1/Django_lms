import TeacherSidebar from "./TeacherSidebar"
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function AddChapter(){
    useEffect(() =>{
        document.title = 'Add chapter'
    },[]);
            const [chapterData, setChapterData] = useState({
    
                title: '',
                description: '',
                video: '',
                remarks: '',
            })
           
                // console.log(cats)
            const handleChange = (event) =>{
                setChapterData({
                    ...chapterData,
                    [event.target.name] : event.target.value
                })
            }
        
            const handleFileChange = (event) => {
                setChapterData({
                    ...chapterData,
                    [event.target.name] : event.target.files[0]
                })
            }
            
            const {course_id} = useParams();
            
            const formSubmit = () =>{
                const _formData = new FormData();
                _formData.append('course', course_id);
                _formData.append('title', chapterData.title);
                _formData.append('description', chapterData.description);
                _formData.append('video', chapterData.video, chapterData.video.name);
                _formData.append('remarks', chapterData.remarks);
        
                try{
                    axios.post(baseUrl + '/chapter/', _formData, {
                        headers: {
                        'Authorization': 'Token 11982a75535052e919ccbf0cf09d0640e653f57f',
                        //'content-type': 'multipart/form-data' //Me hek qita bon me ba POST nServer sdi pse
                        }
                    }).then((response) => {
                        //console(response.data)
                        window.location.href = '/add-chapter/1'
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
                        <h5 className='card-header'>Add Chapter</h5>
                        <div className='card-body'>

                            <div className="mb-3">
                                <label className="col-form-label">Title</label>
                                <div className="col-sm-12">
                                    <input type="text" onChange={handleChange} name='title' className="form-control" id="title" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="col-form-label">Description</label>
                                <div className="col-sm-12">
                                    <textarea type="text" onChange={handleChange} name='description' className="form-control" id="description" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="col-form-label">Video</label>
                                <div className="col-sm-12">
                                    <input type="file" onChange={handleFileChange} name='video' className="form-control" id="video" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="col-form-label">Remarks</label>
                                <div className="col-sm-12">
                                    <textarea type="text" onChange={handleChange} name='remarks' placeholder="This video will teach you Advanced ReactJS" className="form-control" id="techs" />
                                </div>
                            </div>
                            <hr />
                            <button type="button" onClick={formSubmit} className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddChapter;