

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   function media(atletas){
    atletas.forEach(atleta => {
        let organizarNotas = atleta.notas.sort((a, b)=>a-b);
        let notasMostradas = organizarNotas.slice(1, 4);

        let somaNotas = notasMostradas.reduce((ver, nota) => ver+nota, 0);
        let mediaNotas = somaNotas/notasMostradas.length;

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
        console.log(`Média Válida:  ${mediaNotas.toFixed(6)}`);
        console.log(``);


    });
   }

   media(atletas);