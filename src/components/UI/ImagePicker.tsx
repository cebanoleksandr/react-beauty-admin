import { useState, type FC } from "react";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";

interface IProps {
  onChange: (file: File) => void;
}

const ImagePicker: FC<IProps> = ({ onChange }) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
    }
  };

  return (
    <>
      <div className="flex items-center w-full border border-gray-200 rounded-lg relative">
        <input
          id="file_input"
          type="file"
          accept='image/*'
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />

        <div className="text-sm flex items-center gap-1 font-medium mr-3 px-4 py-2 bg-blue-500 pointer-events-none rounded-lg text-white">
          <CloudArrowDownIcon className="size-5 text-white" />
          Завантажити
        </div>

        <span className="text-sm pr-4 py-2 text-gray-600 truncate pointer-events-none">
          {fileName || "Файл не вибрано"}
        </span>
      </div>

      <p className="mt-1 text-sm text-gray-500">
        SVG, PNG, JPG або GIF (MAX 800×400px)
      </p>
    </>
  );
};

export default ImagePicker;
