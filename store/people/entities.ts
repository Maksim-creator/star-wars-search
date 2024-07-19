export interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface GetCharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export interface GetCharactersPayload {
  isRefreshing?: boolean;
  isLoadingMore?: boolean;
  page?: number;
  search?: string;
}
