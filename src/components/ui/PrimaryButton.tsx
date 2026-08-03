import Button from "./Button";

interface Props {
  children: React.ReactNode;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <Button className="px-6 py-3">
      {children}
    </Button>
  );
}