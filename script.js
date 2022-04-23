let questions = [{
    "question": "Gallia in partes tres dividitur",
    "answer_1": "Gallien wurde in 3 Teile geteilt",
    "answer_2": "In Gallien wird auf 3 Partys ausgeteilt",
    "answer_3": "Gallien wird in 3 Teile geteilt",
    "answer_4": "In Gallien dividierte er durch 3",
    "right_answer": 3
},
{
    "question": "Rex militibus con suis in fines nostrae provinciae pervenit",
    "answer_1": "Rex gelangte mit seinen Soldaten an die Grenzen von unserer Provinz",
    "answer_2": "Der König gelangte mit seinem Militär an die Grenze unserer Provinz",
    "answer_3": "Der König gelangte mit seinen Soldaten zu unserer Provinz",
    "answer_4": "Der König gelangte mit seinen Soldaten an die Grenzen unserer Provinz",
    "right_answer": 4
},
{
    "question": "Iulia est puella tam pulchra quam rosae et lilia",
    "answer_1": "Iulia ist ein Mädchen, so schön wie Rosen und Lilien",
    "answer_2": "Iulia ist ein rosa und lila Mädchen",
    "answer_3": "Iulia ist schöner als Rosen und Lilien",
    "answer_4": "Iulia ist ein Mädchen, das gerne Rosen und Lilien mag",
    "right_answer": 1
},
{
    "question": "Caesar cum legionibus duobus ad Rhenum pervenit",
    "answer_1": "Caesar kam mit seinen Legionen zum Rhein",
    "answer_2": "Caesar und 2 Legionen kamen an den Rhein",
    "answer_3": "Caesar gelangte mit 2 Legionen an den Rhein",
    "answer_4": "Caesar schickte seine 2 Legionen zum Rhein",
    "right_answer": 3
}
];

let correctandfalsanswers = []; //hierrein pusch ich bei einer richtigen antwort "true", bei falscher "false"

let currentquestion = 0;
let numberofrightanswers = 0;


function init() {
    document.getElementById('amountofquestions').innerHTML = questions.length;
    showquestion();
}

function showquestion() { // show endscreen
    if (currentquestion == questions.length) {
        // fragen ausblenden
        document.getElementById('question-footer').classList.add('d-none');
        document.getElementById('answercontainer').classList.add('d-none');
        document.getElementById('finalscore').classList.remove('d-none');



        // show the final screen
        document.getElementById('finalscore').innerHTML += /*html*/ `
        <span>
            <p>Du hast <b>${numberofrightanswers}</b> von <b>${questions.length}</b> Fragen richtig!</p>
        </span>

        <button onclick="restart()" id="" class="nextquestionbutton">Quiz wiederholen</button>
        
        <button onclick="showendscreen()" id="" class="nextquestionbutton"><a
                        href="http://johannes-guenther.developerakademie.net/LATINA%20SIMPLEX/">Zurück zur
                        Startseite</a></button>
        `;
        resetanswerfields();

    } else { //show questions
        if (currentquestion == questions.length - 1) {
            document.getElementById('nextquestionbutton').innerHTML = 'Abschließen';
        }
            let percent = (currentquestion + 1) / questions.length;
            percent = Math.round(percent * 100);
        

        document.getElementById('progress').innerHTML = `
        <div id="progress-bar" class="progress-bar" role="progressbar" style="width: ${percent}%;" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">${percent} %</div>     
        `;
        if (percent == 100) {
            document.getElementById('progress-bar').classList.add('progressbarborderstyleleft');
        }


            let question = questions[currentquestion];  // die variable question ist das array questions an der stelle von der zahl von current question
            document.getElementById('questiontext').innerHTML = question['question'];
            document.getElementById('answer_1').innerHTML = question['answer_1'];
            document.getElementById('answer_2').innerHTML = question['answer_2'];
            document.getElementById('answer_3').innerHTML = question['answer_3'];
            document.getElementById('answer_4').innerHTML = question['answer_4'];
        }
    }


    function answer(selection) { // selection ist jetzt der name der id, weil wir das in der html datei so eingegeben haben

        let question = questions[currentquestion];
        // die variable question ist das array questions an der stelle von der zahl von current question
        let selectedquestionnumber = selection.slice(-1);  // hiermit holt man sich die letzte stelle also buchstabe von dem wert (x) ist die länge eder zeichen, die geholt wird.
        if (selectedquestionnumber == question['right_answer']) {
            document.getElementById(selection).classList.remove('white');
            document.getElementById(selection).classList.add('green');
            numberofrightanswers++;

        } else {
            document.getElementById(selection).classList.remove('white');
            document.getElementById(selection).classList.add('red');
            // richtige antwort grün machen
            let idofrightanswer = `answer_${question['right_answer']}`; // hier bildet man jetzt sich die id, indem man answer plus den entsprechenden wert vom array questions an der stelle von currentquestion(oben schon eingebaut in der var) mit der eigenschaft "right answer"

            document.getElementById(idofrightanswer).classList.remove('white');
            document.getElementById(idofrightanswer).classList.add('green');
        };
        document.getElementById('nextquestionbutton').disabled = false;
    }

    function nextquestion() {
        currentquestion++;
        questioncounter();
        document.getElementById('nextquestionbutton').disabled = true;
        resetcolors();
        showquestion();

    }

    function resetcolors() {
        document.getElementById('answer_1').classList.remove('green', 'red');
        document.getElementById('answer_2').classList.remove('green', 'red');
        document.getElementById('answer_3').classList.remove('green', 'red');
        document.getElementById('answer_4').classList.remove('green', 'red');
    }

    function questioncounter() {
        document.getElementById('questionnumber').innerHTML = currentquestion + 1;

    }

    function resetanswerfields() {
        document.getElementById('questiontext').innerHTML = 'Vielen Dank für deine Teilnahme!';
        document.getElementById('answer_1').innerHTML = '';
        document.getElementById('answer_2').innerHTML = '';
        document.getElementById('answer_3').innerHTML = '';
        document.getElementById('answer_4').innerHTML = '';
        document.getElementById('questionstyle').innerHTML = '';
    }

    function restart() {
        
    }
