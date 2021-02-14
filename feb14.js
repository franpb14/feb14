window.onload=()=>{
    window.scrollTo(0,0)
    let nopasado2=true;
    let nopasado3=true;
    let coche = document.getElementById("coche")
    coche.style.left="0px"
    var scrollx=0
    
    for(let i=14; i<39;i++){
      document.querySelector("#root").innerHTML+=`
      <img id="farola-${i}" class="farola" src="resources/farola.png"></img>
      `
      
      
    }
    function ponCarreteras(){
      for(let i=0; i<40;i++){
        ponerCarretera(i)
        
      }
    }
    ponCarreteras()
    disableScroll()
    
    function ponerCarretera(numCarretera){
      document.getElementById("generador").innerHTML+=`
      <img style="position: 'absolute';
      z-index: 0;
      bottom:-10px;
      left:${numCarretera*626}px;" id="carretera-${numCarretera}" src="resources/carretera.PNG"></img>`
    }
    let rightluna=0;
    let topluna = 0;
    let nopasado1=true;
    window.onscroll = (event)=>{
      if(window.innerWidth<=4000){
        
        document.getElementById("coche").style.left=parseInt(getComputedStyle(document.getElementById("coche")).left.replace("px","")) + window.scrollX
      }
      let luna = document.getElementById("luna")
      rightluna+=0.25
      topluna+=0.05
      let mensajes = document.querySelectorAll(".mensaje")
      mensajes.forEach(el =>{
        if(parseInt(getComputedStyle(el).left.replace("px",""))<=window.scrollX+800){
          el.style.opacity=1
        }
      })
      luna.style.right=rightluna+"px"
      luna.style.top=topluna+"px"
      if(window.scrollX>=(posicionkfc)-200&& nopasado1){
        disableScroll()
        nopasado1=false
        textokfc.style.opacity=1;
        seguir1.style.opacity=1;
      }
      var posicionp2 = parseInt(getComputedStyle(document.getElementById("parking2")).left.replace("px",""))
      if(window.scrollX>=(posicionp2)-200 && nopasado2){
        nopasado2=false;
        let seguir2 = document.getElementById("seguir2");
        seguir2.style.left=posicionp2+"px";
        seguir2.style.opacity=1;
        let mensajebillar = document.getElementById("mensajebillar");
        mensajebillar.style.left = (posicionp2-40)+"px";
        mensajebillar.style.opacity = 1;
        disableScroll();
      }
      var posicionp3 = parseInt(getComputedStyle(document.getElementById("parking3")).left.replace("px",""))
      if(window.scrollX>=(posicionp3)-200 && nopasado3){
        nopasado3=false;
        let seguir3 = document.getElementById("seguir3");
        seguir3.style.left=(posicionp3+400)+"px";
        seguir3.style.opacity=1;
        let mensajenetflix = document.getElementById("mensajenetflix");
        mensajenetflix.style.left = (posicionp3+410)+"px";
        mensajenetflix.style.opacity = 1;
        disableScroll();
      }
      
    }
    var seguir1 = document.getElementById("seguir1")
      
    var posicionkfc = 0
    var textokfc = document.getElementById("textokfc")
    document.getElementById("start").onclick=()=>{
      
      let wdth = getComputedStyle(document.getElementById("start")).width
      enableScroll();
      scrollx = getScrollbarWidth();
      let kfc = document.getElementById("kfc");
      let parking1=document.getElementById("parking1");
      posicionkfc = scrollx/4
      parking1.style.left=(posicionkfc)+"px";
      parking1.style.opacity=1
      kfc.style.left = (posicionkfc+parseInt(getComputedStyle(parking1).width.replace("px","")))+"px";
      kfc.style.opacity = 1
      textokfc.style.left= (150+posicionkfc+parseInt(getComputedStyle(parking1).width.replace("px","")))+"px";
      seguir1.style.left = (220+posicionkfc+parseInt(getComputedStyle(parking1).width.replace("px","")))+"px";
      //ZONA 2
      let billar = document.getElementById("billar")
      let parking2  = document.getElementById("parking2")
      let megaocio = document.getElementById("megaocio")
      let farola7 = document.getElementById("farola-7")
      let farola7left = parseInt(getComputedStyle(farola7).left.replace("px",""))
      parking2.style.left = (farola7left+370)+"px"
      parking2.style.opacity=1
      billar.style.left = (farola7left+700)+"px"
      megaocio.style.left=(farola7left+700+150)+"px"
      billar.style.opacity = 1
      megaocio.style.opacity = 1


      //ZONA - 3
      
      let parking3  = document.getElementById("parking3")
      
      let netflix  = document.getElementById("netflix")
      let farola12 = document.getElementById("farola-12")
      let farola12left = parseInt(getComputedStyle(farola12).left.replace("px",""))
      netflix.style.left = (farola12left+700)+"px"
      netflix.style.opacity = 1
      parking3.style.left = (farola12left+370)+"px"
      parking3.style.opacity= 1

      setTimeout(()=>{document.getElementById("start").innerText="GO!"},300)
      document.getElementById("start").style.width=wdth

    }
    function getScrollbarWidth() {
      let carretera9 = getComputedStyle(document.getElementById("carretera-19"))
      
      window.scrollTo(parseInt(carretera9.left.replace("px","")),parseInt(carretera9.left.replace("px","")))
      
      let scrollx = window.scrollX
      window.scrollTo(0,0);
      return scrollx;
    
    }
    let farolas = document.querySelectorAll(".farola");
    for (let index = 0; index < farolas.length; index++) {
      
      let numF = farolas[index]['id'].split("-")[1]
      if(numF%2!=0){
        farolas[index].style.left  = 200*numF*4+"px"
        
      }else{
        farolas[index].style.left  = 200*numF*4+"px"
        farolas[index].style.bottom  = "80px"
        farolas[index].style.zIndex= 1
      }
      
    }
    let mensajes = document.querySelectorAll(".mensaje");
    for (let index = 0; index < mensajes.length; index++) {
      let numF = mensajes[index]['id'].split("-")[1]
      if(numF%2!=0){
      mensajes[index].style.left  = 200*numF*4+"px"
      }
      else{
        mensajes[index].style.left  = 200*numF*4+"px"
        mensajes[index].style.top = "150px"
      }
      
      
    }
    seguir1.onclick=()=>{
      enableScroll()
      let wdth = getComputedStyle(seguir1).width
      seguir1.innerText="GO!"
      seguir1.style.width=wdth
    }
    let seguir2 = document.getElementById("seguir2");
    seguir2.onclick=()=>{
      enableScroll()
      let wdth = getComputedStyle(seguir2).width
      seguir2.innerText="GO!"
      seguir2.style.width=wdth
    }
    let seguir3 = document.getElementById("seguir3");
    seguir3.onclick=()=>{
      enableScroll()
      let wdth = getComputedStyle(seguir3).width
      seguir3.innerText="GO!"
      seguir3.style.width=wdth
    }
    function disableScroll() { 
      document.body.classList.add("stop-scrolling"); 
    } 

    function enableScroll() { 
        document.body.classList.remove("stop-scrolling"); 
    }
    document.getElementById("start").innerText="Start"
  }