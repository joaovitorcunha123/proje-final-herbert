let ul = document.querySelector('nav ul')
function max(){

   
   if(ul.classList.contains('max-hin')){
      ul.classList.remove('max-hin');
      
   }else{
      ul.classList.add('max-hin');

   }
}




let username = document.getElementById('name');
let assunto = document.getElementById('assunto');
let email = document.getElementById('email');
let form = document.getElementById('form');






form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkIputs();
});



function checkIputs() {
    let usernameValue = username.value;
    let assuntoValue = assunto.value;
    let emailValue   = email.value;
   
  

    if(usernameValue === "") {
        errorValidation(username , 'preencha este campo!')
    }
    else{
        sucessValidation(username)
    }


  if(assuntoValue === ""){
    errorValidation(assunto, 'preencha este campo!');
  }else{
    sucessValidation(assunto);
  }


  
  if(emailValue === ""){
    errorValidation(email, 'preencha este campo!');
  }else{
    sucessValidation(email);
 }
} 

function errorValidation(input,message) {
    let formControl = input.parentElement;
   let small = formControl.querySelector('small');
    
    small.innerText = message;

    formControl.className = 'rei'

}

function sucessValidation(input){
    let bary = input.parentElement;
    bary.className = 'errormain'

    
}