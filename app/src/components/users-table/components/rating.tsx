import { MoveDown, MoveUp } from "lucide-react";

export const UserRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-2">
      {rating > 4.0 ? (
        <MoveUp className="text-green-600" size={20} />
      ) : (
        <MoveDown className="text-red-600" size={20} />
      )}
      <p className="font-medium">{rating}</p>
    </div>
  );
};
