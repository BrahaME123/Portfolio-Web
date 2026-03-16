/**/ 

const promptInput = document.getElementById("promptInput");
const terminal = document.getElementById("terminal");
const terminalWindow = document.getElementById("terminalWindow");
const date = document.getElementById('date');


date.innerText = new Date().toDateString();
terminalWindow.addEventListener('click', () => promptInput.focus());


promptInput.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        enterCommand(event);
    }
});

const enterCommand = (event) =>{

   const promptElement = document.getElementById('promptClone').cloneNode(true);

   promptElement.classList.remove('hidden');
   promptElement.getElementsByClassName('promptCloneInput')[0].innerHTML = event.target.value;

   promptElement.setAttribute('id',null);
   promptElement.getElementsByClassName('promptCloneContent')[0].appendChild(selectCommandBlock(event.target.value));

   terminal.appendChild(promptElement);

   promptInput.value = ''; 
   promptInput.scrollIntoView({block: 'start'});

};

const selectCommandBlock = (command) => {
    const lowerCommand = command.toLowerCase();
    switch (lowerCommand){
        case 'help':

        case 'about':
        
        case 'skills':

        case 'socials':

        case 'projects':

        case 'experience':
    
        case 'education':
            return getCommandTemplate(lowerCommand);

        case 'clear':
            return clearCommand();

        default:
            return notFoundCommand(command);
    }
};

const getCommandTemplate = (command) => {
    const element = document.getElementById(command).cloneNode(true);
    element.classList.remove('hidden');
    element.setAttribute('id',null);

    return element;
};

const clearCommand = (command) =>{
    terminal.innerHTML = '';
    const element = document.createElement('span');    
    return element ;
};

const notFoundCommand = (command) => {
    const element = document.createElement('span');
    element.innerText = `- bash: '${command}' command not found`;
    
    element.classList.add('error');
    /*err.innerHTML = 'couldnt find the command';*/ 
    return element;
};