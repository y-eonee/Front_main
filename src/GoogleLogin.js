import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import axios from "axios";
import styles from "./Login.module.css";

export default function GoogleLogin() {
  const handleGoogleLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      try {
        const response = await axios.post("http://localhost:8080/login/oauth2/code/google", { code });
        // Assuming the server response includes a redirection URL
        const redirectUrl = response.data.redirectUrl;
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      } catch (error) {
        console.error("Google login error:", error);
      }
    },
    onError: (errorResponse) => {
      console.error("Google login error response:", errorResponse);
    },
    flow: "auth-code",
  });

  return (
    <button id="google-login" className={styles.button} onClick={handleGoogleLogin}>
      구글계정으로 로그인
    </button>
  );
}
