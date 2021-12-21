// Declared my variables
let time = document.getElementById('countdown');
let startBtn = document.getElementById("start-button");
let resetBtn = document.getElementById('reset-button');
let saveBtn = document.getElementById("Save_user");
let score = document.getElementById("results")
let user = [];

let Question1 = document.getElementById('Question1');
let Question2 = document.getElementById('Question2');
let Question3 = document.getElementById('Question3');
let Question4 = document.getElementById('Question4');

let Q1A = document.getElementById('Q1_A');
let Q1B = document.getElementById('Q1_B');
let Q1C = document.getElementById('Q1_C');
let Q1D = document.getElementById('Q1_D');

let Q2A = document.getElementById('Q2_A');
let Q2B = document.getElementById('Q2_B');
let Q2C = document.getElementById('Q2_C');
let Q2D = document.getElementById('Q2_D');

let Q3A = document.getElementById('Q3_A');
let Q3B = document.getElementById('Q3_B');
let Q3C = document.getElementById('Q3_C');
let Q3D = document.getElementById('Q3_D');

let Q4A = document.getElementById('Q4_A');
let Q4B = document.getElementById('Q4_B');
let Q4C = document.getElementById('Q4_C');
let Q4D = document.getElementById('Q4_D');


startBtn.addEventListener( "click" , function(){
    Question1.style.visibility = "visible"; // NEED TO APPLY THIS TO ALL FUNTIONCS



var seconds = 50;
var timeLeft = setInterval(startCount, 1000);

function startCount() {
    document.getElementById('countdown').innerHTML = seconds + "sec left";
    seconds--;
    if (seconds == -1) {
        clearInterval(timeLeft);
        alert("Out Of Time!");
    }
}
});

// Wrong Answers
Q1A.addEventListener("click" , wrongAnswers1);
Q1C.addEventListener("click" , wrongAnswers1);
Q1D.addEventListener("click" , wrongAnswers1);

Q2B.addEventListener("click" , wrongAnswers2);
Q2C.addEventListener("click" , wrongAnswers2);
Q2D.addEventListener("click" , wrongAnswers2);

Q3A.addEventListener("click" , wrongAnswers3);
Q3B.addEventListener("click" , wrongAnswers3);
Q3C.addEventListener("click" , wrongAnswers3);

Q4A.addEventListener("click" , wrongAnswers4);
Q4B.addEventListener("click" , wrongAnswers4);
Q4C.addEventListener("click" , wrongAnswers4);


function wrongAnswers1(){
    if(Q1A.value === "False" || Q1C.value === "False" || Q1D.value === "False" )
        console.log("Incorrect")
            Question1.style.visibility = "hidden";
            Question2.style.visibility = "visible";
}

function wrongAnswers2(){
    if(Q2A.value === "False" || Q2C.value === "False" || Q2D.value === "False" )
        console.log("Incorrect")
            Question2.style.visibility = "hidden";
            Question3.style.visibility = "visible";
    }

function wrongAnswers3(){
    if(Q3A.value === "False" || Q3C.value === "False" || Q3D.value === "False" )
            console.log("Incorrect")
                Question3.style.visibility = "hidden";;
                Question4.style.visibility = "visible";;
        }

function wrongAnswers4(){
        if(Q4A.value === "False" || Q3C.value === "False" || Q3D.value === "False" )
                console.log("Incorrect")
                    Question4.style.visibility = "hidden";
    }




// Correct Answers 

Q1B.addEventListener("click" , Firstquestion);
Q2A.addEventListener("click" , Secondquestion);
Q3D.addEventListener("click" , Thirdquestion);
Q4D.addEventListener("click" , Forthquestion);

function Firstquestion(){
    if (Q1B.value === "True"){
        console.log("Correct!")
        Question1.style.visibility = "hidden";
        Question2.style.visibility = "visible";
    }

}

function Secondquestion(){
    if (Q2A.value === "True"){
        console.log("Correct!")
        Question2.style.visibility = "hidden";
        Question3.style.visibility = "visible";
    }
}

function Thirdquestion(){
    if (Q3D.value === "True"){
        console.log("Correct!")
        Question3.style.visibility = "hidden";
        Question4.style.visibility = "visible";
    }
}

function Forthquestion(){
    if (Q4D.value === "True"){
        console.log("Correct!")
        Question4.style.visibility = "hidden";

    }
}
