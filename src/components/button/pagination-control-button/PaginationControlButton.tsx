interface PaginationControlButtonProps {
  label: string;
  onPageChange: () => void;
  disable: boolean;
}

export default function PaginationControlButton({
  label,
  onPageChange,
  disable,
}: PaginationControlButtonProps) {
  return (
    <button
      onClick={onPageChange}
      disabled={disable}
      className="p-2 rounded-md disabled:opacity-50"
    >
      <p
        className={`${
          disable ? "invisible" : "h-5 w-5 text-smoke hover:text-blue font-bold"
        }`}
      >
        {label}
      </p>
    </button>
  );
}
