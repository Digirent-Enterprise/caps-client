import React, { useState } from "react";

import { Alert, AlertIcon } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import AutocompleteSearch from "@/core/autocomplete-search";
import { ISearchTerm } from "@/core/autocomplete-search/type";

const Component = () => {
  const { t } = useTranslation("handbook");
  const [selectedSuggestion, setSelectedSuggestion] = useState<ISearchTerm>();

  const handleSuggestionClick = (suggestion: ISearchTerm) => {
    setSelectedSuggestion(suggestion);
  };

  return (
    <div className="relative space-y-5 rounded-md border border-neutral-200 p-6 dark:border-neutral-700">
      <div className="flex w-full flex-col items-center space-y-2 lg:items-start">
        <div className="text-3xl font-bold">{t("handbook")}</div>
        <div className="text-sm text-neutral-400 lg:text-base">
          {t("handbook_description")}
        </div>
        <div className="mt-1 text-xs text-neutral-400">
          {t("handbook_source")}: DICA
        </div>
        <div className="w-full">
          <AutocompleteSearch onSuggestionClick={handleSuggestionClick} />
        </div>
      </div>

      {selectedSuggestion && (
        <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
          <h1 className="mb-4 text-2xl font-bold">{selectedSuggestion.term}</h1>

          <div className="mb-2">
            <h2 className="text-lg font-semibold">{t("handbook_causes")}</h2>
            <p className="text-md">{selectedSuggestion.causes}</p>
          </div>

          <div className="mb-2">
            <h2 className="text-lg font-semibold">{t("handbook_symptom")}</h2>
            <p className="text-md">{selectedSuggestion.symptom}</p>
          </div>

          <div className="mb-2">
            <h2 className="text-lg font-semibold">{t("handbook_treatment")}</h2>
            <p className="text-md">{selectedSuggestion.treatment}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              {t("handbook_diagnostic")}
            </h2>
            <p className="text-md">{selectedSuggestion.diagnostic}</p>
          </div>
        </div>
      )}

      <Alert status="warning" variant="subtle">
        <AlertIcon />
        {t("handbook_warning")}
      </Alert>
    </div>
  );
};

Component.displayName = "Handbook";
export default Component;
