
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

  window.onbeforeunload=function(){   
    localStorage.setItem("br1", $('#brlike1').text());
    localStorage.setItem("br2", $('#brlike2').text()); 
    localStorage.setItem("br3", $('#brlike3').text());
    localStorage.setItem("br4", $('#brlike4').text()); 
    localStorage.setItem("br5", $('#brlike5').text());
    localStorage.setItem("br6", $('#brlike6').text()); 
    localStorage.setItem("komentar1", $('#kom1').html());
    localStorage.setItem("komentar2", $('#kom2').html());
    localStorage.setItem("komentar3", $('#kom3').html());
    localStorage.setItem("komentar4", $('#kom4').html());
    localStorage.setItem("komentar5", $('#kom5').html());
    localStorage.setItem("komentar6", $('#kom6').html());
    localStorage.setItem("blog", $('#blogtekst').html());
  }
 
  window.onload=function(){
    var br1=localStorage.getItem("br1");
    var br2=localStorage.getItem("br2");
    var br3=localStorage.getItem("br3");
    var br4=localStorage.getItem("br4");
    var br5=localStorage.getItem("br5");
    var br6=localStorage.getItem("br6");
    var komentar1=localStorage.getItem("komentar1");
    var komentar2=localStorage.getItem("komentar2");
    var komentar3=localStorage.getItem("komentar3");
    var komentar4=localStorage.getItem("komentar4");
    var komentar5=localStorage.getItem("komentar5");
    var komentar6=localStorage.getItem("komentar6");
    var blog=localStorage.getItem("blog");
    if(br1 != null) $('#brlike1').text(`${br1}`);
    if(br2 != null) $('#brlike2').text(`${br2}`);
    if(br3 != null) $('#brlike3').text(`${br3}`);
    if(br4 != null) $('#brlike4').text(`${br4}`);
    if(br5 != null) $('#brlike5').text(`${br5}`);
    if(br6 != null) $('#brlike6').text(`${br6}`);
    if(komentar1 != null) $('#kom1').html(`${komentar1}`);
    if(komentar2 != null) $('#kom2').html(`${komentar2}`);
    if(komentar3 != null) $('#kom3').html(`${komentar3}`);
    if(komentar4 != null) $('#kom4').html(`${komentar4}`);
    if(komentar5 != null) $('#kom5').html(`${komentar5}`);
    if(komentar6 != null) $('#kom6').html(`${komentar6}`);
    if(blog != null) $('#blogtekst').html(`${blog}`);
  }
