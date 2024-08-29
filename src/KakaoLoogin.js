import React from "react";
import styles from "./Login.module.css";

export default function KakaoLogin() {
  const BACKEND_IP = process.env.REACT_APP_BACKEND_IP;
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = `http://${BACKEND_IP}/login/oauth/kakao`;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    console.log("카카오 로그인 버튼 클릭");
    window.location.href = link;
  };

  return (
    <button id="kakao-login" className={styles.button} onClick={handleKakaoLogin}>
      카카오계정으로 로그인
    </button>
  );
}
