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
      className="relative flex w-full flex-col items-center justify-center rounded-xl border-2 border-emerald-700 bg-emerald-500/60 py-4 lg:my-4"
      onDragEnter={(e) => clearPreventDefault(e, true)}
      onDragLeave={(e) => clearPreventDefault(e, false)}
      onDragEnd={(e) => clearPreventDefault(e, false)}
      onDragOver={clearPreventDefault}
      onDrop={onDrop}
    >
      {overDropZone && (
        <div className="absolute flex h-full w-full items-center justify-center bg-gray-400 bg-opacity-50">
          <p className="text-2xl font-bold uppercase text-emerald-700">
            Upuść tutaj plik
          </p>
        </div>
      )}
      <p className="text-center text-2xl font-bold uppercase italic text-white">
        Drag and drop File
        <br />
        or
      </p>
      <input
        onChange={handleFileInput}
        type="file"
        accept="image/*"
        className="cursor-pointer file:rounded-xl file:border-0 file:bg-emerald-50/80 file:p-2 file:font-bold transition-transform hover:scale-110"
      />
    </div>
  );
};
