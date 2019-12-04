var link=document.querySelector(".js-login");
var edit=document.querySelector(".js-edit");
var popup=document.querySelector(".modal-sign-in");
var button=document.querySelector(".profile");
var close=document.querySelector(".modal-content-close-sign-in");
var login=document.querySelector("[name=name]");
var password=document.querySelector("[name=password]");
var overlay=document.querySelector(".overlay");
var form=popup.querySelector("form");
var isStorageSupport=true;
var storage="";

 try{
 storage=localStorage.getItem("login");
 }
 catch(err){
  isStorageSupport=false;
 }

link.addEventListener("click",function(evt)
{
 evt.preventDefault();
 popup.classList.add("modal-show-sign-in");
 overlay.classList.add("overlay-show");
 if(storage){
 	login.value=storage;
 	password.focus();
 }
 else{
 	login.focus();
 }
});

close.addEventListener("click",function(evt)
{
 evt.preventDefault();
 popup.classList.remove("modal-show-sign-in");
 popup.classList.remove("modal-error");
 overlay.classList.remove("overlay-show");
});

form.addEventListener("submit",function(evt)
{
 if(!login.value || !password.value){
 evt.preventDefault();
 popup.classList.add("modal-error");
 }
 else{
 	if(isStorageSupport){
 localStorage.setItem("login",login.value);
 }

 }
});

window.addEventListener("keydown",function(evt){
 if(evt.keyCode===27){
 if(popup.classList.contains("modal-show-sign-in")){
 	evt.preventDefault();
 	popup.classList.remove("modal-show-sign-in");
 	popup.classList.remove("modal-error");
 	overlay.classList.remove("overlay-show");
 }
}
});

overlay.addEventListener("click",function(evt){
	console.log("клик снаружи модала");
evt.preventDefault();
popup.classList.remove("modal-show-sign-in");
popup.classList.remove("modal-error");
overlay.classList.remove("overlay-show");
});