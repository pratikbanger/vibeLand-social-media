import React from 'react';
import PostShare from '../PostShare/PostShare'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

function ShareModal({ modalOpen, setModalOpen }) {

    const [opened, { close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={modalOpen} onClose={() => close(setModalOpen(false))} title="What's on your mind?" centered size='auto'>
                <PostShare />
            </Modal>
        </>
    );
}

export default ShareModal
