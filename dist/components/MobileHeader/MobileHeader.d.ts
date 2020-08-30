/// <reference types="react" />
declare type MenuProps = {
    className?: string;
    onOpenModal: () => void;
    onCloseModal: () => void;
    inert?: boolean;
};
declare const MobileHeader: ({ className, onOpenModal, onCloseModal, inert, }: MenuProps) => JSX.Element;
export default MobileHeader;
