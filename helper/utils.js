const guiaLink = 'Guia de Sobrevivência - https://blog.accenture.com/concrete/';
const valoresLink = 'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/';
const salariosLink = 'Salário & Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';
const materiaisLink = 'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/';
const viagensLink = 'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/';
const maloteLink = 'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/';
const reembolsoLink = 'Reembolsos & Adiantamentos - https://blog.accenture.com/concrete/2018/08/06/reembolso-e-adiantamentos/';
const dpLink = 'Departamento Pessoal - https://blog.accenture.com/concrete/2018/08/06/departamento-pessoal/';

const linkSelector = function(keyWord) {
  if (!keyWord || keyWord.match(/^todos$/)) {
    return 'Essa key word não está mapeada, '+
          'mas seguem todos os links que temos mapeados no momento\n' +
          guiaLink + '\n' +
          valoresLink + '\n' +
          dpLink + '\n' +
          salariosLink + '\n' +
          materiaisLink + '\n' +
          maloteLink + '\n' +
          reembolsoLink + '\n' +
          viagensLink;
  }
  // Match guia.
  if (keyWord.match(/^guia$/)) {
    return guiaLink;
  }
  // Match valores.
  if (keyWord.match(/^valores$/)) {
    return valoresLink;
  }
  // Match departamento pessoal, pessoal and dp.
  if (keyWord.match(/^(departamento )?pessoal|dp$/)) {
    return dpLink;
  }
  // Match malote and malotes.
  if (keyWord.match(/^malotes?$/)) {
    return maloteLink;
  }
  // Match viagem and viagens.
  if (keyWord.match(/^viage(m|ns)$/)) {
    return viagensLink;
  }
  //Match reembolso, reembolsos, adiantamento and adiantamentos.
  if (keyWord.match(/^reembolsos?|adiantamentos?$/)) {
    return reembolsoLink;
  }
  // Match padrão, padrao, material, materiais apresentação and apresentacao
  if (keyWord
      .match(/^padr(ão|ao)|materia(l|is)|apresenta(ção|cao)$/)) {
    return materiaisLink;
  }
  // Match benefício, benefícios, baneficio. beneficios, salário, salários, 
  // salario and salarios.
  if (keyWord
      .match(/^benef(í|i)cios?|sal(á|a)rios?$/)) {
    return salariosLink;
  }
};

module.exports = {
  messageBuilder: function(keyWord) {
    const greeting = 'Olá, seguem os links:\n';
    const linksFound = linkSelector(keyWord);
    return greeting + linksFound;
  },
};
