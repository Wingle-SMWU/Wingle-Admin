import Tabbar from '@components/home/Tabbar';
import styled from '@emotion/styled';
import useDetailDispatch from '@hooks/useDetailDispatch';
import React from 'react';
import { SecondaryButton } from '@components/common/buttons';
import { useLocation } from 'react-router-dom';
import { ADMIN_TAB_LIST } from '@utils/constants';
import { MembershipModal } from '@components/common/modal';
import Contents from '../components/detail/Contents';

const Wrapper = styled.div<{ modal: boolean }>(({ theme, modal }) => ({
  position: 'relative',
  width: '100%',
  height: '150rem',
  background: modal ? theme.color.gray200 : theme.color.white,
}));

const Card = styled.div<{ card: string }>(({ card, theme }) => ({
  width: '70rem',
  height: '60rem',
  margin: `0 ${theme.spacing.pcPadding}`,

  backgroundImage: card ? `url(${card})` : '',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

const ButtonGroup = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: `2rem ${theme.spacing.pcPadding}`,
  borderTop: `1px solid ${theme.color.gray200}`,
}));

function Detail() {
  const location = useLocation();
  const { status } = location.state;

  const {
    data,
    userId,
    isOpen,
    setIsOpen,
    buttonStatus,
    setButtonStatus,
    inputs,
    setInputs,
    handleSubmit,
    isLoading,
  } = useDetailDispatch();

  return (
    <Wrapper modal={isOpen}>
      <Tabbar currIdx={ADMIN_TAB_LIST.indexOf(status)} status={status} />
      {data && (
        <>
          <Card card={data.data.data.idCardImage} />
          <Contents
            userId={userId}
            data={data.data.data}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            inputs={inputs}
            setInputs={setInputs}
            handleSubmit={handleSubmit}
            setButtonStatus={setButtonStatus}
          />
          <ButtonGroup>
            <SecondaryButton
              buttonType="submit"
              clickEvent={() => {
                setIsOpen(true);
                setButtonStatus('수락');
              }}
              buttonName="가입수락"
              active={status === ADMIN_TAB_LIST[0]}
            />
          </ButtonGroup>
        </>
      )}

      <MembershipModal
        modal={isOpen}
        setModal={setIsOpen}
        buttonStatus={buttonStatus}
        clickEvent={handleSubmit}
        isLoading={isLoading}
      />
    </Wrapper>
  );
}

export default Detail;
