function multiplicar(){
let num = document.getElementById("txt1")
let tab = document.getElementById("seltab")
     if(num.value.length == 0){
          window.alert (" [ERRO] confira os campos e digite novamente")
     }else{
     let n1 = Number(num.value)
     let c = 1
     tab.innerHTML=''
     while(c <= 10){
          let item = document.createElement('option')
          item.text= `${n1} x ${c} = ${n1*c} `
          item.value = `tab${c}`
          tab.appendChild(item)
          c++
     }

     }
} 
         
         
          
