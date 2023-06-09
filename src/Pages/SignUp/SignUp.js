import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(authContext);
    
        const handleSignUp = event => {
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);

            createUser(email, password, name)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.error('error', error)
            })
        };

    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
    <div className="text-center lg:text-left">
      <img src={img} alt=''/>
    </div>
    <div className="card flex-shrink-0 max-w-sm p-10 shadow-2xl bg-base-100 w-full">
    <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-error" type="submit" value="Sign Up"/>
        </div>
      </form>
      <p className='text-center'>Already Have an Account? <Link to="/login" className='text-orange-600 font-bold'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;