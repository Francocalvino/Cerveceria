let main1 = document.querySelector(".main-principal")
let main2 = document.querySelector(".descripcion-productos")

function cambiarPantalla(){
    if(main1.style.display == "block"){
        main1.style.display = "none"
    }
if(main2.style.display == "none"){
    main2.style.display = "block"
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