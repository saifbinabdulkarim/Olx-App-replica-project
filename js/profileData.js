window.addEventListener('load', () => {
    proLoad()
})

function proLoad() {
    var get = localStorage.getItem('userData')
    var data = JSON.parse(get)
    var userUid = data.uid
    console.log(data.uid)
    document.getElementById("loginbtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "block";
    firebase.database().ref('Users/').child(userUid).on('value', (snap) => {
        var profileData = snap.val()
        console.log(profileData)
        document.getElementById('userDisName').innerText += profileData.name;
        document.getElementById('userDisName').style.fontSize = "12px";
        document.querySelector("#profileDiv").innerHTML += `
                                                        <div style="background: white;box-shadow: 0px 0px 5px 2px lightslategray; align-items:center; padding:70px; border: 2px solid dodgerblue; margin:20px;
                                                        " class="imgBox" width="150px" height="100px">
                                                        <img style="border-radius:50%; border:2px solid dodgerblue; width:120px; height:120px" width="40px" height=""40px src="${profileData.photo}">
                                                        <p style="margin-top: 0.2in;">${profileData.name}</p>
                                                        <span style="font-size:10px;">${profileData.email}</span>
                                                        </div>
                                                        `
    })
}