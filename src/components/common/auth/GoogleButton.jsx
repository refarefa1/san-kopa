import { useEffect, useRef } from "react";

const styles = {
    googleBtn: {
        width: "100%",
        marginBlockStart: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
}
export const GoogleButton = () => {
    const googleSigninRef = useRef();

    const handleCallbackResponse = (response) => {
      console.log(response);
    };
      
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id:
          "826486200841-iq0u5i8ssr23k4da9j8jct0cdv791brm.apps.googleusercontent.com",
          callback: handleCallbackResponse,
        });
        
        google.accounts.id.renderButton(googleSigninRef.current, {
          theme: "outline",
          width: "100%",
        });
      }, []);
  return (
    <div
    ref={googleSigninRef}
    id="google-signin"
    style={styles.googleBtn}
  ></div>
  )
}
