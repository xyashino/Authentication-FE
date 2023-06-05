import { DragEvent, SyntheticEvent, useState } from "react";

interface Props {
  setImage: (file: File) => void;
}

export const UploadImage = ({ setImage }: Props) => {
  const [overDropZone, setOverDropZone] = useState(false);

  const clearPreventDefault = (e: SyntheticEvent, drag?: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    if (drag !== undefined) setOverDropZone(drag);
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOverDropZone(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setImage(file);
    }
  };

  const handleFileInput = (e: SyntheticEvent) => {
    e.preventDefault();
    const [file] = (e.target as HTMLInputElement).files ?? [];
    if (!file) return;
    setImage(file);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full  py-4 border-2 lg:my-4 rounded-xl  border-emerald-700  bg-emerald-500/60 relative"
      onDragEnter={(e) => clearPreventDefault(e, true)}
      onDragLeave={(e) => clearPreventDefault(e, false)}
      onDragEnd={(e) => clearPreventDefault(e, false)}
      onDragOver={clearPreventDefault}
      onDrop={onDrop}
    >
      {overDropZone && (
        <div className="absolute w-full h-full bg-gray-400 bg-opacity-50 flex items-center justify-center">
          <p className="text-2xl font-bold text-emerald-700 uppercase">
            Upuść tutaj plik
          </p>
        </div>
      )}
      <p className="text-2xl font-bold uppercase italic text-white text-center">
        Drag and drop File
        <br />
        or
      </p>
      <input
        onChange={handleFileInput}
        type="file"
        accept="image/*"
        className="file:rounded-xl file:border-0 file:p-2 file:bg-emerald-50/80 file:font-bold cursor-pointer hover:scale-110 transition-transform "
      />
    </div>
  );
};
