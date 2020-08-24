function executar(){

    texto = document.getElementById("search-txt").value;
    list = document.getElementById("historico");
    adicionar = true;

    opt = document.createElement("option");

    for(i=0;i<Lista.options.length;i++){
        if(texto==lista.options[i].value){
            adicionar==false;
        }
    }
    if(adicionar==true){
        opt.value=texto;
        lista.appendChild(opt);
    }
    


}
var x = 32
console.log(x)
