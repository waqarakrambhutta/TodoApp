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
      className={`w-[60%] min-h-[60vh] sm:w-[95%] bg-transparent backdrop-blur-md p-6 rounded-lg shadow-md shadow-white/30 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
