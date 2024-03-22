// // Aula - 33 - Arrays Inicio
// const listaDeCompras = []

// listaDeCompras[0] = "Arroz"
// listaDeCompras[1] = "Feijão"
// listaDeCompras[2] = "Batata"
// listaDeCompras[3] = "Açucar"

// console.log (listaDeCompras)
// // =====================================//

// // Aula -33 - Arrays Pt1 

// const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
// console.log(arr);

// arr.push("Igor") // Insere valor no array (ao final)
// console.log(arr);

// arr.unshift("Teste") // Adicionar ao inicio do array
// console.log(arr); 

// let UltimoElemento = arr.pop() // Remove elemento do final array .pop
// console.log(arr)
// console.log(UltimoElemento);

// UltimoElemento = arr.shift() //Remove o primeiro elemento do array .shift
// console.log(arr);
// console.log(UltimoElemento);

// const inclui = arr.includes("Sam") //Pesquisa por valor exato dentro do array via string
// console.log(inclui);

// const indice = arr.indexOf("Sam")
// console.log(indice);

// //Cortar e concatenar array
// const Nomes = arr.slice(0,4) //Exibir arrays entre 0 e 4
// const Outros = arr.slice(-4) //Exibir arrays de -4 até o final (-1 significa o final do array por completo)
// console.log(arr);
// console.log(Nomes);
// console.log(Outros);

// const sociedade = Nomes.concat(Outros, "Hugo", "Igor")
// console.log(sociedade);

// //Subistituindo elementos
// //Splice: Remove
// const ElementosRemovidos = sociedade.splice(indice, 1, "Diferente")
// console.log(sociedade)
// console.log(ElementosRemovidos);

// //Iterar sobre os elementos
// for (let indice = 0; indice < sociedade.length; indice++) {
//     const elemento = sociedade[indice]
//     console.log(elemento + " Se encontra na posíção " + indice)
// }

//Exercicio - Fila de consultorio 

let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
        pacientes +=(i+1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1 - Novo Paciente\n2 - Consultar paciente\n3 - Sair"
    )
    switch(opcao){
        case "1":
            const NovoPaciente = prompt("Nome do paciente?:")
            fila.push(NovoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            alert(pacienteConsultado + " foi removido da fila.")
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção errada")
    }
} while (opcao !=="3")