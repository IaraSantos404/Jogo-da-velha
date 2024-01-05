//área de variaveis
var jogadas = 0;
var vez = 1;
let modalSukuna = document.getElementsByClassName("modalSukuna");
let gojoModal = document.getElementsByClassName("modalGojo");
//função para diminuir o nome da variavel de fundo
function fsrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length-9, src.length);
}


function vitoria(){


   if(fsrc("casa7") == fsrc("casa8") && fsrc("casa8") == fsrc("casa9") && fsrc("casa7") != "fundo.png"){
		return true;
	}
	else if(fsrc("casa1") == fsrc("casa2") && fsrc("casa2") == fsrc("casa3") && fsrc("casa1") != "fundo.png"){
		return true;
	}
	else if(fsrc("casa4") == fsrc("casa5") && fsrc("casa5") == fsrc("casa6") && fsrc("casa4") != "fundo.png"){
		return true;
	}
	else if(fsrc("casa1") == fsrc("casa4") && fsrc("casa4") == fsrc("casa7") && fsrc("casa1") != "fundo.png"){
		return true;
	}
	else if(fsrc("casa2") == fsrc("casa5") && fsrc("casa5") == fsrc("casa8") && fsrc("casa2") != "fundo.png"){
		return true;
	}
	else if(fsrc("casa3") == fsrc("casa6") && fsrc("casa6") == fsrc("casa9") && fsrc("casa3") != "fundo.png"){
		return true;
	}
    else if(fsrc("casa1") == fsrc("casa5") && fsrc("casa5") == fsrc("casa9") && fsrc("casa1") != "fundo.png"){
		return true;
	}
    else if(fsrc("casa3") == fsrc("casa5") && fsrc("casa5") == fsrc("casa7") && fsrc("casa3") != "fundo.png"){
		return true;
	}
}

//função para definir quem ganhou e a troca de imagens
function jogar(id){

	if(fsrc(id) == "fundo.png" && jogadas <= 9){
		if(vez == 1){
			document.getElementById(id).src = "imagem/gojo.png";
			jogadas++;
			if(vitoria() != true){
				vez = 2;
			}
			else{
				document.getElementById("modalGojo").classList.remove("close")
				vez = 0;
			}
		}

		else if(vez == 2){
			document.getElementById(id).src = "imagem/sukuna.png";
			jogadas++;
			if(vitoria() != true){
				vez = 1;
			}
			else{
				document.getElementById("modalSukuna").classList.remove("close")
				vez = 0;
			}
		}

		if(jogadas == 9 && vitoria() != true){
			document.getElementById("empate").classList.remove("close")
		}
		
		/*
		if(jogadas >= 9 || vez == 0){
			var reset = parseInt(prompt("quer reiniciar o jogo? digite 1 para sim e 2 para não"))

			switch(reset){
				case 1:
					document.location.reload(true);
					break;
				case 2:
					alert("ok corno")
					break
				default:
					alert("digite 1 ou 2 ")
			}

		}*/
		
	}
}

function reiniciarJogo(){
	for (let i = 1; i <= 9; i++) {
        document.getElementById("casa" + i).src = "imagem/fundo.png";
    }

    // Ocultar modais
    document.getElementById("modalGojo").classList.add("close");
    document.getElementById("modalSukuna").classList.add("close");
	document.getElementById("empate").classList.add("close");

    // Resetar variáveis do jogo
    jogadas = 0;
    vez = 1;
}


