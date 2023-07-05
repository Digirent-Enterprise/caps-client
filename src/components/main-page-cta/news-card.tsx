import React from "react";

interface ImageCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className="max-h-xs bg-light-button-green rounded-xl overflow-hidden shadow-lg">
      <div className="mb-20 px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-700 text-base text-white">{description}</p>
      </div>
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-light-button-green hover:opacity-75 transition duration-300">
          <span className="text-white text-xl font-bold">See more</span>
        </div>
      </div>
    </div>
  );
};

const ImageCardContainer: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      <ImageCard
        title="Card 1"
        imageUrl="/static/landing/woman.png"
        description="Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 "
      />
      <ImageCard
        title="Card 2"
        imageUrl="/static/landing/woman.png"
        description="Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 "
      />
      <ImageCard
        title="Card 3"
        imageUrl="/static/landing/woman.png"
        description="Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 "
      />
      <ImageCard
        title="Card 4"
        imageUrl="/static/landing/woman.png"
        description="Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 "
      />
    </div>
  );
};

export default ImageCardContainer;
