import { IDivProps } from "@/components/skeleton-loader/type";

const Component: React.FC<IDivProps> = ({ children, className, ...props }) => {
  return (
    <div className={["animate-pulse", className].join(" ")} {...props}>
      {children}
    </div>
  );
};

Component.displayName = "SkeletonLoader";
export default Component;
