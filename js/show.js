window.addEventListener("load", () => {
  load();
})
function load() {
  var get = localStorage.getItem('userData')
  var data = JSON.parse(get)
  var userUid = data.uid;
  document.getElementById('userDispName').innerText += data.displayName
  document.getElementById('userDispName').style.fontSize = "12px"
  console.log(data.uid)
  document.getElementById("loginbtn").style.display = "none";
  document.getElementById("logoutBtn").style.display = "block";
  firebase.database().ref(`Ads/Bikes`).child(userUid).on("child_added", (userObjData) => {
    var userOwnData = userObjData.val();
    console.log(userOwnData)

    document.getElementById("row").innerHTML +=
      `<div class="col-sm-4">
            <div style="width:280px; height:250px; margin: 20px; border:1.5px solid latergray;" class="card text-center">
              <div class="placeBox" style="margin-top:10px">
                <img style="height:150px" width="200px;" src="${userOwnData.files}" class="img-fluid">
              </div>
              <div class="container text-left">
                <h6 style="font-weight:800;" class="text-middle" > RS ${userOwnData.prices}</h6>
                <p style="font-size:12px"> ${userOwnData.title}</p>
              </div>
              <div class="container text-bottom">
                <span style="font-size:10px; float: left;" class="span-left"> ${userOwnData.locations}</span> 
                <span style="font-size:10px; float: right;" class="span-right">${userOwnData.phone}</span>
              </div>
            </div>
          </div>`
  })
  firebase.database().ref(`Ads/vehicles`).child(userUid).on("child_added", (userObjData) => {
    var userOwnData = userObjData.val();
    console.log(userOwnData)
    document.getElementById("row").innerHTML +=
      `<div class="col-sm-4">
        <div style="width:280px; height:250px; margin: 20px; border:1.5px solid latergray;" class="card text-center">
          <div class="placeBox" style="margin-top:10px">
            <img style="height:150px" width="200px;" src="${userOwnData.files}" class="img-fluid">
          </div>
          <div class="container text-left">
            <h6 style="font-weight:800;" class="text-middle" > RS ${userOwnData.prices}</h6>
            <p style="font-size:12px"> ${userOwnData.title}</p>
          </div>
          <div class="container text-bottom">
            <span style="font-size:10px; float: left;" class="span-left"> ${userOwnData.locations}</span> 
            <span style="font-size:10px; float: right;" class="span-right">${userOwnData.phone}</span>
          </div>
        </div>
      </div>`
  })
  firebase.database().ref(`Ads/mobile`).child(userUid).on("child_added", (userObjData) => {
    var userOwnData = userObjData.val();
    console.log(userOwnData)
    document.getElementById("row").innerHTML +=
      `<div class="col-sm-4">
        <div style="width:280px; height:250px; margin: 20px; border:1.5px solid latergray;" class="card text-center">
          <div class="placeBox" style="margin-top:10px">
            <img style="height:150px" width="200px;" src="${userOwnData.files}" class="img-fluid">
          </div>
          <div class="container text-left">
            <h6 style="font-weight:800;" class="text-middle" > RS ${userOwnData.prices}</h6>
            <p style="font-size:12px"> ${userOwnData.title}</p>
          </div>
          <div class="container text-bottom">
            <span style="font-size:10px; float: left;" class="span-left"> ${userOwnData.locations}</span> 
            <span style="font-size:10px; float: right;" class="span-right">${userOwnData.phone}</span>
          </div>
        </div>
      </div>`
  })
}

