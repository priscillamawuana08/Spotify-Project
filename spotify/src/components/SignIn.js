import React from "react";
import "../index.css";
// import { useEffect } from "react";


const SignIn = () => {

    // function handleCallbackResponse(response) {
    //     console.log("Encoded JWT ID token:" + response.credential);
    // }
    // useEffect(() => {

    //     google.accounts.id.initialize({
    //         client_id: "765788987963-ujc2561ktsllvvm8kbf36j0qipurtfn8.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     });
    //     google.accounts.id.renderButton(
    //         document.getElementById("signInDiv"),
    //         { theme: "outline", size: "large" }
    //     )
    // }, []);
    return (
        <div className="page-wrapper toggled">

            {/* <div id="signInDiv"></div>   */}
            <div id="g_id_onload"
                data-client_id="765788987963-ujc2561ktsllvvm8kbf36j0qipurtfn8.apps.googleusercontent.com"
                data-login_uri="https://localhost:3000"
                data-auto_prompt="false">
            </div>
            <div class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
        </div>
    );

}
export default SignIn;