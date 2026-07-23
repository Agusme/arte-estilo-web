import { IconType } from "react-icons";

type BenefitIconProps = {
  icon: IconType;
  className: string;
};

export function BenefitIcon({
  icon: Icon,
  className,
}: BenefitIconProps) {
  return (
    <div className="mb-5 flex justify-center">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${className}`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}