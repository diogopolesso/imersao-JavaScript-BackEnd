// Template Padrão

const nome = "Diogo";
const idade = 2022 - 1985;
const cidadeDeNascimento = "Porto Alegre";

// const apresentação = "Meu Nome é " + nome + ", Minha Idade é "
// + idade + ", e  nasci na Cidade de " + cidadeDeNascimento;


// Template tipo String

const apresentação = `Meu Nome é ${nome}, Minha Idade é ${idade}, 
e nasci na Cidade de ${cidadeDeNascimento}.`;

console.log(apresentação);

/* Utilizamos a sintaxe do acento grave + ${} em conjunto com as aspas duplas ””.
Teste também com aspas simples!