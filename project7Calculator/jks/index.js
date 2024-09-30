let numble1 = 0;
let numble2 = 0;
let opera = '';
let flag = true;
const inputField = document.getElementById('inputField');
//定义全局变量存储数字与符号，及判断是否是第二次运算
function input(value){
    
    inputField.value += value;
    if (flag) {
        numble1 = parseFloat(inputField.value);
    }else{
        numble2 = parseFloat(inputField.value);
    }
    judge(inputField);
    
}
//输入input函数，按数字将输入数字并存在numble中

function operation(ope){
    document.getElementById('inputField').value = '';
    opera = ope;
    flag = false;
}
//输入操作函数，记录其符号，并使判断为第二个数
function result(){
    switch (opera) {
        case '+':
            inputField.value = numble1 + numble2;
            numble1 = parseFloat(inputField.value);
            judge(inputField);
            break;
        case '-':
            inputField.value = numble1 - numble2;
            numble1 = parseFloat(inputField.value);
            judge(inputField);
            break;
        case '*':
            inputField.value = numble1 * numble2;
            numble1 = parseFloat(inputField.value);
            judge(inputField);
            break;
        case '/':
            if(numble2 == 0){
                inputField.value = 'error';
            }else{
                inputField.value = numble1 / numble2;
                numble1 = parseFloat(inputField.value);
                judge(inputField);
            }        
            break;
        default:
            inputField.value = 'Error';
    }
    flag = true;
}
//等号输出函数，判断记录符号并进行相应的运算
function clearLastInput() {
    
    let inputValue = inputField.value;

    if (inputValue.length > 0) {
        inputField.value = inputValue.substring(0, inputValue.length - 1);
    }

    // 更新 numble1 或 numble2
    if (flag) {
        numble1 = parseFloat(inputField.value);
    } else {
        numble2 = parseFloat(inputField.value);
    }
}


//清除末尾的数
function clearAll(){
    document.getElementById('inputField').value = '';
    numble1 = 0;
    numble2 = 0;
    opera = '';
    flag = true;
}
//清除全部的数
function judge(numble){
    
    let inputValue = inputField.value;

    if(inputValue.length > 8){
        inputField.value = 'error';
    }
}