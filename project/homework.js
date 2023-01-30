function check (form)
{
    if(form.userid.value == "inserverid") //inserverid가 회왼가입시 아이디 
    {
        if(form.userpassword.value == "1234") //1234 횡 
        {
            window.open("실제 홈페이지.html")
        }
        else 
        {
            alert("비번땡") ;
        }
    }
    else
    {
        alert("id땡") ;
    }
}

//이렇게 최대한 c++ 배운걸로 만ㄷㄹ었고 근데 이렇게 하면 회웍나입할때 , 그 정보가 inserverid랑 inserverpassword에 들어가는 방법을 생각해야함 

//
const quotes = [
    {
      quotes: "배고프다.",
      author: "한성규",
    },
    {
      quotes: "배아프다.",
      author: "한성규",
    }, 
  ]
  
  const quote = document.querySelector("#quote span:first-child"); //qutoe span 태그 중 첫번째
  const author = document.querySelector("#quote span:last-child");
  
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  // 배열 중에 두개 중에 랜덤으로 하나를 선택
  quote.innerText = todaysQuote.quotes;
  author.innerText = todaysQuote.author;