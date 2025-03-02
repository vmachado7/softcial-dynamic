import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Landing() {

    const navigate = useNavigate()

    return (
        <>
            <GoogleLogin
                onSuccess={(credentialResponse) => {                  

                    console.log(jwtDecode(credentialResponse.family_name))
                    console.log("pain")

                    navigate("/home")
                }}
                onError={() => console.log("Login Failed")} />
        </>
    )
}