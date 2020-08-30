import React, { useState, useEffect } from 'react';
import { Modal } from 'semantic-ui-react';
import NewsletterButton from './NewsletterButton';
import SignUp from './SignUp';
import Success from './Success';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url =
  '//liordolev.us4.list-manage.com/subscribe/post?u=d0be9ba97c5089c9a16515ff4&amp;id=6df0cf2fe1';

type NewletterProps = {
  onOpen: () => void;
  onClose: () => void;
};

const Newletter = ({ onOpen, onClose }: NewletterProps) => {
  const [open, setOpen] = useState(false);
  const [inertProps, setInertProps] = useState({});

  useEffect(() => {
    if (open) {
      onOpen();
      setInertProps({ tabIndex: '-1' });
    } else {
      onClose();
      setInertProps({});
    }
  }, [open]);

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<NewsletterButton {...inertProps} />}
      className={'newsletter'}
    >
      <Modal.Content>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status }) => (
            <>
              {status !== 'success' && (
                <SignUp status={status} subscribe={subscribe} />
              )}
              {status === 'success' && <Success />}
            </>
          )}
        />
      </Modal.Content>
    </Modal>
  );
};

export default Newletter;
