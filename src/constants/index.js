import {
  people01,
  people02,
  people03,
  send,
  shield,
  star,
  facebook,
  instagram,
  linkedin,
  twitter,
  Facebook2,
  Google,
  linkedin2,
} from "../assets";

import { FaUserNurse,FaHandHoldingMedical  } from 'react-icons/fa';
import { BiLocationPlus,  } from 'react-icons/bi';


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

export const serviceLink = [
  {
    id: "service-1",
    title: "Profissionais qualificados",
    link: "/qualifiedcare",
    icon: FaUserNurse,

    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: "service-2",
    title: "Clínicas ao seu alcance",
    link: "/nearbycare",
    icon: BiLocationPlus,

    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: "service-3",
    title: "Formas de atendimento",
    link: "/treatment",
    icon: FaHandHoldingMedical,

    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Nome Cliente",
    title: "Ocupação",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Nome Cliente",
    title: "Ocupação",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Nome Cliente",
    title: "Ocupação",
    img: people03,
  },
];

export const footerLinks = [
  {
    title: "Better Health",
    links: [
      {
        name: "Quem Somos",
        link: "https://github.com/vinivent",
      },
      {
        name: "Como Funciona",
        link: "https://github.com/vinivent",
      },
      {
        name: "Termos e Serviços",
        link: "https://github.com/vinivent",
      },
      {
        name: "Trabalhe Conosco",
        link: "https://github.com/vinivent",
      },
      {
        name: "Contato",
        link: "http://localhost:5173/contact",
      },
    ],
  },
  {
    title: "Comunidade",
    links: [
      {
        name: "Central de Ajuda",
        link: "https://github.com/vinivent",
      },
      {
        name: "Doações",
        link: "https://github.com/vinivent",
      },
      {
        name: "Sugestões",
        link: "https://github.com/vinivent",
      },
      {
        name: "Blog",
        link: "https://github.com/vinivent",
      },
      {
        name: "Novidades",
        link: "https://github.com/vinivent",
      },
    ],
  },
  {
    title: "Parceria",
    links: [
      {
        name: "Nossos parceiros",
        link: "https://github.com/vinivent",
      },
      {
        name: "Seja um parceiro",
        link: "https://github.com/vinivent",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/vini.venturaa/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://github.com/vinivent",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://github.com/vinivent",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/viniventura/",
  },
];

export const socialMedias2 = [
  {
    id: "social-media-1",
    icon: Facebook2,
    link: "https://github.com/vinivent",
  },
  {
    id: "social-media-2",
    icon: Google,
    link: "https://github.com/vinivent",
  },
  {
    id: "social-media-3",
    icon: linkedin2,
    link: "https://www.linkedin.com/in/viniventura/",
  },
];
