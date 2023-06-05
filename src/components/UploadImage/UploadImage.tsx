import { DragEvent, SyntheticEvent, useState } from "react";

interface Props {
  setUrl: (url: string) => void;
}

export const UploadImage = ({ setUrl }: Props) => {
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
      const url = URL.createObjectURL(file);
      console.log(url);
      setUrl(url);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-52 border-2 p-2 m-4 rounded-xl  border-emerald-700  bg-emerald-500/60 relative"
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
        Przeciągnij i upuść obraz tutaj
      </p>
    </div>
  );
};
