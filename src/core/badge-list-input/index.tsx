import React, { useState } from "react";

import { IconX } from "@tabler/icons-react";

const Component: React.FC<IBadgeListInputProps> = ({ onSubmit, label }) => {
  const [badgeText, setBadgeText] = useState("");
  const [badges, setBadges] = useState<Badge[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBadgeText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBadges([...badges, { value: badgeText.trim(), id: badges.length + 1 }]);
    setBadgeText("");
    onSubmit(
      [...badges, { value: badgeText.trim(), id: badges.length + 1 }].map(
        (item) => item.value
      )
    );
  };

  const handleDelete = (badgeToDelete: Badge) => {
    setBadges(badges.filter((badge) => badge.id !== badgeToDelete.id));
    onSubmit(
      badges
        .filter((badge) => badge.id !== badgeToDelete.id)
        .map((item) => item.value)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="mb-2 block font-medium text-blue">{label}</label>
        <input
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue"
          type="text"
          value={badgeText}
          onChange={handleInputChange}
        />
      </form>
      <div className="mt-2 flex flex-wrap">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="m-1 inline-flex items-center rounded-lg bg-blue px-3 py-1 text-white"
          >
            {badge.value}
            <button className="ml-2" onClick={() => handleDelete(badge)}>
              <IconX className="h-4 w-4 text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Component.displayName = "BadgeListInput";

export default Component;
