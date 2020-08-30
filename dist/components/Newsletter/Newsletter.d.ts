/// <reference types="react" />
declare type NewletterProps = {
    onOpen: () => void;
    onClose: () => void;
};
declare const Newletter: ({ onOpen, onClose }: NewletterProps) => JSX.Element;
export default Newletter;
