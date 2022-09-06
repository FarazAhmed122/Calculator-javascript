alert('calculate Your mathematics')

function calc(a){
 var b = document.getElementById('num')
 b.value += a
}
function clr(){
    var c =document.getElementById('num')
    c.value = ''
}
function equal(){
    var d=document.getElementById('num')
    d.value= eval(d.value)
}