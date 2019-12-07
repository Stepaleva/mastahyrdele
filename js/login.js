var link=document.querySelector(".js-login");
var popup=document.querySelector(".modal-sign-in");
var adding=document.querySelector(".add-progress");
var edit=document.querySelector(".info-edit");
var off=document.querySelector(".user-block");
var teach=document.querySelector(".teacher-block");
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
	evt.preventDefault();
 if(!login.value || !password.value){

 popup.classList.add("modal-error");
 }
 else{
 	if(isStorageSupport){
 localStorage.setItem("login",login.value);
 };
 adding.classList.add("add-progress-show");
 edit.classList.add("info-edit-show");
 off.classList.add("user-block-hide");
 teach.classList.add("teacher-block-show");
 popup.classList.remove("modal-show-sign-in");
 popup.classList.remove("modal-error");
 overlay.classList.remove("overlay-show");
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