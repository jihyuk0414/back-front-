let hi = '안녕하세요'; // 변수를 선언할때 let  , 재선언 let gi = "다른거" 불가능
hi = '메롱'

const hello = '안바뀌지롱' ;  //

console.log(hi); // cout 같은ㅇ용도
console.log(hello);

const number= 123n; //123n일시 big int, datatype이 big int가 되는 것 (숫자가 클때 )
console.log(number) ;

console.log(typeof number) ;

const age = 20 ;
const job = '개발자' ;

const msg = '저는 ' + age + ' 살' + job ;
//간단하게

const msg2 = `저는 ${job}이고, ${age}살 입니다.` // 이때는 ' 가 아니라 1옆에 `

console.log(msg2) ;

const isture= true ; // boolean type 변수입니다 
//빈 값은 null, 아직 안들어간 값은 undefined 변수


const arr = [1, 2, 3] ; 
console.log(arr[2]) ;

const obj = {
    name : '임지혁' ,
    job : '개발자' , 
} ; //객체 . c++에서는 클라스로 생각

console.log(obj.name) ; //출력시 배열처럼 나옴 , 객체의 이름 출력 c++ class 기억하기
console.log(obj['name']) ; //위 아래 같은 표현

const arr2 = [ 1, 2, 3, [4, 5]] ;
console.log(arr2) ; 

//연산자 생략

console.log(2<3? '참' : '거짓') ;

//??연산자 

const a = undefined;
const b = null ;
const c = '정답' ;

console.log(a?? b?? c) ;

console.log(...arr) ; //arr 내부를 쫙 펼쳐서 적는다

const a1 = 10 ;
const b1 = 20 ;
if (a < b ) 
{
    console.log('a가 더 작지롱') ;
}
else{
    console.log('땡') ;
}

const number1 = 3;

switch (number1)
{
    case 1 : break;
    case 2 : break ;
    case 3 : console.log('삼') ;
    default : console.log('3개가 다 아니에요') ;
}

for (let i = 0 ; i<5 ; i++)
{
    console.log(i) ;
    if (i === 3)
    {
        break;
    }
}

//새로운 for of
for (const i of arr) //for문 내부 i변수가 arr에서 꺼내온다라는 의미 for of
{
    console.log(i) ;
}