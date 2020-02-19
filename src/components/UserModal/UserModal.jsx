import React from 'react';
import { Dialog, IconButton, withMobileDialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useUserModal from './useUserModal';
import { useTranslation } from 'react-i18next';

function UserModal({ fullScreen }) {
  const { t } = useTranslation();
  const userModal = useUserModal();

  return (
    <Dialog
      open={userModal.isOpen}
      onClose={userModal.close}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
    >
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <IconButton onClick={userModal.close} children={<CloseIcon />} />
      </div>
      <div className="p3">

      </div>
    </Dialog>
  );
}

export default withMobileDialog()(UserModal);
