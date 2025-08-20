import React from "react";

interface AmountItemProps {
  label: string;
  value: string | number;
}

function AmountItem({ label, value }: AmountItemProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-gray-500 uppercase">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

export default AmountItem;
