import { slack } from '@/app/layout';
import Avatar from '@/components/common/Avatar.component';
import Spacer from '@/components/common/Spacer';
import { useGetProfile } from '@/queries/profile/useGetProfile';
import { CircularProgress, Divider, IconButton, Menu, MenuItem, Tooltip, Typography, Avatar as MuiAvatar } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function NavbarProfile() {
  const [isAvatarBtnClicked, setAvatarBtnClicked] = useState(false);
  const [isProfileLoading, setProfileLoading] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const { profile, loading } = useGetProfile();

  const avatarBtnRef = useRef<HTMLButtonElement>(null);

  const clickAvatar = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.setItem('prevPath', pathName);
    router.push(slack.getOpenIdUrl());
  };

  const onLogout = () => {};

  useEffect(() => {
    setProfileLoading(loading);
  }, [loading]);
  return (
    <>
      <Tooltip title="Profile">
        <IconButton ref={avatarBtnRef} sx={{ p: 0 }} onClick={() => setAvatarBtnClicked(true)}>
          {profile && <Avatar name={profile?.fullName} src={profile?.profile.avatarUrl} />}
          {!profile && <MuiAvatar alt="Avatar" />}
          {isProfileLoading && (
            <CircularProgress
              sx={{
                position: 'absolute',
              }}
            />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: '45px',
          '& .MuiPaper-root': {
            padding: '0 15px',
          },
        }}
        id="menu-appbar"
        anchorEl={avatarBtnRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isAvatarBtnClicked}
        disableScrollLock={true}
        onClose={() => setAvatarBtnClicked(false)}
      >
        {!profile && (
          <MenuItem onClick={clickAvatar}>
            <Typography textAlign="center">Log in</Typography>
          </MenuItem>
        )}
        {profile && (
          <Typography textAlign="center" component="div" pt={1}>
            Hi,{' '}
            <Typography fontWeight="500" component="span">
              {profile.fullName}
            </Typography>
          </Typography>
        )}
        {profile && <Spacer />}
        {profile && <Divider />}
        {profile && (
          <MenuItem>
            <Typography textAlign="center">Setting</Typography>
          </MenuItem>
        )}
        {profile && (
          <MenuItem>
            <Typography textAlign="center">Log out</Typography>
          </MenuItem>
        )}
      </Menu>
    </>
  );
}

export default NavbarProfile;
