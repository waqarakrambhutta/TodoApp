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
      className={`sm:w-[60%] w-[100%] sm:mt-3 mt-2  backdrop-blur-md px-1 rounded-lg  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
