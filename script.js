resposta = ['d','o','u','t','o','r','a']


function confereLetra(){
    letrasarr = Array.from(document.getElementsByClassName('answer')).map(e=>(e.value.toLowerCase()))
    letrasinput = Array.from(document.getElementsByClassName('answer'))
    retorno = document.getElementById('res')
    console.log(resposta)
    console.log(letrasarr)
    console.log(letrasinput);

    
    if(letrasarr[0]==resposta[0]){
        letrasinput[0].readOnly=true
        letrasinput[0].style.border='1px solid green' 
    }

    if (letrasarr[0]!=resposta[0]){
        letrasinput[0].style.border='1px solid red'
    }

    if(letrasarr[1]==resposta[1]){
        letrasinput[1].readOnly=true
        letrasinput[1].style.border='1px solid green'
    }

    if(letrasarr[1]!=resposta[1]){
        letrasinput[1].style.border='1px solid red'
    }

    if(letrasarr[2]==resposta[2]){
        letrasinput[2].readOnly=true
        letrasinput[2].style.border='1px solid green'
    }

    if(letrasarr[2]!=resposta[2]){
        letrasinput[2].style.border='1px solid red'
    }

    if(letrasarr[3]==resposta[3]){
        letrasinput[3].readOnly=true
        letrasinput[3].style.border='1px solid green'
    }

    if(letrasarr[3]!=resposta[3]){
        letrasinput[3].style.border='1px solid red'
    }

    if(letrasarr[4]==resposta[4]){
        letrasinput[4].readOnly=true
        letrasinput[4].style.border='1px solid green'
    }

    if(letrasarr[4]!=resposta[4]){
        letrasinput[4].style.border='1px solid red'
    }

    if(letrasarr[5]==resposta[5]){
        letrasinput[5].readOnly=true
        letrasinput[5].style.border='1px solid green'
    }

    if(letrasarr[5]!=resposta[5]){
        letrasinput[5].style.border='1px solid red'
    }

    if(letrasarr[6]==resposta[6]){
        letrasinput[6].readOnly=true
        letrasinput[6].style.border='1px solid green'
    }

    if(letrasarr[6]!=resposta[6]){
        letrasinput[6].style.border='1px solid red'
    }

    if(JSON.stringify(letrasarr)==JSON.stringify(resposta)){
        retorno.innerHTML = 'Você acertou a palavra!'
    }



}