type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const base = "px-2 py-2 rounded font-medium trasition-colors";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {label}
    </button>
  );
}
