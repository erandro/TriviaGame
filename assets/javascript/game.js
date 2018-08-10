var allQuestions = {
    Q1: {
        q: "Which US President is most to the left on the Mount Rushmore National Memorial?",
        a: [
            "George Washington",
            "Abraham Lincoln",
            "Thomas Jefferson",
            "Theodore Roosevelt",
        ],
        correct: 1
    }, Q2: {
        q: "What is the name of the boxer whose life story is depicted in the 1999 movie 'The Hurricane'?",
        a: [
            "Rubin Carter",
            "Muhammad Ali",
            "Rocky Marciano",
            "Jake LaMotta",
        ],
        correct: 1
    },
    Q3: {
        q: "What did Alfred Nobel develop?",
        a: [
            "Dynamite",
            "Gunpowder",
            "Nobelium",
            "Atomic bomb",
        ],
        correct: 1
    },
    Q4: {
        q: "In which language was the book 'War and Peace' originally written?",
        a: [
            "French",
            "English",
            "German",
            "Russian",
        ],
        correct: 4
    },
    Q5: {
        q: "Other than eggs, what is a primary ingredient in Eggs Florentine?",
        a: [
            "Avocado",
            "Spinach",
            "Gorgonzola",
            "Ham",
        ],
        correct: 2
    },
    Q6: {
        q: "What was the first successful vaccine developed in history?",
        a: [
            "Smallpox",
            "Cholera",
            "Rabies",
            "Scarlet Fever",
        ],
        correct: 4
    },
    Q7: {
        q: "What is the color of Donald Duck's bowtie?",
        a: [
            "Yellow",
            "Green",
            "Blue",
            "Red",
        ],
        correct: 4
    },
};

var questionsNumber = Object.keys(allQuestions)
var Qcount = 0;
var score = 0;
var correctAnswer;


//working
function newQuestion() {
    $("#line00").text(allQuestions.Q1.q);
    $("#line01").text(allQuestions.Q1.a[0]);
    $("#line02").text(allQuestions.Q1.a[1]);
    $("#line03").text(allQuestions.Q1.a[2]);
    $("#line04").text(allQuestions.Q1.a[3]);
    Qcount = Qcount + 1;
    correctAnswer = allQuestions.Q1.correct;
}
//not working
//newQuestion_Test(Q2);
function newQuestion_Test(Qnumber) {
    $("#line00").text(allQuestions.Qnumber.q);
    $("#line01").text(allQuestions.Qnumber.a[0]);
    $("#line02").text(allQuestions.Qnumber.a[1]);
    $("#line03").text(allQuestions.Qnumber.a[2]);
    $("#line04").text(allQuestions.Qnumber.a[3]);
    Qcount = Qcount + 1;
    correctAnswer = allQuestions.Q1.correct;
}

// start game
$(".btn").on("click", function () {
    hideButton()
    newQuestion()
    //question20Sgenerator()
});

// button hide / show
function hideButton() {
    $("button").css("display", "none");
}
function showButton() {
    $("button").css("display", "inline-block");
}

function question20Sgenerator() {
    if (questionsNumber.length === Qcount) {
        // end game events
    } else {
        // argument for newQuestion should be from arrey that adds up
        newQuestion()
        setTimeout(function () {
            question20Sgenerator()
        }, 20000);
    }
}

var A1 = "#line01";
var A2 = "#line02";
var A3 = "#line03";
var A4 = "#line04";

// checking answer 1
$(A1).on("click", function () {
    if (correctAnswer === 1) {
        $(A1).css("background", "rgba(21, 255, 0, 0.3)");
        setTimeout(function () {
            $(A1).css("background", "");
        }, 3000);
    } else {
        $(A1).css("background", "rgba(255, 0, 0, 0.3)");
        setTimeout(function () {
            $(A1).css("background", "");
        }, 3000);
        var wrightAnswer = "#line0" + correctAnswer;
        $(wrightAnswer).css("background", "rgba(21, 255, 0, 0.3)");
        setTimeout(function () {
            $(wrightAnswer).css("background", "");
        }, 3000);
    }
});
// checking answer 2
$(A2).on("click", function () {
    if (correctAnswer === 2) {
        $(A2).css("background", "rgba(21, 255, 0, 0.3)");
        setTimeout(function () {
            $(A2).css("background", "");
        }, 3000);
    } else {
        $(A2).css("background", "rgba(255, 0, 0, 0.3)");
        setTimeout(function () {
            $(A2).css("background", "");
        }, 3000);
        var wrightAnswer = "#line0" + correctAnswer;
        $(wrightAnswer).css("background", "rgba(21, 255, 0, 0.3)");
        setTimeout(function () {
            $(wrightAnswer).css("background", "");
        }, 3000);
    }
});




