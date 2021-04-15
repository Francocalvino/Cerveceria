let main1 = document.querySelector(".main-principal")
let main2 = document.querySelector(".descripcion-productos")
let main4 = document.querySelector(".proximos-productos")

function cambiarPantalla(){
    if(main1.style.display == "block"){
        main1.style.display = "none"
    }
if(main2.style.display == "none"){
    main2.style.display = "block"
}
if(main4.style.display == "block"){
    main4.style.display = "none"
}
}

function cambiarPantallaHome(){
    if(main2.style.display == "block"){
        main2.style.display = "none"
    }
if(main1.style.display == "none"){
    main1.style.display = "block"
}
}    

function cambiarPantallaProxima(){
    if(main1.style.display == "block"){
        main1.style.display = "none"
    }
    if(main2.style.display == "block"){
        main2.style.display = "none"
    }
if(main4.style.display == "none"){
    main4.style.display = "block"
}
}    