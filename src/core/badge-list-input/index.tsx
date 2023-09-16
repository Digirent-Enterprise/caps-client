import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { IconX } from "@tabler/icons-react";

import { Badge, IBadgeListInputProps } from "@/core/badge-list-input/type";

const Component: FC<IBadgeListInputProps> = ({
  onSubmit,
  label,
  errorMessage,
}) => {
  const [badgeText, setBadgeText] = useState("");
  const [badges, setBadges] = useState<Badge[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBadgeText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBadges([...badges, { value: badgeText.trim(), id: badges.length + 1 }]);
    setBadgeText("");
    onSubmit(
      [...badges, { value: badgeText.trim(), id: badges.length + 1 }].map(
        (item) => item.value,
      ),
    );
  };

  const handleDelete = (badgeToDelete: Badge) => {
    setBadges(badges.filter((badge) => badge.id !== badgeToDelete.id));
    onSubmit(
      badges
        .filter((badge) => badge.id !== badgeToDelete.id)
        .map((item) => item.value),
    );
  };

  let inputClassNames =
    "w-full rounded-lg border border-light-border-gray dark:bg-dark-gray-heavy p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-light-button-blue dark:text-dark-white dark:focus:ring-dark-green";

  if (errorMessage) {
    inputClassNames =
      "w-full rounded-lg border border-red p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-light-button-blue dark:text-dark-white dark:focus:ring-dark-green";
  } else {
    inputClassNames =
      "w-full rounded-lg border border-light-border-gray dark:bg-dark-gray-heavy p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-light-button-blue dark:text-dark-white dark:focus:ring-dark-green";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="mb-2 block font-bold dark:text-dark-white">
          {label}
        </label>
        <input
          className={inputClassNames}
          type="text"
          value={badgeText}
          onChange={handleInputChange}
        />
        {errorMessage ? (
          <div className="mt-2 text-sm text-red">{errorMessage}</div>
        ) : null}
      </form>
      <div className="mt-2 flex flex-wrap">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="m-1 inline-flex items-center rounded-lg bg-light-button-blue px-3 py-1 text-light-background-gray dark:bg-light-primary-button"
          >
            {badge.value}
            <button className="ml-2" onClick={() => handleDelete(badge)}>
              <IconX className="h-4 w-4 text-light-background-gray" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Component.displayName = "BadgeListInput";

export default Component;
