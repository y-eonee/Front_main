import React from "react";
import { Html } from '@react-three/drei';
import styles from "./Login.module.css";

export default function Login() {
    const handleKakaoLogin = () => {
        console.log("카카오 로그인 버튼 클릭");
    };

    const handleNaverLogin = () => {
        console.log("네이버 로그인 버튼 클릭");
    };

    return (
        <Html center>
            <div className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <button id="kakao-login" className={styles.button} onClick={handleKakaoLogin}>카카오계정으로 로그인</button>
                <button id="naver-login" className={styles.button} onClick={handleNaverLogin}>네이버계정으로 로그인</button>
            </div>
        </Html>
    );
}
