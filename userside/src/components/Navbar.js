import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Avatar from 'react-avatar';

const Navbar = ({ logout, isAuthenticated, email }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    
    };

   
    
    const guestLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Login</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <>
            <li className='nav-item'>
                <Link className='nav-link' to='/home'>Home <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/news'>News <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/acts'>Acts <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/allposts'>Posts <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/addpost'>Add Posts <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/about'>About <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/team'>Team <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/linkuser'>Contact Us<span className='sr-only'>(current)</span></Link>
            </li>
           <li className='mt-2 ml-2 mr-2'>
            {/* <Link className='nav-link' to='/team'> */}
                <Avatar name={email} size="25" round={true}/>
                {/* </Link> */}
            </li> 
            <li className='nav-item'>
                <a className='nav-link' href='/' onClick={logout_user}>Logout</a>
            </li>
            {/* <h1>{email}</h1> */}
        </>
    );

    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-light bg-light '>
                <Link className='navbar-brand' to='#!'>Crime Predict</Link>
                {/* <h1>crime predict</h1> */}
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>
            </nav>
            {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    email: state.auth.user ? state.auth.user.email : null
});

export default connect(mapStateToProps, { logout })(Navbar);
