"use client";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
  small?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  small,
  outline }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      relative 
      mt-3 
      hover:opacity-70 
      rounded-full
      disabled:opacity-70
      hover:bg-gray-300
      transition 
      disabled:cursor-not-allowed
      ${outline ? "bg-neutral-800/20" : " bg-gray-100"}
      ${outline ? " border-gray-300" : " border-gray-100"}
      ${outline ? "text-white" : " text-gray-800"}
      ${small ? "py-2 px-10" : "py-2 px-20"}
      ${small ? " text-xs" : " text-sm"}
      ${small ? " border-[1px]" : "border-2"}
      `}
    >
      {Icon && (
        <Icon size="24" className="absolute top-3 left-4" />
      )}
      {label}
    </button>
  );
};

export default Button;