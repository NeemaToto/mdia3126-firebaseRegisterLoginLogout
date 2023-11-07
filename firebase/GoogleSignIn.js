import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "./firebase.config"

export default function GoogleSignIn() {
    const Googlelogin = async () => {
        const provider = new GoogleAuthProvider();

        const authorization = auth;
        const result = await signInWithPopup(authorization, provider)

        console.log(result)
      
    }

    return (
        <>
            <button onClick={() => Googlelogin()}>Log in with Google</button>
        </>
    )
}