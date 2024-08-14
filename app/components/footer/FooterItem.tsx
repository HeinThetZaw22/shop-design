"use client";
import { IconType } from "react-icons";

interface FooterListProps {
  label: string;
  icon?: IconType;
}
const FooterList: React.FC<FooterListProps> = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-row gap-3 cursor-pointer">
      {Icon && (
        <div className=" flex-shrink-0">
            <Icon size="20" className="" />
        </div>
      )}
        <p className=" text-sm text-neutral-500">{label}</p> 
    </div>
  );
};

export default FooterList;
