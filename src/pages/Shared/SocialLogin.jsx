import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const hangleGoogleSingIn = () =>{
    googleSignIn()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
      <button onClick={hangleGoogleSingIn} className="btn">G</button>
      </div>
    </div>
  );
};

export default SocialLogin;
