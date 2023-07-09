import React from 'react';

type InfoType = {
  title: string;
  info: string;
};

const ProfileInfo = ({ title, info }: InfoType) => {
  return (
    <div>
      <p>{title}</p>
      <p>{info}</p>
    </div>
  );
};

export default ProfileInfo;
