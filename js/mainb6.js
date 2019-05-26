var firebaseConfig = {
    apiKey: "AIzaSyC5zgLbp_K_INtqcMs5ipYVu6Zrg-Jg9S4",
    authDomain: "mfj-feedback2.firebaseapp.com",
    databaseURL: "https://mfj-feedback2.firebaseio.com",
    projectId: "mfj-feedback2",
    storageBucket: "mfj-feedback2.appspot.com",
    messagingSenderId: "263906836506",
    appId: "1:263906836506:web:7e5cd02d5543fdb3" 
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$('#comment-form').on('submit', function (e) {
  e.preventDefault();
  var userInput = $('#comment').val();
  $('#comment').val();
  
 var commentsReference = database.ref('comments');
 commentsReference.push({comment: userInput});

});

function getComments() {
  database.ref('comments').on('value', function (results) {
    var allComments = results.val();
    var comments = [];

    for (var item in allComments) {
      var context = {
          comment: allComments[item].comment,
          commentId: item
      };
    
      var source = $("#comment-template").html();
      var template = Handlebars.compile(source);
      var commentListElement = template(context);
      comments.push(commentListElement)
    }
});
}

$('.comments').empty()

for (var i in comments) {
   var comments = [];
   $('.comments').append(comments[i])
    }


getComments();


