export interface NewsCardProps {
  title?: string;
  content?: string;
  author?: string;
  onPress?: () => void;
  addFavorite?: () => void;
  removeFavorite?: () => void;
  prueba?: boolean;
}
