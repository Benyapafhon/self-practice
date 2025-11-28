
export const initializeKeycloak = (keycloak) => {
    keycloak.init({ onLoad:'login-required',promiseType:'native', redirectUri: window.location.origin + "/intproj25/nw1/itb-ecors/reserve.html"})
    .then(async (authen) =>{
        if(authen){
            console.log("authenticated")
            await loadUserProfile(keycloak);
            await loadUserPlan(keycloak);
            const studyPlansResponse = await fetch(
                      `https://bscit.sit.kmutt.ac.th/intproj25/nw1/itb-ecors/api/v1/study-plans`
                    );
            window.studyPlans = await studyPlansResponse.json();


        const declareBtn = document.querySelector(".ecors-button-declare");
        const signOut = document.querySelector(".ecors-button-signout");
        const major = document.getElementById("majors");
        declareBtn.disabled = true;
        declareBtn.style.opacity = "0.5";
        declareBtn.style.cursor = "not-allowed";
        major.disabled = false;
        major.style.opacity = "0.5";
        major.style.cursor = "pointer";
        signOut.disabled = false;
        signOut.style.opacity = "1";
        signOut.style.cursor = "pointer";
        setupDeclareButton()
      }
        else {
        //   console.log("not authenticated")
        //   window.location.replace("./index.html");
        }
    })
    .catch((error) => {
    //   console.error("Keycloak initialization error:", error);
    //   window.location.replace("./index.html");
    });
  const dialogModal = document.querySelector('.ecors-dialog')
  dialogModal.close()
};
