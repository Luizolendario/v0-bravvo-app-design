export type Language = "pt" | "en" | "es"

export interface Translations {
  // Header
  appName: string
  settings: string

  // Navigation
  back: string
  next: string
  save: string
  cancel: string
  confirm: string
  edit: string
  delete: string

  // Home page
  availableServices: string
  popularServices: string
  howItWorks: string
  forClients: string
  forProfessionals: string
  searchServices: string
  noServicesFound: string
  startingFrom: string
  seeDetails: string
  firstTimePromo: string
  firstTimePromoDesc: string
  takeAdvantage: string
  youSelected: string

  // Services
  electrician: string
  plumber: string
  cleaner: string
  moving: string
  hairdresser: string
  builder: string
  itSupport: string
  petSitter: string
  gardening: string
  security: string
  photographer: string
  painter: string

  // Service descriptions
  electricianDesc: string
  plumberDesc: string
  cleanerDesc: string
  movingDesc: string
  hairdresserDesc: string
  builderDesc: string
  itSupportDesc: string
  petSitterDesc: string
  gardeningDesc: string
  securityDesc: string
  photographerDesc: string
  painterDesc: string

  // Address
  changeAddress: string
  enterAddress: string

  // How it works
  chooseService: string
  chooseServiceDesc: string
  selectProfessional: string
  selectProfessionalDesc: string
  scheduleAndPay: string
  scheduleAndPayDesc: string

  // For clients
  verifiedProfessionals: string
  verifiedProfessionalsDesc: string
  satisfactionGuarantee: string
  satisfactionGuaranteeDesc: string
  securePayment: string
  securePaymentDesc: string

  // For professionals
  registerFree: string
  registerFreeDesc: string
  manageSchedule: string
  manageScheduleDesc: string
  receivePayments: string
  receivePaymentsDesc: string

  // Settings
  account: string
  application: string
  profile: string
  payments: string
  conversations: string
  favorites: string
  history: string
  addresses: string
  security: string
  support: string
  logout: string
  darkTheme: string
  darkThemeDesc: string
  notifications: string
  notificationsDesc: string
  language: string
  advancedSettings: string
  advancedSettingsDesc: string
  aboutBravvo: string
  version: string
  termsOfUse: string
  privacyPolicy: string
  openSourceLicenses: string

  // Authentication
  welcomeToBravvo: string
  chooseRegistration: string
  registerAsClient: string
  registerAsProfessional: string
  alreadyHaveAccount: string
  login: string
  dontHaveAccount: string
  register: string
  clientRegistration: string
  professionalRegistration: string
  fullName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  serviceType: string
  serviceDescription: string
  serviceDescriptionPlaceholder: string
  document: string
  supportingDocuments: string
  dragDropFiles: string
  acceptedFormats: string
  selectFiles: string
  forgotPassword: string
  entering: string
  registering: string

  // Validation messages
  nameRequired: string
  emailRequired: string
  emailInvalid: string
  phoneRequired: string
  passwordRequired: string
  passwordMinLength: string
  passwordsDontMatch: string
  serviceTypeRequired: string
  descriptionRequired: string
  documentRequired: string

  // Success messages
  registrationSuccess: string
  registrationSuccessDesc: string
  loginSuccess: string
  loginSuccessDesc: string
  logoutSuccess: string
  logoutSuccessDesc: string

  // Professionals page
  professionalsFound: string
  searchingProfessionals: string
  filter: string
  sortBy: string
  bestRating: string
  lowestPrice: string
  highestPrice: string
  closest: string
  availability: string
  today: string
  tomorrow: string
  thisWeek: string
  hire: string
  seeMore: string
  seeLess: string
  about: string
  viewProfile: string
  message: string
  averagePrice: string

  // Languages
  portuguese: string
  english: string
  spanish: string

  // Toast messages
  themeChanged: string
  darkThemeActivated: string
  lightThemeActivated: string
  notificationsActivated: string
  notificationsDeactivated: string
  languageChanged: string
}

export const translations: Record<Language, Translations> = {
  pt: {
    // Header
    appName: "Bravvo",
    settings: "Configurações",

    // Navigation
    back: "Voltar",
    next: "Próximo",
    save: "Salvar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    edit: "Editar",
    delete: "Excluir",

    // Home page
    availableServices: "Serviços Disponíveis",
    popularServices: "Serviços Populares",
    howItWorks: "Como Funciona",
    forClients: "Para Clientes",
    forProfessionals: "Para Profissionais",
    searchServices: "Buscar serviços...",
    noServicesFound: "Nenhum serviço encontrado",
    startingFrom: "A partir de R$",
    seeDetails: "Ver detalhes",
    firstTimePromo: "Primeira vez no Bravvo?",
    firstTimePromoDesc: "Ganhe 20% OFF no seu primeiro serviço!",
    takeAdvantage: "Aproveitar",
    youSelected: "Você selecionou o serviço",

    // Services
    electrician: "Eletricista",
    plumber: "Encanador",
    cleaner: "Diarista",
    moving: "Fretes",
    hairdresser: "Cabeleireiro",
    builder: "Pedreiro",
    itSupport: "Informática",
    petSitter: "Pet Sitter",
    gardening: "Jardinagem",
    security: "Segurança",
    photographer: "Fotógrafo",
    painter: "Pintor",

    // Service descriptions
    electricianDesc: "Serviços de instalação e reparo elétrico",
    plumberDesc: "Serviços de encanamento e hidráulica",
    cleanerDesc: "Limpeza residencial e comercial",
    movingDesc: "Transporte de móveis e objetos",
    hairdresserDesc: "Cortes e tratamentos capilares",
    builderDesc: "Construção e reformas",
    itSupportDesc: "Suporte técnico e manutenção",
    petSitterDesc: "Cuidados com animais de estimação",
    gardeningDesc: "Manutenção de jardins e áreas verdes",
    securityDesc: "Instalação de sistemas de segurança",
    photographerDesc: "Serviços fotográficos profissionais",
    painterDesc: "Pintura residencial e comercial",

    // Address
    changeAddress: "Alterar endereço",
    enterAddress: "Digite seu endereço",

    // How it works
    chooseService: "Escolha o serviço",
    chooseServiceDesc: "Navegue pelos diversos serviços disponíveis e escolha o que você precisa.",
    selectProfessional: "Selecione um profissional",
    selectProfessionalDesc: "Compare avaliações, preços e disponibilidade dos profissionais qualificados.",
    scheduleAndPay: "Agende e pague",
    scheduleAndPayDesc: "Escolha a data e horário, e realize o pagamento de forma segura pelo aplicativo.",

    // For clients
    verifiedProfessionals: "Profissionais verificados",
    verifiedProfessionalsDesc: "Todos os profissionais passam por verificação de antecedentes e qualificações.",
    satisfactionGuarantee: "Garantia de satisfação",
    satisfactionGuaranteeDesc: "Se o serviço não atender às suas expectativas, oferecemos suporte para resolução.",
    securePayment: "Pagamento seguro",
    securePaymentDesc: "Realize pagamentos com segurança e só libere após a conclusão do serviço.",

    // For professionals
    registerFree: "Cadastre-se gratuitamente",
    registerFreeDesc: "Crie seu perfil profissional e comece a receber solicitações de serviços.",
    manageSchedule: "Gerencie sua agenda",
    manageScheduleDesc: "Defina sua disponibilidade e organize seus compromissos em um só lugar.",
    receivePayments: "Receba pagamentos",
    receivePaymentsDesc: "Receba seus pagamentos de forma rápida e segura diretamente na sua conta.",

    // Settings
    account: "Conta",
    application: "Aplicativo",
    profile: "Perfil",
    payments: "Pagamentos",
    conversations: "Conversas",
    favorites: "Favoritos",
    history: "Histórico",
    addresses: "Endereços",
    security: "Segurança",
    support: "Suporte",
    logout: "Sair da conta",
    darkTheme: "Tema Escuro",
    darkThemeDesc: "Mudar para tema escuro",
    notifications: "Notificações",
    notificationsDesc: "Ativar notificações push",
    language: "Idioma",
    advancedSettings: "Configurações Avançadas",
    advancedSettingsDesc: "Cache, armazenamento, permissões",
    aboutBravvo: "Sobre o Bravvo",
    version: "Versão",
    termsOfUse: "Termos de Uso",
    privacyPolicy: "Política de Privacidade",
    openSourceLicenses: "Licenças de Código Aberto",

    // Authentication
    welcomeToBravvo: "Bem-vindo ao Bravvo",
    chooseRegistration: "Escolha como deseja se cadastrar:",
    registerAsClient: "Cadastrar como Cliente",
    registerAsProfessional: "Cadastrar como Profissional",
    alreadyHaveAccount: "Já tem uma conta?",
    login: "Faça login",
    dontHaveAccount: "Não tem uma conta?",
    register: "Cadastre-se",
    clientRegistration: "Cadastro de Cliente",
    professionalRegistration: "Cadastro de Profissional",
    fullName: "Nome completo",
    email: "Email",
    phone: "Telefone",
    password: "Senha",
    confirmPassword: "Confirmar senha",
    serviceType: "Tipo de serviço",
    serviceDescription: "Descrição dos serviços",
    serviceDescriptionPlaceholder: "Descreva os serviços que você oferece",
    document: "CPF ou CNPJ",
    supportingDocuments: "Documentos comprobatórios",
    dragDropFiles: "Arraste e solte arquivos aqui ou clique para selecionar",
    acceptedFormats: "Formatos aceitos: PDF, JPG, PNG (máx. 5MB)",
    selectFiles: "Selecionar arquivos",
    forgotPassword: "Esqueceu a senha?",
    entering: "Entrando...",
    registering: "Cadastrando...",

    // Validation messages
    nameRequired: "Nome é obrigatório",
    emailRequired: "Email é obrigatório",
    emailInvalid: "Email inválido",
    phoneRequired: "Telefone é obrigatório",
    passwordRequired: "Senha é obrigatória",
    passwordMinLength: "A senha deve ter pelo menos 6 caracteres",
    passwordsDontMatch: "As senhas não coincidem",
    serviceTypeRequired: "Tipo de serviço é obrigatório",
    descriptionRequired: "Descrição é obrigatória",
    documentRequired: "Documento é obrigatório",

    // Success messages
    registrationSuccess: "Cadastro realizado com sucesso!",
    registrationSuccessDesc: "Bem-vindo ao Bravvo. Você já pode utilizar nossos serviços.",
    loginSuccess: "Login realizado com sucesso!",
    loginSuccessDesc: "Bem-vindo de volta ao Bravvo.",
    logoutSuccess: "Logout realizado",
    logoutSuccessDesc: "Você saiu da sua conta com sucesso.",

    // Professionals page
    professionalsFound: "profissionais encontrados",
    searchingProfessionals: "Buscando profissionais...",
    filter: "Filtrar",
    sortBy: "Ordenar por",
    bestRating: "Melhor avaliação",
    lowestPrice: "Menor preço",
    highestPrice: "Maior preço",
    closest: "Mais próximo",
    availability: "Disponibilidade",
    today: "Hoje",
    tomorrow: "Amanhã",
    thisWeek: "Esta semana",
    hire: "Contratar",
    seeMore: "Ver mais",
    seeLess: "Ver menos",
    about: "Sobre",
    viewProfile: "Ver perfil",
    message: "Mensagem",
    averagePrice: "Preço médio",

    // Languages
    portuguese: "Português (Brasil)",
    english: "English",
    spanish: "Español",

    // Toast messages
    themeChanged: "Tema alterado",
    darkThemeActivated: "O tema do aplicativo foi alterado para escuro.",
    lightThemeActivated: "O tema do aplicativo foi alterado para claro.",
    notificationsActivated: "Você receberá notificações sobre seus serviços.",
    notificationsDeactivated: "Você não receberá notificações sobre seus serviços.",
    languageChanged: "Idioma alterado com sucesso",
  },

  en: {
    // Header
    appName: "Bravvo",
    settings: "Settings",

    // Navigation
    back: "Back",
    next: "Next",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    edit: "Edit",
    delete: "Delete",

    // Home page
    availableServices: "Available Services",
    popularServices: "Popular Services",
    howItWorks: "How It Works",
    forClients: "For Clients",
    forProfessionals: "For Professionals",
    searchServices: "Search services...",
    noServicesFound: "No services found",
    startingFrom: "Starting from $",
    seeDetails: "See details",
    firstTimePromo: "First time on Bravvo?",
    firstTimePromoDesc: "Get 20% OFF on your first service!",
    takeAdvantage: "Take advantage",
    youSelected: "You selected the service",

    // Services
    electrician: "Electrician",
    plumber: "Plumber",
    cleaner: "Cleaner",
    moving: "Moving",
    hairdresser: "Hairdresser",
    builder: "Builder",
    itSupport: "IT Support",
    petSitter: "Pet Sitter",
    gardening: "Gardening",
    security: "Security",
    photographer: "Photographer",
    painter: "Painter",

    // Service descriptions
    electricianDesc: "Electrical installation and repair services",
    plumberDesc: "Plumbing and hydraulic services",
    cleanerDesc: "Residential and commercial cleaning",
    movingDesc: "Furniture and object transportation",
    hairdresserDesc: "Haircuts and hair treatments",
    builderDesc: "Construction and renovations",
    itSupportDesc: "Technical support and maintenance",
    petSitterDesc: "Pet care services",
    gardeningDesc: "Garden and green area maintenance",
    securityDesc: "Security system installation",
    photographerDesc: "Professional photography services",
    painterDesc: "Residential and commercial painting",

    // Address
    changeAddress: "Change address",
    enterAddress: "Enter your address",

    // How it works
    chooseService: "Choose the service",
    chooseServiceDesc: "Browse through various available services and choose what you need.",
    selectProfessional: "Select a professional",
    selectProfessionalDesc: "Compare ratings, prices and availability of qualified professionals.",
    scheduleAndPay: "Schedule and pay",
    scheduleAndPayDesc: "Choose the date and time, and make payment securely through the app.",

    // For clients
    verifiedProfessionals: "Verified professionals",
    verifiedProfessionalsDesc: "All professionals undergo background and qualification verification.",
    satisfactionGuarantee: "Satisfaction guarantee",
    satisfactionGuaranteeDesc: "If the service doesn't meet your expectations, we offer support for resolution.",
    securePayment: "Secure payment",
    securePaymentDesc: "Make payments securely and only release after service completion.",

    // For professionals
    registerFree: "Register for free",
    registerFreeDesc: "Create your professional profile and start receiving service requests.",
    manageSchedule: "Manage your schedule",
    manageScheduleDesc: "Set your availability and organize your appointments in one place.",
    receivePayments: "Receive payments",
    receivePaymentsDesc: "Receive your payments quickly and securely directly to your account.",

    // Settings
    account: "Account",
    application: "Application",
    profile: "Profile",
    payments: "Payments",
    conversations: "Conversations",
    favorites: "Favorites",
    history: "History",
    addresses: "Addresses",
    security: "Security",
    support: "Support",
    logout: "Sign out",
    darkTheme: "Dark Theme",
    darkThemeDesc: "Switch to dark theme",
    notifications: "Notifications",
    notificationsDesc: "Enable push notifications",
    language: "Language",
    advancedSettings: "Advanced Settings",
    advancedSettingsDesc: "Cache, storage, permissions",
    aboutBravvo: "About Bravvo",
    version: "Version",
    termsOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    openSourceLicenses: "Open Source Licenses",

    // Authentication
    welcomeToBravvo: "Welcome to Bravvo",
    chooseRegistration: "Choose how you want to register:",
    registerAsClient: "Register as Client",
    registerAsProfessional: "Register as Professional",
    alreadyHaveAccount: "Already have an account?",
    login: "Sign in",
    dontHaveAccount: "Don't have an account?",
    register: "Sign up",
    clientRegistration: "Client Registration",
    professionalRegistration: "Professional Registration",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    confirmPassword: "Confirm password",
    serviceType: "Service type",
    serviceDescription: "Service description",
    serviceDescriptionPlaceholder: "Describe the services you offer",
    document: "SSN or Tax ID",
    supportingDocuments: "Supporting documents",
    dragDropFiles: "Drag and drop files here or click to select",
    acceptedFormats: "Accepted formats: PDF, JPG, PNG (max. 5MB)",
    selectFiles: "Select files",
    forgotPassword: "Forgot password?",
    entering: "Signing in...",
    registering: "Registering...",

    // Validation messages
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Invalid email",
    phoneRequired: "Phone is required",
    passwordRequired: "Password is required",
    passwordMinLength: "Password must be at least 6 characters",
    passwordsDontMatch: "Passwords don't match",
    serviceTypeRequired: "Service type is required",
    descriptionRequired: "Description is required",
    documentRequired: "Document is required",

    // Success messages
    registrationSuccess: "Registration successful!",
    registrationSuccessDesc: "Welcome to Bravvo. You can now use our services.",
    loginSuccess: "Login successful!",
    loginSuccessDesc: "Welcome back to Bravvo.",
    logoutSuccess: "Logout successful",
    logoutSuccessDesc: "You have successfully signed out.",

    // Professionals page
    professionalsFound: "professionals found",
    searchingProfessionals: "Searching professionals...",
    filter: "Filter",
    sortBy: "Sort by",
    bestRating: "Best rating",
    lowestPrice: "Lowest price",
    highestPrice: "Highest price",
    closest: "Closest",
    availability: "Availability",
    today: "Today",
    tomorrow: "Tomorrow",
    thisWeek: "This week",
    hire: "Hire",
    seeMore: "See more",
    seeLess: "See less",
    about: "About",
    viewProfile: "View profile",
    message: "Message",
    averagePrice: "Average price",

    // Languages
    portuguese: "Português (Brasil)",
    english: "English",
    spanish: "Español",

    // Toast messages
    themeChanged: "Theme changed",
    darkThemeActivated: "The app theme has been changed to dark.",
    lightThemeActivated: "The app theme has been changed to light.",
    notificationsActivated: "You will receive notifications about your services.",
    notificationsDeactivated: "You will not receive notifications about your services.",
    languageChanged: "Language changed successfully",
  },

  es: {
    // Header
    appName: "Bravvo",
    settings: "Configuración",

    // Navigation
    back: "Volver",
    next: "Siguiente",
    save: "Guardar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    edit: "Editar",
    delete: "Eliminar",

    // Home page
    availableServices: "Servicios Disponibles",
    popularServices: "Servicios Populares",
    howItWorks: "Cómo Funciona",
    forClients: "Para Clientes",
    forProfessionals: "Para Profesionales",
    searchServices: "Buscar servicios...",
    noServicesFound: "No se encontraron servicios",
    startingFrom: "Desde $",
    seeDetails: "Ver detalles",
    firstTimePromo: "¿Primera vez en Bravvo?",
    firstTimePromoDesc: "¡Obtén 20% de descuento en tu primer servicio!",
    takeAdvantage: "Aprovechar",
    youSelected: "Seleccionaste el servicio",

    // Services
    electrician: "Electricista",
    plumber: "Fontanero",
    cleaner: "Limpieza",
    moving: "Mudanzas",
    hairdresser: "Peluquero",
    builder: "Albañil",
    itSupport: "Soporte IT",
    petSitter: "Cuidador de Mascotas",
    gardening: "Jardinería",
    security: "Seguridad",
    photographer: "Fotógrafo",
    painter: "Pintor",

    // Service descriptions
    electricianDesc: "Servicios de instalación y reparación eléctrica",
    plumberDesc: "Servicios de fontanería e hidráulica",
    cleanerDesc: "Limpieza residencial y comercial",
    movingDesc: "Transporte de muebles y objetos",
    hairdresserDesc: "Cortes y tratamientos capilares",
    builderDesc: "Construcción y reformas",
    itSupportDesc: "Soporte técnico y mantenimiento",
    petSitterDesc: "Cuidado de mascotas",
    gardeningDesc: "Mantenimiento de jardines y áreas verdes",
    securityDesc: "Instalación de sistemas de seguridad",
    photographerDesc: "Servicios fotográficos profesionales",
    painterDesc: "Pintura residencial y comercial",

    // Address
    changeAddress: "Cambiar dirección",
    enterAddress: "Ingresa tu dirección",

    // How it works
    chooseService: "Elige el servicio",
    chooseServiceDesc: "Navega por los diversos servicios disponibles y elige lo que necesitas.",
    selectProfessional: "Selecciona un profesional",
    selectProfessionalDesc: "Compara calificaciones, precios y disponibilidad de profesionales calificados.",
    scheduleAndPay: "Programa y paga",
    scheduleAndPayDesc: "Elige la fecha y hora, y realiza el pago de forma segura a través de la aplicación.",

    // For clients
    verifiedProfessionals: "Profesionales verificados",
    verifiedProfessionalsDesc: "Todos los profesionales pasan por verificación de antecedentes y calificaciones.",
    satisfactionGuarantee: "Garantía de satisfacción",
    satisfactionGuaranteeDesc: "Si el servicio no cumple con tus expectativas, ofrecemos soporte para resolución.",
    securePayment: "Pago seguro",
    securePaymentDesc: "Realiza pagos de forma segura y libera solo después de completar el servicio.",

    // For professionals
    registerFree: "Regístrate gratis",
    registerFreeDesc: "Crea tu perfil profesional y comienza a recibir solicitudes de servicios.",
    manageSchedule: "Gestiona tu horario",
    manageScheduleDesc: "Define tu disponibilidad y organiza tus citas en un solo lugar.",
    receivePayments: "Recibe pagos",
    receivePaymentsDesc: "Recibe tus pagos de forma rápida y segura directamente en tu cuenta.",

    // Settings
    account: "Cuenta",
    application: "Aplicación",
    profile: "Perfil",
    payments: "Pagos",
    conversations: "Conversaciones",
    favorites: "Favoritos",
    history: "Historial",
    addresses: "Direcciones",
    security: "Seguridad",
    support: "Soporte",
    logout: "Cerrar sesión",
    darkTheme: "Tema Oscuro",
    darkThemeDesc: "Cambiar a tema oscuro",
    notifications: "Notificaciones",
    notificationsDesc: "Activar notificaciones push",
    language: "Idioma",
    advancedSettings: "Configuración Avanzada",
    advancedSettingsDesc: "Caché, almacenamiento, permisos",
    aboutBravvo: "Acerca de Bravvo",
    version: "Versión",
    termsOfUse: "Términos de Uso",
    privacyPolicy: "Política de Privacidad",
    openSourceLicenses: "Licencias de Código Abierto",

    // Authentication
    welcomeToBravvo: "Bienvenido a Bravvo",
    chooseRegistration: "Elige cómo quieres registrarte:",
    registerAsClient: "Registrarse como Cliente",
    registerAsProfessional: "Registrarse como Profesional",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    login: "Iniciar sesión",
    dontHaveAccount: "¿No tienes una cuenta?",
    register: "Registrarse",
    clientRegistration: "Registro de Cliente",
    professionalRegistration: "Registro de Profesional",
    fullName: "Nombre completo",
    email: "Email",
    phone: "Teléfono",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    serviceType: "Tipo de servicio",
    serviceDescription: "Descripción de servicios",
    serviceDescriptionPlaceholder: "Describe los servicios que ofreces",
    document: "DNI o RUC",
    supportingDocuments: "Documentos de respaldo",
    dragDropFiles: "Arrastra y suelta archivos aquí o haz clic para seleccionar",
    acceptedFormats: "Formatos aceptados: PDF, JPG, PNG (máx. 5MB)",
    selectFiles: "Seleccionar archivos",
    forgotPassword: "¿Olvidaste la contraseña?",
    entering: "Iniciando sesión...",
    registering: "Registrando...",

    // Validation messages
    nameRequired: "El nombre es obligatorio",
    emailRequired: "El email es obligatorio",
    emailInvalid: "Email inválido",
    phoneRequired: "El teléfono es obligatorio",
    passwordRequired: "La contraseña es obligatoria",
    passwordMinLength: "La contraseña debe tener al menos 6 caracteres",
    passwordsDontMatch: "Las contraseñas no coinciden",
    serviceTypeRequired: "El tipo de servicio es obligatorio",
    descriptionRequired: "La descripción es obligatoria",
    documentRequired: "El documento es obligatorio",

    // Success messages
    registrationSuccess: "¡Registro exitoso!",
    registrationSuccessDesc: "Bienvenido a Bravvo. Ya puedes usar nuestros servicios.",
    loginSuccess: "¡Inicio de sesión exitoso!",
    loginSuccessDesc: "Bienvenido de vuelta a Bravvo.",
    logoutSuccess: "Sesión cerrada",
    logoutSuccessDesc: "Has cerrado sesión exitosamente.",

    // Professionals page
    professionalsFound: "profesionales encontrados",
    searchingProfessionals: "Buscando profesionales...",
    filter: "Filtrar",
    sortBy: "Ordenar por",
    bestRating: "Mejor calificación",
    lowestPrice: "Precio más bajo",
    highestPrice: "Precio más alto",
    closest: "Más cercano",
    availability: "Disponibilidad",
    today: "Hoy",
    tomorrow: "Mañana",
    thisWeek: "Esta semana",
    hire: "Contratar",
    seeMore: "Ver más",
    seeLess: "Ver menos",
    about: "Acerca de",
    viewProfile: "Ver perfil",
    message: "Mensaje",
    averagePrice: "Precio promedio",

    // Languages
    portuguese: "Português (Brasil)",
    english: "English",
    spanish: "Español",

    // Toast messages
    themeChanged: "Tema cambiado",
    darkThemeActivated: "El tema de la aplicación ha sido cambiado a oscuro.",
    lightThemeActivated: "El tema de la aplicación ha sido cambiado a claro.",
    notificationsActivated: "Recibirás notificaciones sobre tus servicios.",
    notificationsDeactivated: "No recibirás notificaciones sobre tus servicios.",
    languageChanged: "Idioma cambiado exitosamente",
  },
}

export function getTranslation(language: Language, key: keyof Translations): string {
  return translations[language][key] || translations.pt[key]
}
