import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  DatabaseZap,
  GitBranch,
  HardDriveDownload,
  LayoutTemplate,
  ListChecks,
  Network,
  RefreshCcw,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Waypoints,
  Wrench,
} from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  promise: string;
  context: string;
  deliverables: string[];
  approach: string[];
  icon: LucideIcon;
};

export type SolutionArea = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  solutions: Solution[];
};

export const solutionAreas: SolutionArea[] = [
  {
    id: "cloud-operacoes",
    name: "Cloud & Operações",
    description: "Ambientes disponíveis, escaláveis e bem operados.",
    icon: Cloud,
    solutions: [
      {
        slug: "cloud",
        title: "Cloud: Azure, AWS e GCP",
        shortTitle: "Cloud",
        summary: "Arquitetura, migração e evolução de ambientes nas principais plataformas de nuvem.",
        promise: "Nuvem alinhada à operação, à segurança e ao crescimento do seu negócio.",
        context: "Ambientes cloud exigem decisões que equilibrem desempenho, governança, custo e continuidade. A X3 apoia essa jornada do desenho à operação em Azure, AWS e GCP.",
        deliverables: ["Diagnóstico e arquitetura cloud", "Planejamento e execução de migrações", "Modernização e otimização de ambientes", "Governança e acompanhamento operacional"],
        approach: ["Entendimento do ambiente atual", "Arquitetura adequada ao contexto", "Migração controlada", "Evolução contínua"],
        icon: Cloud,
      },
      {
        slug: "devops",
        title: "DevOps",
        shortTitle: "DevOps",
        summary: "Práticas, automação e integração para entregas de software mais rápidas e confiáveis.",
        promise: "Transforme desenvolvimento e operação em um fluxo contínuo de entrega.",
        context: "Processos manuais e ambientes inconsistentes aumentam riscos e atrasam entregas. Estruturamos práticas DevOps que conectam times, automação e governança.",
        deliverables: ["Pipelines de integração e entrega", "Infraestrutura como código", "Padronização de ambientes", "Monitoramento e melhoria do fluxo"],
        approach: ["Mapeamento do ciclo atual", "Priorização de gargalos", "Automação progressiva", "Acompanhamento de indicadores"],
        icon: GitBranch,
      },
      {
        slug: "gestao-de-ti",
        title: "Gestão de TI",
        shortTitle: "Gestão de TI",
        summary: "Estratégia, processos e acompanhamento para uma operação de tecnologia mais eficiente.",
        promise: "Tecnologia organizada para sustentar as prioridades do negócio.",
        context: "A gestão de TI precisa traduzir demandas de negócio em prioridades, processos e níveis de serviço claros. Apoiamos a estruturação e a evolução dessa operação.",
        deliverables: ["Diagnóstico da operação", "Desenho de processos e governança", "Gestão de demandas e fornecedores", "Indicadores e rotinas de acompanhamento"],
        approach: ["Leitura do cenário", "Definição de prioridades", "Organização da operação", "Ciclo de melhoria"],
        icon: Wrench,
      },
      {
        slug: "backup-e-continuidade",
        title: "Backup & Continuidade",
        shortTitle: "Backup & Continuidade",
        summary: "Proteção, recuperação e continuidade para dados e sistemas críticos.",
        promise: "Prepare sua operação para recuperar dados e seguir funcionando.",
        context: "Ter cópias não é o mesmo que ter uma estratégia de recuperação. Desenhamos rotinas e arquiteturas de backup conectadas à criticidade real da operação.",
        deliverables: ["Mapeamento de ativos críticos", "Estratégia e políticas de backup", "Planos de recuperação", "Testes e revisões periódicas"],
        approach: ["Classificação de criticidade", "Definição de objetivos", "Implementação controlada", "Testes de recuperação"],
        icon: HardDriveDownload,
      },
    ],
  },
  {
    id: "produtos-digitais",
    name: "Produtos Digitais",
    description: "Experiências e sistemas construídos para evoluir.",
    icon: Code2,
    solutions: [
      {
        slug: "ux-ui-design",
        title: "UX/UI Design",
        shortTitle: "UX/UI Design",
        summary: "Pesquisa, experiência e interfaces que conectam necessidades reais a produtos intuitivos.",
        promise: "Experiências digitais claras para pessoas e eficientes para o negócio.",
        context: "Bons produtos reduzem esforço, orientam decisões e tornam tarefas complexas mais simples. Unimos visão de negócio, pesquisa e design de interface.",
        deliverables: ["Pesquisa e descoberta", "Jornadas e arquitetura de informação", "Protótipos e interfaces", "Design systems e validação"],
        approach: ["Descobrir", "Definir", "Prototipar", "Validar e evoluir"],
        icon: LayoutTemplate,
      },
      {
        slug: "desenvolvimento-de-software",
        title: "Desenvolvimento de Software",
        shortTitle: "Desenvolvimento de Software",
        summary: "Aplicações e sistemas sob medida, do planejamento à evolução contínua.",
        promise: "Software que resolve o desafio de hoje sem limitar o crescimento de amanhã.",
        context: "Soluções sob medida precisam nascer com arquitetura consistente, experiência clara e capacidade de evolução. A X3 conecta produto, design e engenharia em uma entrega única.",
        deliverables: ["Aplicações web e mobile", "Sistemas corporativos", "APIs e integrações", "Modernização de sistemas"],
        approach: ["Descoberta e escopo", "Design e arquitetura", "Construção iterativa", "Sustentação e evolução"],
        icon: Code2,
      },
      {
        slug: "produtos-digitais-e-saas",
        title: "Produtos Digitais & SaaS",
        shortTitle: "Produtos Digitais & SaaS",
        summary: "Estratégia, construção e evolução de produtos digitais e plataformas SaaS.",
        promise: "Da ideia ao produto em operação, com visão de negócio e tecnologia.",
        context: "Criar um produto exige decisões coordenadas sobre mercado, experiência, arquitetura e operação. Atuamos de ponta a ponta para transformar oportunidades em plataformas reais.",
        deliverables: ["Discovery e estratégia de produto", "MVPs e validação", "Plataformas SaaS", "Roadmap e evolução contínua"],
        approach: ["Validar a oportunidade", "Priorizar a proposta", "Construir o produto", "Medir e evoluir"],
        icon: Blocks,
      },
      {
        slug: "automacoes-e-integracoes",
        title: "Automações & Integrações",
        shortTitle: "Automações & Integrações",
        summary: "Fluxos conectados para reduzir tarefas manuais, erros e tempo de operação.",
        promise: "Faça sistemas e processos trabalharem juntos.",
        context: "Atividades repetitivas e informações isoladas consomem tempo e dificultam a escala. Integramos sistemas e automatizamos etapas com foco no resultado operacional.",
        deliverables: ["Mapeamento de processos", "Integrações entre sistemas", "Automação de workflows", "Monitoramento e tratamento de exceções"],
        approach: ["Identificar oportunidades", "Desenhar o fluxo", "Integrar e automatizar", "Acompanhar ganhos"],
        icon: RefreshCcw,
      },
    ],
  },
  {
    id: "gestao-qualidade",
    name: "Gestão & Qualidade",
    description: "Governança e pessoas para entregar com consistência.",
    icon: ListChecks,
    solutions: [
      {
        slug: "project-management",
        title: "Project Management",
        shortTitle: "Project Management",
        summary: "Planejamento e condução de projetos de tecnologia com clareza e governança.",
        promise: "Projetos conduzidos com prioridade, transparência e foco na entrega.",
        context: "Iniciativas complexas precisam de alinhamento, acompanhamento e decisões rápidas. A X3 organiza a execução para conectar escopo, pessoas, riscos e objetivos.",
        deliverables: ["Planejamento e estruturação", "Gestão de escopo, prazo e riscos", "Coordenação de times e fornecedores", "Comunicação executiva e indicadores"],
        approach: ["Alinhar objetivos", "Estruturar a execução", "Acompanhar riscos", "Consolidar aprendizados"],
        icon: ListChecks,
      },
      {
        slug: "qualidade-de-software",
        title: "Qualidade de Software",
        shortTitle: "Qualidade de Software",
        summary: "Estratégia e práticas de qualidade para produtos mais confiáveis e sustentáveis.",
        promise: "Qualidade integrada ao ciclo de desenvolvimento, não apenas ao final.",
        context: "Falhas em produção geram impacto operacional e perda de confiança. Estruturamos qualidade como parte contínua da construção e evolução do software.",
        deliverables: ["Estratégia e planos de teste", "Testes funcionais e automatizados", "Qualidade no ciclo de entrega", "Indicadores e gestão de defeitos"],
        approach: ["Avaliar riscos", "Definir cobertura", "Automatizar com critério", "Melhorar continuamente"],
        icon: ScanSearch,
      },
      {
        slug: "equipes-dedicadas-e-squads",
        title: "Equipes Dedicadas & Squads",
        shortTitle: "Equipes Dedicadas & Squads",
        summary: "Especialistas e times multidisciplinares integrados aos desafios da sua empresa.",
        promise: "Amplie sua capacidade com as competências certas para cada desafio.",
        context: "Demandas de tecnologia mudam rapidamente e exigem diferentes combinações de competências. Formamos equipes que se integram à operação e ao modelo de trabalho do cliente.",
        deliverables: ["Especialistas sob demanda", "Squads multidisciplinares", "Composição orientada ao desafio", "Acompanhamento próximo da entrega"],
        approach: ["Entender a necessidade", "Compor as competências", "Integrar os profissionais", "Acompanhar e ajustar"],
        icon: UsersRound,
      },
    ],
  },
  {
    id: "dados-ia",
    name: "Dados & IA",
    description: "Estrutura e inteligência para decisões melhores.",
    icon: BrainCircuit,
    solutions: [
      {
        slug: "estruturacao-de-areas-de-ia",
        title: "Estruturação de Áreas de IA",
        shortTitle: "Áreas de IA",
        summary: "Estratégia, governança e execução para implantar IA de forma responsável e útil.",
        promise: "Leve a IA da intenção para uma capacidade real dentro da empresa.",
        context: "Adotar IA envolve muito mais que escolher ferramentas. Apoiamos a criação de visão, processos, prioridades e competências para uma operação sustentável.",
        deliverables: ["Diagnóstico de maturidade", "Estratégia e portfólio de casos", "Governança e modelo operacional", "Plano de implantação e capacitação"],
        approach: ["Diagnosticar", "Priorizar oportunidades", "Estruturar governança", "Implantar e aprender"],
        icon: Sparkles,
      },
      {
        slug: "cultura-data-driven",
        title: "Cultura & Operação Data-Driven",
        shortTitle: "Cultura Data-Driven",
        summary: "Processos, indicadores e competências para colocar dados no centro das decisões.",
        promise: "Transforme dados em uma prática cotidiana de gestão.",
        context: "Ser data-driven depende de informação confiável, responsabilidades claras e decisões orientadas por evidências. Estruturamos essa capacidade desde a base.",
        deliverables: ["Diagnóstico de maturidade em dados", "Modelo de governança", "Indicadores e rituais de decisão", "Capacitação e adoção"],
        approach: ["Mapear decisões", "Organizar responsabilidades", "Disponibilizar informação", "Incorporar novos hábitos"],
        icon: ChartNoAxesCombined,
      },
      {
        slug: "analytics-e-engenharia-de-dados",
        title: "Analytics & Engenharia de Dados",
        shortTitle: "Analytics & Engenharia de Dados",
        summary: "Dados confiáveis, organizados e acessíveis para análise e decisão.",
        promise: "Construa uma base de dados que transforma informação em ação.",
        context: "Análises consistentes dependem de uma base bem estruturada. Conectamos engenharia, mensuração e visualização para criar uma visão confiável da operação.",
        deliverables: ["Arquitetura e pipelines de dados", "Modelagem e qualidade", "Dashboards e visualização", "Analytics e mensuração digital"],
        approach: ["Entender as perguntas", "Organizar as fontes", "Construir a base", "Entregar e evoluir análises"],
        icon: DatabaseZap,
      },
      {
        slug: "agentes-e-solucoes-de-ia",
        title: "Agentes & Soluções de IA",
        shortTitle: "Agentes & Soluções de IA",
        summary: "Soluções inteligentes conectadas ao contexto, aos dados e aos processos da empresa.",
        promise: "Aplique IA onde ela pode gerar eficiência e apoiar decisões reais.",
        context: "A IA ganha valor quando compreende o contexto e se conecta ao trabalho. Criamos agentes e aplicações direcionados a casos de uso claros e mensuráveis.",
        deliverables: ["Descoberta e priorização de casos", "Agentes inteligentes personalizados", "Integração com dados e sistemas", "Avaliação e evolução das respostas"],
        approach: ["Definir o problema", "Preparar contexto e dados", "Construir e integrar", "Avaliar e aprimorar"],
        icon: Bot,
      },
    ],
  },
  {
    id: "seguranca-continuidade",
    name: "Segurança & Continuidade",
    description: "Proteção e governança conectadas ao risco do negócio.",
    icon: ShieldCheck,
    solutions: [
      {
        slug: "seguranca-da-informacao",
        title: "Segurança da Informação",
        shortTitle: "Segurança da Informação",
        summary: "Proteção de ambientes, informações e acessos com visão orientada a risco.",
        promise: "Proteja o que sustenta a sua operação.",
        context: "Segurança exige visão contínua sobre ativos, ameaças, acessos e prioridades. A X3 apoia a criação de controles aderentes à realidade da empresa.",
        deliverables: ["Diagnóstico de segurança", "Gestão de riscos e controles", "Proteção de ambientes e acessos", "Plano de evolução"],
        approach: ["Conhecer ativos e riscos", "Priorizar controles", "Implantar proteções", "Revisar continuamente"],
        icon: ShieldCheck,
      },
      {
        slug: "politicas-e-governanca",
        title: "Políticas & Governança",
        shortTitle: "Políticas & Governança",
        summary: "Diretrizes e responsabilidades claras para orientar a segurança da informação.",
        promise: "Transforme segurança em uma responsabilidade organizada e compartilhada.",
        context: "Controles técnicos precisam ser sustentados por regras claras, papéis definidos e processos aplicáveis. Estruturamos políticas conectadas à operação real.",
        deliverables: ["Políticas e normas de segurança", "Papéis e responsabilidades", "Processos de gestão e exceção", "Comunicação e revisão periódica"],
        approach: ["Entender contexto e riscos", "Definir diretrizes", "Validar com as áreas", "Implantar e revisar"],
        icon: Waypoints,
      },
      {
        slug: "revisoes-e-auditorias-de-seguranca",
        title: "Revisões & Auditorias de Segurança",
        shortTitle: "Revisões & Auditorias",
        summary: "Avaliações estruturadas para identificar riscos, lacunas e prioridades de evolução.",
        promise: "Tenha clareza sobre a postura de segurança e o que precisa evoluir.",
        context: "Revisões independentes ajudam a enxergar vulnerabilidades e inconsistências antes que se tornem incidentes. Avaliamos controles, processos e evidências com objetividade.",
        deliverables: ["Revisão de processos e controles", "Levantamento de evidências", "Identificação e classificação de lacunas", "Plano priorizado de adequação"],
        approach: ["Definir escopo", "Coletar evidências", "Avaliar e classificar", "Apresentar recomendações"],
        icon: Network,
      },
    ],
  },
];

export const allSolutions = solutionAreas.flatMap((area) =>
  area.solutions.map((solution) => ({ ...solution, areaId: area.id, areaName: area.name })),
);

export const findSolution = (slug: string | undefined) =>
  allSolutions.find((solution) => solution.slug === slug);
