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
    }/*,
    Q2: {
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
        q: "What is the name for the Jewish New Year?",
        a: [
            "Rosh Hashanah",
            "Yom Kippur",
            "Kwanzaa",
            "Hannukah",
        ],
        correct: 1
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
    Q8: {
        q: "How many blue stripes does the United States of America national flag have?",
        a: [
            "0",
            "6",
            "7",
            "13",
        ],
        correct: 1
    },
    Q9: {
        q: "What religion is the most practiced one in India?",
        a: [
            "Sikhism",
            "Islam",
            "Hinduism",
            "Shinto",
        ],
        correct: 3
    },
    Q10: {
        q: "Which country hosted the Summer Olympics in 2016?",
        a: [
            "Spain",
            "Brazil",
            "China",
            "Greece",
        ],
        correct: 2
    } */
};
var questionsNumber = Object.keys(allQuestions)
questionsNumber.map(String);

var Qcount = 0;
var score = 0;
var correctAnswer;
var L2 = "#lineTwo";
var A0 = "#line00";
var A1 = "#line01";
var A2 = "#line02";
var A3 = "#line03";
var A4 = "#line04";

// start button - hide / show / change
var btnStart = $("#btn_start");
function hideButton(btn) {
    $(btn).addClass("invisible");
}
function showButton(btn) {
    $(btn).removeClass("invisible");
}
function changeButtonToRestart(btn) {
    $(btn).removeClass("btn-success");
    $(btn).addClass("btn-warning");
    $(btn).text("RESTART");
}

// start game
$(btnStart).on("click", function () {
    $(L2).text("");
    showButton(A1);
    showButton(A2);
    showButton(A3);
    showButton(A4);
    hideButton(btnStart);
    question20Sgenerator()
});

// bring new questions
function newQuestion(Qnumber) {
    $("#line00").text(allQuestions[Qnumber].q);
    $("#line01").text(allQuestions[Qnumber].a[0]);
    $("#line02").text(allQuestions[Qnumber].a[1]);
    $("#line03").text(allQuestions[Qnumber].a[2]);
    $("#line04").text(allQuestions[Qnumber].a[3]);
    Qcount = Qcount + 1;
    correctAnswer = allQuestions[Qnumber].correct;
}

// questions generator
function question20Sgenerator() {
    yesClickonAnswer();
    if (questionsNumber.length === Qcount) {
        // end game events: 
        $(L2).text("You got " + score + "/" + questionsNumber.length);
        showButton(btnStart);
        changeButtonToRestart(btnStart);
        $(A0).text("");
        hideButton(A1);
        hideButton(A2);
        hideButton(A3);
        hideButton(A4);
    } else {
        newQuestion(questionsNumber[Qcount]);
        clock();
    }
}

// clock
var seconds;
var haveBeenClicked;
var intervalId;
function clock() {
    seconds = 20;
    intervalId = setInterval(clockRun, 1000);
}
function clockRun() {
    if (haveBeenClicked === true) {
        haveBeenClicked = false;
        stopClock();
        setTimeout(function () {
            question20Sgenerator();
        }, 5000);

    } else if (seconds === 0) {
        stopClock();
        noClickonAnswer();
        var Right = "#line0" + correctAnswer;
        colorRightA(Right);
        $(L2).text("Time's up");
        setTimeout(function () {
            question20Sgenerator();
        }, 5000);

    } else {
        seconds = seconds - 1;
        $(L2).text(seconds);
    }
}
function stopClock() {
    clearInterval(intervalId);
}

// btn un/click
function noClickonAnswer() {
    $(A1).prop('disabled', true);
    $(A2).prop('disabled', true);
    $(A3).prop('disabled', true);
    $(A4).prop('disabled', true);
}
function yesClickonAnswer() {
    $(A1).prop('disabled', false);
    $(A2).prop('disabled', false);
    $(A3).prop('disabled', false);
    $(A4).prop('disabled', false);
}

// coloring answers
function colorRightA(answerNunber) {
    $(answerNunber).css("background", "rgba(21, 255, 0, 0.3)");
    setTimeout(function () {
        $(answerNunber).css("background", "");
        readyNextQ();
    }, 4000);
}
var wrightAnswer;
function colorWrongA(answerNunber) {
    wrightAnswer = "#line0" + correctAnswer;
    $(answerNunber).css("background", "rgba(255, 0, 0, 0.3)");
    $(wrightAnswer).css("background", "rgba(21, 255, 0, 0.3)");
    setTimeout(function () {
        $(answerNunber).css("background", "");
        $(wrightAnswer).css("background", "");
        readyNextQ();
    }, 4000);
}

// next question text
function readyNextQ() {
    if (questionsNumber.length != Qcount) {
        $(L2).text("Get ready for the next question");
    }
}


// checking answer 1
$(A1).on("click", function () {
    haveBeenClicked = true;
    noClickonAnswer();
    if (correctAnswer === 1) {
        colorRightA(A1);
        score = score + 1;
        $(L2).text("Correct!");
    } else {
        colorWrongA(A1);
        $(L2).text("Wrong!");
    }
});
// checking answer 2
$(A2).on("click", function () {
    haveBeenClicked = true;
    noClickonAnswer();
    if (correctAnswer === 2) {
        colorRightA(A2);
        score = score + 1;
        $(L2).text("Correct!");
    } else {
        colorWrongA(A2);
        $(L2).text("Wrong!");
    }
});
// checking answer 3
$(A3).on("click", function () {
    haveBeenClicked = true;
    noClickonAnswer();
    if (correctAnswer === 3) {
        colorRightA(A3);
        score = score + 1;
        $(L2).text("Correct!");
    } else {
        colorWrongA(A3);
        $(L2).text("Wrong!");
    }
});
// checking answer 4
$(A4).on("click", function () {
    haveBeenClicked = true;
    noClickonAnswer();
    if (correctAnswer === 4) {
        colorRightA(A4);
        score = score + 1;
        $(L2).text("Correct!");
    } else {
        colorWrongA(A4);
        $(L2).text("Wrong!");
    }
});