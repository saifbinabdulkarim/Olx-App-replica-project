function indexAdsLoader() {
    var get = localStorage.getItem('userData')
    var dataId = JSON.parse(get)
    var userUid = dataId.uid
    var name = dataId.displayName || dataId.name;
    document.getElementById("disUserName").innerText += name
    document.getElementById("disUserName").style.fontSize = "12px"

    console.log(name)

    firebase.database().ref('/adsToPublish').child('mobile').on("child_added", (snap) => {
        var data = snap.val()
        // console.log(data);
        var categories = data.categories;
        var upperCase = categories.toUpperCase();
        // console.log(upperCase)
        document.querySelector("#indexRowPoster").innerHTML +=
            `<div class="col-sm-4">
            <h1 id="mobile">${upperCase}</h1>
              <div style="width:280px; height:350px; margin: 20px; border:1.5px solid #d9d9d9;" class="card text-center">
                <div class="placeBox" style="margin-top:10px">
                  <img style="height:150px" width="200px;" src="${data.files}" class="img-fluid">
                </div>
                <div class="container text-left">
                  <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data.prices}</h6>
                  <p style="font-size:12px;font-weight:700;"> ${data.title}</p>
                </div>
                <div class="container text-bottom">
                  <span style="font-size:12px;font-weight:700; float: left;" class="span-left">${data.name}</span> 
                  <span style="font-size:10px;font-weight:700; float: right;" class="span-right">${data.phone}</span><br/>
                  <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${data.locations}</span><br>
                  <span style="border-bottom: 1px solid gray"></span><br>
                  <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${data.descriptions}</span><br>

                </div>
              </div>
            </div>`
    })
    firebase.database().ref('/adsToPublish').child('vehicles').on("child_added", (snap) => {
        var data = snap.val()
        // console.log(data);
        var categories = data.categories;
        var upperCase = categories.toUpperCase();
        // console.log(upperCase)
        document.querySelector("#indexRowPosterv").innerHTML +=
            `<div class="col-sm-4">
            <h1 id="vehicles">${upperCase}</h1>
              <div style="width:280px; height:350px; margin: 20px; border:1.5px solid #d9d9d9;" class="card text-center">
                <div class="placeBox" style="margin-top:10px">
                  <img style="height:150px" width="200px;" src="${data.files}" class="img-fluid">
                </div>
                <div class="container text-left">
                  <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data.prices}</h6>
                  <p style="font-size:12px;font-weight:700;"> ${data.title}</p>
                </div>
                <div class="container text-bottom">
                  <span style="font-size:12px;font-weight:700; float: left;" class="span-left">${data.name}</span> 
                  <span style="font-size:10px;font-weight:700; float: right;" class="span-right">${data.phone}</span><br/>
                  <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${data.locations}</span><br>
                  <span style="border-bottom: 1px solid gray"></span><br>
                  <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${data.descriptions}</span><br>

                </div>
              </div>
            </div>
            `      })
    firebase.database().ref('/adsToPublish').child('bikes').on("child_added", (snap) => {
        var data = snap.val()
        // console.log(data);
        var categories = data.categories;
        var upperCase = categories.toUpperCase();
        // console.log(upperCase)
        document.querySelector("#indexRowPosterb").innerHTML +=
            `<div class="col-sm-4">
            <h1 id="bikes">${upperCase}</h1>
              <div style="width:280px; height:350px; margin: 20px; border:1.5px solid #d9d9d9;" class="card text-center">
                <div class="placeBox" style="margin-top:10px">
                  <img style="height:150px" width="200px;" src="${data.files}" class="img-fluid">
                </div>
                <div class="container text-left">
                  <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data.prices}</h6>
                  <p style="font-size:12px;font-weight:700;"> ${data.title}</p>
                </div>
                <div class="container text-bottom">
                  <span style="font-size:12px;font-weight:700; float: left;" class="span-left">${data.name}</span> 
                  <span style="font-size:10px;font-weight:700; float: right;" class="span-right">${data.phone}</span><br/>
                  <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${data.locations}</span><br>
                  <span style="border-bottom: 1px solid gray"></span><br>
                  <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${data.descriptions}</span><br>

                </div>
              </div>
            </div>`
    })
    firebase.database().ref('/adsToPublish').child('furniture').on("child_added", (snap) => {
        var data = snap.val()
        // console.log(data);
        var categories = data.categories;
        var upperCase = categories.toUpperCase();
        // console.log(upperCase)
        document.querySelector("#indexRowPosterf").innerHTML +=
            `<div class="col-sm-4">
            <h1 id="furniture">${upperCase}</h1>
              <div style="width:280px; height:350px; margin: 20px; border:1.5px solid #d9d9d9;" class="card text-center">
                <div class="placeBox" style="margin-top:10px">
                  <img style="height:150px" width="200px;" src="${data.files}" class="img-fluid">
                </div>
                <div class="container text-left">
                  <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data.prices}</h6>
                  <p style="font-size:12px;font-weight:700;"> ${data.title}</p>
                </div>
                <div class="container text-bottom">
                  <span style="font-size:12px;font-weight:700; float: left;" class="span-left">${data.name}</span> 
                  <span style="font-size:10px;font-weight:700; float: right;" class="span-right">${data.phone}</span><br/>
                  <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${data.locations}</span><br>
                  <span style="border-bottom: 1px solid gray"></span><br>
                  <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${data.descriptions}</span><br>

                </div>
              </div>
            </div>`
    })
    firebase.database().ref('/adsToPublish').child('electronics').on("child_added", (snap) => {
        var data = snap.val()
        // console.log(data);
        var categories = data.categories;
        var upperCase = categories.toUpperCase();
        // console.log(upperCase)
        document.querySelector("#indexRowPostere").innerHTML +=
            `<div class="col-sm-4">
            <h1 id="elctronices">${upperCase}</h1>
              <div style="width:280px; height:350px; margin: 20px; border:1.5px solid #d9d9d9;" class="card text-center">
                <div class="placeBox" style="margin-top:10px">
                  <img style="height:150px" width="200px;" src="${data.files}" class="img-fluid">
                </div>
                <div class="container text-left">
                  <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data.prices}</h6>
                  <p style="font-size:12px;font-weight:700;"> ${data.title}</p>
                </div>
                <div class="container text-bottom">
                  <span style="font-size:12px;font-weight:700; float: left;" class="span-left">${data.name}</span> 
                  <span style="font-size:10px;font-weight:700; float: right;" class="span-right">${data.phone}</span><br/>
                  <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${data.locations}</span><br>
                  <span style="border-bottom: 1px solid gray"></span><br>
                  <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${data.descriptions}</span><br>

                </div>
              </div>
            </div>`
    })
    firebase.database().ref('/adsToPublish').child('properties').on("child_added", (snap) => {
        var data = snap.val()
        // console.log(data);
        var categories = data.categories;
        var upperCase = categories.toUpperCase();
        // console.log(upperCase)
        document.querySelector("#indexRowPosterp").innerHTML +=
            `<div class="col-sm-4">
            <h1 id="properties">${upperCase}</h1>
              <div style="width:280px; height:350px; margin: 20px; border:1.5px solid #d9d9d9;" class="card text-center">
                <div class="placeBox" style="margin-top:10px">
                  <img style="height:150px" width="200px;" src="${data.files}" class="img-fluid">
                </div>
                <div class="container text-left">
                  <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data.prices}</h6>
                  <p style="font-size:12px;font-weight:700;"> ${data.title}</p>
                </div>
                <div class="container text-bottom">
                  <span style="font-size:12px;font-weight:700; float: left;" class="span-left">${data.name}</span> 
                  <span style="font-size:10px;font-weight:700; float: right;" class="span-right">${data.phone}</span><br/>
                  <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${data.locations}</span><br>
                  <span style="border-bottom: 1px solid gray"></span><br>
                  <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${data.descriptions}</span><br>

                </div>
              </div>
            </div>`
    })
}