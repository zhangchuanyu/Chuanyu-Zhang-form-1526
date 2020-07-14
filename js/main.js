let em = document.getElementById('email');
let fn = document.getElementById('fullname');
let message = document.getElementById('message');
let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// define the event-target-object
let submit = document.getElementById('submit');

// event-handler
function handleForm() {
  
  // empty buckets, one for inputs, the other for errors
  let uinput = {};
  let errors = [];
  if(fn.value !==''){
    uinput.FullName = fn.value;
  }
  else{
    errors.push('please enter your name');
  }
  // validating if user input exist at all
  if (em.value !== '') {
    
    // validate email format
    if (pattern.test(em.value)) {
      uinput.Email = em.value;
    } else {
      errors.push('Invalid email!');
    }
    
  } else {
    errors.push('Email is empty!');
  }
  if (message.value !==''){
    uinput.Message= message.value;
  }
  else
  {
    errors.push("message cannot be blank.");
  }
  
  
  // printing either feedback or errors
  if (errors.length === 0) {
    console.log('user input', uinput);
  } else {
    console.log('errors', errors);
  }
  
}

submit.addEventListener('click', handleForm);