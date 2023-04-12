const highChol2 = document.getElementById("HighChol2");
const highChol = document.getElementById("HighChol");
const bmi = document.getElementById("bmi");
const smoke = document.getElementById("smoke");
const stroke = document.getElementById("stroke");
const heartAttack = document.getElementById("HeartAttack");
const phyAct = document.getElementById("phyact");
const alcohol = document.getElementById("Alcohol");
const genhlt = document.getElementById("Genhlt");
const menhlt = document.getElementById("menhlt");
const Phyhlt = document.getElementById("phyhlt");
const Diffwalk = document.getElementById("DiffWalk");
const Age = document.getElementById("age");
const Education = document.getElementById("education");
const Income = document.getElementById("income");


function validPressure() {
    if (highChol2.value === "option") {
        alert("Please select an option for high blood pressure.");
        highChol2.focus();
        return false;
    }
}

function validChol() {
    if (highChol.value === "option") {
        alert("Please select an option for high cholesterol.");
        highChol.focus();
        return false;
    }
}

function validBmi() {
    if (bmi.value === '' || isNaN(bmi.value) || bmi.value < 0 || bmi.value > 50) {
        alert("Please enter a valid BMI.");
        bmi.focus();
        return false;
    }
}

function validSmoke() {
    if (smoke.value === "option") {
        alert("Please select an option for smoking.");
        smoke.focus();
        return false;
    }
}

function validStroke() {
    if (stroke.value === "option") {
        alert("Please select an option for stroke.");
        stroke.focus();
        return false;
    }
}

function validattac() {
    if (heartAttack.value === "option") {
        alert("Please select an option for heart disease/attack.");
        heartAttack.focus();
        return false;
    }
}

function validPhyact() {
    if (phyAct.value === "option") {
        alert("Please select an option for regular exercise.");
        phyAct.focus();
        return false;
    }
}

function validAlco() {
    if (alcohol.value === "option") {
        alert("Please select an option for alcohol consumption.");
        alcohol.focus();
        return false;
    }
}

function validGenhlt() {
    if (genhlt.value === "option") {
        alert("Please select an option for general health.");
        genhlt.focus();
        return false;
    }
}

function validMenhlt() {
    if (menhlt.value === '' || isNaN(menhlt.value) || menhlt.value < 0 || menhlt.value > 30) {
        alert("Please enter a valid number for mental health.");
        menhlt.focus();
        return false;
    }
}

function validphyact() {
    if (Phyhlt.value === '' || isNaN(Phyhlt.value) || Phyhlt.value < 0 || Phyhlt.value > 30) {
        alert("Please enter a valid number for Physical health.");
        Phyhlt.focus();
        return false;
    }
}

function validDiffwalk() {
    if (Diffwalk.value === "option") {
        alert("Please select an option for Difficulty in walking.");
        Diffwalk.focus();
        return false;
    }
}

function validAge() {
    if (Age.value === '' || isNaN(Age.value) || Age.value < 0 || Age.value > 100) {
        alert("Please enter a valid Age.");
        Age.focus();
        return false;
    }
}

function validEdu() {
    if (Education.value === "option") {
        alert("Please select an option for Education.");
        Education.focus();
        return false;
    }
}

function validIncome() {
    if (Income.value === "option") {
        alert("Please select an option for Income.");
        Income.focus();
        return false;
    }
}



