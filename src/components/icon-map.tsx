import {
  Sparkles,
  Flower2,
  Palette,
  Gem,
  HandHeart,
  Brush,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Flower2,
  Palette,
  Gem,
  HandHeart,
  Brush,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} />;
}
