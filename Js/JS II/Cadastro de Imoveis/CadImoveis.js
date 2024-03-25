const imoveis = []
let opcao = ""


do {

    opcao = prompt(
        "Imoveis cadastrados:\n" + imoveis.length +
        "\n\nEscolha uma ação:\n1 - Cadastrar novo imovél\n2 - Lista de imovéis\n3 - Sair"
    )

    switch(opcao){
        case "1":
            const imovel = {} 
            imovel.pessoa = prompt("Insira o nome do proprietário: ")
            imovel.QtdQuarto = prompt("Insira a quantidade de quartos: ")
            imovel.QtdBanheiro = prompt("Insira a quantidade de banheiros: ")
            imovel.Garagem = prompt("O Imóvel possuí garagem?: (Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n"+
                "\nNome do proprietário: "+imovel.pessoa +
                "\nQuantidade de quartos: "+imovel.QtdQuarto +
                "\nQuantidade de banheiros: "+imovel.QtdBanheiro +
                "\nPossuí garagem?: "+imovel.Garagem)

                if (confirmacao) {
                    imoveis.push(imovel)
                    alert("Imóvel salvo com sucesso!")
                } else {
                    alert("Voltando ao menu...")
                    break
                }
            

        break
        case "2":

                for (let i = 0; i < imoveis.length; i++){
                    alert(
                        "Imóvel " + (i + 1) + 
                        "\nProprietário: " + imoveis[i].pessoa +
                        "\nQaurto: " + imoveis[i].QtdQuarto +
                        "\nBanheiros: " + imoveis[i].QtdBanheiro +
                        "\nGaragem: " + imoveis[i].Garagem 
                    )
                } 
        break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção errada")
    }

} while (opcao !=3)