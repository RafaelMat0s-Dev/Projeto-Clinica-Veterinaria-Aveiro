// Central content source for Centro Veterinário de Aveiro (CVA).
// Drawn from Centro-Veterinario-Aveiro-Context-Document.md — update there first, then mirror here.

export const site = {
  name: "Centro Veterinário de Aveiro",
  shortName: "CVA",
  tagline: "O médico de família do seu animal",
  description:
    "Clínica veterinária de família em Aveiro há mais de 25 anos. Consultas, vacinação, cirurgia, diagnóstico e urgências para cães, gatos e exóticos.",
  url: "https://centrovetaveiro.pt",
  foundedYear: 2001,
};

export const contact = {
  phone: "234 314 080",
  phoneHref: "tel:+351234314080",
  urgencyPhone: "969 571 573",
  urgencyPhoneHref: "tel:+351969571573",
  fax: "234 314 082",
  email: "centrovetaveiro@gmail.com",
  emailHref: "mailto:centrovetaveiro@gmail.com",
  addressLines: ["Praceta da Rua da República, 7A", "Alagoas, 3810-495 Aveiro"],
  addressFull: "Praceta da Rua da República, 7A, Alagoas, 3810-495 Aveiro, Portugal",
  mapsQuery: "Centro Veterinário de Aveiro, Praceta da Rua da República, 7A, Alagoas, 3810-495 Aveiro",
  facebook: "https://www.facebook.com/centroveterinario.deaveiro/",
  instagram: "https://www.instagram.com/centro_veterinario_de_aveiro/",
};

export const hours = [
  { day: "Segunda-feira", hours: "10:00–12:30 · 14:30–19:30" },
  { day: "Terça-feira", hours: "10:00–12:30 · 14:30–19:30" },
  { day: "Quarta-feira", hours: "10:00–12:30 · 14:30–19:30" },
  { day: "Quinta-feira", hours: "10:00–12:30 · 14:30–19:30" },
  { day: "Sexta-feira", hours: "10:00–12:30 · 14:30–19:30" },
  { day: "Sábado", hours: "10:00–12:30 · 14:30–19:30" },
  { day: "Domingo", hours: "Encerrado" },
];

export const trustStats = [
  { value: "25+", label: "anos ao serviço de Aveiro", icon: "calendar" as const },
  { value: "35+", label: "anos de experiência clínica do fundador", icon: "stethoscope" as const },
  { value: "4.8★", label: "avaliação no Facebook (64 avaliações)", icon: "star" as const },
  { value: "11K+", label: "seguidores nas redes sociais", icon: "heart" as const },
];

export type ServiceCategory = {
  slug: string;
  icon: "stethoscope" | "syringe" | "scissors" | "scan" | "heart-pulse" | "home" | "bone" | "rabbit" | "shield-plus" | "activity" | "sparkles" | "tractor";
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
};

export const services: ServiceCategory[] = [
  {
    slug: "consultas",
    icon: "stethoscope",
    title: "Consultas Gerais",
    shortDescription: "Exames clínicos completos, do check-up de rotina ao acompanhamento de doenças.",
    description:
      "O coração da medicina de família: exames clínicos completos para cães, gatos e exóticos, em todas as fases da vida — desde a primeira consulta de cachorro/gatinho até ao acompanhamento sénior.",
    bullets: [
      "Consultas pediátricas (cachorros e gatinhos)",
      "Consultas geriátricas e acompanhamento sénior",
      "Dermatologia e problemas de pele",
      "Oftalmologia",
      "Medicina interna",
    ],
  },
  {
    slug: "vacinacao-prevencao",
    icon: "syringe",
    title: "Vacinação & Prevenção",
    shortDescription: "Planos de vacinação e desparasitação para manter o seu animal protegido.",
    description:
      "Protocolos de vacinação atualizados e programas de desparasitação interna e externa, adaptados à idade, estilo de vida e risco de cada animal.",
    bullets: [
      "Planos de vacinação cão e gato",
      "Desparasitação interna e externa",
      "Medicina preventiva e lembretes",
      "Aderente ao Cheque Veterinário",
    ],
  },
  {
    slug: "cirurgia",
    icon: "scissors",
    title: "Cirurgia & Esterilização",
    shortDescription: "Cirurgia geral e ortopédica em quirófano equipado, com anestesia e monitorização modernas.",
    description:
      "Quirófano equipado para cirurgia geral, ortopédica e de tecidos moles, com anestesia inalatória e monitorização de sinais vitais. Realizamos campanhas de esterilização a preços reduzidos, 3 vezes por ano.",
    bullets: [
      "Cirurgia geral e de tecidos moles",
      "Ortopedia (área de interesse do Dr. Carlos Ribeiro)",
      "Campanhas de esterilização/castração (2x fêmea, 1x macho por ano)",
      "Hospitalização e recobro aquecido",
      "Anestesia inalatória com monitorização de sinais vitais",
    ],
  },
  {
    slug: "diagnostico",
    icon: "scan",
    title: "Diagnóstico",
    shortDescription: "Raio-x digital, ecografia, ecodoppler e análises clínicas no local.",
    description:
      "Equipamento de imagiologia digital e apoio laboratorial para diagnósticos precisos — sem atrasos desnecessários no tratamento do seu animal.",
    bullets: [
      "Raio-x digital direto",
      "Ecografia e ecodoppler",
      "Cardiologia",
      "Análises clínicas (biologia externalizada a laboratório parceiro)",
    ],
  },
  {
    slug: "exoticos",
    icon: "rabbit",
    title: "Exóticos",
    shortDescription: "Cuidados especializados para coelhos, cobaias e outros pequenos mamíferos.",
    description:
      "A Dra. Dália Castro tem competência dedicada a exóticos — coelhos, cobaias e outros pequenos mamíferos recebem os mesmos cuidados atentos que cães e gatos.",
    bullets: ["Coelhos", "Cobaias (porquinhos-da-índia)", "Outros pequenos mamíferos"],
  },
  {
    slug: "visitas-domicilio",
    icon: "home",
    title: "Visitas ao Domicílio",
    shortDescription: "Consultas e vacinação em casa, para quem tem uma rotina mais atarefada.",
    description:
      "Serviço domiciliário para consultas e vacinações, pensado para clientes com pouca disponibilidade ou animais que viajam mal — a mesma medicina de confiança, ao conforto da sua casa.",
    bullets: ["Consultas em casa", "Vacinação em casa", "Ideal para animais que viajam mal"],
  },
  {
    slug: "estetica-nutricao",
    icon: "sparkles",
    title: "Banho, Tosquia & Nutrição",
    shortDescription: "Cuidados de higiene e dietas terapêuticas prescritas.",
    description:
      "Serviço de banho e tosquia, e aconselhamento em dietas terapêuticas para necessidades renais, gastrointestinais ou de peso.",
    bullets: ["Banho e tosquia", "Dietas terapêuticas prescritas"],
  },
  {
    slug: "producao-animal",
    icon: "tractor",
    title: "Produção Animal & Leiteiras",
    shortDescription: "Consultadoria a explorações de gado leiteiro, uma área histórica da clínica.",
    description:
      "Desde a fundação, o Dr. Carlos Ribeiro mantém acompanhamento a explorações de gado leiteiro na região de Aveiro, sobretudo através das suas rondas matinais.",
    bullets: ["Acompanhamento de efetivos leiteiros", "Rondas matinais a explorações"],
  },
];

export const urgentCare = {
  title: "Urgências Veterinárias",
  intro:
    "Prestamos atendimento urgente através da nossa linha dedicada. Importante: não somos um hospital 24 horas — o atendimento urgente é feito dentro e em torno do nosso horário de funcionamento, através da linha de urgência.",
  honestyNote:
    "Preferimos ser claros: se procura um hospital com urgências 24h todos os dias do ano, esse não é o nosso modelo. Somos a sua clínica de bairro, de confiança, com atendimento urgente dedicado durante o nosso horário alargado.",
  whatCounts: [
    "Dificuldade respiratória súbita",
    "Trauma ou acidente (atropelamento, queda)",
    "Ingestão de substância tóxica",
    "Hemorragias, convulsões ou colapso",
    "Dificuldade em parir",
    "Alterações súbitas e graves de comportamento ou estado geral",
  ],
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  since?: string;
};

export const team: TeamMember[] = [
  {
    slug: "carlos-ribeiro",
    name: "Dr. Carlos Ribeiro",
    role: "Fundador & Diretor Clínico",
    initials: "CR",
    since: "Na profissão desde 1979 · Fundou o CVA em 2001",
    bio: "Com mais de 35 anos de prática clínica e cirúrgica, o Dr. Carlos Ribeiro fundou o Centro Veterinário de Aveiro em 2001. As suas áreas de interesse são a ortopedia e a oftalmologia, e mantém ainda o acompanhamento histórico a explorações de gado leiteiro na região. Acredita numa medicina generalista feita com excelência, e num encaminhamento honesto para hospitais de referência sempre que um caso o exige.",
  },
  {
    slug: "dalia-castro",
    name: "Dra. Dália Castro",
    role: "Médica Veterinária",
    initials: "DC",
    since: "Com a equipa desde 2007",
    bio: "A trabalhar lado a lado com o Dr. Carlos Ribeiro desde 2007, a Dra. Dália Castro dedica-se a animais de companhia e tem uma competência particular em exóticos — coelhos, cobaias e outros pequenos mamíferos — além de um foco crescente em medicina interna, dermatologia e cirurgia geral.",
  },
  {
    slug: "milene-soares",
    name: "Milene Soares",
    role: "Enfermeira Veterinária",
    initials: "MS",
    bio: "Enfermeira veterinária e o rosto da receção do CVA, a Milene combina cuidados de enfermagem com apoio administrativo e financeiro. Acredita, como toda a equipa, que os primeiros cinco minutos de contacto são o que define a confiança de um cliente na clínica.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  source: "Facebook" | "Google";
};

export const testimonials: Testimonial[] = [
  {
    quote: "Fantástico, simplesmente... uma gratidão... obrigado por salvarem o meu animal.",
    author: "João Ricardo",
    source: "Facebook",
  },
  {
    quote: "O tratamento de todos os animais é impecável. Se não fosse a distância, levava lá os meus todos.",
    author: "Alexandrina Silva",
    source: "Facebook",
  },
  {
    quote: "Somos o médico de família do seu melhor amigo — e sentimos isso mesmo em cada visita.",
    author: "Cliente CVA",
    source: "Google",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Precisa de marcação ou aceitam walk-ins?",
    answer:
      "Recomendamos sempre marcação prévia, por telefone, WhatsApp ou através do nosso formulário de marcações, para garantirmos que temos o tempo e os recursos certos para o seu animal.",
  },
  {
    question: "Fazem urgências? Têm atendimento 24 horas?",
    answer:
      "Prestamos atendimento urgente através da nossa linha dedicada (969 571 573), mas não somos um hospital com atendimento 24 horas. O atendimento urgente é feito dentro e em torno do nosso horário de funcionamento.",
  },
  {
    question: "Quanto custa a primeira consulta ou a castração?",
    answer:
      "Os valores variam consoante o animal e o procedimento. Realizamos campanhas de esterilização com preços reduzidos três vezes por ano — contacte-nos para os valores e datas atuais.",
  },
  {
    question: "Atendem animais exóticos, como coelhos e cobaias?",
    answer:
      "Sim. A Dra. Dália Castro tem competência dedicada a coelhos, cobaias e outros pequenos mamíferos.",
  },
  {
    question: "Fazem visitas ao domicílio?",
    answer:
      "Sim, prestamos consultas e vacinação ao domicílio para clientes com pouca disponibilidade ou animais que viajam mal.",
  },
  {
    question: "Aderem ao Cheque Veterinário?",
    answer: "Sim, o CVA participa no programa Cheque Veterinário.",
  },
  {
    question: "Estão abertos ao sábado?",
    answer: "Sim, estamos abertos de segunda a sábado, de manhã e à tarde. Encerramos ao domingo.",
  },
];

export const navLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/equipa", label: "Equipa" },
  { href: "/urgencias", label: "Urgências" },
  { href: "/faq", label: "FAQ" },
  { href: "/contactos", label: "Contactos" },
];
