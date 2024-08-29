import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // react-router-dom 추가
import styles from "./Login.module.css";

export default function GoogleLogin() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleGoogleLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      try {
        const { data } = await axios.post("http://localhost:8080/login/oauth2/code/google", { code });
        console.log(data);

        // 로그인 성공 후 리디렉션
        navigate("/InGame"); // 또는 로그인 성공 후 리디렉션할 페이지
      } catch (error) {
        console.error("로그인 오류:", error);
      }
    },
    onError: (errorResponse) => {
      console.error("구글 로그인 오류:", errorResponse);
    },
    flow: "auth-code",
  });

  return (
    <button id="google-login" className={styles.button} onClick={handleGoogleLogin}>
      구글계정으로 로그인
    </button>
  );
}
