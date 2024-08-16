import { useState } from "react";

const SingleCheckbox = ({
  id,
  label,
  isChecked,
  onChange,
}: {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        className="text-xs"
        onChange={onChange}
        disabled={isChecked}
      />
      <span className=" text-sm text-gray-500">{label}</span>
    </label>
  );
};

const LanguageCheckbox = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleCheckboxChange = (id: string) => {
    setSelectedLanguage(selectedLanguage === id ? null : id);
  };

  return (
    <div className="flex flex-col space-y-2">
      <SingleCheckbox
        id="my"
        label="Myanmar (Unicode)"
        isChecked={selectedLanguage === "my"}
        onChange={() => handleCheckboxChange("my")}
      />
      <SingleCheckbox
        id="zg"
        label="Myanmar (Zawgyi)"
        isChecked={selectedLanguage === "zg"}
        onChange={() => handleCheckboxChange("zg")}
      />
      <SingleCheckbox
        id="en"
        label="English"
        isChecked={selectedLanguage === "en"}
        onChange={() => handleCheckboxChange("en")}
      />
    </div>
  );
};

export default LanguageCheckbox;
