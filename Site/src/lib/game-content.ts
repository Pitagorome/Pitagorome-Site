import { props, shots, sprites, tiles } from "@/assets/game";

export const REPO_URL = "https://github.com/Pitagorome/Pitagorome";

export type DialogueLine = { speaker: string; text: string };

/** Official intro lines from data/dialogues/intro_dialogues.gd */
export const INTRO_DIALOGUE: DialogueLine[] = [
  {
    speaker: "Coordenadora",
    text: "Ah, você chegou! Eu sou a Coordenadora da Escola Pitagórica, estávamos realmente precisando de um novo diretor desde que o último foi embora. Os conflitos e os dilemas só têm aumentado.",
  },
  {
    speaker: "Coordenadora",
    text: "Aqui na Escola Pitagórica nós vivemos um dia de cada vez. Seu papel como diretor será organizar a escola e solucionar problemas.",
  },
  {
    speaker: "Coordenadora",
    text: "Mas não se preocupe! Sempre que se sentir perdido ou precisar de ajuda, é só me procurar!",
  },
  {
    speaker: "Professor de Matemática",
    text: "Se precisar da minha ajuda, pode pedir... mas terá um preço... muahaha.",
  },
];

export const FEATURES = [
  {
    title: "Explore a escola",
    text: "Ande em visão de cima por mais de dez ambientes: corredor, biblioteca, refeitório, pátio, Sala do Gerador e muito mais.",
    prop: "globe" as const,
  },
  {
    title: "Converse com todo mundo",
    text: "A Coordenadora, o Zelador, o Professor de Matemática e a Cantineira têm algo a dizer e, às vezes, uma pista.",
    prop: "studentDesk" as const,
  },
  {
    title: "Resolva com matemática",
    text: "Cada problema da escola vira um desafio: uma grade de horários, um gerador sem luz, uma máquina de refrigerante.",
    prop: "chalkboard" as const,
  },
  {
    title: "Avance pelos trimestres",
    text: "Três fases jogáveis, uma por trimestre, com 15 tarefas que ficam mais desafiadoras até o fim do ano.",
    prop: "muralBoard" as const,
  },
];

/**
 * Lousa (quadro-negro) da página inicial: um conteúdo por item. "formula" é escrita no quadro
 * (genérica, sem revelar respostas); "tasks" são as tarefas do roteiro em que o conteúdo aparece.
 */
export const QUADRO = [
  {
    topico: "Lógica",
    formula: "se P, então Q",
    desc: "Horários sem conflito, senhas com pistas e depoimentos que não batem.",
    tasks: ["Conflito no Horário", "O Cofre da Escola", "Quem Está Matando Aula?"],
  },
  {
    topico: "Equações",
    formula: "ax + b = c",
    desc: "Um bilhete do zelador esconde o número do armário certo.",
    tasks: ["O Troféu Desaparecido", "O Gerador de Emergência", "As Mesas do Refeitório"],
  },
  {
    topico: "Proporções",
    formula: "a : b = c : d",
    desc: "Figurinhas e cartazes precisam manter a mesma proporção.",
    tasks: ["Figurinhas", "O Cartaz da Feira"],
  },
  {
    topico: "Funções",
    formula: "y = ax + b",
    desc: "Uma máquina de refrigerante cobra seguindo um padrão que ninguém entendeu.",
    tasks: ["A Máquina de Refrigerante"],
  },
  {
    topico: "Combinatória",
    formula: "C(n, p)",
    desc: "Quantas equipes, fotos e murais diferentes são possíveis?",
    tasks: ["As Equipes da Gincana", "O Lugar da Foto Oficial", "A Decoração do Pátio"],
  },
  {
    topico: "Raciocínio algébrico",
    formula: "x + (x + k) = total",
    desc: "Montar a equação certa para descobrir o que cada interruptor controla.",
    tasks: ["As Luzes do Corredor"],
  },
];

export const MATH_TOPICS = QUADRO.map((q) => q.topico);

export const STATS = [
  { value: "3", label: "fases" },
  { value: "15", label: "tarefas" },
  { value: "1", label: "escola para dirigir" },
];

export type Task = { title: string; topic: string; text?: string };
export type Phase = {
  id: string;
  label: string;
  title: string;
  status: "jogável" | "em desenvolvimento";
  tasks: Task[];
};

export const PHASES: Phase[] = [
  {
    id: "fase-1",
    label: "Fase 1 · 1º trimestre",
    title: "Lógica e Organização",
    status: "jogável",
    tasks: [
      {
        title: "Tour na Escola",
        topic: "conhecer os ambientes",
        text: "A Coordenadora apresenta o corredor, o Zelador e a Sala de Matemática.",
      },
      {
        title: "Conflito no Horário",
        topic: "lógica organizacional",
        text: "Seis aulas, três horários e professores com horário limitado. Reorganize a grade sem quebrar nenhuma regra.",
      },
      {
        title: "O Cofre da Escola",
        topic: "lógica e combinatória",
        text: "O Zelador esqueceu a senha do cadeado do almoxarifado, mas lembra de algumas pistas.",
      },
      {
        title: "Quem Está Matando Aula?",
        topic: "raciocínio lógico",
        text: "João, Pedro e Lucas deram depoimentos. Apenas um deles está mentindo.",
      },
      {
        title: "O Ônibus da Excursão",
        topic: "distribuição com restrições",
        text: "Duas vans, no máximo 4 passageiros cada, 1 monitor por van e alunos que não podem ir juntos.",
      },
    ],
  },
  {
    id: "fase-2",
    label: "Fase 2 · 2º trimestre",
    title: "Equações, Proporções e Probabilidade",
    status: "jogável",
    tasks: [
      {
        title: "O Troféu Desaparecido",
        topic: "equação de 1º grau",
        text: "Véspera de inspeção e o troféu sumiu. O Zelador guardou num dos 15 armários e só deixou um bilhete com uma equação.",
      },
      {
        title: "Figurinhas",
        topic: "proporções",
        text: "As figurinhas do mural da turma se misturaram. Descubra qual caixa mantém a proporção certa.",
      },
      {
        title: "O Gerador de Emergência",
        topic: "potência e raiz",
        text: "A escola ficou sem luz. Ligue no máximo 3 alavancas para chegar a exatamente 30 de carga.",
      },
      {
        title: "As Mesas do Refeitório",
        topic: "multiplicação e divisão",
        text: "Quatro turmas de 28 alunos almoçam em 2 turnos. Quantos lugares faltam na última mesa?",
      },
      {
        title: "O Cartaz da Feira",
        topic: "proporção",
        text: "Os cartazes saíram em tamanhos diferentes. Qual deles mantém a proporção do modelo?",
      },
    ],
  },
  {
    id: "fase-3",
    label: "Fase 3 · 3º trimestre",
    title: "Funções, Combinatória e Raciocínio Algébrico",
    status: "jogável",
    tasks: [
      {
        title: "A Máquina de Refrigerante",
        topic: "função afim",
        text: "A máquina nova cobra de um jeito estranho. Regra de três não funciona: descubra a função.",
      },
      {
        title: "As Equipes da Gincana",
        topic: "combinação",
        text: "Seis representantes, equipes de 3 e a ordem não importa. Quantas equipes diferentes existem?",
      },
      {
        title: "As Luzes do Corredor",
        topic: "raciocínio algébrico",
        text: "Vinte lâmpadas em dois interruptores, e um controla 4 a mais que o outro. Monte a equação certa.",
      },
      {
        title: "O Lugar da Foto Oficial",
        topic: "combinatória",
        text: "Cinco professores, três lugares: um na frente em destaque e uma dupla atrás. De quantas formas?",
      },
      {
        title: "A Decoração do Pátio",
        topic: "arranjo",
        text: "Seis placas, três lugares no mural e a posição muda o resultado. Fim do ano letivo!",
      },
    ],
  },
];

/** Rooms and the exact floor/wall tiles each scene uses in scenes/school/*.tscn */
export const ROOMS: {
  name: string;
  text: string;
  floor: string;
  wall: string;
  floorSize: [number, number];
  wallSize: [number, number];
  prop:
    | "plantPalm"
    | "chalkboard"
    | "libraryShelf"
    | "woodenTable"
    | "lockers"
    | "locker"
    | "plantFicus"
    | "painting"
    | "studentDesk"
    | "teacherDesk";
}[] = [
  {
    name: "Gabinete do Diretor",
    text: "Sua sala. A grade de horários e o calendário da escola ficam aqui.",
    floor: tiles.pisosMadeiraClara,
    wall: tiles.paredesMadeiraVermelha,
    floorSize: [16, 16],
    wallSize: [16, 32],
    prop: "teacherDesk",
  },
  {
    name: "Corredor",
    text: "O centro da escola. Daqui saem todas as portas.",
    floor: tiles.pisosAzulejoAzul,
    wall: tiles.paredesBege,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "plantPalm",
  },
  {
    name: "Sala de Matemática",
    text: "Território do Professor de Matemática.",
    floor: tiles.pisosAzulejoAmarelo,
    wall: tiles.paredesAzul,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "chalkboard",
  },
  {
    name: "Biblioteca",
    text: "Estantes cheias e silêncio quase garantido.",
    floor: tiles.pisosTaco,
    wall: tiles.paredesMadeiraEscura,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "libraryShelf",
  },
  {
    name: "Coordenação",
    text: "Onde a Coordenadora resolve (quase) tudo.",
    floor: tiles.pisosMadeiraEscura,
    wall: tiles.paredesRosa,
    floorSize: [16, 16],
    wallSize: [16, 32],
    prop: "woodenTable",
  },
  {
    name: "Almoxarifado",
    text: "Materiais novos trancados por um cadeado de 3 dígitos.",
    floor: tiles.pisosTijolo,
    wall: tiles.paredesCinzaAzul,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "lockers",
  },
  {
    name: "Portão",
    text: "Saída da excursão, chegada de cada novo dia e cenário da foto oficial.",
    floor: tiles.exteriorGrama,
    wall: tiles.exteriorCalcada,
    floorSize: [16, 16],
    wallSize: [16, 16],
    prop: "plantFicus",
  },
  {
    name: "Sala dos Armários",
    text: "Quinze armários numerados. Em um deles está o troféu da escola.",
    floor: tiles.pisosCeramicaCinza,
    wall: tiles.paredesAzul,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "lockers",
  },
  {
    name: "Sala de Artes",
    text: "Onde a turma monta o mural de figurinhas.",
    floor: tiles.pisosMadeiraClara,
    wall: tiles.paredesRosa,
    floorSize: [16, 16],
    wallSize: [16, 32],
    prop: "painting",
  },
  {
    name: "Sala do Gerador",
    text: "Quando a luz acaba, é aqui que tudo se resolve.",
    floor: tiles.pisosCeramicaCinza,
    wall: tiles.paredesMadeiraEscura,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "locker",
  },
  {
    name: "Refeitório",
    text: "Mesas para dois turnos de almoço e uma máquina de refrigerante misteriosa.",
    floor: tiles.pisosAzulejoAmarelo,
    wall: tiles.paredesBege,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "studentDesk",
  },
  {
    name: "Pátio",
    text: "Gincana, decoração de fim de ano e muito barulho no recreio.",
    floor: tiles.pisosTijolo,
    wall: tiles.paredesBege,
    floorSize: [48, 32],
    wallSize: [16, 32],
    prop: "plantPalm",
  },
];

export type Character = {
  name: string;
  role: string;
  text: string;
  /** Folhas de sprite do jogo (uma por personagem que aparece no cartão) */
  sheets?: string[];
  quote?: string;
  planned?: boolean;
};

export const CHARACTERS: Character[] = [
  {
    name: "Coordenadora",
    role: "Sua guia",
    text: "Apresenta a escola, acompanha o tour e está sempre por perto quando você se sentir perdido.",
    sheets: [sprites.ameliaIdle],
    quote: "Sempre que se sentir perdido ou precisar de ajuda, é só me procurar!",
  },
  {
    name: "Zelador",
    role: "Guardião das chaves",
    text: "Guarda tudo em segurança, e depois esquece onde. Mas sempre deixa pistas.",
    sheets: [sprites.alexIdle],
    quote: "Não sei como conseguem sujar o chão sem sair da cadeira.",
  },
  {
    name: "Professor de Matemática",
    role: "Ajuda com um preço",
    text: "Responsável pela parte matemática da escola. Oferece ajuda, mas avisa que vai cobrar.",
    sheets: [sprites.bobIdle],
    quote: "Lembre-se, diretor: minha ajuda tem um preço... muahaha.",
  },
  {
    name: "João, Pedro e Lucas",
    role: "Alunos",
    text: "Um deles matou aula. Ouça os três depoimentos e descubra quem está mentindo.",
    sheets: [sprites.alunoJoaoIdle, sprites.alunoPedroIdle, sprites.alunoLucasIdle],
    quote: "Eu estava na aula o tempo todo!",
  },
  {
    name: "Cantineira",
    role: "Dona do refeitório",
    text: "Cuida do almoço e da máquina de refrigerante. Garante que contou tudo direitinho... quase.",
    sheets: [sprites.cantineiraIdle],
    quote: "Eu contei tudo direitinho! Quer dizer... quase.",
  },
  {
    name: "Diretor Otávio",
    role: "O diretor anterior",
    text: "Foi demitido pela Secretaria de Educação: nenhum problema da escola foi resolvido no ano dele.",
    sheets: [sprites.diretorAntigoIdle],
    quote: "DEMITIDO?! Mas eu ia resolver tudo! Um dia... talvez... com calma...",
  },
  {
    name: "Professora de Artes",
    role: "Mural da turma",
    text: "Está terminando o mural com a turma, mas as figurinhas se misturaram nas caixas.",
    sheets: [sprites.professoraArtesIdle],
    quote: "Ainda bem que apareceu. Acabamos misturando as figurinhas.",
  },
];

/** Os 13 visuais do seletor "Crie seu personagem" (game_manager.gd: APPEARANCES e APPEARANCE_NAMES) */
export const DIRECTOR_LOOKS = [
  { sheet: sprites.adamIdle, label: "Visual 1" },
  { sheet: sprites.escoteiro1Idle, label: "Visual 2" },
  { sheet: sprites.escoteiro2Idle, label: "Visual 3" },
  { sheet: sprites.carteiro1Idle, label: "Visual 4" },
  { sheet: sprites.carteiro2Idle, label: "Visual 5" },
  { sheet: sprites.grupo1Idle, label: "João" },
  { sheet: sprites.grupo2Idle, label: "Edu" },
  { sheet: sprites.grupo3Idle, label: "Guigas" },
  { sheet: sprites.grupo4Idle, label: "Ana" },
  { sheet: sprites.joaoEfommIdle, label: "João (EFOMM)" },
  { sheet: sprites.guigasEfommIdle, label: "Guigas (EFOMM)" },
  { sheet: sprites.eduTencelIdle, label: "Edu (Tenente-Coronel)" },
  { sheet: sprites.anaCientistaIdle, label: "Ana Julia (Cientista/Engenheira)" },
];

export const GALLERY = [
  {
    src: shots.ambientes,
    title: "Corredor da escola",
    text: "Fase 1 · Tarefa 1: o tour começa no corredor, com placas para cada sala.",
  },
  {
    src: shots.escolaConceito,
    title: "Primeira conversa",
    text: "A Coordenadora recebe o novo diretor no gabinete.",
  },
  {
    src: shots.criacaoPersonagem,
    title: "Crie seu personagem",
    text: "Escolha nome, se é diretor ou diretora e a aparência.",
  },
  {
    src: shots.faseJogo,
    title: "Conflito no Horário",
    text: "Tarefa 2: reorganize a grade sem quebrar nenhuma regra.",
  },
  {
    src: shots.personagens,
    title: "Elenco",
    text: "As aparências do diretor e o Professor de Matemática.",
  },
];

export const TEAM = [
  // Os personagens de cada integrante no seletor do jogo (tools/gerar_personagens.py)
  { name: "Ana Julia Cardoso Moser", sheet: sprites.grupo4Idle },
  { name: "Eduardo de Lazzari Oliveira", sheet: sprites.grupo2Idle },
  { name: "Guilherme Pereira de Oliveira", sheet: sprites.grupo3Idle },
  { name: "João Paulo Queiroz Costa", sheet: sprites.grupo1Idle },
];

export const TECH = [
  { label: "Engine", value: "Godot Engine 4" },
  { label: "Linguagem", value: "GDScript" },
  { label: "Plataforma", value: "HTML5" },
  { label: "Gráficos", value: "Pixel Art 2D" },
  { label: "Perspectiva", value: "Top-down" },
];

export const CONTROLS = [
  { keys: ["W", "A", "S", "D"], alt: "ou setas", action: "Andar pela escola" },
  { keys: ["E"], action: "Interagir com pessoas e objetos" },
  { keys: ["Espaço", "Enter"], action: "Avançar os diálogos" },
  { keys: ["Tab"], action: "Abrir a prancheta com a tarefa e o objetivo" },
  { keys: ["Esc"], action: "Pular a historinha do começo" },
];

/** Link do botão "Jogar online" da página Jogar agora. */
export const PLAY_ONLINE_URL = "https://pitagorome.github.io/Pitagorome/teste/";

/**
 * DOWNLOADS. Enquanto DOWNLOADS_SOON for true, a página aparece coberta pelo aviso "Em breve".
 * Quando houver arquivos, coloque-os em public/downloads/ (ex.: public/downloads/pitagorome-windows.zip),
 * preencha o "href" de cada item (ex.: "/downloads/pitagorome-windows.zip") e mude DOWNLOADS_SOON para false.
 * Na versão de navegador, "external: true" abre o endereço do jogo hospedado em vez de baixar um arquivo.
 */
export const DOWNLOADS_SOON = true;
export const DOWNLOADS: {
  tag: string;
  name: string;
  text: string;
  action?: string;
  external?: boolean;
  href: string;
  prop: "globe" | "studentDesk" | "teacherDesk" | "bookshelfWood";
}[] = [
  {
    tag: "Computador",
    name: "Windows",
    text: "Pacote para computadores com Windows.",
    href: "",
    prop: "studentDesk",
  },
  {
    tag: "Computador",
    name: "macOS",
    text: "Pacote para computadores com macOS.",
    href: "",
    prop: "teacherDesk",
  },
  {
    tag: "Computador",
    name: "Linux",
    text: "Pacote para computadores com Linux.",
    href: "",
    prop: "bookshelfWood",
  },
];

/** Estrutura de pastas do repositório do jogo (README). */
export const REPO_TREE = `scenes/     cenas e ambientes
scripts/    scripts em GDScript
assets/     recursos gráficos
data/       dados do jogo
tests/      testes
project.godot`;

export { props, shots, sprites, tiles };
