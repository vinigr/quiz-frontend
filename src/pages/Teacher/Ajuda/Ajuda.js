import React from "react";

import { Container } from "./styles";

const Ajuda = () => (
  <Container>
    <h2>Ajuda</h2>
    <h3>Tela inicial</h3>
    <p>
      Na primeira tela que é aberta após a realização do Login, se já tiver
      disciplinas criadas e alguma partida disputada por seus alunos então você
      poderá observar alguns gráficos. O primeiro deles mostra quais dos seus
      alunos tem mais pontos acumulados, incluido todas as suas disciplinas.
    </p>
    <h3>Disciplinas</h3>
    <p>
      Nessa tela você terá acesso a todas suas disciplinas, na parte inferior
      direita tem um botão para adicionar uma nova, se assim desejar.
    </p>
    <div className="h4">
      <h4>Criação</h4>
      <p>
        Para criação será solicitado apenas um nome e uma descrição para a
        matéria.
      </p>
    </div>
    <div className="h4">
      <h4>Link para disciplina</h4>
      <p>
        Cada disciplina é representada com um card, nele possui o nome, a
        descrição e um código que é gerado automaticamente na criação, a partir
        dele seus alunos se registrarão e terão acesso ao seu conteúdo. Além
        disso do lado direito possui um ícone com três pontos que dá opções para
        editar o nome e descrição ou apagar a disciplina.
      </p>
    </div>
    <h3>Disciplina</h3>
    <p>
      Ao acessar uma das suas disciplinas a primeira tela que será exibida,
      mostrará gráficos gerados sobre ela com seus maiores pontuadores, a média
      de pontos em cada questionário criado e a quantidade de respostas certas,
      erradas e puladas.
    </p>
    <div className="h4">
      <h4>Menu superior</h4>
      <p>
        No menu possui quatro opções, sendo elas Estatísticas, pessoas, questões
        e questionários
      </p>
    </div>
    <div className="h5">
      <h5>Pessoas</h5>
      <p>
        Nesse espaço será exibido os alunos que estão cadastrados nessa
        disciplina, a partir disso você poderá excluir a participação de algum
        dos listados.
      </p>
      <h5>Questões</h5>
      <p>
        Essa tela será mostrado o banco de questões cadastradas nessa
        disciplina, dando a opção para que mais perguntas possam ser criadas ou
        editadas. Abrindo cada uma delas você poderá observar a data em que ela
        foi criada e quando foi a sua última edição.
      </p>
      <h5>Questionários</h5>
      <p>
        Nesta parte os <i>quizzes</i> dessa disciplina são listados, com opção
        para bloquear o acesso a ele e ao lado o código, acesso para alunos que
        não possuem conta no aplicativo, é mostrado.
      </p>
    </div>
    <div className="h6">
      <h6>Questionário</h6>
      <p>
        Ao acessar o quiz, você verá o nome, quantos alunos já jogaram e as
        questões com estatísticas de respostas em cada opção. Também tem a opção
        para acompanhar os resultados em tempo real, bastante comum em uso em
        sala de aula, para previnir a privacidade dos resultados dos alunos,
        você tem opção de mostrar ou ocultar os nomes.
      </p>
      <p>
        Na criação do quiz, será solicitado um nome, a data de liberação, que
        tem como padrão o horário atual, uma hora para expiração do acesso, se
        desejar, assim como se quiser liberá-lo para alunos que não possuem
        cadastro, você pode gerar um código de acesso.
      </p>
      <p>
        Na escolha das questões você escolhe se deseja listar as questões apenas
        daquela matéria ou se quer listar todas suas questões. E depois, você
        escolhe se deseja dar um <i>feedback</i> ao aluno a cada resposta dada
        ou se quer liberar apenas no final do quiz.
      </p>
    </div>
  </Container>
);

export default Ajuda;
