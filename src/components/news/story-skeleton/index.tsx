const Component = () => {
  return (
    <>
      <div className="w-full max-w-sm animate-pulse rounded-md border border-gray-300 p-4 shadow sm:max-w-md md:max-w-full">
        <div>
          <div>
            <a href="#" className="inline-block">
              <span className="inline-flex h-6 w-24 items-center rounded-full bg-gray-200 px-3 py-0.5" />
            </a>
          </div>
          <a href="#" className="block">
            <h3 className="mt-4 h-4 w-2/3 rounded bg-gray-400" />
            <p className="mt-2 h-4 w-3/4 rounded bg-gray-400" />
          </a>
          <div className="mt-3 flex items-center">
            <div>
              <div className="flex text-sm leading-5 text-gray-500">
                <time className="h-3 w-20 rounded bg-gray-400" />
                <span className="mx-1 h-3 w-4 rounded bg-gray-400" />
                <p className="h-3 w-20 rounded bg-gray-400" />
                <>
                  <span className="mx-1 h-3 w-4 rounded bg-gray-400" />
                  <a href={"#"} className="h-3 w-20 rounded bg-gray-400" />
                </>
              </div>
            </div>
          </div>
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              <span className="mx-1 h-4 w-4 rounded bg-gray-400"></span>
              <p className="h-4 w-32 rounded bg-gray-400"></p>
            </div>
            <div className="ml-4 flex items-center">
              <span className="mx-1 h-4 w-4 rounded bg-gray-400"></span>
              <p className="h-4 w-24 bg-gray-400"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Component.displayName = "StorySkeleton";
export default Component;
