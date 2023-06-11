import { ISkeletonCircleProps } from "@/components/skeleton-loader/circle/type";

const Component = (props: ISkeletonCircleProps) => {
  const className = props.className ?? "rounded-full flex-shrink-0 bg-gray-200";
  return (
    <div
      className={className}
      style={{ height: props.size, width: props.size }}
    />
  );
};

Component.displayName = "SkeletonCircle";
export default Component;
