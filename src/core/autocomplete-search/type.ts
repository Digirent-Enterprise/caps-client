export interface ISearchTerm {
  term: string;
  description: string;
  causes: string;
  symptom: string;
  treatment: string;
  diagnostic: string;
}

export interface IAutocompleteSearchProps {
  onSuggestionClick: (suggestion: ISearchTerm) => void;
}
