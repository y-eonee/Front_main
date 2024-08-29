import React from "react";
import { Html } from '@react-three/drei';
import styles from "./Login.module.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./GoogleLogin";
import KakaoLogin from "./KakaoLoogin";

export default function Login() {
    

    return (
        <Html center>
            <div className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <KakaoLogin />
                <GoogleOAuthProvider clientId ={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                    <GoogleLogin />
                </GoogleOAuthProvider>
            </div>
        </Html>
    );
}
