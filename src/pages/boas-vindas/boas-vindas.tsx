import "./index.css";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Add } from '@mui/icons-material';


function BoasVindas() {
   const [nomeInserido, setNomeInserido] = useState<string>('');
   const [jogador, setJogador] = useState<string[]>([]);
   const [num, setNum] = useState<number>(0);

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
   }

   return (
      <div className="container">
         <div className="home">
            <h1>Jogo da Forca</h1>
            <section className="content">
               <div className="initial-home">

                  <form id="form-jogador" onSubmit={handleSubmit}>
                  <div>
                     <h2>Quem vai jogar?</h2>
                  </div>
                  
                  <div>
                     <TextField id="nome-inserido" variant="outlined" size="small" label="Nome do jogador" value={nomeInserido} onChange={(e) => setNomeInserido(e.target.value)} />
                     <Button id="adicionar-jogador" variant="outlined" onClick={() => setJogador([...jogador, nomeInserido.trim().charAt(0).toUpperCase() + nomeInserido.slice(1)])}>
                        <Add /> Adicionar Jogador
                     </Button>
                  </div>
                  </form>

                  <div>
                     <h2>{jogador.length > 0 ? jogador : "Nenhum jogador adicionado"}</h2>
                  </div>

                  <div>
                     <Button form="form-jogador" id="iniciar-jogo" variant="outlined" onClick={() => setNum(num+1)}>Iniciar Jogo</Button>
                     <span>{num}</span>
                  </div>

                  {/* <span>{num === 1 ? alert(num) : null}</span> */}
               </div>

               <div className="score">
                  <span>Placar de pontuações:</span>
                  <ul>
                     <li>jogador 1 - 99</li>
                     <li>jogador 2 - 99</li>
                     <li>jogador 3 - 99</li>
                  </ul>
               </div>
            </section>
         </div>
      </div>
   )
}

export default BoasVindas;