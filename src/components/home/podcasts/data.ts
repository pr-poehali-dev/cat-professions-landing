
import { Coffee, Code } from "lucide-react";
import { Podcast } from "./types";

export const podcasts: Podcast[] = [
  {
    icon: Coffee,
    gradientFrom: "#D35536",
    gradientTo: "#FF9E7D",
    badge: "Новый выпуск",
    badgeColor: "#D35536",
    title: "Пончики и Лапки",
    hosts: "Маркиз и Пушок",
    duration: "32:45",
    listens: "4,802",
    imageUrl: "https://cdn.poehali.dev/files/a3762558-353d-4dcd-a3f5-bbba16474f44.png",
    episodes: [
      { title: "Идеальная пенка на капучино: наука или мистика?", duration: "21:03" },
      { title: "Почему не надо скидывать чашки со стола: дискуссия", duration: "35:17" },
      { title: "Пять лучших мест для сна в кофейне", duration: "28:44" }
    ]
  },
  {
    icon: Code,
    gradientFrom: "#6E59A5",
    gradientTo: "#9E8CDE",
    badge: "Популярное",
    badgeColor: "#6E59A5",
    title: "Байты и Когти",
    hosts: "Битик и Персик",
    duration: "45:12",
    listens: "12,345",
    imageUrl: "https://cdn.poehali.dev/files/9e621a9f-ffb2-4cf0-9358-6848bd0484a5.png",
    episodes: [
      { title: "Как уронить ноутбук и не признаться: гайд", duration: "33:18" },
      { title: "Топ-10 тёплых мест для сна в офисе", duration: "29:55" },
      { title: "Клавиатура: интерактивная игрушка или инструмент?", duration: "41:22" }
    ]
  }
];
