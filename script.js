let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = ""

for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('Button Text is:',buttonText);
    if (buttonText == 'X'){
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText == "C") {
      screenValue = '';
      screen.value = screenValue;

    }
    else if (buttonText == "=") {
      screen.value = eval(screenValue);
    }
    else if(buttonText=="del"){
      screenValue=screenValue.slice(0,-1); 
      screen.value=screenValue;
    }
    // else if(screenValue=""){
    //     document.getElementById("equal").disabled=true;    
    // }
    // else if(screenValue!=""){
    //       screen.value = screenValue;
    // }
    else{
      screenValue += buttonText;
      screen.value = screenValue;
      }
  })
}