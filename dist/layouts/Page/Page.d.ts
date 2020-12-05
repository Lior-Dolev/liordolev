/// <reference types="react" />
import { PageProps } from './types';
declare const Page: {
    ({ className, children, id }: PageProps): JSX.Element;
    Header: ({ header }: {
        header: string;
    }) => JSX.Element;
};
export default Page;
