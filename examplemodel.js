//가져와야함 
const openbutton = document.querySelector('.open') ; //버튼 가져오기
//queryselector 하고 가로안에 들어가는거에 따른 element openbutton이라는 변수에 담는다
//queryselectorall은 tag가 여러개일때 여러가지가 담긴다 . 
const container = document.querySelector('.container') ;
const closebutton = document.querySelector('.close') ;

openbutton.addEventListener('click', newfunction) ;

function newfunction(){
    container.style.display = 'flex' ;
    openbutton.style.display = 'none' ;

} ;

closebutton.addEventListener('click', closefunction)//event함수

function closefunction() {
    container.style.display = 'none' ;
    openbutton.style.display = 'block' ;
}
//class는 .class로, id는 #id로 태그는 태그명만 