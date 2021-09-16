const funcionario = [  
  {
    nome: 'Crispim',
    salarioFixo: 1500,
    vendasMes: 190,
    get novoSalario () {
      return (this.salarioFixo+(this.vendasMes*15/100));
    } 
  }
];


funcionario.push(
  {
    nome: 'Jacksonvile',
    salarioFixo: 1300,
    vendasMes: 210,
    get novoSalario () {
      return (this.salarioFixo+(this.vendasMes*15/100));
    }    
  }
);
console.table(funcionario);
