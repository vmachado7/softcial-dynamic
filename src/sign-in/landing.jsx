import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Landing() {

    const navigate = useNavigate()

    return (
        <>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log("Login Success")
                    console.log(credentialResponse)
                    console.log(jwtDecode(credentialResponse.credential))
                    navigate("/blog")
                }}
                onError={() => console.log("Login Failed")} />
        </>
    )
}