let valor01 = null
let ope = null
let valor02 = null
let valor03 = null

function ClickOnMe(){
    console.log("Me hicieron Click xd")
}

function P1(event){
    console.log(event)
    let numero = event.target.innerText
    var cajita = document.getElementById('cajita')
    if(valor03!=null){
        valor01=null
        valor02=null
        valor03=null
        ope=null
        cajita.value=numero
    }else{
        if(cajita.value=='0'){
            cajita.value = numero
        }else{
            cajita.value += numero
        }
    }
    
    //ELIMINAR ULTIMO ELEMENTO
    const valor = document.getElementById("txt_nombre_usuario")
    if (valor!=null)
        valor.parentElement.removeChild(valor)
}
function P2(event){
    let operacion = event.target.innerText
    var cajita = document.getElementById('cajita')
    valor01 = cajita.value
    ope=operacion
    cajita.value='0'
}
function Clear(){
    var cajita = document.getElementById('cajita')
    cajita.value = '0'
}
function Answer(){
    var cajita = document.getElementById('cajita')
    if(valor01==null){
        cajita.value = "faltan agregar valores"
        valor03=0
    }
    else{
        valor02 = cajita.value
        switch(ope){
            case '+':valor03 = parseInt(valor01) + parseInt(valor02);break;
            case '-':valor03 = parseInt(valor01) - parseInt(valor02);break;
            case '*':valor03 = parseInt(valor01) * parseInt(valor02);break;
            default: 
                if(valor03=='0'){
                    valor03 = "No se puede poner el numero 0"
                }
                else{
                    valor03 = parseInt(valor01) / parseInt(valor02);break;
                }
        }
        
        cajita.value = valor03
    }
}

function sumar(){
    console.log('hola')
}

function CrearLineaYNombre(){
    const etiqueta = document.createElement("hr")
    const nombre = document.createElement('div')
    nombre.innerText = 'Marco Antonio Landauro Alba'
    nombre.setAttribute('class','alert alert-primary')
    nombre.setAttribute('id','txt_nombre_usuario')
    const posicion = document.firstElementChild.children[1].children[0]
    posicion.appendChild(etiqueta)
    posicion.appendChild(nombre)
    console.log(posicion)
}

function CrearCajaTexto(){
    const input = document.createElement('input')
    input.setAttribute('id','txt_numeros')
    input.setAttribute('class','form-control mt-4')
    input.setAttribute('type','text')
    input.setAttribute('value','0')
    const body = document.firstElementChild.children[1]
    body.appendChild(input)
}

function CrearFilaBotones(numeroInicial){
    const div = document.createElement('div')
    div.setAttribute('class','row mt-2')

    
    
    const divHijo1 = document.createElement('div')
    divHijo1.setAttribute('class','col d-grid')
    const divHijo2 = document.createElement('div')
    divHijo2.setAttribute('class','col d-grid')
    const divHijo3 = document.createElement('div')
    divHijo3.setAttribute('class','col d-grid')
    const divHijo4 = document.createElement('div')
    divHijo4.setAttribute('class','col d-grid')

    const but01 = document.createElement('button')
    but01.setAttribute('id','btn_'+ (parseInt(numeroInicial)+0))
    but01.innerText = (parseInt(numeroInicial)+0)
    but01.setAttribute('class','btn btn-success')
    but01.setAttribute('type','button')
    divHijo1.appendChild(but01)
    const but02 = document.createElement('button')
    but02.setAttribute('id','btn_'+ (parseInt(numeroInicial)+1))
    but02.innerText = (parseInt(numeroInicial)+1)
    but02.setAttribute('class','btn btn-success')
    but02.setAttribute('type','button')
    divHijo2.appendChild(but02)
    const but03 = document.createElement('button')
    but03.setAttribute('id','btn_'+ (parseInt(numeroInicial)+2))
    but03.innerText = (parseInt(numeroInicial)+2)
    but03.setAttribute('class','btn btn-success')
    but03.setAttribute('type','button')
    divHijo3.appendChild(but03)
    const but04 = document.createElement('button')
    if(numeroInicial==7){
        but04.setAttribute('id','btn_'+'mas')
        but04.innerText = '+'
    }else if(numeroInicial==4){
        but04.setAttribute('id','btn_'+'menos')
        but04.innerText = '-'
    }else if(numeroInicial==1){
        but04.setAttribute('id','btn_'+'por')
        but04.innerText = '*'
    }else{
        but04.setAttribute('id','btn_'+'entre')
        but04.innerText = '/'
    }
    
    but04.setAttribute('class','btn btn-success')
    but04.setAttribute('type','button')
    divHijo4.appendChild(but04)

    div.appendChild(divHijo1)
    div.appendChild(divHijo2)
    div.appendChild(divHijo3)
    div.appendChild(divHijo4)
    

    const body = document.firstElementChild.children[1]

    body.appendChild(div)
}

const main = () => {

    CrearCajaTexto()
    CrearFilaBotones('7')
    CrearFilaBotones('4')
    CrearFilaBotones('1')
    CrearFilaBotones('C')

    document.getElementById("btn_0").onclick = P1
    document.getElementById("btn_1").onclick = P1
    document.getElementById("btn_2").onclick = P1
    document.getElementById("btn_3").onclick = P1
    document.getElementById("btn_4").onclick = P1
    document.getElementById("btn_5").onclick = P1
    document.getElementById("btn_6").onclick = P1
    document.getElementById("btn_7").onclick = P1
    document.getElementById("btn_8").onclick = P1
    document.getElementById("btn_9").onclick = P1

    document.getElementById("btn_mas").onclick = P2
    document.getElementById("btn_menos").onclick = P2
    document.getElementById("btn_por").onclick = P2
    document.getElementById("btn_entre").onclick = P2

    document.getElementById("btn_borrar").onclick = Clear

    document.getElementById("btn_igual").addEventListener("click",Answer)
    CrearLineaYNombre()
    
}

window.onload = main