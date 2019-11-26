function phpAlert($msg) {
  alert($msg);
}


function submitForm() {
  if (loginIsValid()==true && passwordNotEmpty()==true) {
  return true;
} else {
  return false;
}
}


function loginIsValid() {
  var str = document.forms[0].elements.login;
  if (str.value.length == 0 ) {
    phpAlert("\nИмя пользователя  не может быть пустым");
    return false;
  }
  for (var i = 0; i < str.value.length; i++) {
    var ch = str.value.substring(i, i + 1);
    if (ch == " ") {
      phpAlert("\nИмя пользователя  не может содержать пробелы");
      return false;
    } 
  }
  return true;
}

function passwordNotEmpty() {
  var email = document.forms[0].elements.email;
  if (email.value.length == 0) {
    phpAlert("\nE-mail не может быть пустым");
    return false;
  } else {
    phpAlert("\nВаша заявка успешно отправлена!");
  }
}

function initDate(){
  var d = new Date();
  var datestring = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear();
  document.getElementById("date").innerHTML = datestring;
}