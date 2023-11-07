import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";

export default function UserLogout() {
    const logoutUser = async () => {
        await signOut(auth);
        console.log('User logged out')
    }

    return (
        <div>
            <h2>Signing User Out</h2>
            <button onClick={() => logoutUser()}>Logout</button>
        </div>
    )
}