import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/home')
  };

  return (
    <div className="container-login">
      <form onSubmit={handleSubmit} className='form-container'>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
          {/* <label className="form-label" htmlFor="form2Example1">Email address</label> */}
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
          {/* <label className="form-label" htmlFor="form2Example2" >Password</label> */}
        </div>

        <div className="mb-4">
          <div className="col">
            <a href="#!">Recuperar contraseña?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>

    </div>
  );
};

export default Login;
