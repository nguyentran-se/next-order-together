import Spacer from '@/components/common/Spacer';
import { Divider } from '@mui/material';
import PaymentSetting from './PaymentSetting';

function ProfileSetting() {
  return (
    <>
      <PaymentSetting />
      <Spacer size={10} />
      <Divider />
    </>
  );
}

export default ProfileSetting;
