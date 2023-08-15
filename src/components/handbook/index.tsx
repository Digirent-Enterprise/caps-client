import { useState } from "react";

import { Alert, AlertIcon } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import AutocompleteSearch from "@/components/autocomplete-search";

const Component = () => {
  const { t } = useTranslation("handbook");
  const [selectedDescription, setSelectedDescription] = useState<string>("");

  const handleSuggestionClick = (description: string) => {
    setSelectedDescription(description);
  };

  return (
    <div className="relative flex flex-col items-center justify-center space-y-5 rounded-md border border-neutral-200 p-6 dark:border-neutral-700 lg:p-20">
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

      {selectedDescription && (
        <div className="flex w-full flex-col space-y-4 rounded-md border border-neutral-200 p-12 dark:border-neutral-700">
          <h1 className="font-heading text-3xl font-bold">
            {selectedDescription}
          </h1>

          <p className="text-sm text-neutral-400">{selectedDescription}</p>
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
