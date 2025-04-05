const btn1=document.getElementById("n1");
const btn2=document.getElementById("n2");
const btn3=document.getElementById("n3");
const btn4=document.getElementById("n4");
const btn5=document.getElementById("n5");
const btn6=document.getElementById("n6");
const btn7=document.getElementById("n7");
const btn8=document.getElementById("n8");
const btn9=document.getElementById("n9");
const btn0=document.getElementById("n0");
const clrsc= document.getElementById("clsr");
const mul= document.getElementById("mul");
const div= document.getElementById("divd");
const add= document.getElementById("add");
const sub= document.getElementById("sub");
const result= document.getElementById("res");
const display= document.getElementById("ipt");

const calculate = () => {
    try {
        // Ensure proper evaluation by replacing x with * and other minor tweaks
        let result = eval(display.value.replace('x', '*').replace('/', '/').replace('+', '+').replace('-', '-'));
        display.value = result;
    } catch {
        display.value = "Error"; // Display error if the expression is invalid
    }
};

const clearsc=()=>{
    display.value="";
};

const appendValue=(value)=>{
    display.value += value;
};

btn1.addEventListener('click',()=> appendValue('1'));
btn2.addEventListener('click',()=>appendValue('2'));
btn3.addEventListener('click',()=>appendValue('3'));
btn4.addEventListener('click',()=>appendValue('4'));
btn5.addEventListener('click',()=>appendValue('5'));
btn6.addEventListener('click',()=>appendValue('6'));
btn7.addEventListener('click',()=>appendValue('7'));
btn8.addEventListener('click',()=>appendValue('8'));
btn9.addEventListener('click',()=>appendValue('9'));
btn0.addEventListener('click',()=>appendValue('0'));
mul.addEventListener('click',()=>appendValue('*'));
div.addEventListener('click',()=>appendValue('/'));
add.addEventListener('click',()=>appendValue('+'));
sub.addEventListener('click',()=>appendValue('-'));

clrsc.addEventListener('click',clearsc);

result.addEventListener('click',calculate);