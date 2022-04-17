let questions = [{
    "question": "Gallia in partes tres dividitur",
    "answer_1": "Gallien wurde in 3 Teile geteilt",
    "answer_2": "In Gallien wird auf 3 Partys geteilt",
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
}
];

let currentquestion = 0;


function init() {
    document.getElementById('amountofquestions').innerHTML = questions.length;
    showquestion();
}

function showquestion() {
    if (currentquestion == questions.length) {

        document.getElementById('question-footer').classList.add('d-none');
        document.getElementById('answercontainer').classList.add('d-none');
        document.getElementById('finalscore').classList.remove('d-none')
        resetanswerfields();

    } else {
        let question = questions[currentquestion];  // die variable question ist das array questions an der stelle von der zahl von current question
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {

    let question = questions[currentquestion];
    // die variable question ist das array questions an der stelle von der zahl von current question
    let selectedquestionnumber = selection.slice(-1);  // hiermit holt man sich die letzte stelle also buchstabe von dem wert
    if (selectedquestionnumber == question['right_answer']) {
        document.getElementById(selection).classList.remove('white');
        document.getElementById(selection).classList.add('green');

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