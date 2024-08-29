import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import axios from "axios";
import styles from "./Login.module.css";

export default function GoogleLogin(){

    const handleGoogleLogin = useGoogleLogin({
        scope: "email profile",
        onSuccess: async ({ code }) => {
          axios
            .post("http://localhost:8080/login/oauth2/code/google", { code })
            .then(({ data }) => {
              console.log(data);
            });
        },
        onError: (errorResponse) => {
          console.error(errorResponse);
        },
        flow: "auth-code",
      });

    return(
        <button id="google-login" className={styles.button} onClick={handleGoogleLogin}>구글계정으로 로그인</button>
    );
}