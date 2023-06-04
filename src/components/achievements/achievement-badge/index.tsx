import React from "react";

import Image from "next/image";

import { IAchievementBadge } from "@/components/achievements/achievement-badge/type";

const Component: React.FC<IAchievementBadge> = () => {
  return (
    <div>
      <h1>Your Achievements</h1>
      {achievements.map((achievement, index) => (
        <div key={index}>
          <h2>{achievement.name}</h2>
          <Image
            src={achievement.badgeImageUrl}
            alt={achievement.name}
            width={100}
            height={100}
            className={achievement.isTaken ? "grayscale" : ""}
          />
          <p>{achievement.description}</p>
          <p>{achievement.condition}</p>
        </div>
      ))}
    </div>
  );
};

Component.displayName = "Achievement";
export default Component;
