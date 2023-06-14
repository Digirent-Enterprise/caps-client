const Component = () => {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-5 py-4 lg:p-20">
      <div className="flex w-full flex-col space-y-2">
        <div className="text-3xl font-bold">Handbook</div>
        <div>
          <div className="text-sm text-neutral-400 lg:text-base">
            Find detailed information on any condition
          </div>
          <div className="mt-1 text-xs text-neutral-400 ">Source: Apollo</div>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "Handbook";
export default Component;
