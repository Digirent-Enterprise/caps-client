export interface ISearchTerm {
  term: string;
  description: string;
}

export interface IAutocompleteSearchProps {
  onSuggestionClick: (description: string) => void;
}
