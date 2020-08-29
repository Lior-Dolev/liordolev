/// <reference types="react" />
declare type Status = 'success' | 'sending' | 'error' | null;
declare const SignUp: ({ subscribe, status }: {
    subscribe: any;
    status: Status;
}) => JSX.Element;
export default SignUp;
