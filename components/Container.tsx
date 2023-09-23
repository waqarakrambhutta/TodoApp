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
      className={`w-[60%] sm:w-[95%] bg-transparent backdrop-blur-sm rounded-lg shadow-sm shadow-slate-400/10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
