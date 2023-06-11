import { ISkeletonRectangleProps } from "@/components/skeleton-loader/rectangle/type";

const Component: React.FC<ISkeletonRectangleProps> = ({
  gap = 4, //4px
  lines = 1,
  height = 20, //20px
  className = "",
  unEqualWidth,
}) => {
  const items = new Array(lines || 1).fill("x");
  return (
    <div className="flex w-full flex-col" style={{ rowGap: gap }}>
      {items.map((_, index) => {
        const len = items.length;
        const isLast = index === len - 1;
        const moreThanOne = len > 1;
        const width =
          isLast && unEqualWidth && moreThanOne ? "w-1/2" : "w-full";
        return (
          <div
            key={index}
            style={{ height }}
            className={[width, className].join(" ")}
          />
        );
      })}
    </div>
  );
};

Component.displayName = "SkeletonRectangle";
export default Component;
