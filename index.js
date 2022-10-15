const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("button"));
// const button1 = Array.from(buttons)
// const button2 = document.querySelectorAll(".buttons")

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = ""
                break;
            case '=': display.innerText = eval(display.innerText);
                break;
            case '←': display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


// console.log(buttons);
// console.log(button1);
// console.log(button2);

// try{
//     display.innerText = eval(display.innerText);
// } catch {
//     display.innerText = "Error"
// }
// if (display.innerText){
//     display.innerText = display.innerText.slice(0, -1);
//  }