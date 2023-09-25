import { useEffect, useRef, } from "react";
import { useTranslation } from "react-i18next";

const styles = {
  googleBtn: {
    marginBlockStart: 40,
  },
};
export const GoogleButton = () => {
  const googleSigninRef = useRef();

  const { t } = useTranslation();

  const handleCallbackResponse = (response) => {
    console.log(response);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "826486200841-iq0u5i8ssr23k4da9j8jct0cdv791brm.apps.googleusercontent.com",
      callback: handleCallbackResponse,
      // ux_mode: "popup",
    });

    google.accounts.id.renderButton(googleSigninRef.current, {
      theme: "outline",
      width: "100%",
      text: t('connectWithGoogle'),
      locale: "he-IL"
    });

  }, []);
  return (
    <div
      ref={googleSigninRef}
      id="google-signin"
      style={styles.googleBtn}
    >
    </div>
  );
};
