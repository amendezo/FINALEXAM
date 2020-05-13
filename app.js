function warning(type, num, val){
    if(type == 1){
        str = "Number "
        str += num.toString()
        str += " input "
        str += val
        str += " is not a valid number\n"
        return str;
    }else{
        str = "Number "
        str += num.toString()
        str += " input "
        str += val
        str += " is not in range 2 and 1000\n"
        return str;
        
    }
}

function validate(a, b){
    message = "";
    var count = 0;
    if (Number.isNaN(Number(a))){
        message += warning(1, 1, a);
        count+= 1;
    }else{
        a = Number(a);
    }
    if(Number.isNaN(Number(b))){
        message += warning(1, 2, b);
        count += 1;
    }else{
        b = Number(b);
    }
    if(count == 2){
        document.getElementById("data").innerHTML = message;
        return false;
    }
    if((a < 2) || (a > 100)){
        message+= warning(2, 1, a);
        count += 1;
    }
    if(count == 2){
        document.getElementById("data").innerHTML = message;
        return false;
    }
    if((b < 2) || (b > 100)){
        message += warning(2, 2, b);
        count += 1;
    }
    if(count > 0){
        document.getElementById("data").innerHTML = message;
        return false;
    }
    return true;
}

function isEven(num){
    if (num % 2 == 0){
        return true;
    }
    return false;
}


function printEvens(){
    var numbers = document.getElementById("numbers1");
    num1 = numbers[0].value
    numbers = document.getElementById("numbers2");
    num2 = numbers[0].value
    console.log("num1: ")
    console.log(num1)
    console.log("num2: ")
    console.log(num2)
    if(!validate(num1, num2)){
        return;
    }

    num1 = Number(num1)
    num2 = Number(num2)
    var str = ''
    var count = 0
    for(var i = num1; i <= num2; i++){
        if(isEven(i)){
            if (count == 0){
                str += '';
            }else{
                str += ','
            }
            str += i.toString();
            count++;
        }
    }
    str =  "There are " + count.toString() + " even numbers:\n" + str    
    document.getElementById("data").innerHTML = str
    document.getElementById("data").style.color = "blue";
}