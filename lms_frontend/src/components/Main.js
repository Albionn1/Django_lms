import Home from './Home';
import Header from './Header';
import About from './About';
import CourseDetail from './CourseDetail';
import Footer from './Footer';

import {Routes as Switch, Route} from 'react-router-dom';

//Users Imports
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';

//Teachers Imports
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherCourses from './Teacher/TeacherCourses';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import UserList from './Teacher/UserList';
import AddCourse from './Teacher/AddCourse';

//List Pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';
import CategoryCourses from './CategoryCourses';

//Other
import TeacherDetail from './TeacherDetail';
import TeacherLogout from './Teacher/TeacherLogout';
import AddChapter from './Teacher/AddChapter';



function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path='/user-dashboard' element={<Dashboard />} />
        <Route path='/my-courses' element={<MyCourses />} />
        <Route path='/favorite-courses' element={<FavoriteCourses />} />
        <Route path='/recommended-courses' element={<RecommendedCourses />} />
        <Route path='/profile-setting' element={<ProfileSetting />} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path='/all-courses' element={<AllCourses />} />
        <Route path='/popular-courses' element={<PopularCourses />} />
        <Route path='/popular-teachers' element={<PopularTeachers />} />
        <Route path='/category/:category_slug' element={<CategoryCourses />} />


        <Route path='/teacher-login' element={<TeacherLogin />} />
        <Route path='/teacher-logout' element={<TeacherLogout />} />
        <Route path='/teacher-register' element={<TeacherRegister />} />
        <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
        <Route path='/teacher-profile-setting' element={<TeacherProfileSetting />} />
        <Route path='/teacher-courses' element={<TeacherCourses />} />
        <Route path='/add-chapter/:course_id' element={<AddChapter />} />
        <Route path='/teacher-change-password' element={<TeacherChangePassword />} />
        <Route path='/teacher-users' element={<UserList />} />
        <Route path='/add-course' element={<AddCourse />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
