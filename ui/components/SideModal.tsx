"use client";
import { PropsWithChildren} from "react";
import { useRouter } from "next/navigation";
import { IconClose } from "../atoms/icons/Close"; 
import { Typography } from "../atoms/Typography";
import { ButtonIcon } from "../atoms/ButtonIcon";
import "../../app/(root)/_sections/animation.css"

type SideModalProps = PropsWithChildren<{
  title: string;
}>;

export function SideModal(props: SideModalProps) {
  const { children, title } = props;
  const router = useRouter();

  const onClose = () => {
    router.back();
  };


  return (
    <> 
    <div className="fixed inset-0 opacity-70 z-50 overflow-scroll p-4 lg:p-6 backdrop-blur-sm showModalBg">
      <div className="bg-white rounded-lg w-full max-w-lg ml-auto showModal">
        <header className="flex items-center justify-between p-8 lg:p-10 sticky top-0 bg-[#12E5E5] rounded-lg">
          <Typography variant="h2">{title}</Typography>
          <ButtonIcon icon={<IconClose />} onClick={onClose} />
        </header>
        <section className="px-8 lg:px-10 py-16 pr-16">{children}</section>
      </div>
    </div>,
    </>
  );
}
