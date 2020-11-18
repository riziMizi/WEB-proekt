
function Broj(sl){
     var br=document.getElementById("brlike"+sl).innerHTML;
    br++;
    document.getElementById("brlike"+sl).innerHTML=br;
}

function otvori(br,a) {
    document.querySelector(".popup"+br).style.display = "flex";
    document.getElementById("text"+a).value='';
  }

  function zatvori(br){
    document.querySelector(".popup"+br).style.display = "none";
  }

  function komentar(br,a){
    var tekst=document.getElementById("text"+a).value;
    var para = document.createElement("P");
  para.innerHTML ="-" + " " + tekst;
  document.getElementById("kom"+br).appendChild(para);
  }

  function blog(){
    var tekst=document.getElementById("blogtxt").value;
    var datum=document.getElementById("datum").value;
    var tema=document.getElementById("tema").value;
    if(tekst != '' && datum != '' && tema != ''){
      var para = document.createElement("P");
      var hed3=document.createElement("h3");
      var hed2=document.createElement("h2");
    para.innerHTML = tekst;
    hed3.innerHTML=datum;
    hed2.innerHTML=tema;
    var div=document.createElement("div");
    div.classList.add('blog');
    div.appendChild(hed2);
    div.appendChild(hed3);
    div.appendChild(para);
    document.getElementById("blogtekst").appendChild(div);
    document.getElementById("blogtxt").value='';
    document.getElementById("datum").value='';
    document.getElementById("tema").value='';
    }
  }

  function izbrisiBlog(){
    document.getElementById("blogtxt").value='';
    document.getElementById("datum").value='';
    document.getElementById("tema").value='';
  }
