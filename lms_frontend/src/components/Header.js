import {Link} from 'react-router-dom';

const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>Learn Online </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"} >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/all-courses'}>Courses</Link>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role={'button'} data-bs-toggle="dropdown" aria-expanded = "false">
                    Teachers
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    {teacherLoginStatus !== 'true' &&
                      <>
                      <li><Link className="dropdown-item" to={"/teacher-login"}>Login</Link></li>
                      <li><Link className="dropdown-item" to={"/teacher-register"}>Register</Link></li>
                      </>
                    }
                    <li><hr className='dropdown-divider' /></li>
                    <li><Link className='dropdown-item' to={'/teacher-dashboard'}>Dashboard</Link></li>
                    <li><Link className='dropdown-item' to={'/teacher-logout'}>Log out</Link></li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role={'button'} data-bs-toggle="dropdown" aria-expanded = "false">
                    User
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li><Link className="dropdown-item" to={"/user-login"}>User Login</Link></li>
                    <li><Link className="dropdown-item" to={"/user-register"}>User Register</Link></li>
                    <li><hr className='dropdown-divider' /></li>
                    <li><Link className='dropdown-item' to={'/user-dashboard'}>Dashboard</Link></li>
                    <li><Link className='dropdown-item' to={'/user-logout'}>Log out</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    );
  }
  
  export default Header;
  