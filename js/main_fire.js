  var firebaseConfig = {
    apiKey: "AIzaSyDfrd3uPxJRDojluE74Q_32pEFVdxLP1Zk",
    authDomain: "gdems-a4e20.firebaseapp.com",
    databaseURL: "https://gdems-a4e20.firebaseio.com",
    projectId: "gdems-a4e20",
    storageBucket: "gdems-a4e20.appspot.com",
    messagingSenderId: "82553094709",
    appId: "1:82553094709:web:b6b661671f11b03e"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

 
$('#hcolumn2 a').on('mouseenter', function () {
    var header = document.getElementsByTagName('header')[0];
      header.style.backgroundImage = 'url(images/GAsp_FadeIn1cr.gif)';
    $('#eyw').css('color', 'yellow');
    $('#wtm').css('color', 'red');
 });


// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


