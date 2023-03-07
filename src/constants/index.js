import { send, shield, star } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Quem Somos",
  },
  {
    id: "services",
    title: "Serviços",
  },
  {
    id: "clients",
    title: "Clientes",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

export const services = [
  {
    id: "service-1",
    icon: star,
    title: "Você em primeiro lugar! ",
    content:
      "Sempre conectando você ao melhor da saúde, com segurança e confiabilidade.",
  },
  {
    id: "service-2",
    icon: shield,
    title: "100% Seguro",
    content:
      "Nossa equipe está 100% capacitada em assistir nossos clientes com qualquer problema.",
  },
  {
    id: "service-3",
    icon: send,
    title: "Contato Direto",
    content:
      "Tenha acesso todas as informações: acompanhamento de saúde, prescrições online entre outros.",
  },
];
