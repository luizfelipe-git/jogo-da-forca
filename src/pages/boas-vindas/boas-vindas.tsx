import "./index.css";
import { useState } from "react";

function BoasVindas() {
   const [nomeInserido, setNomeInserido] = useState<string>('');
   const [jogadores, setJogadores] = useState<string[]>([]);
   const [num, setNum] = useState<number>(0);

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
   }

   return (
      <div>
         <h1>Jogo da Forca</h1>

         <form id="form-jogadores" onSubmit={handleSubmit}>
            <h2>Quem vai jogar?</h2>
            <input id="nome-inserido" type="text" placeholder="Digite um nome" value={nomeInserido} onChange={(e) => setNomeInserido(e.target.value)}></input>
            <button id="adicionar-jogador" onClick={() => setJogadores([...jogadores, nomeInserido.trim().charAt(0).toUpperCase() + nomeInserido.slice(1)])}>Adicionar</button>
         </form>

         <div>
            <h2>{jogadores.length > 0 ? jogadores : "Nenhum jogador adicionado"}</h2>
         </div>

         <div>
            <button form="form-jogadores" id="iniciar-jogo" onClick={() => setNum(num+1)}>Iniciar jogo</button>
            <span>{num}</span>
         </div>

         <div>Quadro de Pontuações:</div>

         {/* <span>{num === 1 ? alert(num) : null}</span> */}
      </div>
   )
}

export default BoasVindas;