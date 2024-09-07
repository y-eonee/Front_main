import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Redirection() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (!code) {
        console.error("No code parameter found");
        navigate('/main');
        return;
      }

      try {
        // Ensure the correct API endpoint is used
        const res = await axios.get(`http://localhost:8080/api/code=${code}`); // Example URL
        const token = res.headers.authorization; // Or res.data.token if the token is in the response body

        if (token) {
          window.localStorage.setItem('token', token);
          navigate('/InGame');
        } else {
          console.error("No token found in response");
          navigate('/main');
        }
      } catch (e) {
        console.error("Error during login:", e);
        navigate('/main');
      }
    };

    handleLogin();
  }, [navigate]); // Add navigate to dependencies to ensure it's properly referenced

  return <div>로그인 중..</div>;
}
