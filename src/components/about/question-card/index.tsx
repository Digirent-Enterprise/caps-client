const Component = ({ question }) => {
  return (
    <div className="mb-4 rounded-md border border-gray-300 bg-white p-4 shadow-md">
      <div className="min-h-0 flex-1 p-5">
        <p>
          <strong>Question:</strong> {question}
        </p>
      </div>
    </div>
  );
};

Component.displayName = "QuestionCard";
export default Component;
