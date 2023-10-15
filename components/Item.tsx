"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
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
      className={`px-6 flex bg-slate-300/10 justify-between rounded-lg shadow-md hover:shadow-lg py-2 border my-1 ${className}`}
    >
      {checked ? (
        <div className="text-green-300 line-through italic ">{task}</div>
      ) : (
        <div>{task}</div>
      )}

      <div className="flex justify-normal items-center">
        <Link href={`/`} target="_blank">
          <BiMessageSquareEdit className="text-slate-100 hover:text-slate-200 mr-2" />
        </Link>
        <input
          className="accent-green-500 cursor-pointer"
          type="checkbox"
          checked={checked}
          onChange={toggleCheck}
          size={50}
        />
      </div>
    </div>
  );
};

export default Item;
