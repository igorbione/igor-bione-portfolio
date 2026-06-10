export type Lang = "pt" | "en" | "es";

type Dict = Record<string, string | string[]>;

export const translations: Record<Lang, Dict> = {
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_teaching: "Ensino",
    nav_writing: "Textos",
    nav_papers: "Artigos",
    nav_contact: "Contato",

    hero_role: "Profissional de dados full stack",
    hero_tagline: "Te ajudo a transformar os dados da sua empresa em insights acionáveis",
    hero_sub: "Transformando dados complexos em decisões claras — do dado ao negócio.",
    cta_projects: "Ver Projetos",
    cta_contact: "Entrar em Contato",

    about_label: "Sobre",
    about_title: "Do laboratório ao deploy",
    about_intro:
      "Eu sou cientista de dados com doutorado em Ecologia & Evolução pela Universidade Federal de Goiás, incluindo período de pesquisa na Università degli Studi di Napoli Federico II (Itália) e MBA em Data Science & Analytics pela USP. Com mais de 7 anos de experiência, atuo no ciclo completo de produtos de dados: da engenharia de pipelines ao deploy de modelos de machine learning, passando por automação com IA e comunicação de resultados para stakeholders.",
    about_quote_1:
      "A minha trajetória começa no laboratório — literalmente. Biólogo de formação, passei anos trabalhando com diferentes tipos de dados, aprendendo que perguntas mal formuladas levam a respostas erradas, não importa quanta tecnologia você use. Essa mentalidade científica rigorosa moldou profundamente minha trajetória.",
    about_quote_2:
      "O caminho para a ciência de dados foi natural: da modelagem estatística avançada no doutorado, até a transição para o mercado — onde hoje atuo construindo produtos de dados de ponta a ponta com o mesmo rigor de quem foi treinado para defender uma tese.",

    card1_title: "Raízes Científicas",
    card1_body:
      "PhD em Ecologia & Evolução (UFG) + MBA em Data Science (USP). Modelagem estatística avançada aplicada a datasets complexos e longitudinais. Publicações em periódicos internacionais (Springer, Wiley, bioRxiv).",
    card2_title: "Engenharia de Dados & ML",
    card2_body:
      "Pipelines Python/SQL/PySpark. Modelos de classificação, regressão, séries temporais (LSTM), NLP e sistemas de recomendação. MLOps. Deploy em produção.",
    card3_title: "IA Aplicada & Automação",
    card3_body: "Agentes de IA com LangChain e N8N. Automação de workflows.",

    timeline_title: "Trajetória",
    skills_title: "Skills",
    sk_lang: "Linguagens",
    sk_ml: "ML/DL",
    sk_ai: "IA & Automação",
    sk_bi: "BI & Viz",
    sk_idiomas: "Idiomas",
    idiomas_value: "Português (Nativo) · Inglês (B2/C1)",

    certs_title: "Certificações",
    cert_status_active: "Active",
    cert_status_perm: "Permanent",
    cert_issued: "Emitido",
    cert_expires: "Expira",
    cert_id: "ID",

    closing_line: "Se você tem dados e uma pergunta difícil, provavelmente temos algo para conversar.",

    projects_label: "Projetos",
    projects_title: "Construindo coisas com dados",
    projects_ds: "Data Science",
    projects_auto: "Automação",
    btn_github: "Ver no GitHub",

    teaching_label: "Ensino",
    teaching_title: "Cursos e materiais didáticos ",
    year: "Ano",

    writing_label: "Textos",
    writing_title: "Textos publicados",
    btn_read_linkedin: "Ler no LinkedIn",

    papers_label: "Artigos Científicos",
    papers_title: "Publicações revisadas por pares",
    btn_access_paper: "Acessar Artigo",

    contact_label: "Contato",
    contact_title: "Vamos conversar",
    contact_body:
      "Se você tem um problema de dados, uma colaboração em mente ou apenas quer trocar ideias sobre ciência e tecnologia — me chame.",
    footer_copy: "© 2026 Igor Bione",

    p1_desc: "Projeto freelance analisando a viabilidade de negócio para um cliente de transporte. Análise exploratória completa e recomendações orientadas por dados.",
    p2_desc: "Modelo de visão computacional para reconhecimento de Língua Brasileira de Sinais (Libras).",
    p3_desc: "Pipeline automatizado de download de relatórios para um pequeno empresário de transporte, eliminando trabalho manual e padronizando a entrega de dados.",

    course1_desc: "Materiais didáticos do curso de inverno ministrado por Igor.",
    course2_desc: "Minicurso sobre machine learning aplicado à ecologia, ministrado em 2019.",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_teaching: "Teaching",
    nav_writing: "Writing",
    nav_papers: "Papers",
    nav_contact: "Contact",

    hero_role: "Full-stack data professional",
    hero_tagline: "I help you turn your company's data into actionable insights",
    hero_sub: "Turning complex data into clear decisions — from raw data to business value.",
    cta_projects: "View Projects",
    cta_contact: "Get in Touch",

    about_label: "About",
    about_title: "From the lab to deployment",
    about_intro:
      "I'm a data scientist with a background in Biological Sciences and a PhD in Ecology & Evolution from the Federal University of Goiás, with a research period at Università degli Studi di Napoli Federico II (Italy) and an MBA in Data Science & Analytics from USP. With 7+ years of experience, I work across the full data-product lifecycle: from pipeline engineering to ML model deployment, AI-powered automation, and communicating results to stakeholders.",
    about_quote_1:
      "My path starts in the lab — literally. Trained as a biologist, I spent years working with data from Brazilian ecosystems, learning that badly framed questions lead to useless answers no matter how much technology you throw at them. That rigorous scientific mindset shaped everything that came next.",
    about_quote_2:
      "The road to data science was a natural one: advanced statistical modeling during my PhD, geospatial analysis at ICMBio (where my models influenced national public policy), and the move into industry — where I now build end-to-end data products with the same rigor of someone trained to defend a thesis.",

    card1_title: "Scientific Roots",
    card1_body:
      "PhD in Ecology & Evolution (UFG) + MBA in Data Science (USP). Advanced statistical modeling applied to complex, longitudinal datasets. Publications in international journals (Springer, Wiley, bioRxiv).",
    card2_title: "Data Engineering & ML",
    card2_body:
      "Python/SQL/PySpark pipelines. Classification, regression, time-series (LSTM), NLP and recommender systems. MLOps. Production deployment.",
    card3_title: "Applied AI & Automation",
    card3_body: "AI agents with LangChain and N8N. Workflow automation.",

    timeline_title: "Timeline",
    skills_title: "Skills",
    sk_lang: "Languages",
    sk_ml: "ML/DL",
    sk_ai: "AI & Automation",
    sk_bi: "BI & Viz",
    sk_idiomas: "Spoken",
    idiomas_value: "Portuguese (Native) · English (B2/C1)",

    certs_title: "Certifications",
    cert_status_active: "Active",
    cert_status_perm: "Permanent",
    cert_issued: "Issued",
    cert_expires: "Expires",
    cert_id: "ID",

    closing_line: "If you have data and a hard question, we probably have something to talk about.",

    projects_label: "Projects",
    projects_title: "Building things with data",
    projects_ds: "Data Science",
    projects_auto: "Automation",
    btn_github: "View on GitHub",

    teaching_label: "Teaching",
    teaching_title: "Courses and teaching materials",
    year: "Year",

    writing_label: "Writing",
    writing_title: "Pieces on LinkedIn",
    btn_read_linkedin: "Read on LinkedIn",

    papers_label: "Scientific Papers",
    papers_title: "Peer-reviewed publications",
    btn_access_paper: "Access Paper",

    contact_label: "Contact",
    contact_title: "Let's talk",
    contact_body:
      "If you have a data problem, a collaboration in mind, or just want to swap ideas about science and technology — reach out.",
    footer_copy: "© 2025 Igor Bione",

    p1_desc: "Freelance project analyzing business viability for a transportation client. Full exploratory analysis and data-driven recommendations.",
    p2_desc: "Computer vision model for Brazilian Sign Language (Libras) recognition.",
    p3_desc: "Automated report download pipeline built for a small transportation business owner, eliminating manual work and standardizing data delivery.",

    course1_desc: "Teaching materials from a winter course instructed by Igor.",
    course2_desc: "Course on machine learning applied to ecology, taught in 2019.",
  },
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_teaching: "Enseñanza",
    nav_writing: "Textos",
    nav_papers: "Artículos",
    nav_contact: "Contacto",

    hero_role: "Profesional de datos full stack",
    hero_tagline: "Te ayudo a transformar los datos de tu empresa en insights accionables",
    hero_sub: "Convirtiendo datos complejos en decisiones claras — del dato al negocio.",
    cta_projects: "Ver Proyectos",
    cta_contact: "Contáctame",

    about_label: "Sobre mí",
    about_title: "Del laboratorio al deploy",
    about_intro:
      "Soy científico de datos con formación en Ciencias Biológicas y doctorado en Ecología y Evolución por la Universidad Federal de Goiás, con estancia de investigación en la Università degli Studi di Napoli Federico II (Italia) y MBA en Data Science & Analytics por la USP. Con más de 7 años de experiencia, trabajo en el ciclo completo de productos de datos: desde la ingeniería de pipelines hasta el deploy de modelos de machine learning, pasando por la automatización con IA y la comunicación de resultados a stakeholders.",
    about_quote_1:
      "Mi trayectoria comienza en el laboratorio — literalmente. Biólogo de formación, pasé años trabajando con datos de ecosistemas brasileños, aprendiendo que las preguntas mal formuladas llevan a respuestas inútiles, sin importar cuánta tecnología uses. Esa mentalidad científica rigurosa moldeó todo lo que vino después.",
    about_quote_2:
      "El camino hacia la ciencia de datos fue natural: modelado estadístico avanzado en el doctorado, análisis geoespacial en el ICMBio (donde mis modelos influyeron en políticas públicas nacionales), hasta la transición a la industria — donde hoy construyo productos de datos de punta a punta con el mismo rigor de quien fue entrenado para defender una tesis.",

    card1_title: "Raíces Científicas",
    card1_body:
      "PhD en Ecología y Evolución (UFG) + MBA en Data Science (USP). Modelado estadístico avanzado aplicado a datasets complejos y longitudinales. Publicaciones en revistas internacionales (Springer, Wiley, bioRxiv).",
    card2_title: "Ingeniería de Datos & ML",
    card2_body:
      "Pipelines Python/SQL/PySpark. Modelos de clasificación, regresión, series temporales (LSTM), NLP y sistemas de recomendación. MLOps. Deploy en producción.",
    card3_title: "IA Aplicada & Automatización",
    card3_body: "Agentes de IA con LangChain y N8N. Automatización de flujos de trabajo.",

    timeline_title: "Trayectoria",
    skills_title: "Skills",
    sk_lang: "Lenguajes",
    sk_ml: "ML/DL",
    sk_ai: "IA & Automatización",
    sk_bi: "BI & Viz",
    sk_idiomas: "Idiomas",
    idiomas_value: "Portugués (Nativo) · Inglés (B2/C1)",

    certs_title: "Certificaciones",
    cert_status_active: "Activa",
    cert_status_perm: "Permanente",
    cert_issued: "Emitida",
    cert_expires: "Expira",
    cert_id: "ID",

    closing_line: "Si tienes datos y una pregunta difícil, probablemente tenemos algo de qué hablar.",

    projects_label: "Proyectos",
    projects_title: "Construyendo cosas con datos",
    projects_ds: "Data Science",
    projects_auto: "Automatización",
    btn_github: "Ver en GitHub",

    teaching_label: "Enseñanza",
    teaching_title: "Cursos y materiales didácticos",
    year: "Año",

    writing_label: "Textos",
    writing_title: "Publicaciones en LinkedIn",
    btn_read_linkedin: "Leer en LinkedIn",

    papers_label: "Artículos Científicos",
    papers_title: "Publicaciones revisadas por pares",
    btn_access_paper: "Acceder al Artículo",

    contact_label: "Contacto",
    contact_title: "Hablemos",
    contact_body:
      "Si tienes un problema de datos, una colaboración en mente o solo quieres intercambiar ideas sobre ciencia y tecnología — contáctame.",
    footer_copy: "© 2025 Igor Bione",

    p1_desc: "Proyecto freelance analizando la viabilidad de negocio para un cliente de transporte. Análisis exploratorio completo y recomendaciones basadas en datos.",
    p2_desc: "Modelo de visión por computadora para el reconocimiento de la Lengua Brasileña de Señas (Libras).",
    p3_desc: "Pipeline automatizado de descarga de reportes para un pequeño empresario de transporte, eliminando trabajo manual y estandarizando la entrega de datos.",

    course1_desc: "Materiales didácticos del curso de invierno impartido por Igor.",
    course2_desc: "Minicurso sobre machine learning aplicado a la ecología, impartido en 2019.",
  },
};

export const timelineItems = [
  { year: "2017", pt: "B.Sc. Ciências Biológicas, UFG", en: "B.Sc. Biological Sciences, UFG", es: "B.Sc. Ciencias Biológicas, UFG" },
  { year: "2017", pt: "Estágio ICMBio: modelos de ML que influenciaram políticas públicas de conservação", en: "ICMBio internship: ML models that informed national conservation policy", es: "Prácticas ICMBio: modelos de ML que influyeron en políticas públicas de conservación" },
  { year: "2018–2024", pt: "Pesquisador Científico na UFG + Visiting Researcher, Università degli Studi di Napoli Federico II (Itália)", en: "Research scientist at UFG + Visiting Researcher, Università degli Studi di Napoli Federico II (Italy)", es: "Investigador Científico en UFG + Visiting Researcher, Università degli Studi di Napoli Federico II (Italia)" },
  { year: "2024", pt: "PhD em Ecologia & Evolução, UFG", en: "PhD in Ecology & Evolution, UFG", es: "PhD en Ecología y Evolución, UFG" },
  { year: "2024", pt: "Analista de Dados, Naturae: lead técnico de relatórios de licenciamento ambiental", en: "Data Analyst, Naturae: technical lead of environmental-licensing reports", es: "Analista de Datos, Naturae: lead técnico de reportes de licenciamiento ambiental" },
  { year: "2025", pt: "MBA em Data Science & Analytics, USP", en: "MBA in Data Science & Analytics, USP", es: "MBA en Data Science & Analytics, USP" },
  { year: "2024–Atualmente", pt: "Cientista de Dados, WAM Empreendimentos: produtos com LSTM e IA generativa", en: "Data Scientist, WAM Empreendimentos: products with LSTM and generative AI", es: "Científico de Datos, WAM Empreendimentos: productos con LSTM e IA generativa" },
];
