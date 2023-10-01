import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({
  children,
  className,
}: ContainerProps) => {
  return (
    <div
      className={`sm:w-[60%] w-[100%] bg-transparent backdrop-blur-md px-1 rounded-lg shadow-md shadow-white/30 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
