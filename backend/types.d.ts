export interface Category {
  id: number;
  name: string;
  description: string;
}

export type CategoryWithoutId = Omit<Category, 'id'>;

export interface Place {
  id: number;
  name: string;
  description: string;
}

export type PlaceWithoutId = Omit<Category, 'id'>;

export interface Item {
  id: number;
  category_id: number;
  place_id: number;
  name: string;
  description: string;
  photo: string | null;
}

export type ItemWithoutId = Omit<Category, 'id', 'category_id', 'place_id'>;