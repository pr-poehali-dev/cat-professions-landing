
import { LucideIcon } from "lucide-react";

/**
 * Типы для компонентов подкастов
 */

export interface Episode {
  title: string;
  duration: string;
}

export interface PodcastCardProps {
  icon: LucideIcon;
  title: string;
  hosts: string;
  duration: string;
  listens: string;
  badge?: string;
  badgeColor?: string;
  gradientFrom: string;
  gradientTo: string;
  imageUrl: string;
  episodes?: Episode[];
}
