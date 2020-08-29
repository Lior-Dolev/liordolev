export declare const ErrorMessages: {
    blank: string;
    at: string;
    blank_domain: string;
    two_parts_domain: string;
    second_part_domain_blank: string;
    server_invalid: string;
};
declare const validation: (mail: string) => string;
export default validation;
