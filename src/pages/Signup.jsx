import { Link } from "react-router-dom";
import img from '../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "./Shared/SocialLogin";

const Signup = () => {
    const {creatUser} = useContext(AuthContext);
    const handleLogin =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        
        creatUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name='name'
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name='email'
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name='password'
                      className="input input-bordered"
                    />
                    
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Signup"
                    />
                  </div>
                </form>
                <p>Already Have an Account ? <Link className="text-orange-600 font-bold my-5" to='/login'>Login</Link> </p>
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;