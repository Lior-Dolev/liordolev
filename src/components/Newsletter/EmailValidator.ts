export const ErrorMessages = {
  blank: 'אנא מלא את כתובת המייל',
  at: 'כתובת המייל צריכה לכלול @ אחד',
  blank_domain: 'כתובת המייל צריכה לכלול דומיין (לדוגמא gmail.com)',
  two_parts_domain: 'חסרה נקודה בדומיין של כתובת המייל (לדוגמא gmail.com)',
  second_part_domain_blank:
    'חסר החלק השני של הדומיין בכתובת המייל (לדוגמא com.)',
  server_invalid: 'כתובת המייל אינה תקינה',
};

const isBlank = (value: string) => !value || !value.trim().length;

const singleAt = (value: string) =>
  !isBlank(value) && value.split('@').length === 2;

const hasDomain = (value: string) =>
  singleAt(value) && !isBlank(value.split('@')[1]);

const domainSingleDot = (value: string) =>
  hasDomain(value) && value.split('@')[1].split('.').length > 1;

const domainSecondPartNotBlank = (value: string) =>
  domainSingleDot(value) && !isBlank(value.split('@')[1].split('.')[1]);

const validation = (mail: string) => {
  if (isBlank(mail)) {
    return ErrorMessages.blank;
  }

  if (!singleAt(mail)) {
    return ErrorMessages.at;
  }

  if (!hasDomain(mail)) {
    return ErrorMessages.blank_domain;
  }

  if (!domainSingleDot(mail)) {
    return ErrorMessages.two_parts_domain;
  }

  if (!domainSecondPartNotBlank(mail)) {
    return ErrorMessages.second_part_domain_blank;
  }
};

export default validation;
