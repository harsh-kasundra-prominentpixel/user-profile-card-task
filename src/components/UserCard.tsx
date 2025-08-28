import type React from "react";
import type {ComponentPropsType} from "../utils/types";
import {UserRound} from "lucide-react";

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
        className={`bg-white border border-gray-200 border-l-6 rounded-xl shadow-sm px-6 py-2 ${statusColor[status]} hover:shadow-md transition-shadow duration-200 cursor-pointer`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* image */}
          <div className="w-16 h-16 text-md rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-medium text-gray-600">
                <UserRound size={40} />
              </span>
            )}
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
              <p className="text-gray-600 max-w-2xl">Age : {age}</p>
              <p className="text-gray-600 max-w-2xl">Status : {status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
