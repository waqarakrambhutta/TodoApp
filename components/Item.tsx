import React from "react";

interface Items {
  className?: string;
}

const Item: React.FC<Items> = ({ className }: Items) => {
  return <div className={`p-6 ${className}`}>Item</div>;
};

export default Item;
