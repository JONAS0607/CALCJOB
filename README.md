# Qual a proposta deste projeto?

[] Organização e estudo
[] Plataforma e Comunidade
[] Mentalidade Dev
[] Praticar as tecnologias do Discover

# O que você vai ganhar com isso?

[] Clareza prática
[] Entendimento da plataforma e comunidade
[] Projeto aplicando os conceitos do Discover
[] Bases necessárias para continuar sua jornada

## Dicas para ir até o fim

- Entre na comunidade do Discord
- Como a comunidade funciona
- Como tirar dúvidas técnicas
- Conectar-se com outros devs [fazer duplas]

# Conceitos

## O que é ser uma pessoa programadora?

- Oportunidades
  - Front-end
  - Back-end
  - Fullstack
- Mercado
  - Local x Global
  - Milhares de vagas
  - Experiência
- Soft e Hard Skills
- Tecnologias e evolução
- Especialista vs Generalista

## Guia de estudos e organização

- Pomodoro
- Tenha um lugar reservado para seu estudo
  - Foco
  - Silêncio
  - Interrupções
- Aprendizado ativo x passivo
  - Aprenda a se perguntar: Se pergunte o que você acabou de ver
  - Aprenda a ensinar: Repita o que você acabou de ver.
- Anotação e Revisão
  - Anote mais após a aula
  - Revise suas anotações e busque respostas para o que você
    não entendeu
- Pesquisas

## Dica de como acompanhar os vídeos

- Assista com o intuito de entender
- Você não precisa decorar (Processador x HD)
- Code o bloco de código após entender o que foi feito
- Não tem problema não entender tudo de primeira,
  leva tempo e mais conhecimento para que as coisas façam sentido.

## Ajustando a mentalidade

- Você precisa de tempo
  - Descanso faz parte do aprendizado (sono)
  - O cérebro precisa de tempo para assimilar as coisas
- Você precisa ter persistência
- Programar é encontrar soluções!
- "Eu não sou tão bom quanto ... "
- "Eu sinto que estou só copiando e colando"
- Você gosta do que está fazendo?

# Bora Codar

- [x] Ambiente \* [x] NodeJS
  - [x] Navegador
  - [x] VS Code
    - [x] Tema \* [x] Fontes
    - [x] Plugins
- [x] Apresentar HTML e CSS
  - [x] index.html
  - [x] profile.html
  - [x] job.html
  - [x] styles
  - [x] scripts
- [x] O que é Node
  - [x] página oficial
  - [x] node -v
- [x] Iniciar o projeto
  - [x] npm `npm init -y`
- [x] package.json
- [x] Instalar Express `npm i express`
  - [x] Dependencies `são configurados nos arquivos JSON dentro de objetos `
  - [x] node_modules `são pastas onde há configurações já programadas para nos ajudar no código`
- [x] Criar servidor
  - [x] require()
  - [x] Iniciar o servidor (listen)
  - [x] Primeira rota
    - [x] `.get("/", () ⇒ console.log('cheguei na rota'))`
    - [x] request e response
- [x] Instalar o nodemon `npm i nodemon -D`
  - [x] dev dependencies
  - [x] configurar `dentro do package.json no script`
  - [x] `npm run dev`
- [x] mostrando index.html
- [x] views directory `criamos uma pasta e passamos todos os arquivos html para ela`
- [x] public directory `criamos um diretório public e passamos os arquivos estáticos ou seja que não vão ser alterados com frequência para ela, ex : css imgs`
- [x] create routes.js
  - [x] module.exports
- [x] fix
  - [x] file paths
  - [x] href
- [x] template engine `a template escolhida foi a ejs`
- [x] Benefício 1: reutilizar componentes (header)
  - [x] instalar ejs `npm i ejs `
  - [x] transformar .html em .ejs
  - [x] `<%- include('parts/page-header', { title: 'Meu Perfil'}) %>`
  - [x] install ejs plugin
- [x] Benefício 2: Programar no HTML
  - [x] variáveis
  - [x] criar o objeto do perfil de usuário
  - [x] passar o objeto do perfil de usuário para o profile.ejs

# Recap

- O que você aprender nessa aula ?
- Comemore. 🎉 Você evoluiu 🚀

# Próxima aula

- Spoiler
- Participe da comunidade
- Tire dúvidas, ajude outros devs e se envolva por lá

- A aula vai ficar gravada
- Nosso time estará na comunidade para tirar dúvidas e te deixar por dentro de tudo.

# Mission: Assistir aos cursos

- [ok] NodeJS
- [ok] NodeJS com EJS

# AULA 2 Bora Codar

- [x] Revisão da última aula
- [x] O que veremos até o final dessa aula?

**PARA INICIAR UM PROJETO QUE TEM JSON APENAS RODAR O COMANDO `npm i` VAI INSTALAR TODAS AS DEPENDENCIAS NECESSÁRIAS DO PACOTE**

## Salvar Job

- [x] Form job

  - [x] method post
  - [x] action="/job"

  * [x] rota /job POST

  - [x] req.body
  - [x] urlencoded

  * [x] Criar array de jobs

  - [x] enviar para o index.ejs
  - [x] .forEach
  - [] ajustes dos dados no index

  * [x] Configurar jobs na criação de um novo Job

  - [x] job id: pegar o id do ultimo item do array
  - [x] created_at: Date.now()
    - [x] para o cálculo de dias restantes
  - [x] total-hours
  - [x] daily-hours
  - [x] name

  * [x] Atualizar os jobs no index, antes de apresentar

## Remaining calculation

- [x] Devemos calcular sempre que apresentar o projeto,
      pois poderemos mudar os dados do projeto a qualquer momento
- [x] remainingDays = total hours do job / daily hours do job
- [x] adicionar os dias à data de criação, para criar uma data futura
- [x] subtrair da data futura, o número de dias restantes baseado na data de hoje
- [x] pegar a diferença de milissegundos para dias
- [x] update status (done | progress)
- [x] budget: profile value hour \* total job hours
  - [x] deverá ser atualizado sempre que apresentar o projeto,
        pois poderá variar dependendo dos dados do projeto ou dos dados do perfil
  * [x] atualizar o index.ejs
  - [x] Prazo encerrado ao invés de 0 dias para a entrega
  * [x] adicionar uma entrada no jobs[] para o prazo encerrado

## Refatorar Jobs

    - [x] Criar um Object Literal Jobs
    - [x] Adicionar data em Jobs
    - [x] Adicionar index() e create()

## Object Profile

    * [x] data

- [x] update()
  - [x] Calculo de custo de hora
    - [x] weeksPerYear
    - [x] weeksPerMonth = weeks per year - vacation
    - [x] total hours per week
    - [x] monthly total hours
    - [x] value hour = monthly budget / monthly total hours
  - [x] redirect to /profile

## Editar job

- [x] criar função show
  - [x] rota job/:id GET
  - [x] req.params
  - [x] .find
  - [x] Job not found
  - [x] service: calculate job budget
  - [x] refactor index to use service
  - [x] update job-edit.ejs
- [x] criar função de update
  - [x] rota /job/:id POST
  - [x] .find
  - [x] job not found
  - [x] updatedJob
  - [x] Job.data= Job.data.map()
  - [x] redirect

## Delete job

- [x] route /job/delete/:id POST
- [x] Job.controller.delete()
- [x] req.params.id
- [x] Job.data.filter()
- [x] redirect to /
  - [x] Delete all Jobs and find error
  * [x] lastId of Job.controller.create()
  * [x] use optional chaining operator ?.
  * [x] use Logical OR operator

## Recap

- O que você aprender nessa aula ?

Comemore. 🎉
Você evoluiu 🚀

## Próxima aula

- Spoiler
- Participe da comunidade
- Tire dúvidas, ajude outros devs e se envolva por lá

- A aula vai ficar gravada
- Nosso time estará na comunidade para tirar dúvidas e te deixar por dentro de tudo.

## Mission: Assistir aos cursos

- [] NodeJS com EJS
- [] NodeJS SQLite

# AULA 3 # Bora Codar

- [x] Revisão da última aula
- [x] O que veremos até o final dessa aula?

## Refatorar

- [x] Sinalizar local da pasta views no server
- [x] Importar Path no server
- [x] Refatorar routes para nova forma de chamar views

## Refatorar Profile

    * [X] Separar controller

- [x] Criar model
  - [x] Separar data
  - [x] Criar get no model
  - [x] Importar model Profile no ProfileController
  - [x] Refatorar Profile.data para Profile.get()
  - [x] Refatorar update do profile no model

## Refatorar Job

    * [X] Mover controller para JobController
    * [X] Criar pasta utils
    * [X] Mover services de job para utils
    * [X] Importar utils dentro de jobController
    * [X] Refatorar chamada de job services para JobUtils

- [x] Mover Job data para model Job
  - [x] Importar model Job dentro de Jobcontroller
  - [x] Refatorar chamadas de job.data para Job
  - [x] Criar update no model recebendo newData
  - [x] Criar delete no model

## Refatorar Dashboard

    * [X] Passar index do JobController para DashboardController
    * [X] Refatorar a chamada da rota "/" no routes
    * [X] Importar model Job

- [x] Importar model Profile
  - [x] Importar JobUtils
  - [x] Refatorar chamadas de profile, job e utils
  - [x] Passar profile para index.ejs
- [x] Refatorar os dados de profile no index.ejs
- [x] Criar StatusCount
  - [x] Passar StatusCount para index.ejs
  - [x] Refatorar os dados de contagem de status no index.ejs
- [x] Calcular freeHours
  - [x] Passar freehours para index.ejs
  - [x] Refatorar dados de freehours no index.ejs
  - [x] Ajuste o alinhamento de campos de perfil

## Banco de dados

    * [X] Como funciona banco de dados e tabelas

# Recap

- O que você aprendeu nessa aula ?

Comemore. 🎉
Você evoluiu 🚀

# FLUXO DE AULAS

- [x] AULA 1 Construindo o motor da Nave !!
- [x] AULA 2 Novas peças para o motor
- [] AULA 3 A caixa preta da nave
