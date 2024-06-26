import React, {
  FC,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";

import Fuse from "fuse.js";

import {
  IAutocompleteSearchProps,
  ISearchTerm,
} from "@/core/autocomplete-search/type";
import diseaseData from "@/fixtures/diseaseData.json";

const Component: FC<IAutocompleteSearchProps> = ({ onSuggestionClick }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ISearchTerm[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
    useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const fuseOptions: Fuse.IFuseOptions<ISearchTerm> = {
    keys: ["term"],
    threshold: 0.3,
  };

  const fuse = new Fuse(
    Object.keys(diseaseData).map((term) => ({
      term,
      description: term,
      causes: diseaseData[term]["disease-causes"],
      symptom: diseaseData[term]["disease-symptoms_free"],
      treatment: diseaseData[term]["disease-treatment"],
      diagnostic: diseaseData[term]["disease-diagnostic"],
    })),
    fuseOptions,
  );

  const _handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const searchResults = fuse.search(newSearchTerm);

    const formattedSuggestions = searchResults.map((result) => result.item);

    setSuggestions(formattedSuggestions);
    setSelectedSuggestionIndex(-1);
  };

  const _handleSuggestionClick = (suggestion: ISearchTerm) => {
    setSearchTerm(suggestion.term);
    setSuggestions([]);
    onSuggestionClick(suggestion);
  };

  const _handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        Math.min(prevIndex + 1, suggestions.length - 1),
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (selectedSuggestionIndex !== -1) {
        setSearchTerm(suggestions[selectedSuggestionIndex].term);
        onSuggestionClick(suggestions[selectedSuggestionIndex]);
      } else {
        onSuggestionClick({
          term: searchTerm,
          description: searchTerm,
          causes: "",
          symptom: "",
          treatment: "",
          diagnostic: "",
        });
      }
      setSuggestions([]);
    } else if (event.key === "Escape") {
      setSuggestions([]);
    }
  };

  const _handleClickOutside = (event: MouseEvent) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", _handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", _handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (suggestionsRef.current && selectedSuggestionIndex !== -1) {
      suggestionsRef.current.scrollTop = selectedSuggestionIndex * 30;
    }
  }, [selectedSuggestionIndex]);

  return (
    <div className="relative mx-auto w-full">
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={_handleSearchChange}
        onKeyDown={_handleKeyDown}
        placeholder="Search..."
        className="w-full rounded border px-4 py-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring"
      />
      {suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="absolute z-50 mt-2 w-full rounded border bg-white shadow"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => _handleSuggestionClick(suggestion)}
              className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
                selectedSuggestionIndex === index ? "bg-blue-100" : ""
              }`}
              title={suggestion.description}
            >
              {suggestion.term}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Component.displayName = "AutocompleteSearch";
export default Component;
