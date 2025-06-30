const num1Input=document.getElementById('num1');    
const num2Input=document.getElementById('num2');
const operationSelect=document.getElementById("operation");
const resultPara=document.getElementById("result");
const calcButton= document.getElementById("calculateBtn");

calcButton.addEventListener("click",function(){
    const num1 = Number(num1Input.value);          
    const num2= Number(num2Input.value);
    const operation = operationSelect.value;
    let result;            
    if (operation ==="+")
      {
         result = num1+num2;
      }
    else if (operation ==="-")
        {
           result = num1-num2;
        }
    else if (operation ==="*")
        {
            result=num1*num2;
        }
    else if (operation=== "/")
        {
            result = num1/num2;

        }      
    resultPara.textContent = "Result: " + result;
})
