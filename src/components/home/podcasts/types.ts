
import { LucideIcon } from "lucide-react";

export interface PodcastEpisode {
  title: string;
  duration: string;
}

export interface Podcast {
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  badge: string;
  badgeColor: string;
  title: string;
  hosts: string;
  duration: string;
  listens: string;
  imageUrl?: string;
  episodes: PodcastEpisode[];
}

export interface PodcastCardProps extends Podcast {
  // Дополнительные пропсы для карточки, если потребуются
}
