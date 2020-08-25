import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import emailValidator, { ErrorMessages } from './EmailValidator';

type Status = 'success' | 'sending' | 'error' | null;

const SignUp = ({ subscribe, status }: { subscribe: any; status: Status }) => {
  const [mail, setMail] = useState('');
  const [error, setError] = useState<string>();

  useEffect(() => {
    setError(null);
  }, [mail]);

  useEffect(() => {
    if (status === 'error') {
      setError(ErrorMessages.server_invalid);
    }
  }, [status]);

  const onSubmit = () => {
    const errorMessage = emailValidator(mail);

    if (errorMessage) {
      setError(errorMessage);
    } else {
      subscribe({ EMAIL: mail });
    }
  };

  return (
    <Form
      className={'signup'}
      onSubmit={() => {}}
      error={false}
      warning={false}
    >
      <h3>בואו להיות חברי העט שלי</h3>
      <Form.Input
        onChange={(e) => setMail(e.target.value)}
        placeholder={'Email'}
        error={error}
        label={'כתובת מייל'}
      />
      <Form.Button
        onClick={() => onSubmit()}
        loading={status === 'sending'}
        inverted
        fluid
      >
        הרשמה
      </Form.Button>
    </Form>
  );
};

export default SignUp;
