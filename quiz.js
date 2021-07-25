const quiz = [{
        frage: "Wann wurde die Mebicode GmbH gegründet?",
        antworten: {
            a: "1970",
            b: "1980",
            c: "1990"
        },
        richtigeAntwort: "b"
    },
    {
        frage: "Wer war der erste große Kunde im Jahr 1982?",
        antworten: {
            a: "Volkswagen",
            b: "Daimler",
            c: "BMW"
        },
        richtigeAntwort: "c"
    },
    {
        frage: "Wie viel Umsatz erreichte die Mebicode GmbH zur Jahrtausendwende?",
        antworten: {
            a: "10 Millionen DM",
            b: "20 Millionen DM",
            c: "30 Millionen DM",
        },
        richtigeAntwort: "c"
    },
    {
        frage: "Wo wurde der zweite Standort des Unternehmens eröffnet?",
        antworten: {
            a: "Ingolstadt",
            b: "Stuttgart",
            c: "Berlin",
        },
        richtigeAntwort: "a"
    }
];

function rendereQuiz(daten, index) {
    let quiz = document.querySelector(".quiz");
    let html = ``;

    html = `<div class="quiz-frage">`;
    html += `<p>${daten[index].frage}</p>`;
    html += `</div>`;

    for (let buchstabe in daten[index].antworten) {
        html += `<div class="radio">`;
        html += `<label>`;
        html += `<input class="radio" type="radio" name="antwort" value="${buchstabe}" />`;
        html += `<span class="question">${daten[index].antworten[buchstabe]}</div>`;
        html += `</label>`;
        html += `</div>`;
    }

    // get next question    
    if (index < daten.length) {
        html += `<div class="quiz-next">`;
        html += `<input class="quiz-button" type="button" value="Weiter"/>`;
        html += `</div>`;

        quiz.innerHTML = html;

        let next = document.querySelector(".quiz-next");
        next.addEventListener("click", function () {
            let antwort = document.querySelector("input[name=antwort]:checked");
            let value = antwort.value;
            let richtigeAntwort = daten[index].richtigeAntwort;
            if (value === richtigeAntwort) {
                //wenn letzte frage
                if (index === daten.length - 1) {
                    quiz.innerHTML = `<div class="quiz-end">`;
                    quiz.innerHTML += `<p>Herzlichen Glückwunsch! Sie haben alle Fragen richtig beantwortet.</p>`;
                    quiz.innerHTML += `</div>`;
                } else {
                    rendereQuiz(daten, index + 1);
                }
            } else {
                antwort.nextSibling.style.color = "red";
            }
        });
    }
}

rendereQuiz(quiz, 0);