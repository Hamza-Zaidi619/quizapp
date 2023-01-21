 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA55WQVe7mK8aQpdG5aCQBko7VrIfzs6yg",
   authDomain: "quiz-app-ui.firebaseapp.com",
   databaseURL: "https://quiz-app-ui-default-rtdb.firebaseio.com",
   projectId: "quiz-app-ui",
   storageBucket: "quiz-app-ui.appspot.com",
   messagingSenderId: "640312622832",
   appId: "1:640312622832:web:0761948d3aa4e095d18c35",
   measurementId: "G-4SLFW2VE1C"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()

 var loader= document.getElementById("loader")
 var showloader = document.getElementById("showloader")

 function getDataFromDatabase(){
    loader.style.display ='block'
    showloader.style.display = 'none'
    const reference = ref(db,'questions/')
    onChildAdded(reference,function(data){
        console.log(data.val())
        questions.push(data.val())
        loader.style.display ='none'
        showloader.style.display = 'block'
        questrender()
    })
 }
getDataFromDatabase()

var questions = []


    var currentquestion = document.getElementById("currentquestion");
    var totalquestion = document.getElementById("totalquestion");
    var question = document.getElementById("question");
    var answerparent = document.getElementById("answerparent");
    var indexnumber=0
    var score = 0

    window.checkquestion = function (a,b){
        if (a==b){
            score++
            console.log(score)
        }
        
        nextquestion()
    }
    var marks = document.getElementById("marks")

    
    window.nextquestion= function() {

        if(indexnumber + 1 == questions.length){
        // alert("Your score is"+ score)
        marks.innerHTML= "Your score is"+score
          
        } else{ 
            indexnumber++
            questrender()
        }
    }

    function questrender() {
currentquestion.innerHTML= indexnumber + 1
totalquestion.innerHTML = questions.length

var obj = questions[indexnumber]
question.innerHTML = obj.question

answerparent.innerHTML = ""

for(var i =0; i< obj.options.length; i++){
    answerparent.innerHTML += `<div class="col-md-4">
    <div class="py-2">
        <button onclick="checkquestion('${obj.options[i]}','${obj.correctanswer}')" class="btn btn-dark fs-4 rounded-pill w-100">
        ${obj.options[i]}
        </button>
        </div>
    </div>`

}

 
    }

    questrender()

    window.nextquestion= function() {
        indexnumber++
        questrender()
    }

  