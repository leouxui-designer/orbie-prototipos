// ============================================================
// DADOS SIMULADOS — 48 candidatos
// ============================================================

const CANDIDATOS = [
  {
    id: 1, nome: "João Silva", cidade: "Florianópolis", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Pleno",
    experiencia: "3 anos", disponibilidade: "Imediata",
    pretensao: "R$ 6.000 – 8.000",
    especialidade: "Front-end",
    tecnologias: ["JavaScript", "TypeScript", "React", "Node.js"],
    competencias: ["Resolução de problemas", "Trabalho em equipe", "Comunicação"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban"],
    video: true, pcd: false, genero: "Masculino",
    resumo: "Desenvolvedor apaixonado por criar interfaces modernas e performáticas. Experiência em projetos ágeis com React e Node.js, entregando soluções escaláveis em times multidisciplinares.",
    status: null
  },
  {
    id: 2, nome: "Anderson Cardoso Lima", cidade: "Tubarão", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Sênior",
    experiencia: "6 anos", disponibilidade: "30 dias",
    pretensao: "R$ 10.000 – 13.000",
    especialidade: "Back-end",
    tecnologias: ["React", "TypeScript", "Node.js", "Git", "PostgreSQL"],
    competencias: ["Arquitetura de sistemas", "Mentoria", "Code review"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Sênior com foco em APIs robustas e microserviços. Liderou equipes de 4 a 8 devs em projetos de alta disponibilidade, integrando pipelines de CI/CD e monitoramento com Grafana.",
    status: null
  },
  {
    id: 3, nome: "Alice Silveira Santos", cidade: "Jaguaruna", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Front-end", senioridade: "Júnior",
    experiencia: "1 ano", disponibilidade: "Imediata",
    pretensao: "R$ 2.500 – 3.500",
    especialidade: "Front-end",
    tecnologias: ["React", "TypeScript", "CSS", "Figma"],
    competencias: ["UI/UX básico", "Colaboração", "Aprendizado rápido"],
    formacoes: ["Carreira Tech"],
    softskills: ["Boa comunicação", "Participação em hackathons"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Recém-formada com portfólio sólido em projetos pessoais e hackathons. Forte senso estético e comprometimento com acessibilidade e boas práticas de componentização.",
    status: null
  },
  {
    id: 4, nome: "Diana Santos", cidade: "Araranguá", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Full Stack", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "15 dias",
    pretensao: "R$ 7.000 – 9.000",
    especialidade: "Back-end",
    tecnologias: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
    competencias: ["DevOps básico", "Testes automatizados", "Documentação"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban", "Boa comunicação"],
    video: false, pcd: false, genero: "Feminino",
    resumo: "Full stack com forte experiência em integrações de APIs e containerização. Contribuiu com open source e mantém blog técnico com mais de 2k leitores mensais.",
    status: null
  },
  {
    id: 5, nome: "Eduardo Costa", cidade: "Criciúma", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Mobile", senioridade: "Pleno",
    experiencia: "3 anos", disponibilidade: "Imediata",
    pretensao: "R$ 6.500 – 8.500",
    especialidade: "Mobile",
    tecnologias: ["React Native", "TypeScript", "Expo", "Firebase"],
    competencias: ["UX mobile", "Publicação em stores", "Notificações push"],
    formacoes: ["Carreira Tech"],
    softskills: ["Projetos em equipe (GitHub colaborativo)"],
    video: true, pcd: false, genero: "Masculino",
    resumo: "Especialista em apps React Native com publicações na App Store e Google Play. Experiência com deep links, analytics e otimização de performance em dispositivos de baixo custo.",
    status: null
  },
  {
    id: 6, nome: "Gabriel Silva", cidade: "Laguna", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Júnior",
    experiencia: "1.5 anos", disponibilidade: "Imediata",
    pretensao: "R$ 3.000 – 4.000",
    especialidade: "Back-end",
    tecnologias: ["React", "TypeScript", "Node.js", "Git", "Express"],
    competencias: ["REST APIs", "Banco de dados relacional", "Git flow"],
    formacoes: ["Carreira Tech"],
    softskills: ["Participação em hackathons"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Júnior determinado com projetos de APIs REST em produção. Participa ativamente de comunidades dev locais e contribui com projetos open source no GitHub.",
    status: null
  },
  {
    id: 7, nome: "Helena Pereira", cidade: "Içara", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Front-end", senioridade: "Sênior",
    experiencia: "7 anos", disponibilidade: "60 dias",
    pretensao: "R$ 12.000 – 15.000",
    especialidade: "Front-end",
    tecnologias: ["React", "TypeScript", "Vue.js", "GraphQL", "Storybook"],
    competencias: ["Design Systems", "Performance web", "Mentoria"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Vivência em Scrum / Kanban", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Sênior front-end com foco em Design Systems e acessibilidade. Construiu a biblioteca de componentes de uma fintech com 500k usuários, adotando padrões WCAG 2.1 AA.",
    status: null
  },
  {
    id: 8, nome: "Lucas Ferreira", cidade: "Imbituba", estado: "SC", regiao: "Sul",
    cargo: "Engenheiro de Dados", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "Imediata",
    pretensao: "R$ 8.000 – 10.000",
    especialidade: "Data/BI",
    tecnologias: ["Python", "SQL", "Power BI", "Spark", "Airflow"],
    competencias: ["ETL/ELT", "Modelagem dimensional", "Dashboards executivos"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Engenheiro de dados com pipelines em produção processando 50M+ registros/dia. Experiência com data lake, data warehouse e storytelling com dados para C-level.",
    status: null
  },
  {
    id: 9, nome: "Mariana Oliveira", cidade: "Florianópolis", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Full Stack", senioridade: "Pleno",
    experiencia: "5 anos", disponibilidade: "30 dias",
    pretensao: "R$ 9.000 – 11.000",
    especialidade: "Front-end",
    tecnologias: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    competencias: ["SSR/SSG", "SEO técnico", "Testes com Jest"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Full stack especializada em Next.js com foco em performance e SEO. Trabalhou em startups de e-commerce, reduzindo LCP em 40% e aumentando conversão em 18%.",
    status: null
  },
  {
    id: 10, nome: "Rafael Mendes", cidade: "São José", estado: "SC", regiao: "Sul",
    cargo: "DevOps Engineer", senioridade: "Sênior",
    experiencia: "8 anos", disponibilidade: "45 dias",
    pretensao: "R$ 13.000 – 16.000",
    especialidade: "DevOps",
    tecnologias: ["Kubernetes", "Docker", "Terraform", "AWS", "GitHub Actions"],
    competencias: ["IaC", "Observabilidade", "SRE"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "SRE/DevOps com certificações AWS e CKA. Reduziu tempo de deploy de 2h para 8min em ambiente multi-cloud. Especialista em incident response e postmortems.",
    status: null
  },
  {
    id: 11, nome: "Camila Rocha", cidade: "Palhoça", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Mobile", senioridade: "Júnior",
    experiencia: "1 ano", disponibilidade: "Imediata",
    pretensao: "R$ 2.800 – 3.800",
    especialidade: "Mobile",
    tecnologias: ["React Native", "JavaScript", "Expo", "Git"],
    competencias: ["UI móvel", "Integração de APIs", "Testes manuais"],
    formacoes: ["Carreira Tech"],
    softskills: ["Boa comunicação", "Participação em hackathons"],
    video: true, pcd: true, genero: "Feminino",
    resumo: "Júnior mobile com deficiência auditiva, apaixonada por acessibilidade. Desenvolveu app de comunicação alternativa como TCC, premiado na SCTEC Hackathon 2025.",
    status: null
  },
  {
    id: 12, nome: "Pedro Alves", cidade: "Tubarão", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "Imediata",
    pretensao: "R$ 7.500 – 9.500",
    especialidade: "Back-end",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ"],
    competencias: ["Microsserviços", "Event-driven", "Performance"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Desenvolvedor Java com foco em sistemas de alta performance. Projetou arquitetura event-driven que suporta picos de 10k req/s numa plataforma de pagamentos.",
    status: null
  },
  {
    id: 13, nome: "Sofia Lima", cidade: "Criciúma", estado: "SC", regiao: "Sul",
    cargo: "Analista de Dados", senioridade: "Pleno",
    experiencia: "3 anos", disponibilidade: "15 dias",
    pretensao: "R$ 6.000 – 8.000",
    especialidade: "Data/BI",
    tecnologias: ["Python", "SQL", "Tableau", "pandas", "scikit-learn"],
    competencias: ["Análise exploratória", "Modelos preditivos", "Visualização"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Boa comunicação", "Vivência em Scrum / Kanban"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Analista com sólida base em estatística aplicada. Implementou modelos de churn prediction que salvaram R$ 2M em receita recorrente numa empresa de SaaS.",
    status: null
  },
  {
    id: 14, nome: "Thiago Nascimento", cidade: "Araranguá", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Front-end", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "30 dias",
    pretensao: "R$ 7.000 – 9.000",
    especialidade: "Front-end",
    tecnologias: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Jest"],
    competencias: ["Micro frontends", "Internacionalização", "Acessibilidade WCAG"],
    formacoes: ["Carreira Tech"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Vivência em Scrum / Kanban"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Front-end sólido em Vue.js com experiência em sistemas de design e internacionalização. Participou de migração de sistema legado Angular para Vue 3 com zero downtime.",
    status: null
  },
  {
    id: 15, nome: "Fernanda Souza", cidade: "Florianópolis", estado: "SC", regiao: "Sul",
    cargo: "Engenheira de Machine Learning", senioridade: "Sênior",
    experiencia: "6 anos", disponibilidade: "60 dias",
    pretensao: "R$ 14.000 – 18.000",
    especialidade: "Data/BI",
    tecnologias: ["Python", "TensorFlow", "MLflow", "Docker", "Kafka"],
    competencias: ["MLOps", "NLP", "Computer Vision"],
    formacoes: ["Carreira Tech", "IA para DEVs", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "ML engineer com foco em MLOps e modelos em produção. Liderou projeto de NLP que automatizou 70% do processo de atendimento ao cliente, reduzindo custo em R$ 1,2M/ano.",
    status: null
  },
  {
    id: 16, nome: "Bruno Castro", cidade: "Laguna", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Júnior",
    experiencia: "2 anos", disponibilidade: "Imediata",
    pretensao: "R$ 3.500 – 4.500",
    especialidade: "Back-end",
    tecnologias: ["Node.js", "React", "MongoDB", "Git", "Express"],
    competencias: ["CRUD completo", "Autenticação JWT", "Deploy Vercel"],
    formacoes: ["Carreira Tech"],
    softskills: ["Participação em hackathons", "Boa comunicação"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Full stack em crescimento rápido. Desenvolveu plataforma de agendamento usada por 3 clínicas de saúde, com notificações por WhatsApp e relatórios em PDF.",
    status: null
  },
  {
    id: 17, nome: "Juliana Ramos", cidade: "Içara", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Back-end", senioridade: "Pleno",
    experiencia: "5 anos", disponibilidade: "30 dias",
    pretensao: "R$ 8.500 – 10.500",
    especialidade: "Back-end",
    tecnologias: ["Python", "Django", "FastAPI", "PostgreSQL", "Celery"],
    competencias: ["APIs assíncronas", "Background jobs", "Segurança"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Backend Python com 5 anos construindo APIs de alto tráfego. Experiência em fintech com foco em PCI-DSS compliance e integração com gateways de pagamento.",
    status: null
  },
  {
    id: 18, nome: "Rodrigo Pinto", cidade: "São José", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor iOS", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "45 dias",
    pretensao: "R$ 9.000 – 12.000",
    especialidade: "Mobile",
    tecnologias: ["Swift", "SwiftUI", "Xcode", "CoreData", "Combine"],
    competencias: ["App Store Review", "ARKit", "WidgetKit"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "iOS developer com apps publicados com 4.8+ de avaliação. Especialidade em animações SwiftUI e widgets de alta performance integrados com HealthKit.",
    status: null
  },
  {
    id: 19, nome: "Beatriz Cardoso", cidade: "Imbituba", estado: "SC", regiao: "Sul",
    cargo: "Analista de QA", senioridade: "Pleno",
    experiencia: "3 anos", disponibilidade: "Imediata",
    pretensao: "R$ 5.500 – 7.000",
    especialidade: "Back-end",
    tecnologias: ["Cypress", "Playwright", "Jest", "Postman", "GitHub Actions"],
    competencias: ["Automação de testes", "Test planning", "BDD/Gherkin"],
    formacoes: ["Carreira Tech"],
    softskills: ["Boa comunicação", "Vivência em Scrum / Kanban"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "QA engineer focada em qualidade como cultura. Implantou estratégia de testes automatizados do zero, cobrindo 85% das jornadas críticas de um e-commerce com 200k usuários.",
    status: null
  },
  {
    id: 20, nome: "Vinícius Torres", cidade: "Criciúma", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Sênior",
    experiencia: "9 anos", disponibilidade: "60 dias",
    pretensao: "R$ 14.000 – 17.000",
    especialidade: "Front-end",
    tecnologias: ["React", "GraphQL", "Go", "PostgreSQL", "AWS"],
    competencias: ["Arquitetura", "Tech lead", "Produto digital"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)", "Boa comunicação"],
    video: true, pcd: false, genero: "Masculino",
    resumo: "Tech lead com 9 anos construindo produtos B2B. Liderou crescimento de plataforma de RH de 0 a 80k usuários, coordenando times distribuídos Brasil e Portugal.",
    status: null
  },
  {
    id: 21, nome: "Larissa Freitas", cidade: "Palhoça", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Front-end", senioridade: "Júnior",
    experiencia: "1 ano", disponibilidade: "Imediata",
    pretensao: "R$ 2.500 – 3.200",
    especialidade: "Front-end",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Git"],
    competencias: ["Responsividade", "Pixel perfect", "Figma to code"],
    formacoes: ["Carreira Tech"],
    softskills: ["Participação em hackathons", "Boa comunicação"],
    video: false, pcd: false, genero: "Feminino",
    resumo: "Júnior com alto senso estético e foco em implementar designs com fidelidade. Ganhou prêmio de melhor interface no hackathon da SCTEC e já tem 3 projetos freelancer rodando.",
    status: null
  },
  {
    id: 22, nome: "Mateus Gomes", cidade: "Tubarão", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Sênior",
    experiencia: "7 anos", disponibilidade: "30 dias",
    pretensao: "R$ 12.000 – 15.000",
    especialidade: "Back-end",
    tecnologias: ["Kotlin", "Spring", "Kafka", "AWS", "DynamoDB"],
    competencias: ["Arquitetura event-driven", "AWS Solutions", "Performance"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Sênior Kotlin/Java com foco em sistemas distribuídos. Arquitetou solução de streaming de dados em tempo real para sistema bancário com 99.99% de uptime garantido.",
    status: null
  },
  {
    id: 23, nome: "Priscila Moraes", cidade: "Florianópolis", estado: "SC", regiao: "Sul",
    cargo: "Product Designer", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "15 dias",
    pretensao: "R$ 7.000 – 9.000",
    especialidade: "Front-end",
    tecnologias: ["Figma", "CSS", "React", "Storybook", "Framer"],
    competencias: ["Design System", "Prototipação", "Pesquisa com usuário"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Designer que sabe codar. Conecta pesquisa, design e desenvolvimento em sistemas de design que reduzem 60% do tempo de desenvolvimento de features novas.",
    status: null
  },
  {
    id: 24, nome: "Felipe Monteiro", cidade: "Jaguaruna", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Júnior",
    experiencia: "1.5 anos", disponibilidade: "Imediata",
    pretensao: "R$ 3.000 – 4.000",
    especialidade: "Back-end",
    tecnologias: ["PHP", "Laravel", "MySQL", "Vue.js", "Git"],
    competencias: ["MVC", "Blade templates", "Eloquent ORM"],
    formacoes: ["Carreira Tech"],
    softskills: ["Participação em hackathons"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Full stack PHP/Laravel com projetos em produção desde os 20 anos. Mantém sistema de gestão para cooperativa com 1.2k usuários ativos desenvolvido do zero.",
    status: null
  },
  {
    id: 25, nome: "Isabela Cruz", cidade: "Araranguá", estado: "SC", regiao: "Sul",
    cargo: "Engenheira de Dados", senioridade: "Júnior",
    experiencia: "2 anos", disponibilidade: "Imediata",
    pretensao: "R$ 4.000 – 5.500",
    especialidade: "Data/BI",
    tecnologias: ["Python", "SQL", "dbt", "BigQuery", "Looker"],
    competencias: ["Data modeling", "ELT moderno", "Documentação"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Boa comunicação", "Projetos em equipe (GitHub colaborativo)"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Engenheira de dados júnior com foco no stack moderno (dbt + BigQuery). Participou de migração de DW legado, reduzindo custos de query em 45%.",
    status: null
  },
  {
    id: 26, nome: "Gustavo Barros", cidade: "Laguna", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Android", senioridade: "Pleno",
    experiencia: "5 anos", disponibilidade: "30 dias",
    pretensao: "R$ 9.000 – 11.000",
    especialidade: "Mobile",
    tecnologias: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Retrofit"],
    competencias: ["Material Design 3", "Google Play Console", "Performance"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Android developer com 5 apps publicados, um deles com mais de 100k downloads. Especialista em Jetpack Compose e arquitetura MVVM com Clean Architecture.",
    status: null
  },
  {
    id: 27, nome: "Amanda Fonseca", cidade: "São José", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Full Stack", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "Imediata",
    pretensao: "R$ 7.500 – 9.500",
    especialidade: "Front-end",
    tecnologias: ["React", "TypeScript", "GraphQL", "Hasura", "Tailwind"],
    competencias: ["Real-time features", "Autenticação OAuth", "Performance"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Vivência em Scrum / Kanban"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Full stack com paixão por produtos que resolvem problemas reais. Desenvolveu plataforma de mentoria online usada por 15k estudantes, com features de video call e whiteboard.",
    status: null
  },
  {
    id: 28, nome: "Carlos Duarte", cidade: "Imbituba", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Júnior",
    experiencia: "1 ano", disponibilidade: "Imediata",
    pretensao: "R$ 2.800 – 3.600",
    especialidade: "Back-end",
    tecnologias: ["Node.js", "Express", "MySQL", "JavaScript", "Git"],
    competencias: ["REST APIs", "ORM Sequelize", "Testes básicos"],
    formacoes: ["Carreira Tech"],
    softskills: ["Boa comunicação"],
    video: false, pcd: true, genero: "Masculino",
    resumo: "Júnior em desenvolvimento com deficiência visual parcial. Construiu API de gerenciamento de estoque integrada a plataforma de e-commerce com 10k SKUs.",
    status: null
  },
  {
    id: 29, nome: "Nathalia Correia", cidade: "Florianópolis", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Front-end", senioridade: "Sênior",
    experiencia: "8 anos", disponibilidade: "45 dias",
    pretensao: "R$ 13.000 – 16.000",
    especialidade: "Front-end",
    tecnologias: ["React", "TypeScript", "Redux", "Micro frontends", "Module Federation"],
    competencias: ["Arquitetura front-end", "Design tokens", "Performance"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Arquiteta front-end especializada em micro frontends e Module Federation. Coordenou migração arquitetural de monolito React para 12 micro apps em enterprise financeiro.",
    status: null
  },
  {
    id: 30, nome: "Diego Lopes", cidade: "Criciúma", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Pleno",
    experiencia: "5 anos", disponibilidade: "Imediata",
    pretensao: "R$ 8.000 – 10.000",
    especialidade: "Back-end",
    tecnologias: ["Ruby on Rails", "React", "PostgreSQL", "Redis", "Sidekiq"],
    competencias: ["Background jobs", "Caching", "Active Record avançado"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Full stack Ruby/React com foco em produtividade e code quality. Manteve cobertura de testes acima de 90% num SaaS B2B com 50k usuários por 3 anos consecutivos.",
    status: null
  },
  {
    id: 31, nome: "Tânia Melo", cidade: "Palhoça", estado: "SC", regiao: "Sul",
    cargo: "Analista de BI", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "15 dias",
    pretensao: "R$ 6.500 – 8.500",
    especialidade: "Data/BI",
    tecnologias: ["Power BI", "SQL", "Python", "DAX", "Azure Synapse"],
    competencias: ["Relatórios gerenciais", "KPIs estratégicos", "Modelagem de dados"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Boa comunicação", "Vivência em Scrum / Kanban"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Analista de BI com foco em tomada de decisão baseada em dados. Criou sala de situação em Power BI que centraliza indicadores de 8 áreas numa construtora regional.",
    status: null
  },
  {
    id: 32, nome: "André Matos", cidade: "Tubarão", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Pleno",
    experiencia: "3 anos", disponibilidade: "Imediata",
    pretensao: "R$ 6.000 – 8.000",
    especialidade: "Back-end",
    tecnologias: ["C#", ".NET", "SQL Server", "Azure", "RabbitMQ"],
    competencias: ["Clean Architecture", "CQRS", "Integração com ERP"],
    formacoes: ["Carreira Tech"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Vivência em Scrum / Kanban"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Dev .NET com experiência em sistemas industriais e ERP. Desenvolveu módulo de integração fiscal que reduziu erros de NF-e em 98% numa indústria metalúrgica.",
    status: null
  },
  {
    id: 33, nome: "Renata Vieira", cidade: "Içara", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Full Stack", senioridade: "Júnior",
    experiencia: "1.5 anos", disponibilidade: "Imediata",
    pretensao: "R$ 3.200 – 4.200",
    especialidade: "Front-end",
    tecnologias: ["React", "JavaScript", "Node.js", "CSS Modules", "Git"],
    competencias: ["Componentização", "Context API", "Validação de formulários"],
    formacoes: ["Carreira Tech"],
    softskills: ["Participação em hackathons", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Júnior com agilidade na entrega e olho para detalhe. Trabalha há 8 meses em startup de edtech, contribuindo com novas features no LMS com 5k alunos ativos.",
    status: null
  },
  {
    id: 34, nome: "Henrique Barbosa", cidade: "Araranguá", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor DevOps", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "30 dias",
    pretensao: "R$ 8.000 – 10.500",
    especialidade: "DevOps",
    tecnologias: ["Docker", "Kubernetes", "GitLab CI", "Terraform", "Prometheus"],
    competencias: ["Pipeline CI/CD", "Monitoramento", "Segurança containers"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "DevOps focado em automação e confiabilidade. Implantou GitOps em empresa de logística, reduzindo deploy time de semanas para horas com rollback automático.",
    status: null
  },
  {
    id: 35, nome: "Vitória Santos", cidade: "Florianópolis", estado: "SC", regiao: "Sul",
    cargo: "Cientista de Dados", senioridade: "Sênior",
    experiencia: "7 anos", disponibilidade: "60 dias",
    pretensao: "R$ 13.000 – 17.000",
    especialidade: "Data/BI",
    tecnologias: ["Python", "R", "PyTorch", "SQL", "Databricks"],
    competencias: ["Modelos de recomendação", "A/B testing", "Causalidade"],
    formacoes: ["Carreira Tech", "IA para DEVs", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Cientista de dados especialista em sistemas de recomendação. Liderou desenvolvimento de motor de personalização que aumentou LTV de clientes em 35% numa plataforma de streaming.",
    status: null
  },
  {
    id: 36, nome: "Jonathan Ribeiro", cidade: "São José", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "Imediata",
    pretensao: "R$ 7.000 – 9.000",
    especialidade: "Back-end",
    tecnologias: ["Elixir", "Phoenix", "React", "PostgreSQL", "WebSockets"],
    competencias: ["Real-time", "Concorrência", "Fault tolerance"],
    formacoes: ["Carreira Tech"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Participação em hackathons"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Desenvolvedor Elixir apaixonado por sistemas tolerantes a falhas. Construiu backend de chat em tempo real que suporta 50k conexões simultâneas com 99.9% de uptime.",
    status: null
  },
  {
    id: 37, nome: "Letícia Campos", cidade: "Laguna", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Mobile", senioridade: "Pleno",
    experiencia: "3 anos", disponibilidade: "15 dias",
    pretensao: "R$ 6.500 – 8.500",
    especialidade: "Mobile",
    tecnologias: ["Flutter", "Dart", "Firebase", "GetX", "Figma"],
    competencias: ["Cross-platform", "UI avançada", "Animações"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Flutter developer com foco em UI premium. Desenvolveu app de delivery com 4.9 de avaliação nas stores, com animações de 60fps em dispositivos com 2GB de RAM.",
    status: null
  },
  {
    id: 38, nome: "Marcelo Almeida", cidade: "Imbituba", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Júnior",
    experiencia: "1 ano", disponibilidade: "Imediata",
    pretensao: "R$ 2.800 – 3.500",
    especialidade: "Back-end",
    tecnologias: ["Go", "PostgreSQL", "Docker", "Git", "REST"],
    competencias: ["Concorrência", "Eficiência de memória", "Microsserviços básicos"],
    formacoes: ["Carreira Tech"],
    softskills: ["Participação em hackathons"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Júnior Go com curva de aprendizado impressionante. Em 1 ano já contribuiu para microsserviço de autenticação crítico usado por 3 aplicações da empresa.",
    status: null
  },
  {
    id: 39, nome: "Patrícia Leal", cidade: "Criciúma", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Full Stack", senioridade: "Sênior",
    experiencia: "10 anos", disponibilidade: "90 dias",
    pretensao: "R$ 15.000 – 20.000",
    especialidade: "Front-end",
    tecnologias: ["React", "TypeScript", "Node.js", "AWS", "System Design"],
    competencias: ["CTO/Engineering Manager", "Processos de engenharia", "Recrutamento técnico"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Engineering Manager com 10 anos de experiência. Construiu e liderou times de 5 a 25 engenheiros em empresas como PagSeguro e VTEX. Especialista em crescimento de carreira para devs.",
    status: null
  },
  {
    id: 40, nome: "Rodrigo Nascimento", cidade: "Florianópolis", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Front-end", senioridade: "Pleno",
    experiencia: "3 anos", disponibilidade: "Imediata",
    pretensao: "R$ 6.000 – 8.000",
    especialidade: "Front-end",
    tecnologias: ["React", "TypeScript", "Three.js", "WebGL", "GSAP"],
    competencias: ["3D na web", "Animações avançadas", "Performance Canvas"],
    formacoes: ["Carreira Tech"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Participação em hackathons"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Front-end especializado em experiências visuais imersivas com Three.js e WebGL. Portfólio com projetos premiados em awwwards e sites featurados no Codrops.",
    status: null
  },
  {
    id: 41, nome: "Samara Teixeira", cidade: "Palhoça", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Back-end", senioridade: "Pleno",
    experiencia: "5 anos", disponibilidade: "30 dias",
    pretensao: "R$ 8.500 – 11.000",
    especialidade: "Back-end",
    tecnologias: ["Python", "FastAPI", "SQLAlchemy", "Redis", "Elasticsearch"],
    competencias: ["Search engines", "Indexação", "Performance queries"],
    formacoes: ["Carreira Tech", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Backend Python com especialização em busca e indexação. Implementou motor de busca com Elasticsearch que reduziu tempo de resposta de 2s para 120ms num marketplace B2B.",
    status: null
  },
  {
    id: 42, nome: "Leandro Rocha", cidade: "Tubarão", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Júnior",
    experiencia: "2 anos", disponibilidade: "Imediata",
    pretensao: "R$ 3.500 – 4.500",
    especialidade: "Front-end",
    tecnologias: ["Next.js", "React", "TypeScript", "Prisma", "MySQL"],
    competencias: ["Server Components", "API Routes", "Formulários complexos"],
    formacoes: ["Carreira Tech"],
    softskills: ["Boa comunicação", "Participação em hackathons"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Júnior Next.js com afinidade por produtos SaaS. Construiu plataforma de gestão de contratos para escritório de advocacia com assinatura digital e auditoria de acessos.",
    status: null
  },
  {
    id: 43, nome: "Cecília Mendonça", cidade: "Araranguá", estado: "SC", regiao: "Sul",
    cargo: "Engenheira de Dados", senioridade: "Sênior",
    experiencia: "8 anos", disponibilidade: "45 dias",
    pretensao: "R$ 14.000 – 18.000",
    especialidade: "Data/BI",
    tecnologias: ["Python", "Spark", "Flink", "Kafka", "GCP"],
    competencias: ["Streaming de dados", "Data mesh", "Governança"],
    formacoes: ["Carreira Tech", "IA para DEVs", "IA na Prática"],
    softskills: ["Vivência em Scrum / Kanban", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Data engineer com foco em streaming e data mesh. Arquitetou plataforma de dados em tempo real para fintech que processa R$ 500M/mês em transações com latência sub-50ms.",
    status: null
  },
  {
    id: 44, nome: "Caio Ferreira", cidade: "São José", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Full Stack", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "Imediata",
    pretensao: "R$ 7.500 – 9.500",
    especialidade: "Back-end",
    tecnologias: ["Node.js", "React", "TypeScript", "MongoDB", "Socket.io"],
    competencias: ["Aplicações real-time", "Escalabilidade horizontal", "WebRTC"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Vivência em Scrum / Kanban"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Full stack focado em aplicações colaborativas em tempo real. Construiu plataforma de gestão de projetos com whiteboard colaborativo usada por 200 agências de marketing.",
    status: null
  },
  {
    id: 45, nome: "Bruna Cavalcante", cidade: "Imbituba", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Front-end", senioridade: "Pleno",
    experiencia: "4 anos", disponibilidade: "15 dias",
    pretensao: "R$ 7.500 – 9.500",
    especialidade: "Front-end",
    tecnologias: ["Angular", "TypeScript", "RxJS", "NgRx", "Material UI"],
    competencias: ["Arquitetura Angular", "Lazy loading", "Internacionalização"],
    formacoes: ["Carreira Tech"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Angular developer com sólida experiência em sistemas enterprise. Liderou migração de AngularJS para Angular 17 em sistema de gestão hospitalar com 500 usuários simultâneos.",
    status: null
  },
  {
    id: 46, nome: "Igor Santana", cidade: "Criciúma", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor DevOps", senioridade: "Júnior",
    experiencia: "1.5 anos", disponibilidade: "Imediata",
    pretensao: "R$ 3.500 – 4.500",
    especialidade: "DevOps",
    tecnologias: ["Docker", "Linux", "Bash", "GitHub Actions", "Nginx"],
    competencias: ["Containerização básica", "Deploy scripts", "Monitoramento básico"],
    formacoes: ["Carreira Tech"],
    softskills: ["Participação em hackathons", "Boa comunicação"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Júnior DevOps com paixão por automação. Automatizou deploy de 12 microserviços com GitHub Actions, reduzindo erros manuais de 30% para praticamente zero.",
    status: null
  },
  {
    id: 47, nome: "Rebeca Figueiredo", cidade: "Laguna", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedora Full Stack", senioridade: "Sênior",
    experiencia: "9 anos", disponibilidade: "60 dias",
    pretensao: "R$ 14.000 – 18.000",
    especialidade: "Front-end",
    tecnologias: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    competencias: ["DDD", "Event Sourcing", "Platform engineering"],
    formacoes: ["Carreira Tech", "IA para DEVs"],
    softskills: ["Vivência em Scrum / Kanban", "Projetos em equipe (GitHub colaborativo)", "Boa comunicação"],
    video: true, pcd: false, genero: "Feminino",
    resumo: "Sênior full stack com experiência em plataformas de alto crescimento. Trabalhou em C-level de startup adquirida por R$ 120M, liderando time de engenharia por 4 anos.",
    status: null
  },
  {
    id: 48, nome: "Augusto Pinheiro", cidade: "São José", estado: "SC", regiao: "Sul",
    cargo: "Desenvolvedor Back-end", senioridade: "Pleno",
    experiencia: "5 anos", disponibilidade: "Imediata",
    pretensao: "R$ 8.000 – 10.500",
    especialidade: "Back-end",
    tecnologias: ["Rust", "PostgreSQL", "gRPC", "Docker", "Prometheus"],
    competencias: ["Performance extrema", "Segurança de memória", "Sistemas embarcados"],
    formacoes: ["Carreira Tech"],
    softskills: ["Projetos em equipe (GitHub colaborativo)", "Participação em hackathons"],
    video: false, pcd: false, genero: "Masculino",
    resumo: "Desenvolvedor Rust apaixonado por performance e segurança. Reescreveu serviço crítico de processamento de imagens de Python para Rust, reduzindo latência em 94% e custo de infra em 70%.",
    status: null
  }
];

// ============================================================
// ESTADO DA APLICAÇÃO
// ============================================================
const STATE = {
  todos: [...CANDIDATOS],
  filtrados: [...CANDIDATOS],
  paginaAtual: 1,
  porPagina: 10,
  paineAberto: false,
  candidatoAtivo: null,
  revisados: new Set(),
  busca: "",
  filtroEspecialidade: "",   // chip de especialidade
  filtroRegiao: "",
  filtroCidade: "",
  filtroTecnologia: "",
  filtroFaixaEtaria: "",
  filtroFormacoes: [],       // checkboxes (array)
  filtroSoftskills: [],      // checkboxes (array)
  filtroGeneros: [],         // checkboxes (array)
  filtroVideo: false,        // toggle
  filtroPcd: false,          // toggle
  filtroDivGenero: false,    // toggle
  ordenacao: "relevancia"
};

// ============================================================
// UTILITÁRIOS
// ============================================================
function getInitials(nome) {
  return nome.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

function getAvatarColor(id) {
  const cores = [
    "#7ab934", "#2ca942", "#4a9f6e", "#5b8dee",
    "#e07b39", "#9b59b6", "#e74c3c", "#1abc9c"
  ];
  return cores[id % cores.length];
}

function statusLabel(s) {
  if (s === "favorito") return "⭐ Favorito";
  if (s === "selecionado") return "✅ Selecionado";
  if (s === "descartado") return "✕ Descartado";
  return "";
}

function statusClass(s) {
  if (s === "favorito") return "status-favorito";
  if (s === "selecionado") return "status-selecionado";
  if (s === "descartado") return "status-descartado";
  return "";
}

// ============================================================
// FILTRAGEM E ORDENAÇÃO
// ============================================================
function aplicarFiltros() {
  let resultado = [...STATE.todos];

  // Busca por nome, cidade, cargo ou tech
  if (STATE.busca.trim()) {
    const q = STATE.busca.toLowerCase();
    resultado = resultado.filter(c =>
      c.nome.toLowerCase().includes(q) ||
      c.cidade.toLowerCase().includes(q) ||
      c.cargo.toLowerCase().includes(q) ||
      c.tecnologias.some(t => t.toLowerCase().includes(q))
    );
  }

  // Especialidade (chip)
  if (STATE.filtroEspecialidade) {
    resultado = resultado.filter(c => c.especialidade === STATE.filtroEspecialidade);
  }

  // Região
  if (STATE.filtroRegiao) {
    resultado = resultado.filter(c => c.regiao === STATE.filtroRegiao);
  }

  // Cidade
  if (STATE.filtroCidade) {
    resultado = resultado.filter(c => c.cidade === STATE.filtroCidade);
  }

  // Tecnologia específica
  if (STATE.filtroTecnologia) {
    resultado = resultado.filter(c =>
      c.tecnologias.some(t => t.toLowerCase().includes(STATE.filtroTecnologia.toLowerCase()))
    );
  }

  // Formações SCTEC (AND: candidato precisa ter TODAS as selecionadas)
  if (STATE.filtroFormacoes.length > 0) {
    resultado = resultado.filter(c =>
      STATE.filtroFormacoes.every(f => c.formacoes.includes(f))
    );
  }

  // Soft skills (AND)
  if (STATE.filtroSoftskills.length > 0) {
    resultado = resultado.filter(c =>
      STATE.filtroSoftskills.every(s => c.softskills.includes(s))
    );
  }

  // Gênero (OR: qualquer um dos selecionados)
  if (STATE.filtroGeneros.length > 0) {
    resultado = resultado.filter(c => STATE.filtroGeneros.includes(c.genero));
  }

  // Vídeo
  if (STATE.filtroVideo) {
    resultado = resultado.filter(c => c.video === true);
  }

  // PCD
  if (STATE.filtroPcd) {
    resultado = resultado.filter(c => c.pcd === true);
  }

  // Diversidade de gênero prioritária (Feminino ou Não-binário)
  if (STATE.filtroDivGenero) {
    resultado = resultado.filter(c => c.genero !== "Masculino");
  }

  // Ordenação
  if (STATE.ordenacao === "nome") {
    resultado.sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (STATE.ordenacao === "disponibilidade") {
    const ord = { "Imediata": 0, "15 dias": 1, "30 dias": 2, "45 dias": 3, "60 dias": 4, "90 dias": 5 };
    resultado.sort((a, b) => (ord[a.disponibilidade] ?? 99) - (ord[b.disponibilidade] ?? 99));
  }

  STATE.filtrados = resultado;
  STATE.paginaAtual = 1;
  renderActiveFilters();
}

// ============================================================
// RENDERIZAÇÃO DA LISTA
// ============================================================
function candidatosDaPagina() {
  const inicio = (STATE.paginaAtual - 1) * STATE.porPagina;
  return STATE.filtrados.slice(inicio, inicio + STATE.porPagina);
}

function indexGlobal(idxNaPagina) {
  return (STATE.paginaAtual - 1) * STATE.porPagina + idxNaPagina;
}

function renderLista() {
  const lista = document.getElementById("lista-candidatos");
  const candidatos = candidatosDaPagina();
  const totalFiltrados = STATE.filtrados.length;

  // Atualiza contador
  document.getElementById("total-label").innerHTML =
    `Exibindo <strong>${totalFiltrados}</strong> talento${totalFiltrados !== 1 ? "s" : ""}`;

  if (candidatos.length === 0) {
    lista.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p class="empty-title">Nenhum candidato encontrado</p>
        <p class="empty-sub">Tente ajustar os filtros ou termos da busca.</p>
      </div>`;
    renderPaginacao();
    return;
  }

  lista.innerHTML = candidatos.map((c, idx) => {
    const globalIdx = indexGlobal(idx);
    const ativo = STATE.candidatoAtivo === globalIdx && STATE.paineAberto;
    const revisado = STATE.revisados.has(c.id);

    const statusCls = statusClass(c.status);

    return `
      <div class="candidate-row ${ativo ? "ativo" : ""} ${revisado ? "revisado" : ""} ${statusCls}"
           data-idx="${globalIdx}"
           data-id="${c.id}"
           role="button"
           tabindex="0"
           aria-label="Ver perfil de ${c.nome}"
           onclick="abrirPainel(${globalIdx})"
           onkeydown="if(event.key==='Enter'||event.key===' ') abrirPainel(${globalIdx})">
        <div class="candidate-check">
          <div class="avatar" style="background:${getAvatarColor(c.id)}">
            ${getInitials(c.nome)}
          </div>
          ${revisado ? '<div class="revisado-dot" title="Já revisado"></div>' : ""}
        </div>
        <div class="candidate-info">
          <div class="candidate-name-row">
            <span class="candidate-name">${c.nome}</span>
            ${c.status ? `<span class="status-badge ${statusCls}">${statusLabel(c.status)}</span>` : ""}
            ${c.pcd ? '<span class="pcd-badge" title="Pessoa com Deficiência">PCD</span>' : ""}
            ${c.video ? '<span class="video-badge" title="Possui vídeo">▶</span>' : ""}
          </div>
          <div class="candidate-meta">
            <span class="candidate-cargo">${c.cargo}</span>
            <span class="separator">·</span>
            <span class="candidate-senioridade">${c.senioridade}</span>
            <span class="separator">·</span>
            <span class="candidate-local">📍 ${c.cidade}, ${c.estado}</span>
          </div>
        </div>
        <div class="candidate-disponibilidade">
          <span class="disp-label ${c.disponibilidade === "Imediata" ? "disp-imediata" : ""}">${c.disponibilidade}</span>
        </div>
      </div>`;
  }).join("");

  renderPaginacao();
}

// ============================================================
// PAGINAÇÃO
// ============================================================
function totalPaginas() {
  return Math.ceil(STATE.filtrados.length / STATE.porPagina);
}

function renderPaginacao() {
  const total = totalPaginas();
  const atual = STATE.paginaAtual;
  const container = document.getElementById("paginacao");

  if (total <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = `<button class="pg-btn pg-nav" onclick="irParaPagina(${atual - 1})"
    ${atual === 1 ? "disabled" : ""} aria-label="Página anterior">‹</button>`;

  // Páginas visíveis
  const paginas = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) paginas.push(i);
  } else {
    paginas.push(1);
    if (atual > 3) paginas.push("...");
    for (let i = Math.max(2, atual - 1); i <= Math.min(total - 1, atual + 1); i++) paginas.push(i);
    if (atual < total - 2) paginas.push("...");
    paginas.push(total);
  }

  paginas.forEach(p => {
    if (p === "...") {
      html += `<span class="pg-ellipsis">…</span>`;
    } else {
      html += `<button class="pg-btn ${p === atual ? "pg-ativo" : ""}"
        onclick="irParaPagina(${p})" aria-label="Página ${p}" ${p === atual ? 'aria-current="page"' : ""}>${p}</button>`;
    }
  });

  html += `<button class="pg-btn pg-nav" onclick="irParaPagina(${atual + 1})"
    ${atual === total ? "disabled" : ""} aria-label="Próxima página">›</button>`;

  html += `<span class="pg-info">de ${total}</span>`;

  container.innerHTML = html;
}

function irParaPagina(p) {
  const total = totalPaginas();
  if (p < 1 || p > total) return;
  STATE.paginaAtual = p;
  renderLista();
  // Se o painel estiver aberto, sincroniza seleção na lista
  if (STATE.paineAberto && STATE.candidatoAtivo !== null) {
    const candidatoPage = Math.floor(STATE.candidatoAtivo / STATE.porPagina) + 1;
    if (candidatoPage !== STATE.paginaAtual) {
      // candidato ativo não está nesta página — apenas rerenderiza lista
    }
  }
  document.getElementById("results-area").scrollTop = 0;
}

// ============================================================
// PAINEL DE PERFIL RÁPIDO
// ============================================================
function abrirPainel(globalIdx) {
  STATE.paineAberto = true;
  STATE.candidatoAtivo = globalIdx;
  STATE.revisados.add(STATE.filtrados[globalIdx].id);

  document.getElementById("quick-panel").classList.add("aberto");
  document.getElementById("layout-main").classList.add("com-painel");

  renderPainel();
  renderLista(); // atualiza highlight na lista
  sincronizarPaginaComCandidato();
}

function fecharPainel() {
  STATE.paineAberto = false;
  STATE.candidatoAtivo = null;
  document.getElementById("quick-panel").classList.remove("aberto");
  document.getElementById("layout-main").classList.remove("com-painel");
  renderLista();
}

function sincronizarPaginaComCandidato() {
  if (STATE.candidatoAtivo === null) return;
  const paginaDoAtivo = Math.floor(STATE.candidatoAtivo / STATE.porPagina) + 1;
  if (STATE.paginaAtual !== paginaDoAtivo) {
    STATE.paginaAtual = paginaDoAtivo;
    renderLista();
  }
}

function navPainel(direcao) {
  const total = STATE.filtrados.length;
  if (total === 0) return;

  const novoIdx = STATE.candidatoAtivo + direcao;
  if (novoIdx < 0 || novoIdx >= total) return;

  STATE.candidatoAtivo = novoIdx;
  STATE.revisados.add(STATE.filtrados[novoIdx].id);

  sincronizarPaginaComCandidato();
  renderPainel();
  renderLista();
}

function renderPainel() {
  const idx = STATE.candidatoAtivo;
  const total = STATE.filtrados.length;
  const c = STATE.filtrados[idx];
  if (!c) return;

  const pagina = Math.floor(idx / STATE.porPagina) + 1;
  const totalPags = totalPaginas();
  const posNaPagina = (idx % STATE.porPagina) + 1;
  const totalNaPagina = Math.min(STATE.porPagina, total - (pagina - 1) * STATE.porPagina);

  // Indicadores de navegação
  document.getElementById("nav-contador-global").textContent =
    `${idx + 1} de ${total} candidatos`;
  document.getElementById("nav-contador-pagina").textContent =
    `Página ${pagina}/${totalPags} · ${posNaPagina} de ${totalNaPagina} nesta página`;

  document.getElementById("btn-nav-anterior").disabled = idx === 0;
  document.getElementById("btn-nav-proximo").disabled = idx === total - 1;

  // Indicador de transição de página
  const ehUltimoDaPagina = posNaPagina === totalNaPagina;
  const ehPrimeiroDaPagina = posNaPagina === 1;
  const proxPagLabel = document.getElementById("prox-pag-hint");

  if (ehUltimoDaPagina && idx < total - 1) {
    proxPagLabel.innerHTML = `<span class="hint-pagina">→ Próximo: página ${pagina + 1}</span>`;
    proxPagLabel.style.display = "block";
  } else if (ehPrimeiroDaPagina && idx > 0 && direcaoUltima === -1) {
    proxPagLabel.innerHTML = `<span class="hint-pagina">← Voltando: página ${pagina}</span>`;
    proxPagLabel.style.display = "block";
  } else {
    proxPagLabel.style.display = "none";
  }

  // Barra de progresso
  const progressoPct = ((idx + 1) / total) * 100;
  document.getElementById("progress-bar-fill").style.width = `${progressoPct}%`;
  document.getElementById("progress-text").textContent =
    `${Math.round(progressoPct)}% revisados`;

  // Header do candidato
  document.getElementById("painel-avatar").style.background = getAvatarColor(c.id);
  document.getElementById("painel-avatar").textContent = getInitials(c.nome);
  document.getElementById("painel-nome").textContent = c.nome;
  document.getElementById("painel-cargo").textContent = c.cargo;
  document.getElementById("painel-local").textContent = `📍 ${c.cidade}, ${c.estado}`;
  document.getElementById("painel-senioridade").textContent = c.senioridade;
  document.getElementById("painel-experiencia").textContent = c.experiencia;

  // Disponibilidade
  const dispEl = document.getElementById("painel-disponibilidade");
  dispEl.textContent = c.disponibilidade;
  dispEl.className = "painel-disp " + (c.disponibilidade === "Imediata" ? "disp-imediata" : "");

  // Pretensão
  document.getElementById("painel-pretensao").textContent = c.pretensao;

  // Status atual
  const statusEl = document.getElementById("painel-status-atual");
  statusEl.textContent = c.status ? statusLabel(c.status) : "Não avaliado";
  statusEl.className = "painel-status-val " + statusClass(c.status);

  // Resumo
  document.getElementById("painel-resumo").textContent = c.resumo;

  // Tecnologias
  document.getElementById("painel-tecnologias").innerHTML =
    c.tecnologias.map(t => `<span class="skill-badge skill-lg">${t}</span>`).join("");

  // Competências
  document.getElementById("painel-competencias").innerHTML =
    c.competencias.map(t => `<span class="comp-badge">${t}</span>`).join("");

  // Formações
  document.getElementById("painel-formacoes").innerHTML =
    c.formacoes.map(f => `<span class="formacao-badge">${f}</span>`).join("");

  // Soft skills
  document.getElementById("painel-softskills").innerHTML =
    c.softskills.map(s => `<span class="soft-badge">${s}</span>`).join("");

  // Badges de atributos
  const badges = document.getElementById("painel-attr-badges");
  badges.innerHTML = [
    c.video ? '<span class="attr-badge">▶ Vídeo</span>' : "",
    c.pcd ? '<span class="attr-badge attr-pcd">PCD</span>' : "",
    `<span class="attr-badge">${c.genero}</span>`
  ].filter(Boolean).join("");

  // Botões de ação
  document.querySelectorAll(".action-btn-status").forEach(btn => {
    btn.classList.remove("ativo");
    if (btn.dataset.status === c.status) btn.classList.add("ativo");
  });
}

// Variável auxiliar para hint de direção
let direcaoUltima = 1;

function navPainelComDirecao(direcao) {
  direcaoUltima = direcao;
  navPainel(direcao);
}

function setStatus(status) {
  if (STATE.candidatoAtivo === null) return;
  const c = STATE.filtrados[STATE.candidatoAtivo];
  // Toggle: clicar no mesmo status remove
  c.status = c.status === status ? null : status;
  // Atualiza no array original também
  const orig = STATE.todos.find(x => x.id === c.id);
  if (orig) orig.status = c.status;
  renderPainel();
  renderLista();
}

// ============================================================
// FILTROS E BUSCA
// ============================================================

function renderActiveFilters() {
  const bar = document.getElementById("active-filters-bar");
  const chips = [];

  if (STATE.filtroEspecialidade) chips.push({ label: STATE.filtroEspecialidade, clear: () => { STATE.filtroEspecialidade = ""; document.querySelectorAll('.filter-chip[data-filter="especialidade"]').forEach(c => c.classList.remove("ativo")); } });
  if (STATE.filtroRegiao) chips.push({ label: `Região: ${STATE.filtroRegiao}`, clear: () => { STATE.filtroRegiao = ""; document.getElementById("filtro-regiao").value = ""; } });
  if (STATE.filtroCidade) chips.push({ label: STATE.filtroCidade, clear: () => { STATE.filtroCidade = ""; document.getElementById("filtro-cidade").value = ""; } });
  if (STATE.filtroTecnologia) chips.push({ label: STATE.filtroTecnologia, clear: () => { STATE.filtroTecnologia = ""; document.getElementById("filtro-tecnologia").value = ""; } });
  STATE.filtroFormacoes.forEach(f => chips.push({ label: f, clear: () => { STATE.filtroFormacoes = STATE.filtroFormacoes.filter(x => x !== f); document.querySelectorAll('input[data-filter="formacao"]').forEach(el => { if (el.value === f) el.checked = false; }); } }));
  STATE.filtroSoftskills.forEach(s => chips.push({ label: s.length > 25 ? s.substring(0, 25) + "…" : s, fullValue: s, clear: () => { STATE.filtroSoftskills = STATE.filtroSoftskills.filter(x => x !== s); document.querySelectorAll('input[data-filter="softskill"]').forEach(el => { if (el.value === s) el.checked = false; }); } }));
  STATE.filtroGeneros.forEach(g => chips.push({ label: g, clear: () => { STATE.filtroGeneros = STATE.filtroGeneros.filter(x => x !== g); document.querySelectorAll('input[data-filter="genero"]').forEach(el => { if (el.value === g) el.checked = false; }); } }));
  if (STATE.filtroVideo) chips.push({ label: "Com vídeo", clear: () => { STATE.filtroVideo = false; document.getElementById("toggle-video").checked = false; } });
  if (STATE.filtroPcd) chips.push({ label: "PCD", clear: () => { STATE.filtroPcd = false; document.getElementById("toggle-pcd").checked = false; } });
  if (STATE.filtroDivGenero) chips.push({ label: "Diversidade de gênero", clear: () => { STATE.filtroDivGenero = false; document.getElementById("toggle-div-genero").checked = false; } });

  if (chips.length === 0) {
    bar.style.display = "none";
    bar.innerHTML = "";
    return;
  }

  bar.style.display = "flex";
  bar.innerHTML = chips.map((chip, i) =>
    `<span class="active-filter-chip">${chip.label}<button type="button" aria-label="Remover filtro" data-chip-idx="${i}">×</button></span>`
  ).join("");

  bar.querySelectorAll("button[data-chip-idx]").forEach(btn => {
    btn.addEventListener("click", () => {
      chips[parseInt(btn.dataset.chipIdx)].clear();
      aplicarFiltros();
      renderLista();
      if (STATE.paineAberto && STATE.filtrados.length > 0) { STATE.candidatoAtivo = 0; renderPainel(); sincronizarPaginaComCandidato(); }
      else if (STATE.filtrados.length === 0) fecharPainel();
    });
  });
}

function onBuscar(e) {
  STATE.busca = e.target.value;
  aplicarFiltros();
  renderLista();
  if (STATE.paineAberto && STATE.filtrados.length > 0) {
    STATE.candidatoAtivo = 0;
    renderPainel();
  } else if (STATE.filtrados.length === 0) {
    fecharPainel();
  }
}

// Função genérica chamada por qualquer controle do painel lateral de filtros
function onSidePanelFilter() {
  aplicarFiltros();
  renderLista();
  if (STATE.paineAberto && STATE.filtrados.length > 0) {
    STATE.candidatoAtivo = 0;
    renderPainel();
    sincronizarPaginaComCandidato();
  } else if (STATE.filtrados.length === 0) {
    fecharPainel();
  }
}

// Somente ordenação (barra superior)
function onFiltroChange() {
  STATE.ordenacao = document.getElementById("filtro-ordenacao").value;
  onSidePanelFilter();
}

function limparFiltros() {
  STATE.busca = "";
  STATE.filtroEspecialidade = "";
  STATE.filtroRegiao = "";
  STATE.filtroCidade = "";
  STATE.filtroTecnologia = "";
  STATE.filtroFaixaEtaria = "";
  STATE.filtroFormacoes = [];
  STATE.filtroSoftskills = [];
  STATE.filtroGeneros = [];
  STATE.filtroVideo = false;
  STATE.filtroPcd = false;
  STATE.filtroDivGenero = false;
  STATE.ordenacao = "relevancia";

  document.getElementById("busca-input").value = "";
  document.getElementById("filtro-ordenacao").value = "relevancia";

  ["filtro-regiao","filtro-cidade","filtro-tecnologia","filtro-faixa-etaria"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove("ativo"));
  document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(el => { el.checked = false; });

  aplicarFiltros();
  renderLista();
}

// ============================================================
// TECLADO
// ============================================================
document.addEventListener("keydown", (e) => {
  if (!STATE.paineAberto) return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); navPainelComDirecao(1); }
  else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); navPainelComDirecao(-1); }
  else if (e.key === "Escape") { fecharPainel(); }
  else if (e.key === "f" || e.key === "F") { setStatus("favorito"); }
  else if (e.key === "s" || e.key === "S") { setStatus("selecionado"); }
  else if (e.key === "d" || e.key === "D") { setStatus("descartado"); }
});

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  aplicarFiltros();
  renderLista();

  // Busca e ordenação (barra superior)
  document.getElementById("busca-input").addEventListener("input", onBuscar);
  document.getElementById("filtro-ordenacao").addEventListener("change", onFiltroChange);
  document.getElementById("btn-limpar-filtros").addEventListener("click", limparFiltros);

  // Selects do painel lateral
  ["filtro-regiao","filtro-cidade","filtro-tecnologia","filtro-faixa-etaria"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("change", () => {
      if (id === "filtro-regiao")          STATE.filtroRegiao = el.value;
      else if (id === "filtro-cidade")     STATE.filtroCidade = el.value;
      else if (id === "filtro-tecnologia") STATE.filtroTecnologia = el.value;
      else if (id === "filtro-faixa-etaria") STATE.filtroFaixaEtaria = el.value;
      onSidePanelFilter();
    });
  });

  // Chips de especialidade (toggle)
  document.querySelectorAll('.filter-chip[data-filter="especialidade"]').forEach(chip => {
    chip.addEventListener("click", () => {
      const val = chip.dataset.value;
      if (STATE.filtroEspecialidade === val) {
        STATE.filtroEspecialidade = "";
        chip.classList.remove("ativo");
      } else {
        STATE.filtroEspecialidade = val;
        document.querySelectorAll('.filter-chip[data-filter="especialidade"]').forEach(c => c.classList.remove("ativo"));
        chip.classList.add("ativo");
      }
      onSidePanelFilter();
    });
  });

  // Checkboxes e toggles do painel lateral
  document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(el => {
    el.addEventListener("change", () => {
      const f = el.dataset.filter;
      const v = el.value;
      if (f === "formacao") {
        if (el.checked) STATE.filtroFormacoes.push(v);
        else STATE.filtroFormacoes = STATE.filtroFormacoes.filter(x => x !== v);
      } else if (f === "softskill") {
        if (el.checked) STATE.filtroSoftskills.push(v);
        else STATE.filtroSoftskills = STATE.filtroSoftskills.filter(x => x !== v);
      } else if (f === "genero") {
        if (el.checked) STATE.filtroGeneros.push(v);
        else STATE.filtroGeneros = STATE.filtroGeneros.filter(x => x !== v);
      } else if (f === "video") {
        STATE.filtroVideo = el.checked;
      } else if (f === "pcd") {
        STATE.filtroPcd = el.checked;
      } else if (f === "divgenero") {
        STATE.filtroDivGenero = el.checked;
      }
      onSidePanelFilter();
    });
  });

  // Painel de perfil rápido
  document.getElementById("btn-fechar-painel").addEventListener("click", fecharPainel);
  document.getElementById("btn-nav-anterior").addEventListener("click", () => navPainelComDirecao(-1));
  document.getElementById("btn-nav-proximo").addEventListener("click", () => navPainelComDirecao(1));
  document.querySelectorAll(".action-btn-status").forEach(btn => {
    btn.addEventListener("click", () => setStatus(btn.dataset.status));
  });
});
