// function dobro(x){
//     alert("O dobro de " + x + " é " + (x*2))
// }

// dobro()
// dobro(5)

// function soma(a,b) {
//     alert("O resultado da soma é: " + (a+b))
// }

// soma(1,1)
// soma()

// function CriarUsuario ({nome, email, senha, tipo = "admin"}) {
//     const usuario = {
//         nome,
//         email,
//         senha,
//         tipo
//     }

//     return usuario
// }

// const objeto = {
//     nome: "Igor",
//     senha: "1234",
// }
// const a = CriarUsuario(objeto)

// console.log(a)

let jeferson = "11"

for (let i = 0; i < 3; i++){

    jeferson++

    console.log(i,jeferson)
}

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)


  function calcMedia (a,b) {
    const media = (a+b) / 2
    return media
  }

// calcMedia(2+4)
const resultado = calcMedia(7,2)
console.log(resultado);

function CriarProduto(nome, preco) {
    const produto = {
        nome, //nome: nome
        preco, //preco: preco
        estoque: 1

    }
    return produto
}

const notebook = CriarProduto ("Notebook Intel Core i7 16GB", 2500)


function maioridade(idade){
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridade(29));
console.log(maioridade(13));