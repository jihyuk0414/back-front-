const form = document.querySelector ('form') ;
const input = document.querySelector ('input') ;
const ul = document.querySelector ('ul') ;

form.addEventListener('submit'  , (event)  => {
    event.preventDefault() ;
    // console.log(input.value) // 사용자 입력 부분
    // //submit이라는 것은 이제 일어날때 를 입력한 것 . 

    if (input.value!==  ' ') {
        
    
    const li = document.createElement('li') ; //li라는 것에 입력
    li. innerText = input.value ; //lil라는 것의 내부 text를. 사용자 입력 값으로
    ul. appendChild(li) ; //문서구성 요소 , ul을 선언햇던거에 자식으로 붙여줄게

    input.value = ' ' ;

    }
}) ;