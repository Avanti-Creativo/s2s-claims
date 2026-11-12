import { Button } from "@/components/ui/Button";
import { INTAKE_URL } from "@/lib/utils";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function CTAButton({
  children = "Claim Your FREE Policy Review",
  className,
}: CTAButtonProps) {
  return (
    <Button href={INTAKE_URL} size="lg" variant="primary" className={className}>
      {children}
    </Button>
  );
}
