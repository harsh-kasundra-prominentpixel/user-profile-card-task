import type React from "react";
import type {ComponentPropsType} from "../utils/types";
import {UserRound} from "lucide-react";
import Tooltip from "./ToolTip";

const UserCard: React.FC<ComponentPropsType> = ({
  name,
  age,
  status,
  avatarUrl,
}) => {
  const statusColor = {
    Active: "border-l-green-500",
    Inactive: "border-l-red-500",
    Pending: "border-l-yellow-500",
  };
  return (
    <>
      <div
        className={`w-lg h-32 bg-white border border-gray-200 border-l-[6px] rounded-xl shadow-sm px-6 py-2 ${statusColor[status]} `}
      >
        <div className="flex items-center gap-6">
          {/* image */}
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <UserRound size={40} className="text-gray-600" />
            )}
          </div>

          <div className="flex flex-col items-start gap-1">
            {name.length > 20 ? (
              <Tooltip content={name}>
                <h1 className="text-3xl font-bold text-gray-900 truncate w-xs pb-2">
                  {name}
                </h1>
              </Tooltip>
            ) : (
              <h1 className="text-3xl font-bold text-gray-900 truncate w-xs pb-2">
                {name}
              </h1>
            )}

            <p className="text-gray-600">Age : {age}</p>
            <p className="text-gray-600">Status : {status}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
