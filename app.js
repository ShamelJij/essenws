let request = new XMLHttpRequest();
request.open("GET", "essenListe.json", false);
request.send(null);
let myObj = JSON.parse(request.responseText);
console.log(myObj);
let element = document.getElementById("foodtitle");
let ranmax = myObj.length - 1;

function getRanId(min,max){
  return Math.floor(Math.random() * (max - min) ) + min;
}
function showEle(){
  const ranNum = getRanId(1, ranmax);
  let ranObj = (JSON.stringify(myObj.find((obj) => obj.id === ranNum).title).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  element.innerText = ranObj;
console.log(ranNum);
console.log(ranObj);
}
showEle();
