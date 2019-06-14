// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

function signUp() {
  var userName = document.getElementById("user-name").value;
  var email = document.getElementById('mail').value;
  var phoneNumber = document.getElementById('phoneNum').value;
  var password = document.getElementById('pass').value;
  var img = document.getElementById('imgFile').files[0]
  console.log({ userName, email, phoneNumber, password, img })
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      let userDataObj = {
        displayName: userName,
        email: email,
        phone: phoneNumber
      }
      let userUid = firebase.auth().currentUser.uid
      firebase.database().ref('/').child(`Users/${userUid}`).set(userDataObj)
        .then(() => {
          swal({
            text: "You have been successfully sign up",
            title: "Success",
            icon: "success",
            buttons: "ok"

          })
          window.location = '../pages/form1.html';
        })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      swal({
        title: "Error",
        text: errorMessage,
        icon: "warning",
        button: "Ok"
      })
    });
}
function signIn() {
  let email = document.getElementById("mail").value;
  let password = document.getElementById("pass").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
      console.log(success.displayName)
      localStorage.setItem("userData", JSON.stringify(success))
      window.location = '../index.html';
      // localStorage.setItem("user",success.user.uid)
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      swal({
        text: errorMessage,
        title: "error",
        icon: "warning",
        button: "Ok"
      })
    });
}

function fbLogin() {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      let user = result.user;
      localStorage.setItem("userData", JSON.stringify(user))
      // console.log(user.uid);
      let fbUserDataObj = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      }// console.log(userData);
      firebase.database().ref("/").child(`Users/${user.uid}`).set(fbUserDataObj)
        .then(() => {
          window.location = "../index.html"
        })
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      swal({
        text: errorMessage,
        title: "Error",
        icon: "error",
        button: "Ok"
      })
    })
}

function logOut() {
  firebase.auth().signOut()
    .then(() => {
      // localStorage.clear();
      localStorage.setItem("userData", JSON.stringify({ user: 'null' }))
      window.location = '../index.html'
    }).catch((error) => {
      let errorMessage = error.message;
      swal({
        title: "Error",
        text: errorMessage,
        icon: "error",
        button: "Ok",
      });
    });
}

//Events......

window.addEventListener('load', async () => {
  await checking()
})
async function checking() {
  let getU = await localStorage.getItem("userData")
  let dataU = JSON.parse(getU)
  // console.log(dataU)
  if(dataU.user !== "null"){
    document.getElementById("logBtn").style.display = "none";
    document.getElementById("lgObtn").style.display = "block";
  } else {
    document.getElementById("lgObtn").style.display = "none";
    document.getElementById("logBtn").style.display = "block";
  }
}

// window.addEventListener('load', () => {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../sw.js')
//     .then(() => {
//       console.log('service worker')
//     })
//   }
// })

function back() {
  alert("Are you sure you want to leave? Your progress will not be saved");
  window.location = "../index.html"
}

function sell() {
  let gett = localStorage.getItem('userData');
  let dataa = JSON.parse(gett)
  if (dataa.user !== 'null') {
    window.location = './pages/poster.html'
  }
  else {
    window.location = "./pages/form1.html"
  }
}

// Adding post.....
function post() {
  let categories = document.getElementById('category').value;
  let conditions = document.getElementById('condition').value;
  let adTitle = document.getElementById('title').value;
  let descriptions = document.getElementById('description').value;
  let prices = document.getElementById('price').value;
  let files = document.querySelector('#imgFile').files[0];
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let locations = document.getElementById('location').value;
  // console.log({ categories, conditions, adTitle, descriptions, prices, locations });
  let post = {
    categories: categories,
    conditions: conditions,
    title: adTitle,
    descriptions: descriptions,
    prices: prices,
    files: files,
    name:name,
    phone: phone,
    locations: locations
  }
  console.log(post);

  let userUid = firebase.auth().currentUser.uid;
  firebase.storage().ref('/').child(`images/${files.name}`).put(files)
    .then((pictures) => {
      pictures.ref.getDownloadURL()
        .then((imageUrl) => {
          post.files = imageUrl
          console.log(post)
          firebase.database().ref(`/adsToPublish`).child(categories).push(post)
          firebase.database().ref(`Ads/${categories}`).child(userUid).push(post)
            .then((success) => {
                if (success) {
                window.location = "../index.html"
              } else {
                console.error();
              }
              console.log(success)
            })
            .catch(function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              swal({
                text: errorMessage,
                title: "Error",
                icon: "error",
                button: "Ok"
              })
            })
        })

    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      swal({
        title: "Connection Error",
        text: errorMessage,
        icon: "warning",
        button: "OK",
      })
    });
}


function sellPage() {
  window.location = "../pages/poster.html";
}

function profile() {
  window.location = "../pages/profile.html"
}
