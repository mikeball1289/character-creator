export interface Option {
  value: string;
  displayName?: string;
}

export interface Step {
  label: string;
  options: Option[];
}

export interface Character {
  image: string;
  description: string;
}
