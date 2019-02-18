var questions = [
    'What`s your name ?',
    'What`s your age?',
    'You might be suffering from mental stress or hyper-tension (yes/no)',
    'Remember there`s solution to each and every problem so never give up!! 10`sfree will ask you further more questions to solve your problem are you ready? (yes/no)',
    'It was nice interacting with you!! lets move ahead and solve your problems together.'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];
var movebtn = document.querySelector("#movebtn");
var age;

function showResponse() {
  var input = inputBox.value;
  if(!input) {
    
  }else {
  if(num == 0) {
    output.innerHTML = `Hii, ${input} welcome to 10sfree`;
    inputBox.value = "";
    document.body.style.backgroundColor = "url('./assets/1452883254927257.gif')";
    inputBox.setAttribute("placeholder", "");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    output.innerHTML = `${input} ,that is nice!! `;

    age=inputBox.value;
    console.log('age------->'+ age);
    inputBox.value = "";
     document.body.style.backgroundImage = "url('./assets/giphyyy.gif')";
    
    inputBox.setAttribute("placeholder", "");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 2) {
    if(inputBox.value==='no')
    {
        output.innerHTML = "that's good i guess you don't need us at present";
    }
    else if(inputBox.value==='yes')
    {
      output.innerHTML = `You answered ${input} .. do not worry , we are here for you!!`;
      
    setTimeout(changeQuestion, 2000);
    }
    else
    output.innerHTML = ' invalid answer !! ,you have to answer in yes or no only';
    inputBox.value = "";
    document.body.style.backgroundImage = "url('./assets/123.gif')";
    inputBox.setAttribute("placeholder", "");
    ++num;
  } else if(num == 3) {
    if(inputBox.value==='no')
    {
        output.innerHTML = "that's good i guess you don't need us at present";
  
    }
    else if(inputBox.value==='yes')
    {
    output.innerHTML = ` ${input}!! Awesome!! `;
    
    setTimeout(changeQuestion, 3000);
    }
    else
    output.innerHTML = ' invalid answer !! ,you have to answer in yes or no only';
    inputBox.value = "";
    document.body.style.backgroundImage = "url('./assets/index_im07.gif')";
    inputBox.setAttribute("placeholder", "");
    ++num;
  }
 
  }
}



function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num == 4) {
    inputBox.style.display = "none";
    movebtn.style.display = "block";
    if(age>=15 && age<=24){
        movebtn.addEventListener("click" , (e)=>{
            window.location.href='./html/youth.html';
        })
    }
    else if(age>=25 && age<=44)
    {
        movebtn.addEventListener("click" , (e)=>{
            window.location.href='./html/middleage.html';
        })
    }
    else if(age>=45 && age<=64)
    {
        movebtn.addEventListener("click" , (e)=>{
            window.location.href='./elder.html';
        })
    }
    else if(age>=65)
    {
        movebtn.addEventListener("click" , (e)=>{
            window.location.href="./senior.html";
        })
    }
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();
console.log(age);
