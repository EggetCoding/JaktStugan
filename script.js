window.onload = hide;

//Göm sökförlag
function hide(){
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }
}


//Byta sidor
function Home(){
    window.location.href = "index.html";
}

function Djur(){
    window.location.href = "DjurInfo.html";
}

function Jakt(){
    window.location.href = "JaktInfo.html";
}

function Slakt(){
    window.location.href = "SlaktInfo.html";
}

function Vapen(){
    window.location.href = "VapenInfo.html";
}

function Book(){
    window.location.href = "infopage.html";
}

function Store(){
    window.location.href = "store.html";
}

function ChangeSub(id){
    window.location.href = "subject.html?id=" + id;
}



function myFunction() 
{

  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  
  for (i = 0; i < li.length; i++) 
  {
    if(filter == "")
    {
        li[i].style.display = "none";
        currentValue = "";
    }
    else
    {
        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;
        
        
        
        if (txtValue.slice(0,filter.length).toUpperCase() == filter.toUpperCase()) 
        {
            
            li[i].style.display = "";
        } 
        else 
        {
            li[i].style.display = "none";
        } 
        
    }
        
  }
}

function Purchase(){
    window.location.href = "Purchase.html";
  }

function Bought(){
    alert("Ditt paket är påväg!");
    alert("En faktura kommer skickas till din adress");
    window.location.href = "index.html";
}