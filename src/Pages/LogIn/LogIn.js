import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { authContext } from '../../context/AuthProvider/AuthProvider';
const LogIn = () => {
  const {user} = useContext(authContext)
const handleLogIn = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    user(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
}

    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
    <div className="text-center lg:text-left">
      <img src={login} alt=''/>
    </div>
    <div className="card flex-shrink-0 max-w-sm p-10 shadow-2xl bg-base-100 w-full">
    <h1 className="text-5xl text-center font-bold">Login!</h1>
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-error" type="submit" value="Login"/>
        </div>
      </form>
      <p className='text-center'>New to Genius Car? <Link to="/signup" className='text-orange-600 font-bold'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default LogIn;