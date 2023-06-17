import React, { useEffect, useMemo, useRef, useState } from "react";

import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { isEmpty } from "lodash";

import useDynamicHealth from "@/hooks/dynamic-health";
import ContainerCard from "@/shared/chart-container-card";

const Component = React.memo(() => {
  const { myStatuses, getDynamicHealth } = useDynamicHealth();
  const [averageScore, setAverageScore] = useState(0);

  const colorRender = useMemo(() => {
    if (averageScore > 30 && averageScore < 60) return "#db8414";
    if (averageScore > 60) return "#2f855a";
    return "red.400";
  }, [averageScore]);

  useEffect(() => {
    if (isEmpty(myStatuses)) {
      getDynamicHealth();
    }
    if (myStatuses && myStatuses.records && myStatuses.records.length > 0) {
      const score = Math.round(
        (myStatuses.records.reduce((acc, cur) => {
          return acc + cur;
        }, 0) /
          myStatuses.records.length /
          5) *
          100
      );
      let initialScore = 0;
      const interval = setInterval(() => {
        if (initialScore < score) {
          initialScore += 1;
          setAverageScore(initialScore);
        } else {
          clearInterval(interval);
        }
      }, 40);
      setAverageScore(score);
    }
  }, [myStatuses]);

  return (
    <ContainerCard
      chart={
        <div className="h-full w-full">
          <div className="w-full p-1 text-center text-lg font-bold text-white">
            General health score
          </div>
          <div />
          <div className="h-full w-full">
            <CircularProgress
              size="100%"
              value={averageScore}
              color={colorRender}
              thickness="15%"
              trackColor="#162549"
            >
              <CircularProgressLabel className="text-4xl font-bold">
                {averageScore}
              </CircularProgressLabel>
            </CircularProgress>
          </div>
        </div>
      }
    />
  );
});

Component.displayName = "DashboardAverageHealthScore";
export default Component;
