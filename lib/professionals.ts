import type { ProfessionalType } from "./types"

// Função para gerar profissionais para um tipo de serviço específico
export function generateProfessionals(serviceType: string, serviceSubtype: string, count = 10): ProfessionalType[] {
  const professionals: ProfessionalType[] = []

  const firstNames = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Juliana",
    "Lucas",
    "Fernanda",
    "Rafael",
    "Camila",
    "Marcos",
    "Patrícia",
    "Bruno",
    "Amanda",
    "Ricardo",
  ]
  const lastNames = [
    "Silva",
    "Santos",
    "Oliveira",
    "Souza",
    "Pereira",
    "Costa",
    "Rodrigues",
    "Almeida",
    "Nascimento",
    "Lima",
    "Araújo",
    "Ferreira",
    "Ribeiro",
    "Gomes",
    "Carvalho",
  ]

  const descriptions = [
    "Profissional com mais de 10 anos de experiência na área.",
    "Especialista com formação técnica e certificações.",
    "Atendimento rápido e eficiente com garantia de serviço.",
    "Trabalho com qualidade e preço justo.",
    "Profissional autônomo com excelentes referências.",
    "Equipe qualificada para atender qualquer demanda.",
    "Serviço com garantia e material de primeira linha.",
    "Atendimento 24 horas para emergências.",
    "Orçamento sem compromisso e preços competitivos.",
    "Profissional com certificação e treinamento especializado.",
  ]

  const availabilities = [
    ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    ["Segunda", "Quarta", "Sexta"],
    ["Terça", "Quinta", "Sábado"],
    ["Segunda a Sábado"],
    ["Segunda a Sexta"],
    ["Todos os dias"],
    ["Segunda", "Terça", "Quarta"],
    ["Quinta", "Sexta", "Sábado", "Domingo"],
    ["Segunda a Sexta", "Domingo"],
    ["Horário comercial"],
  ]

  const locations = ["Zona Sul", "Zona Norte", "Zona Leste", "Zona Oeste", "Centro", "Região Metropolitana"]

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

    professionals.push({
      id: `prof-${serviceType.toLowerCase()}-${i}`,
      name: `${firstName} ${lastName}`,
      avatar: `/placeholder.svg?height=100&width=100&text=${firstName[0]}${lastName[0]}`,
      rating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10, // Rating entre 3.5 e 5.0
      reviewCount: Math.floor(5 + Math.random() * 95), // Entre 5 e 100 avaliações
      price: Math.floor(50 + Math.random() * 150), // Preço entre 50 e 200
      serviceType: serviceType,
      serviceSubtype: serviceSubtype,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      availability: availabilities[Math.floor(Math.random() * availabilities.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      distance: Math.round((0.5 + Math.random() * 9.5) * 10) / 10, // Distância entre 0.5 e 10 km
    })
  }

  return professionals
}

// Função para obter profissionais filtrados
export function getProfessionals(serviceType: string, serviceSubtype: string): ProfessionalType[] {
  return generateProfessionals(serviceType, serviceSubtype)
}
