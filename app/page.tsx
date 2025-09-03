"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Globe,
  Bot,
  BarChart3,
  Package,
  FileText,
  Mail,
  Phone,
  MapPin,
  Star,
  ArrowRight,
  Code,
  Zap,
  TrendingUp,
  Settings,
  PenTool,
  Target,
  Sparkles,
  Shield,
  Rocket,
  MessageCircle,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Portfolio() {

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Criação de Websites",
      description:
        "Desenvolvimento de sites modernos, responsivos e otimizados para SEO. Desde landing pages até e-commerce completos.",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Alta", "CMS Integrado"],
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Automação com IA",
      description:
        "Programas inteligentes que automatizam processos repetitivos, economizando tempo e aumentando a produtividade.",
      features: ["Chatbots", "Análise de Dados", "Processamento de Texto", "Integração APIs"],
      gradient: "from-yellow-500/20 to-amber-500/20",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Power BI para Negócios",
      description:
        "Dashboards interativos e relatórios personalizados para transformar seus dados em insights valiosos.",
      features: ["Dashboards Interativos", "Relatórios Automatizados", "Análise Preditiva", "Integração de Dados"],
      gradient: "from-amber-400/20 to-yellow-500/20",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Plano PDCA para Negócios",
      description:
        "Análise e criação de planos estratégicos PDCA personalizados para otimizar processos e alcançar metas empresariais.",
      features: ["Análise Situacional", "Planejamento Estratégico", "Implementação Guiada", "Monitoramento Contínuo"],
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Instalação Pacote Office",
      description:
        "Instalação e configuração completa do Microsoft Office, incluindo treinamento básico para sua equipe.",
      features: ["Instalação Completa", "Configuração Personalizada", "Suporte Técnico", "Treinamento Básico"],
      gradient: "from-yellow-600/20 to-orange-500/20",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Criação de Currículos",
      description:
        "Currículos profissionais e modernos que destacam suas competências e aumentam suas chances no mercado.",
      features: ["Design Moderno", "ATS Otimizado", "Múltiplos Formatos", "Revisão Profissional"],
      gradient: "from-amber-500/20 to-yellow-600/20",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative border-b border-amber-500/20 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
        <div className="relative container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full border-2 border-amber-400 shadow" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              TechproZ
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 group"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300" />
            </a>
          </nav>
          <a
            href="https://wa.me/SEUNUMERO?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 rounded-md px-6 py-3"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Solicitar Orçamento
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="relative container mx-auto text-center max-w-5xl">
          <Badge
            variant="secondary"
            className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20 transition-all duration-300"
          >
            <Zap className="h-4 w-4 mr-2" />
            Especialista em Tecnologia da Informação
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Soluções avançadas em
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Tecnologia da Informação
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor especializado em automação inteligente, dashboards analíticos e soluções corporativas que
            <span className="text-amber-400 font-semibold"> otimizam processos</span> e
            <span className="text-amber-400 font-semibold"> maximizam resultados</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#services"
              className="inline-flex items-center text-lg px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 rounded-md"
            >
              Ver Meus Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:92995136226"
              className="inline-flex items-center text-lg px-10 py-4 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 bg-transparent rounded-md"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar Comigo
            </a>
          </div>
        </div>
      </section>

  {/* Stats Section removed as requested */}

      {/* Services Section */}
      <section id="services" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="relative container mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/20">
              <Settings className="h-4 w-4 mr-2" />
              Meus Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Soluções completas para seu
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                negócio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ofereço uma gama completa de serviços tecnológicos para impulsionar sua empresa no mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border-amber-500/20 hover:border-amber-400/40 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="p-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl text-amber-400 group-hover:from-amber-500/30 group-hover:to-yellow-500/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div className="absolute inset-0 bg-amber-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-amber-100 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-3 group-hover:shadow-lg group-hover:shadow-amber-400/50" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/5592995136226?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20${encodeURIComponent(service.title)}.%20Gostaria%20de%20saber%20mais.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-amber-500/10 to-yellow-500/10 hover:from-amber-500/20 hover:to-yellow-500/20 text-amber-400 hover:text-amber-300 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 rounded-md px-4 py-2"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/20">
                <TrendingUp className="h-4 w-4 mr-2" />
                Sobre Mim
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Especialista em
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Tecnologia da Informação
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Profissional experiente em T.I. com foco em automação empresarial, business intelligence e
                desenvolvimento de soluções corporativas. Transformo desafios tecnológicos em oportunidades de
                crescimento.
              </p>
              
              <a
                href="https://wa.me/5592995136226?text=Olá!%20Gostaria%20de%20conversar%20sobre%20soluções%20de%20T.I."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transform hover:scale-105 transition-all duration-300 rounded-md px-10 py-4"
              >
                Vamos Conversar
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative">
              <div className="relative aspect-square bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-orange-500/20 rounded-3xl p-12 flex items-center justify-center border border-amber-500/30 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center z-10">
                  <div className="relative mb-8">
                    <img src="/logogrande.png" alt="Logo" className="h-32 w-32 mx-auto object-contain rounded-full border-4 border-amber-400 shadow-lg" />
                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-4">
                    T.I. Avançada
                  </h3>
                  <p className="text-gray-300 text-lg">Soluções que impulsionam negócios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
          onClick={() =>
            window.open("https://wa.me/5592995136226?text=Olá! Gostaria de saber mais sobre seus serviços.", "_blank")
          }
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>

      {/* Footer */}
  <footer id="contact" className="relative border-t border-amber-500/20 bg-black/80 backdrop-blur-xl py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
        <div className="relative container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="relative">
                  <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain rounded-full border-2 border-amber-400 shadow" />
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  TechproZ
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Especialista em Tecnologia da Informação, oferecendo soluções avançadas para impulsionar seu negócio.
              </p>
            </div>

            {/* Services Links */}
            <div className="text-center">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-6">
                Serviços
              </h3>
              <div className="space-y-3">
                {[
                  "Criação de Websites",
                  "Automação com IA",
                  "Power BI",
                  "Plano PDCA",
                  "Instalação Office",
                  "Criação de Currículos",
                ].map((service, index) => (
                  <a
                    key={index}
                    href="#services"
                    className="block text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-6">
                Conecte-se
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span className="text-gray-400">techprozai@gmail.com
</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span className="text-gray-400">(92) 99513-6226</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center md:justify-end space-x-4">
                <a
                  href="https://wa.me/5592995136226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="h-6 w-6 text-green-400 group-hover:text-green-300" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="https://www.instagram.com/dh_socialmidia/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-6 w-6 text-pink-400 group-hover:text-pink-300" />
                  <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="www.linkedin.com/in/davi-hernanes-costa-da-silva-54b161260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="mailto:techprozai@gmail.com"
                  className="group relative p-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6 text-amber-400 group-hover:text-amber-300" />
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-amber-500/20 text-center">
            <p className="text-gray-400 text-lg">© 2025 TechproZ. Excelência em Tecnologia da Informação.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
