import React from "react";

interface ItemProps {
  className?: string;
  task: string;
}

const Item: React.FC<ItemProps> = ({ className, task }) => {
  return (
    <div
      className={`px-6 rounded-lg shadow-md hover:shadow-lg py-2 border my-1 ${className}`}
    >
      {task}
    </div>
  );
};

export default Item;
