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
        className={`flex h-16 w-16 items-center justify-center rounded-full sm:h-14 sm:w-14 ${className}`}
      >
        <Icon className="h-8 w-8 text-white sm:h-7 sm:w-7" />
      </div>
    </div>
  );
}
