interface Props {
  src?: string;
}

export const Avatar = ({ src }: Props) => {
  return (
    <img
      src={
        src ||
        "https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png"
      }
      alt="avatar"
      className="aspect-square w-8 mr-5 rounded"
      draggable={false}
    />
  );
};
