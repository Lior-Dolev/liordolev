/// <reference types="react" />
declare type MenuProps = {
    className?: string;
    onOpenModal: () => void;
    onCloseModal: () => void;
    tabIndex?: number;
};
declare const MobileHeader: ({ className, onOpenModal, onCloseModal, tabIndex, }: MenuProps) => JSX.Element;
export default MobileHeader;
