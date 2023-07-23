// https://github.com/pbteja1998/hacker-news-client
import { useEffect, useState } from "react";

import ListBox from "@/components/news/listbox";
import Pagination from "@/components/news/pagination";
import Ring from "@/components/news/ring";
import { StoryNode } from "@/components/news/stories-list/type";
import StorySkeleton from "@/components/news/story-skeleton";
import {
  ALL_TIME,
  ASCENDING,
  DATE,
  DESCENDING,
  FILTER_OPTIONS,
  NUMBER_OF_COMMENTS,
  ORDER_IN_OPTIONS,
  POPULARITY,
  SORT_BY_OPTIONS,
} from "@/constant";
import useUser from "@/hooks/user/useUser";

const PAGE_SIZE = 10;
const STORIES_OFFSET = 50;

const Component = () => {
  const { isLoading } = useUser();
  const [storiesMap, setStoriesMap] = useState<Record<number, StoryNode>>({});

  const setStoryNode = ({
    storyId,
    points,
    time,
    comments,
  }: {
    storyId: number;
    points: number;
    time: number;
    comments: number;
  }) =>
    setStoriesMap({
      ...storiesMap,
      [storyId]: { storyId, points, time, comments },
    });

  const [currentPage, setCurrentPage] = useState(0);
  const [currentlySortBy, setCurrentlySortBy] = useState(POPULARITY);
  const [currentlyOrderIn, setCurrentlyOrderIn] = useState(DESCENDING);
  const [currentFilter, setCurrentFilter] = useState(ALL_TIME);
  const [storyIds, setStoryIds] = useState<number[]>([]);

  const [totalStories, setTotalStories] = useState(STORIES_OFFSET);

  useEffect(() => {
    const multiplicationFactor = currentlyOrderIn === ASCENDING ? -1 : 1;
    if (Object.values(storiesMap).length === storyIds.length) {
      let sortedStoryNodes;
      if (currentlySortBy === POPULARITY) {
        sortedStoryNodes = Object.values(storiesMap).sort(
          (a: StoryNode, b: StoryNode) =>
            multiplicationFactor * (b.points - a.points)
        );
      } else if (currentlySortBy === DATE) {
        sortedStoryNodes = Object.values(storiesMap).sort(
          (a: StoryNode, b: StoryNode) =>
            multiplicationFactor * (b.time - a.time)
        );
      } else if (currentlySortBy === NUMBER_OF_COMMENTS) {
        sortedStoryNodes = Object.values(storiesMap).sort(
          (a: StoryNode, b: StoryNode) =>
            multiplicationFactor * (b.comments - a.comments)
        );
      }
      setStoryIds(sortedStoryNodes.map((a: StoryNode) => a.storyId));
    }
  }, [storiesMap, currentlySortBy, currentlyOrderIn]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    const storyId = storyIds[currentPage * PAGE_SIZE];
    const element = document.getElementById(`story-${storyId}`);
    if (element) {
      element.scrollIntoView();
    }
  }, [currentPage]);

  const allStoryNodes = Object.values(storiesMap);

  return (
    <>
      <div className="mt-6 grid gap-16 py-10 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
        {isLoading ? (
          <>
            <StorySkeleton />
            <StorySkeleton />
            <StorySkeleton />
            <StorySkeleton />
          </>
        ) : (
          <>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pagesCount={Math.ceil(storyIds.length / PAGE_SIZE)}
            />
            <div className="absolute top-36 sm:right-20 sm:top-24">
              {Object.values(storiesMap).length < storyIds.length ? (
                <Ring
                  className="ml-auto"
                  progress={Math.floor(
                    (Object.values(storiesMap).length * 100) / storyIds.length
                  )}
                />
              ) : (
                <div className="flex flex-wrap space-x-4">
                  <div className="hidden w-40 lg:block">
                    <ListBox
                      label="Order In"
                      selectedOption={currentlyOrderIn}
                      setSelectedOption={setCurrentlyOrderIn}
                      options={ORDER_IN_OPTIONS}
                    />
                  </div>
                  <div className="w-40">
                    <ListBox
                      label="Sort By"
                      selectedOption={currentlySortBy}
                      setSelectedOption={setCurrentlySortBy}
                      options={SORT_BY_OPTIONS}
                    />
                  </div>
                  <div className="w-40">
                    <ListBox
                      label="Show Only"
                      selectedOption={currentFilter}
                      setSelectedOption={setCurrentFilter}
                      options={FILTER_OPTIONS}
                    />
                  </div>
                </div>
              )}
            </div>

            <span className="mb-28 rounded-md text-center sm:mb-20">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:bg-orange-500 focus:border-orange-700 focus:outline-none active:bg-orange-700"
                onClick={() => setTotalStories(totalStories + STORIES_OFFSET)}
              >
                Load More
              </button>
            </span>
          </>
        )}
      </div>
    </>
  );
};

Component.displayName = "StoriesList";
export default Component;
