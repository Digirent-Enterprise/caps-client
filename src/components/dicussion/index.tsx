import DiscussionContent from "@/components/dicussion/content";
import DiscussionSidebar from "@/components/dicussion/sidebar";

const Component = () => {
  return (
    <div className="flex flex-wrap">
      <DiscussionSidebar />
      <DiscussionContent />
    </div>
  );
};

Component.displayName = "DiscussionComponent";
export default Component;
