let senhaCorreta = "1234";
let tentativas = ["1111", "1234", "1432"];

let i = 0;
let acessoGarantido = false;

while (i < tentativas.length && !acessoGarantido) {
    console.log(`Tentativa ${i + 1}: ${tentativas[i]}`);

    if (tentativas[i] === senhaCorreta) {
        console.log("Senha correta!");
        acessoGarantido = true;
    } else {
        console.log("Senha incorreta.");
    }
    
    i++;
}

if (acessoGarantido) {
    console.log("Tentativa validada. Bem-vindo a sua conta.");
} else {
    console.log("Nenhuma tentativa válida. Acesso bloqueado.");
}

