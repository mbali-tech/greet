let names;
if(localStorage.getItem("names")){
    names = localStorage.getItem("names").split(",");
}
let theGreetFunction = greetingsFunction(names);

const theGreetBtn = document.querySelector(".greet");
const theResetBtn = document.querySelector(".reset");
const theText = document.querySelector(".name-text");
const theOutput = document.querySelector(".answer");
const greetings = document.querySelector(".numberOfGreetings");

function showingTheRedMessage(){
    document.getElementById("validate").style.visibility = "visible";
}

greetings.innerHTML = theGreetFunction.getAllGreetedNames().length;

function greetingTheUser(){
    const radioBtnValue = document.querySelector("input[name='radioBtn']:checked");
    theGreetFunction.setName(theText.value);

    if(!radioBtnValue){
        document.getElementById('validate').innerHTML = theGreetFunction.selectingTheLanguage();
        showingTheRedMessage(); 
    }

    if(theGreetFunction.checkingTheName() !== undefined){
        document.getElementById('validate').innerHTML = theGreetFunction.checkingTheName();
        showingTheRedMessage();
        return;
    }

    if (!theGreetFunction.greetingUserForSecondTime()) {
        if (radioBtnValue.value === "english"){
            theOutput.innerHTML = theGreetFunction.languages().English;
        } 
        else if (radioBtnValue.value === "pedi"){
            theOutput.innerHTML = theGreetFunction.languages().SePedi;
        }
        else if (radioBtnValue.value === "sotho") {
            theOutput.innerHTML = theGreetFunction.languages().SeSotho;
        }    
        theGreetFunction.addGreetedName();
        localStorage.setItem('names', theGreetFunction.getAllGreetedNames());
        document.getElementById('validate').style.visibility = 'hidden';
    }else{
        document.getElementById('validate').innerHTML = theGreetFunction.greetingUserForSecondTime();
        showingTheRedMessage();
    }
    greetings.innerHTML = theGreetFunction.getAllGreetedNames().length;
    theText.value = '';
}

function reset() {
    localStorage.clear();
    theGreetFunction.resetNamesGeeted();
    greetings.innerHTML = theGreetFunction.getAllGreetedNames().length;
    theOutput.innerHTML = "";
    theText.value = '';
    document.getElementById('validate').innerHTML = theGreetFunction.messageAfterTheResetBtnClicked();
    showingTheRedMessage();
}

theGreetBtn.addEventListener("click", greetingTheUser);
theResetBtn.addEventListener("click", reset);