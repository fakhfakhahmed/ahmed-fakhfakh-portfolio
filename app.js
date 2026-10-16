// Portfolio content is based on Ahmed Fakhfakh's English and French CVs.
// Keep employment dates and credentials aligned with the downloadable documents.
const translations = {
  en: {
    'skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.label': 'Main navigation',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.menu': 'Toggle navigation',
    'nav.language': 'Choose your language',
    'hero.eyebrow': 'DEVOPS / KUBERNETES ENGINEER',
    'hero.line1': 'Built to ship.',
    'hero.line2': 'Designed to scale.',
    'hero.intro': 'I’m Ahmed Fakhfakh, a CKA-certified engineer turning complex infrastructure into dependable delivery.',
    'hero.location': 'Based in Tunisia · Working internationally',
    'hero.projects': 'Explore my work',
    'hero.cv': 'Download CV',
    'hero.cert': 'Certified Kubernetes Administrator',
    'hero.art': 'INFRASTRUCTURE, BY DESIGN',
    'hero.automate': 'AUTOMATE',
    'hero.orchestrate': 'ORCHESTRATE',
    'hero.observe': 'OBSERVE',
    'hero.flow': 'CODE → CONTAINER → CLOUD',
    'hero.cka': 'CKA CERTIFIED',
    'hero.note': 'Infrastructure. Automation. A developer’s perspective.',
    'hero.scroll': 'Scroll to explore',
    'metric.nodes': 'Kubernetes nodes',
    'metric.services': 'Services inventoried',
    'metric.cert': 'Kubernetes certified',
    'metric.note': 'Kubernetes inventory work at Bestlab',
    'section.work.kicker': '01 / SELECTED WORK',
    'section.work.title': 'From code to cloud.',
    'section.work.intro': 'A selection of infrastructure and product work, grounded in real engineering experience.',
    'filter.all': 'All work',
    'filter.infra': 'Infrastructure',
    'filter.delivery': 'Delivery',
    'filter.dev': 'Development',
    'filter.label': 'Filter projects',
    'section.experience.kicker': '02 / EXPERIENCE',
    'section.experience.title': 'A developer’s perspective. An operator’s mindset.',
    'section.experience.intro': 'From full-stack applications to the infrastructure that keeps them running.',
    'section.skills.kicker': '03 / TOOLKIT',
    'section.skills.title': 'The tools behind the work.',
    'section.skills.intro': 'A practical stack for building, delivering, securing, and observing applications.',
    'section.credentials.kicker': '04 / FOUNDATIONS',
    'section.credentials.title': 'Always building on solid ground.',
    'section.languages.title': 'A shared language.',
    'contact.kicker': 'LET’S BUILD SOMETHING',
    'contact.title': 'Your next deployment starts with a conversation.',
    'contact.intro': 'Open to opportunities in Tunisia and internationally, including remote roles and relocation.',
    'contact.email': 'Send me an email',
    'contact.cv': 'Download my CV',
    'contact.location': 'Tunisia · Remote · Relocation',
    'footer.role': 'DevOps / Kubernetes Engineer',
    'footer.note': 'Built with care. Shipped with intent.',
    'footer.top': 'Back to top',
    'project.explore': 'Explore project',
    'project.diagram': 'Conceptual overview',
    'language.changed': 'Portfolio language changed to English.',
    'meta.title': 'Ahmed Fakhfakh — DevOps & Kubernetes Engineer',
    'meta.description': 'Ahmed Fakhfakh, CKA-certified DevOps engineer in Tunisia. Kubernetes, Azure AKS, CI/CD, infrastructure as code, and full-stack development.',
  },
  fr: {
    'skip': 'Aller au contenu',
    'nav.home': 'Accueil',
    'nav.label': 'Navigation principale',
    'nav.projects': 'Projets',
    'nav.experience': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    'nav.menu': 'Afficher ou masquer la navigation',
    'nav.language': 'Choisir la langue',
    'hero.eyebrow': 'INGÉNIEUR DEVOPS / KUBERNETES',
    'hero.line1': 'Du code au cloud.',
    'hero.line2': 'Prêt à évoluer.',
    'hero.intro': 'Je suis Ahmed Fakhfakh, ingénieur certifié CKA. Je transforme la complexité de l’infrastructure en déploiements fiables.',
    'hero.location': 'Basé en Tunisie · Ouvert à l’international',
    'hero.projects': 'Découvrir mes projets',
    'hero.cv': 'Télécharger le CV',
    'hero.cert': 'Certified Kubernetes Administrator',
    'hero.art': 'L’INFRASTRUCTURE, PAR CONCEPTION',
    'hero.automate': 'AUTOMATISER',
    'hero.orchestrate': 'ORCHESTRER',
    'hero.observe': 'OBSERVER',
    'hero.flow': 'CODE → CONTENEUR → CLOUD',
    'hero.cka': 'CERTIFIÉ CKA',
    'hero.note': 'Infrastructure. Automatisation. Regard de développeur.',
    'hero.scroll': 'Découvrir la suite',
    'metric.nodes': 'Nœuds Kubernetes',
    'metric.services': 'Services inventoriés',
    'metric.cert': 'Certification Kubernetes',
    'metric.note': 'Inventaire Kubernetes réalisé chez Bestlab',
    'section.work.kicker': '01 / PROJETS CHOISIS',
    'section.work.title': 'Du code à la production.',
    'section.work.intro': 'Une sélection de projets d’infrastructure et de développement, issus de mon expérience sur le terrain.',
    'filter.all': 'Tous les projets',
    'filter.infra': 'Infrastructure',
    'filter.delivery': 'Déploiement',
    'filter.dev': 'Développement',
    'filter.label': 'Filtrer les projets',
    'section.experience.kicker': '02 / PARCOURS',
    'section.experience.title': 'Le regard du développeur. La rigueur de l’exploitation.',
    'section.experience.intro': 'Des applications Full-Stack à l’infrastructure qui les fait fonctionner.',
    'section.skills.kicker': '03 / COMPÉTENCES',
    'section.skills.title': 'Les outils au service des projets.',
    'section.skills.intro': 'Des technologies pour développer, déployer, sécuriser et superviser les applications.',
    'section.credentials.kicker': '04 / FONDATIONS',
    'section.credentials.title': 'Construire sur des bases solides.',
    'section.languages.title': 'Un langage commun.',
    'contact.kicker': 'CONSTRUISONS LA SUITE',
    'contact.title': 'Votre prochain déploiement commence par un échange.',
    'contact.intro': 'Ouvert aux opportunités en Tunisie et à l’international, à distance ou avec mobilité géographique.',
    'contact.email': 'Écrivez-moi',
    'contact.cv': 'Télécharger mon CV',
    'contact.location': 'Tunisie · À distance · Mobilité',
    'footer.role': 'Ingénieur DevOps / Kubernetes',
    'footer.note': 'Conçu avec soin. Déployé avec conviction.',
    'footer.top': 'Retour en haut',
    'project.explore': 'Découvrir le projet',
    'project.diagram': 'Vue conceptuelle',
    'language.changed': 'Le portfolio est maintenant en français.',
    'meta.title': 'Ahmed Fakhfakh — Ingénieur DevOps & Kubernetes',
    'meta.description': 'Ahmed Fakhfakh, ingénieur DevOps certifié CKA en Tunisie. Kubernetes, Azure AKS, CI/CD, infrastructure as code et développement Full-Stack.',
  },
};

const projects = [
  {
    category: 'infra', tags: ['Kubernetes', 'Helm', 'GitLab CI/CD', 'NetBox'],
    en: {
      context: 'BESTLAB / INFRASTRUCTURE', title: 'Kubernetes, under control.',
      description: 'Operating an OVH-hosted cluster, strengthening security, and connecting 7 nodes and 600+ Services to a reliable inventory.',
      bullets: [
        'Administer Kubernetes networking, RBAC, containerd, and Longhorn storage.',
        'Build reusable GitLab CI/CD checks with Helm, Kubeconform, Checkov, Kubesec, and OPA/Conftest.',
        'Deploy NetBox with Helm and synchronize inventory using Python and REST APIs.',
        'Implement TLS with cert-manager, Secrets encryption through KMS/Vault, and observability with Prometheus, Grafana, and Alertmanager.',
      ],
      diagram: 'Conceptual Kubernetes inventory workflow: 7 nodes and 600+ Services, synchronized through Python and REST APIs to NetBox.',
    },
    fr: {
      context: 'BESTLAB / INFRASTRUCTURE', title: 'Kubernetes, sous contrôle.',
      description: 'Exploitation d’un cluster sur OVH, renforcement de sa sécurité et synchronisation de 7 nœuds et plus de 600 Services avec un inventaire fiable.',
      bullets: [
        'Administrer le réseau Kubernetes, les RBAC, containerd et le stockage Longhorn.',
        'Créer des contrôles GitLab CI/CD réutilisables avec Helm, Kubeconform, Checkov, Kubesec et OPA/Conftest.',
        'Déployer NetBox avec Helm et synchroniser l’inventaire avec Python et des API REST.',
        'Mettre en place TLS avec cert-manager, le chiffrement des Secrets via KMS/Vault et la supervision avec Prometheus, Grafana et Alertmanager.',
      ],
      diagram: 'Vue conceptuelle de l’inventaire Kubernetes : 7 nœuds et plus de 600 Services synchronisés avec NetBox via Python et des API REST.',
    },
  },
  {
    category: 'delivery', tags: ['Azure AKS', 'GitHub Actions', 'Terraform', 'Docker'],
    en: {
      context: 'SAAS CLIENT / CLOUD DELIVERY', title: 'From commit to cluster.',
      description: 'An end-to-end delivery pipeline for a SaaS client: Docker builds, ACR publishing, and automated deployments on Azure AKS.',
      bullets: [
        'Build a GitHub Actions pipeline from Docker image build to ACR publishing and AKS deployment.',
        'Manage infrastructure with Terraform and administer namespaces, RBAC, Azure AD, networking, and TLS.',
        'Improve resilience with HPA, health probes, resource requests and limits, ConfigMaps, and Secrets.',
        'Troubleshoot pod, image, and networking issues; monitor with Prometheus and Grafana.',
      ],
      diagram: 'Conceptual delivery workflow from GitHub Actions to Docker, Azure Container Registry, and Azure Kubernetes Service, with Terraform infrastructure.',
    },
    fr: {
      context: 'CLIENT SAAS / DÉPLOIEMENT CLOUD', title: 'Du commit au cluster.',
      description: 'Un pipeline de déploiement complet pour un client SaaS : builds Docker, publication sur ACR et déploiements automatisés sur Azure AKS.',
      bullets: [
        'Créer un pipeline GitHub Actions, du build Docker à la publication sur ACR et au déploiement AKS.',
        'Gérer l’infrastructure avec Terraform, ainsi que les namespaces, les RBAC, Azure AD, le réseau et TLS.',
        'Renforcer la résilience avec HPA, les sondes de santé, les ressources requests/limits, les ConfigMaps et les Secrets.',
        'Résoudre les incidents de pods, d’images et de réseau ; superviser avec Prometheus et Grafana.',
      ],
      diagram: 'Vue conceptuelle du déploiement de GitHub Actions vers Docker, Azure Container Registry et Azure Kubernetes Service, avec une infrastructure Terraform.',
    },
  },
  {
    category: 'dev', tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Socket.io'],
    en: {
      context: 'SOCIAL COMMERCE / FULL-STACK', title: 'Built for connection.',
      description: 'A social-commerce platform for influencers, connecting secure accounts, online payments, and real-time conversations.',
      bullets: [
        'Develop React interfaces and Node.js services backed by PostgreSQL.',
        'Implement secure authentication and role-based access.',
        'Integrate Stripe payment processing and webhook handling.',
        'Build real-time messaging and social-feed features with Socket.io in a five-person remote team.',
      ],
      diagram: 'Conceptual social-commerce architecture: React interface connected to Node.js, PostgreSQL, Stripe payments, and Socket.io messaging.',
    },
    fr: {
      context: 'E-COMMERCE SOCIAL / FULL-STACK', title: 'Pensé pour connecter.',
      description: 'Une plateforme e-commerce sociale pour influenceurs, réunissant comptes sécurisés, paiements en ligne et conversations en temps réel.',
      bullets: [
        'Développer des interfaces React et des services Node.js avec PostgreSQL.',
        'Mettre en place une authentification sécurisée et une gestion des rôles.',
        'Intégrer le traitement des paiements Stripe et des webhooks.',
        'Créer une messagerie instantanée et un fil d’actualité avec Socket.io au sein d’une équipe de cinq personnes à distance.',
      ],
      diagram: 'Architecture conceptuelle de la plateforme : interface React connectée à Node.js, PostgreSQL, Stripe pour les paiements et Socket.io pour la messagerie.',
    },
  },
];

const experience = [
  {
    company: 'Bestlab', tags: ['Kubernetes', 'GitLab CI/CD', 'Helm', 'Vault / OpenBao', 'NetBox'],
    en: { date: 'Jun 2026 — Present', title: 'DevOps Engineer', context: 'DevOps team of 3', description: 'Operate an OVH-hosted Kubernetes cluster, build reusable delivery and security checks, and automate infrastructure inventory. Support development teams while maintaining observability, DNS, and time services.' },
    fr: { date: 'Juin 2026 — Présent', title: 'Ingénieur DevOps', context: 'Équipe DevOps de 3 personnes', description: 'Exploitation d’un cluster Kubernetes sur OVH, création de contrôles de déploiement et de sécurité réutilisables, et automatisation de l’inventaire. Accompagnement des équipes de développement, supervision et administration des services DNS et de synchronisation horaire.' },
  },
  {
    company: { en: 'SaaS Client', fr: 'Client SaaS' }, tags: ['Azure AKS', 'GitHub Actions', 'Terraform', 'Prometheus', 'Grafana'],
    en: { date: 'Jul 2025 — Present', title: 'Freelance DevOps Engineer', context: 'Remote · Team of 6', description: 'Administer Azure AKS and automate the path from Docker builds to production deployments. Strengthen application resilience, troubleshoot Kubernetes incidents, and connect monitoring with product and business needs.' },
    fr: { date: 'Juil. 2025 — Présent', title: 'Ingénieur DevOps freelance', context: 'À distance · Équipe de 6 personnes', description: 'Administration d’Azure AKS et automatisation des builds Docker jusqu’au déploiement. Renforcement de la résilience, résolution d’incidents Kubernetes et mise en place de la supervision en lien avec les équipes produit et métier.' },
  },
  {
    company: { en: 'Social E-commerce Startup', fr: 'Startup e-commerce sociale' }, tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Socket.io'],
    en: { date: 'Oct 2024 — May 2025', title: 'Freelance Full-Stack Developer', context: 'Remote, France · Team of 5', description: 'Developed an influencer-focused social-commerce platform with secure authentication, role-based access, Stripe payments, and real-time messaging and feed features.' },
    fr: { date: 'Oct. 2024 — Mai 2025', title: 'Développeur Full-Stack freelance', context: 'À distance, France · Équipe de 5 personnes', description: 'Développement d’une plateforme e-commerce sociale pour influenceurs : authentification sécurisée, gestion des rôles, paiements Stripe, messagerie et fil d’actualité en temps réel.' },
  },
  {
    company: { en: 'SME Client Websites', fr: 'Sites vitrines PME' }, tags: ['React', 'Node.js', 'MongoDB', 'MySQL', 'Docker', 'NGINX'],
    en: { date: 'Oct 2023 — Sep 2024', title: 'Freelance Full-Stack Developer', context: 'Local and remote · Two-person team', description: 'Delivered responsive showcase and corporate websites from design through production deployment, working with another developer. Containerized applications and provided maintenance and client support.' },
    fr: { date: 'Oct. 2023 — Sept. 2024', title: 'Développeur Full-Stack freelance', context: 'Local et à distance · Collaboration en binôme', description: 'Conception et mise en ligne de sites vitrines et institutionnels responsives, en binôme. Conteneurisation des applications, maintenance et support client après déploiement.' },
  },
  {
    company: 'TAC-TIC', tags: ['Spring Boot', 'React', 'Flutter', 'RabbitMQ', 'Docker', 'Jenkins'],
    en: { date: 'Feb 2023 — Aug 2023', title: 'Full-Stack Developer Intern', context: 'Tunis · Final-year engineering project', description: 'Designed a gamified smart-recycling platform with Spring Boot microservices, React web and Flutter mobile applications. Connected services with RabbitMQ and implemented Docker containerization and Jenkins CI/CD.' },
    fr: { date: 'Fév. 2023 — Août 2023', title: 'Stagiaire développeur Full-Stack', context: 'Tunis · Projet de fin d’études', description: 'Conception d’une plateforme de recyclage gamifiée avec des microservices Spring Boot, une application web React et une application mobile Flutter. Intégration de RabbitMQ, conteneurisation Docker et pipeline CI/CD Jenkins.' },
  },
];

const skills = [
  { icon: 'cluster', en: 'Kubernetes & containers', fr: 'Kubernetes & conteneurs', tags: ['Kubernetes', 'AKS', 'Helm', 'Docker', 'containerd', 'Longhorn', 'NGINX Ingress', 'RBAC', 'HPA'] },
  { icon: 'pipeline', en: 'CI/CD & infrastructure as code', fr: 'CI/CD & infrastructure as code', tags: ['GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform', 'Ansible', 'Kubeconform', 'Bash', 'Python'] },
  { icon: 'cloud', en: 'Azure cloud', fr: 'Cloud Azure', tags: ['AKS', 'ACR', 'Azure AD', { en: 'Virtual Machines', fr: 'Machines virtuelles' }, 'Blob Storage', 'VNets', 'RBAC'] },
  { icon: 'shield', en: 'Security by design', fr: 'Sécurité dès la conception', tags: ['cert-manager', 'TLS', 'KMS', 'Vault / OpenBao', 'Workload Identity', 'TokenReview', 'Service Accounts', 'Checkov', 'Kubesec', 'OPA / Conftest', 'Semgrep', 'Trivy'] },
  { icon: 'activity', en: 'Systems & observability', fr: 'Systèmes & observabilité', tags: ['Linux', 'systemd', 'DNS / DNSSEC', 'TSIG', 'Chrony / NTP', 'Prometheus', 'Grafana', 'Alertmanager', 'ELK Stack', 'NetBox', 'Power BI'] },
  { icon: 'code', en: 'Development & data', fr: 'Développement & données', tags: [{ en: 'REST APIs', fr: 'API REST' }, 'Node.js', 'Express', 'React', 'TypeScript', 'Spring Boot', 'Flutter', 'RabbitMQ', 'Socket.io', 'PostgreSQL', 'Valkey', 'MySQL', 'MongoDB'] },
];

const icons = {
  cluster: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9M8 5.3l8 4.5"/>',
  pipeline: '<rect x="2" y="8" width="5" height="8" rx="1"/><rect x="17" y="8" width="5" height="8" rx="1"/><path d="M7 12h10m-5-4 4 4-4 4"/>',
  cloud: '<path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.5 7a5.5 5.5 0 0 1 .5 11H7Z"/><path d="M9 13h6m-3-3v6"/>',
  shield: '<path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
  activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  code: '<path d="m7 6-5 6 5 6m10-12 5 6-5 6m-3-14-4 16"/>',
};

const storageKey = 'ahmed-portfolio-language';
let currentLanguage = 'en';
let activeFilter = 'all';

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function translated(value, language) {
  return typeof value === 'string' ? value : value[language];
}

function tagList(values, language) {
  const list = element('div', 'tags');
  for (const value of values) list.append(element('span', '', translated(value, language)));
  return list;
}

function skillIcon(name) {
  const icon = element('span', 'skill-icon');
  icon.innerHTML = `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
  return icon;
}

// These diagrams illustrate the CV's project scope; they do not represent live telemetry.
function projectVisual(category, language, description) {
  const visual = element('div', `project-visual visual-${category}`);
  let drawing;
  if (category === 'infra') {
    const nodes = [[65, 86], [104, 86], [143, 86], [182, 86], [85, 125], [124, 125], [163, 125]];
    drawing = `<rect x="40" y="56" width="189" height="129" rx="12" fill="#162827" stroke="#365e50"/>
      ${nodes.map(([x, y]) => `<rect x="${x}" y="${y}" width="24" height="24" rx="5" fill="#203d32" stroke="#a5db91"/><circle cx="${x + 12}" cy="${y + 12}" r="3" fill="#b6f09c"/>`).join('')}
      <text x="134" y="171" text-anchor="middle" fill="#cce3d1" font-size="11">7 ${language === 'fr' ? 'nœuds' : 'nodes'} / 600+ Services</text>
      <path d="M229 120h64" fill="none" stroke="#b6f09c" stroke-width="1.5" stroke-dasharray="4 4"/><path d="m287 115 6 5-6 5" fill="none" stroke="#b6f09c"/>
      <rect x="301" y="76" width="113" height="90" rx="12" fill="#203d32" stroke="#82ae70"/>
      <path d="M334 103h47m-47 10h47m-47 10h47" stroke="#b6f09c" stroke-width="2"/><circle cx="329" cy="103" r="1" fill="#b6f09c"/><circle cx="329" cy="113" r="1" fill="#b6f09c"/><circle cx="329" cy="123" r="1" fill="#b6f09c"/>
      <text x="357" y="148" text-anchor="middle" fill="#e4f0e7" font-size="13">NetBox</text>
      <text x="134" y="39" text-anchor="middle" fill="#aac6b2" font-size="10" letter-spacing="2">KUBERNETES / OVH</text>
      <text x="261" y="103" text-anchor="middle" fill="#a8c6b4" font-size="8">SYNC</text>
      <text x="230" y="220" text-anchor="middle" fill="#9eb9a8" font-size="10" letter-spacing="1">PYTHON + REST API</text>`;
  } else if (category === 'delivery') {
    drawing = `<path d="M55 112h348" stroke="#6a838e" stroke-width="1.5" stroke-dasharray="4 4"/>
      ${[[28, 'GitHub', 'Actions'], [137, 'Docker', 'Build'], [246, 'ACR', 'Registry'], [355, 'AKS', 'Deploy']].map(([x, line1, line2]) => `<rect x="${x}" y="76" width="77" height="75" rx="12" fill="#1c3038" stroke="#537683"/><circle cx="${x + 38.5}" cy="93" r="3" fill="#8dd6d5"/><text x="${x + 38.5}" y="115" text-anchor="middle" fill="#d6eeee" font-size="12">${line1}</text><text x="${x + 38.5}" y="134" text-anchor="middle" fill="#9cbac4" font-size="9">${language === 'fr' && line2 === 'Deploy' ? 'Déploiement' : line2}</text>`).join('')}
      <path d="m119 107 5 5-5 5m109-10 5 5-5 5m109-10 5 5-5 5" fill="none" stroke="#8dd6d5" stroke-width="1.5"/>
      <path d="M66 169v15h328v-15" fill="none" stroke="#5a718c"/>
      <rect x="167" y="172" width="126" height="25" rx="12" fill="#1b2738" stroke="#5a718c"/>
      <text x="230" y="189" text-anchor="middle" fill="#c1c9ee" font-size="11">Terraform</text>
      <text x="230" y="40" text-anchor="middle" fill="#a9c4cf" font-size="10" letter-spacing="2">CI / CD → AZURE</text>
      <text x="230" y="229" text-anchor="middle" fill="#9cbac4" font-size="10" letter-spacing="1">${language === 'fr' ? 'INFRASTRUCTURE AUTOMATISÉE' : 'AUTOMATED INFRASTRUCTURE'}</text>`;
  } else {
    drawing = `<rect x="32" y="56" width="141" height="145" rx="10" fill="#302a37" stroke="#756080"/>
      <path d="M32 78h141" stroke="#756080"/><circle cx="44" cy="67" r="2" fill="#d0a6df"/><circle cx="52" cy="67" r="2" fill="#897395"/><circle cx="60" cy="67" r="2" fill="#897395"/>
      <rect x="46" y="92" width="113" height="38" rx="5" fill="#493750"/><circle cx="62" cy="110" r="8" fill="#9a77a7"/><path d="M78 105h59m-59 10h43" stroke="#d0a6df" stroke-width="3"/>
      <rect x="46" y="141" width="52" height="42" rx="5" fill="#4b3c54"/><rect x="106" y="141" width="53" height="42" rx="5" fill="#3d3448"/>
      <path d="M173 129h43m71 0h40m-20 0V78h20m-20 51v51h20" fill="none" stroke="#aa85b7" stroke-width="1.5"/>
      <rect x="216" y="105" width="71" height="48" rx="9" fill="#3d3448" stroke="#aa85b7"/><text x="251.5" y="133" text-anchor="middle" fill="#eadcf0" font-size="12">Node.js</text>
      ${[[56, 'PostgreSQL'], [107, 'Stripe'], [158, 'Socket.io']].map(([y, label]) => `<rect x="327" y="${y}" width="106" height="44" rx="8" fill="#302a37" stroke="#756080"/><text x="380" y="${y + 27}" text-anchor="middle" fill="#d9c8e1" font-size="11">${label}</text>`).join('')}
      <text x="103" y="225" text-anchor="middle" fill="#b9a7c3" font-size="10" letter-spacing="1">REACT</text>
      <text x="230" y="35" text-anchor="middle" fill="#b9a7c3" font-size="10" letter-spacing="2">${language === 'fr' ? 'E-COMMERCE SOCIAL' : 'SOCIAL COMMERCE'}</text>`;
  }
  // Only fixed, author-controlled SVG fragments are inserted as markup.
  visual.innerHTML = `<svg class="project-diagram" viewBox="0 0 460 260" width="460" height="260" role="img" xmlns="http://www.w3.org/2000/svg">${drawing}</svg>`;
  visual.querySelector('svg').setAttribute('aria-label', description);
  visual.append(element('span', 'diagram-caption', translations[language]['project.diagram']));
  return visual;
}

function renderProjects(language) {
  const grid = document.getElementById('project-grid');
  if (!grid) return;
  const fragment = document.createDocumentFragment();
  const openProjects = new Set([...grid.querySelectorAll('details[open]')].map(detail => detail.closest('[data-category]').dataset.category));
  for (const [index, project] of projects.entries()) {
    const text = project[language];
    const card = element('article', 'project-card');
    card.dataset.category = project.category;
    card.hidden = activeFilter !== 'all' && activeFilter !== project.category;
    card.append(projectVisual(project.category, language, text.diagram));
    const body = element('div', 'project-body');
    body.append(element('p', 'project-number', `0${index + 1} / ${text.context}`));
    body.append(element('h3', '', text.title), element('p', 'project-description', text.description), tagList(project.tags, language));
    const details = element('details', 'project-details');
    details.open = openProjects.has(project.category);
    details.append(element('summary', '', translations[language]['project.explore']));
    const list = element('ul', 'project-facts');
    for (const bullet of text.bullets) list.append(element('li', '', bullet));
    details.append(list);
    body.append(details);
    card.append(body);
    fragment.append(card);
  }
  grid.replaceChildren(fragment);
}

function renderExperience(language) {
  const target = document.getElementById('experience-list');
  if (!target) return;
  const fragment = document.createDocumentFragment();
  for (const job of experience) {
    const text = job[language];
    const row = element('article', 'experience-row');
    row.append(element('p', 'experience-date', text.date));
    const main = element('div', 'experience-main');
    main.append(element('h3', '', text.title), element('p', 'experience-company', `${translated(job.company, language)} · ${text.context}`), element('p', 'experience-description', text.description), tagList(job.tags, language));
    row.append(main);
    fragment.append(row);
  }
  target.replaceChildren(fragment);
}

function renderSkills(language) {
  const target = document.getElementById('skills-grid');
  if (!target) return;
  const fragment = document.createDocumentFragment();
  for (const skill of skills) {
    const card = element('article', 'skill-card');
    card.append(skillIcon(skill.icon), element('h3', '', skill[language]), tagList(skill.tags, language));
    fragment.append(card);
  }
  target.replaceChildren(fragment);
}

function renderCredentials(language) {
  const target = document.getElementById('credentials');
  const french = language === 'fr';
  if (target) {
    const certification = element('article', 'credential-card');
    certification.append(
      element('p', 'credential-label', french ? 'CERTIFICATION' : 'CERTIFICATION'),
      element('h3', '', 'Certified Kubernetes Administrator'),
      element('p', 'credential-issuer', 'CNCF / Linux Foundation'),
      element('p', 'credential-date', french ? 'Obtenue le 17 décembre 2025' : 'Issued December 17, 2025'),
    );
    const education = element('article', 'credential-card');
    education.append(
      element('p', 'credential-label', french ? 'FORMATION' : 'EDUCATION'),
      element('h3', '', french ? 'Diplôme d’ingénieur en informatique' : 'Engineering Degree in Computer Science'),
      element('p', 'credential-issuer', 'ESPRIT, Tunis'),
      element('p', 'credential-date', french ? 'Délivré le 17 février 2025' : 'Issued February 17, 2025'),
    );
    target.replaceChildren(certification, education);
  }
  const languages = document.getElementById('language-list');
  if (languages) {
    const labels = french ? ['Arabe · Langue maternelle', 'Français · Courant', 'Anglais · Courant'] : ['Arabic · Native', 'French · Fluent', 'English · Fluent'];
    languages.replaceChildren(...labels.map(label => element('span', 'language-item', label)));
  }
}

function updateFilter() {
  document.querySelectorAll('.project-filter[data-filter]').forEach(button => {
    const selected = button.dataset.filter === activeFilter;
    button.setAttribute('aria-pressed', String(selected));
    button.classList.toggle('is-active', selected);
  });
  document.querySelectorAll('#project-grid .project-card').forEach(card => {
    card.hidden = activeFilter !== 'all' && card.dataset.category !== activeFilter;
  });
}

function preferredLanguage() {
  const fromUrl = new URL(window.location.href).searchParams.get('lang');
  if (fromUrl === 'en' || fromUrl === 'fr') return fromUrl;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'en' || saved === 'fr') return saved;
  } catch { /* Language selection still works when browser storage is unavailable. */ }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function applyLanguage(language, { announce = false, updateUrl = true } = {}) {
  if (!translations[language]) return;
  currentLanguage = language;
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.title = dictionary['meta.title'];
  document.querySelectorAll('[data-i18n]').forEach(node => {
    if (Object.hasOwn(dictionary, node.dataset.i18n)) node.textContent = dictionary[node.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => {
    if (Object.hasOwn(dictionary, node.dataset.i18nAria)) node.setAttribute('aria-label', dictionary[node.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(node => {
    if (Object.hasOwn(dictionary, node.dataset.i18nTitle)) node.title = dictionary[node.dataset.i18nTitle];
  });
  document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach(meta => { meta.content = dictionary['meta.description']; });
  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(meta => { meta.content = dictionary['meta.title']; });
  document.querySelectorAll('meta[property="og:locale"]').forEach(meta => { meta.content = language === 'fr' ? 'fr_FR' : 'en_US'; });
  document.querySelectorAll('[data-lang]').forEach(button => {
    const selected = button.dataset.lang === language;
    button.setAttribute('aria-pressed', String(selected));
    button.classList.toggle('is-active', selected);
  });
  const cv = language === 'fr' ? 'Ahmed_Fakhfakh_Ingenieur_DevOps.pdf' : 'Ahmed_Fakhfakh_DevOps_Engineer.pdf';
  document.querySelectorAll('#download-cv, #footer-cv').forEach(link => {
    link.href = `cv/${cv}`;
    link.setAttribute('download', cv);
    link.setAttribute('hreflang', language);
  });
  renderProjects(language);
  renderExperience(language);
  renderSkills(language);
  renderCredentials(language);
  updateFilter();
  try { localStorage.setItem(storageKey, language); } catch { /* Optional preference persistence. */ }
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    try { history.replaceState(history.state, '', url); } catch { /* Also supports local file previews. */ }
  }
  if (announce) {
    const status = document.getElementById('language-status');
    if (status) status.textContent = dictionary['language.changed'];
  }
}

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.lang !== currentLanguage) applyLanguage(button.dataset.lang, { announce: true });
  });
});

document.querySelectorAll('.project-filter[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    if (!['all', 'infra', 'delivery', 'dev'].includes(button.dataset.filter)) return;
    activeFilter = button.dataset.filter;
    updateFilter();
  });
});

const menuButton = document.getElementById('menu-toggle');
const mainNavigation = document.getElementById('main-nav');
function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  mainNavigation?.classList.remove('is-open');
}
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mainNavigation?.classList.toggle('is-open', !expanded);
});
mainNavigation?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (menuButton?.getAttribute('aria-expanded') === 'true' && !mainNavigation?.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.addEventListener('popstate', () => applyLanguage(preferredLanguage(), { announce: true, updateUrl: false }));
window.matchMedia('(min-width: 641px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

applyLanguage(preferredLanguage());
