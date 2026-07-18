import { ReactNode } from "react";

type MobileViewProps = {
  children: ReactNode;
};

const MobileView = ({ children }: MobileViewProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#eff2f4] p-4">
      <div className="w-full max-w-[375px] min-h-[812px] bg-[#eff2f4] overflow-hidden rounded-[40px] flex justify-center items-center border-amber shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        {children}
      </div>
    </div>
  );
};

export default MobileView;
