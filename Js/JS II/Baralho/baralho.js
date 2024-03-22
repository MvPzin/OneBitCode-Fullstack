const baralho = []
let opcao = ""

 do {

     

    opcao = prompt(
        "Cartas no baralho:\n" + baralho.length +
        "\nEscolha uma ação:\n1 - Inserir nova carta\n2 - Puxar carta\n3 - Sair"
    )
   
    switch(opcao){
        case "1":
            const NovaCarta = prompt("Nome da carta:")
            baralho.unshift(NovaCarta)
            break
        case "2":
            const CartaRetirada = baralho.pop()
            if (!CartaRetirada){
               alert("Não tem nenhuma carta no baralho")
            } else {
               (alert(CartaRetirada + " foi puxada do baralho."))
           }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção errada")
    }
} while (opcao !=="3")