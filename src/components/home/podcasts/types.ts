
import { LucideIcon } from "lucide-react";

/**
 * Интерфейс для эпизода подкаста
 */
export interface PodcastEpisode {
  title: string;
  duration: string;
}

/**
 * Интерфейс для карточки подкаста
 */
export interface PodcastCardProps {
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
