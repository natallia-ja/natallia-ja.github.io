
 // localStorage.clear();

document.getElementById('item').value = "";
let maxId = 0;
let arr = [];

render();

let tagNumber = Number(maxId);

function addTag() {

  if(document.getElementById("readonly").getAttribute("checked") == null) {
    let text =  document.getElementById('item').value;
    if (text != "") {
    	document.getElementById('item').value = "";
      localStorage.setItem(Number(maxId)+1, text); 
      document.getElementById('tags_area').innerHTML = "";

      render();    
    }
  }
    return;
}

function render(){
  let keys = Object.keys(localStorage);
  arr = [];
  for (key in localStorage) {
    if (localStorage.hasOwnProperty(key) && !isNaN(key)) {
      arr.push(Number(key));
    }
  }
  arr.sort((a,b) => a-b);

  for(let i=0; i < arr.length; i++) {

    let div = document.createElement('div');
    div.className = "tag";
    div.setAttribute('id', arr[i]);
    div.innerHTML = localStorage.getItem(arr[i]); //
    document.getElementById('tags_area').append(div);

    let cross = document.createElement('div');
    cross.className = "cross";
    cross.setAttribute('onclick', 'removeTag('+arr[i]+')');
    document.getElementById(arr[i]).appendChild(cross);

    if(arr[i] > maxId){
      maxId = arr[i];
    }
  }
}

function removeTag(id){ 
 if(document.getElementById("readonly").getAttribute("checked") == null){
  localStorage.removeItem(id);
  document.getElementById('tags_area').innerHTML = "";
  render();
 }
return;
}


//запретить/разрешить редактирование
function toggleChecked(){
 if(document.getElementById("readonly").getAttribute('checked') == null){
  document.getElementById("readonly").setAttribute('checked', 'checked');
  } else {
  document.getElementById("readonly").removeAttribute('checked');
  }
return;
}


  // функция - геттер
function getTags(){

  let values = Object.values(localStorage);
  let arrTags = [];
  let strTags = "";

  if(values){
    arrTags = values.reverse()
    strTags = arrTags.join(", ");
  }
  console.log(strTags);
  return strTags;
};

  // getTags();

  // функция - сеттер /добавить новый список тегов
function setTags(x){
    maxId = 0;
    localStorage.clear();
    let arrForSet = x.split(", ");
    console.log("arrForSet");
    console.log(arrForSet);
    for(i = 0; i < arrForSet.length; i++){
      localStorage.setItem(Number(maxId), arrForSet[i]);
      maxId++;
    }
   document.getElementById('tags_area').innerHTML = "";
   render();
   return;
 }



  //добавление одного тега
function addSingleTag(tag){
    localStorage.setItem(Number(maxId)+1, tag); //запись в localStorage
    document.getElementById('tags_area').innerHTML = "";

    render();
  }

  //удаление одного тега
function delSingleTag(tag){
  	let values = Object.values(localStorage);
  	let keys = Object.keys(localStorage);
    console.log("values");
    console.log(values);
    for(i = 0; i < values.length; i++){
     if(tag == String(values[i])){
      localStorage.removeItem(keys[i]);
      document.getElementById('tags_area').innerHTML = "";
      render();
      break;
      }
    }
  return;
}



/* получить в консоль список добавленных тегов */
//getTags();

/* добавить новый список тегов (параметр - строка - названия тегов через ", ")*/
// setTags("тег1, тег2, тег3");

/*добавть один тег (параметр - строка - название тега)*/
// addSingleTag("tag");

/*удалить один тег (параметр - строка - название тега) */
// delSingleTag("тег1");

/* запретить/разрешить редактирование */
// toggleChecked(); 