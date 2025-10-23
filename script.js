// const candidatos = {
//   "01": { nome: "Renata Gontijo", foto: "fotos/renata.jpeg", votos: 0 },
//   "02": { nome: "Taynara Cotrin", foto: "fotos/taynara.png", votos: 0 },
//   "03": { nome: "Daniel", foto: "fotos/daniel.png", votos: 0 },
//   "04": { nome: "Sara Franco", foto: "fotos/sara.png", votos: 0 },
//   "05": { nome: "Beatriz Braga", foto: "fotos/beatriz.png", votos: 0 },
//   "06": { nome: "Thiago", foto: "fotos/thiago.jpeg", votos: 0 },
//   "07": { nome: "Maria Ivana", foto: "fotos/maria-ivana.jpeg", votos: 0 },
//   "08": { nome: "Moíses Lima", foto: "fotos/moises.png", votos: 0 },
//   "09": { nome: "Bruno Braga", foto: "fotos/bruno.jpeg", votos: 0 },
// };

// let votosBranco = 0;
// let votosNulo = 0;
// let votacaoEncerrada = false;

// function atualizarCandidato() {
//   if (votacaoEncerrada) return;

//   const numero = document.getElementById("numero").value;
//   const info = document.getElementById("info-candidato");

//   if (candidatos[numero]) {
//     info.innerHTML = `
//       <p>Nome: ${candidatos[numero].nome}</p>
//       <img src="${candidatos[numero].foto}" alt="Foto do candidato">
//     `;
//   } else {
//     info.innerHTML = "<p>Candidato não encontrado</p>";
//   }
// }

// function corrigir() {
//   if (votacaoEncerrada) return;

//   document.getElementById("numero").value = "";
//   document.getElementById("info-candidato").innerHTML = "";
//   document.getElementById("mensagem").innerText = "";
// }

// function confirmar() {
//   if (votacaoEncerrada) return;

//   const numero = document.getElementById("numero").value;
//   if (candidatos[numero]) {
//     candidatos[numero].votos++;
//     document.getElementById("mensagem").innerText = "✅ Voto confirmado!";
//     corrigir();
//     atualizarResultado();

//     // Toca o som de confirmação
//     const audio = document.getElementById("som-confirmacao");
//     audio.play();
//   } else {
//     document.getElementById("mensagem").innerText = "❌ Número inválido!";
//   }
// }


// // function votoBranco() {
// //   if (votacaoEncerrada) return;

// //   votosBranco++;
// //   document.getElementById("mensagem").innerText = "✅ Voto em branco confirmado!";
// //   corrigir();
// //   atualizarResultado();
// // }

// // function votoNulo() {
// //   if (votacaoEncerrada) return;

// //   votosNulo++;
// //   document.getElementById("mensagem").innerText = "✅ Voto nulo confirmado!";
// //   corrigir();
// //   atualizarResultado();
// // }

// function atualizarResultado() {
//   const lista = document.getElementById("resultado-lista");
//   lista.innerHTML = "";

//   for (const numero in candidatos) {
//     const candidato = candidatos[numero];
//     const item = document.createElement("li");
//     item.textContent = `${candidato.nome}: ${candidato.votos} voto(s)`;
//     lista.appendChild(item);
//   }

// //   const brancoItem = document.createElement("li");
// //   brancoItem.textContent = `Votos em branco: ${votosBranco}`;
// //   lista.appendChild(brancoItem);

// //   const nuloItem = document.createElement("li");
// //   nuloItem.textContent = `Votos nulos: ${votosNulo}`;
// //   lista.appendChild(nuloItem);
// }

// function finalizarVotacao() {
//   votacaoEncerrada = true;
//   document.getElementById("mensagem").innerText = "🛑 Votação encerrada!";
//   document.getElementById("numero").disabled = true;

//   // Desativa botões
//   document.getElementById("btn-corrigir").disabled = true;
//   document.getElementById("btn-confirmar").disabled = true;
//   document.getElementById("btn-branco").disabled = true;
//   document.getElementById("btn-nulo").disabled = true;
//   document.getElementById("btn-finalizar").disabled = true;

//   // Exibe resultado
//   document.getElementById("resultado").style.display = "block";
//   atualizarResultado();
// }

const candidatos = {
  "01": { nome: "Candidato 01", foto: "fotos/candidato01", votos: 0 },
  "02": { nome: "Candidato 02" , foto: "fotos/candidato02", votos: 0 },
  "03": { nome: "Candidato 03", foto: "fotos/candidato03", votos: 0 },
  "04": { nome: "Candidato 04", foto: "fotos/candidato04", votos: 0 },
  "05": { nome: "Candidato 05", foto: "fotos/candidato05", votos: 0 },
  "06": { nome: "Candidato 06", foto: "fotos/candidato06", votos: 0 },
  "07": { nome: "Candidato 07", foto: "fotos/candidato07", votos: 0 },
  "08": { nome: "Candidato 08", foto: "fotos/candidato08", votos: 0 },
  "09": { nome: "Candidato 09", foto: "fotos/candidato09", votos: 0 },
};

let votacaoEncerrada = false;

function atualizarCandidato() {
  if (votacaoEncerrada) return;

  const numero = document.getElementById("numero").value;
  const info = document.getElementById("info-candidato");

  if (candidatos[numero]) {
    info.innerHTML = `
      <p>Nome: ${candidatos[numero].nome}</p>
      <img src="${candidatos[numero].foto}" alt="Foto do candidato">
    `;
  } else {
    info.innerHTML = "<p>Candidato não encontrado</p>";
  }
}

function corrigir() {
  if (votacaoEncerrada) return;

  document.getElementById("numero").value = "";
  document.getElementById("info-candidato").innerHTML = "";
  document.getElementById("mensagem").innerText = "";
}

function confirmar() {
  if (votacaoEncerrada) return;

  const numero = document.getElementById("numero").value;
  if (candidatos[numero]) {
    candidatos[numero].votos++;
    document.getElementById("mensagem").innerText = "✅ Voto confirmado!";
    corrigir();
    document.getElementById("som-confirmacao").play();
  } else {
    document.getElementById("mensagem").innerText = "❌ Número inválido!";
  }
}

function atualizarResultado() {
  const lista = document.getElementById("resultado-lista");
  lista.innerHTML = "";

  for (const numero in candidatos) {
    const candidato = candidatos[numero];
    const item = document.createElement("li");
    item.textContent = `${candidato.nome}: ${candidato.votos} voto(s)`;
    lista.appendChild(item);
  }
}

function finalizarVotacao() {
  votacaoEncerrada = true;
  document.getElementById("mensagem").innerText = "🛑 Votação encerrada!";
  document.getElementById("numero").disabled = true;

  document.getElementById("btn-corrigir").disabled = true;
  document.getElementById("btn-confirmar").disabled = true;
  document.getElementById("btn-finalizar").disabled = true;

  document.getElementById("resultado").style.display = "block";
  atualizarResultado();
}
