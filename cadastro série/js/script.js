function cadastrar() { 
    var titulo = document.getElementById("titulo").value; //armazena o que foi escrito no campo 

    var episodios = document.getElementById("episodios").value //armazena o que foi escrito no campo 

    var descricao = document.getElementById("descricao").value //armazena o que foi escrito no campo 

    var autor = document.getElementById("autor").value; //armazena o que foi escrito no campo 
    
    if (titulo !="" && episodios != "" && descricao != "" && autor != "") {

        alert("Série cadastrada com sucesso!");

        window.location.href="index.html";

    } else { 

        alert("Preencha todos os campos!"); 

        window.location.href="inex.html";

    }
        
    }  

