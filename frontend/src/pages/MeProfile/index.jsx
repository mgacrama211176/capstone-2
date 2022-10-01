import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import style from './style.module.css';
import sampleBanner from './sample-banner.png';
import sampleProfile from './sample-profile.png';
import { Avatar, Button, Alert, Typography } from '@mui/material';
import { Container } from '@mui/system';

function MeProfile() {
  const { auth } = useAuth();

  const { user } = auth;

  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <Container
      className={style.pageContainer}
      maxWidth={false}
      disableGutters={true}
    >
      <div className={style.banner}>
        <img src={sampleBanner} className={style.bannerImage} alt="Banner" />
      </div>
      <Container
        maxWidth={false}
        className={style.profileContainer}
      >
        <div className={style.avatarContainer}>
          <Avatar
            src={sampleProfile}
            alt="avatar"
            className={style.avatarImage}
          />
        </div>
        <div className={style.basicInfoContainer}>
          <Typography variant="h3">{user.username}</Typography>
          <Typography variant="subtitle2">
            {user.subscribers} Subscribers
          </Typography>
        </div>
        <div className={style.actions}>
          <Button type="button">Subscribe</Button>
        </div>
      </Container>
      <Container maxWidth={false} className={style.contentContainer}>
        <Alert variant="filled" severity="warning">
          Page is currently underconstruction
        </Alert>
      </Container>
    </Container>
  );
}

export default MeProfile;
