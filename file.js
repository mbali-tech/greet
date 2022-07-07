let theGreetFunction = greetingsFunction();

const theGreetBtn = document.querySelector(".greet");
const theResetBtn = document.querySelector(".reset");
const theText = document.querySelector(".name-text");
const theOutput = document.querySelector(".answer");
const greetings = document.querySelector(".numberOfGreetings");

let greetingInDifferentLangages = [];

function showingTheRedMessage(){
    document.getElementById("validate").style.visibility = "visible";
}

function greetingTheUser(){
    const radioBtnValue = document.querySelector("input[name='radioBtn']:checked");
    theGreetFunction.setName(theText.value.toLowerCase());

    if(!radioBtnValue){
        document.getElementById('validate').innerHTML = theGreetFunction.selectingTheLanguage();
        showingTheRedMessage();
    }

    if(theGreetFunction.checkingTheName() !== undefined){
        document.getElementById('validate').innerHTML = theGreetFunction.checkingTheName();
        showingTheRedMessage();
        return;
    }

    if(theGreetFunction.checkingTheNumber() !== undefined){
        document.getElementById('validate').innerHTML = theGreetFunction.checkingTheNumber();
        showingTheRedMessage();
        return;
    }

    if (!localStorage.getItem(theGreetFunction.getName())) {
       // if (radioBtnValue.value === "venda") greetingInDifferentLangages.push(theGreetFunction.languages().Tshivenda);
        if (radioBtnValue.value === "english") greetingInDifferentLangages.push(theGreetFunction.languages().English);
        //if (radioBtnValue.value === "zulu") greetingInDifferentLangages.push(theGreetFunction.languages().IsiZulu);
        if (radioBtnValue.value === "pedi") greetingInDifferentLangages.push(theGreetFunction.languages().SePedi);
        if (radioBtnValue.value === "sotho") greetingInDifferentLangages.push(theGreetFunction.languages().SeSotho);    
        localStorage.setItem('name', greetingInDifferentLangages);
        document.getElementById('validate').style.visibility = 'hidden';
    }else{
        document.getElementById('validate').innerHTML = theGreetFunction.greetingUserForSecondTime();
        showingTheRedMessage();
    }

    localStorage.setItem(theGreetFunction.getName(), theGreetFunction.getName());
    greetings.innerHTML = Object.keys(localStorage).length -1;
    theOutput.innerHTML = localStorage.getItem('name');
    greetingInDifferentLangages = [];
    theText.value = '';
}
greetings.innerHTML = Object.keys(localStorage).length -1;
theOutput.innerHTML = localStorage.getItem('name');

function reset() {
    greetingInDifferentLangages = [];
    localStorage.clear();
    greetings.innerHTML = Object.keys(localStorage).length;
    theOutput.innerHTML = "";
    theText.value = '';
    document.getElementById('validate').innerHTML = theGreetFunction.messageAfterTheResetBtnClicked();
    showingTheRedMessage();
}

theGreetBtn.addEventListener("click", greetingTheUser);
theResetBtn.addEventListener("click", reset);