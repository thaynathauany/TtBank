export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);

    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity(' O usuário não é maior de idade! ')
    }
}
function validaIdade(data) {
    const dataAtual = new Date(); //Pega a data atual do momento
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    //Pega todas as informações inseridas no campo e coloca 18 anos a mais e assim conseguimos ver quando aquela pessoa fez 18 anos

    return dataAtual  >= dataMais18
  //  verifica se a DataAtual é >= a 18 anos
}
//O new Date vai receber o valor do campo do HTML de data de nascimento e vai converter para uma maneira que o js entenda