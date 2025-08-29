import React, {useState} from "react";
import type {TooltipPropsType} from "../utils/types";

const Tooltip: React.FC<TooltipPropsType> = ({children, content}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block  hover:cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full -mb-1 p-2 bg-gray-800 text-white text-sm rounded">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
