"use client";
import React, { useState } from "react";

interface ItemProps {
  className?: string;
  task: string;
}

const Item: React.FC<ItemProps> = ({ className, task }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={`px-6 flex justify-between rounded-lg shadow-md hover:shadow-lg py-2 border my-1 ${className}`}
    >
      {checked ? (
        <div className="text-green-300 line-through">{task}</div>
      ) : (
        <div>{task}</div>
      )}
      <div>
        <input
          className="accent-neutral-500"
          type="checkbox"
          checked={checked}
          onChange={toggleCheck}
        />
      </div>
    </div>
  );
};

export default Item;
