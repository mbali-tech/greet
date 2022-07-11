function greetingsFunction(array){
    let names = array || [];
    let name = '';

    function setName(theName){
        name = theName.toLowerCase();
    }

    function getName(){
        return name;
    }

    function checkingTheName(){
        if(!/^[a-zA-Z]+$/.test(getName()))
            return 'Name is not valid!';
    }

    function greetingUserForSecondTime(){
        if(getAllGreetedNames().includes(getName()))
            return "This name has been greeted"
    }

    function selectingTheLanguage(){
        return 'Please select the language';
    }
    
    function messageAfterTheResetBtnClicked(){
        return 'You have deleted all the names';
    }

    const languages = () => {
        return {
            English: `Hello ${getName()}`,
            SePedi: `Thobela ${getName()}`,
            SeSotho: `Dumela ${getName()}`,
        }
    };

    function getAllGreetedNames(){
        return names;
    }

    function addGreetedName(){
        names.push(getName())
    }

    function resetNamesGeeted(){
        names = [];
    }

    return{
        setName,
        getName,
        languages,
        checkingTheName,
        greetingUserForSecondTime,
        selectingTheLanguage,
        messageAfterTheResetBtnClicked,
        getAllGreetedNames,
        addGreetedName,
        resetNamesGeeted
    }
}