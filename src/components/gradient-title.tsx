import { ReactNode } from "react";

interface GradientTitleProps {
  children: ReactNode;
  className?: string;
  onHoverSize?: number;
  onLeaveSize?: number;
  setCursorSize?: (size: number) => void;
}

export default function GradientTitle({
  children,
  className = "",
  onHoverSize = 300,
  onLeaveSize = 40,
  setCursorSize,
}: GradientTitleProps) {
  return (
    <h1
      className={`
          font-humane
          font-bold
          text-[20vw]
          xl:text-[18vw]
          leading-[0.84]
          -mb-[2vw]
          whitespace-nowrap
          bg-[radial-gradient(68.71%_1291.01%_at_50.05%_50%,#FF9800_18.75%,#EB7400_99.96%,rgba(0,0,0,0.68)_99.97%)]
          bg-clip-text
          text-transparent
          ${className}
        `}
        onMouseOver={() => setCursorSize?.(onHoverSize)}
        onMouseLeave={() => setCursorSize?.(onLeaveSize)}
      >
        {children}
      </h1>
  );
}
