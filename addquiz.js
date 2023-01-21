 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,set,ref,push} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

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

 var question = document.getElementById("question")
 var option = document.getElementById("option")
 var correctanswerelem = document.getElementById("correctanswer")

 var options =[]
 var correctanswer

 function renderoptions(){
    optionsParent.innerHTML= ''
    for(var i=0;i<options.length;i++){
        optionsParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class ='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li.`
    }
 }
 window.addoption = function(){
options.push(option.value)
console.log(options)
renderoptions()


 }

 window.setCorrectAnswer = function(a){
correctanswer=a
correctanswerelem.innerHTML=correctanswer
 }


 window.submitquestion= function(){
    var obj = {
        question: question.value,
        options:options,
        correctanswer:correctanswer,
    }
    obj.id = push(ref(db,'questions/')).key

    const reference = ref(db,`questions/${obj.id}`)
    set(reference,obj)
    console.log(obj)
 }
