import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { GalleryPopupModalStyles } from '../styles/gallerySectionsStyles/galleryPopupModalStyles';
import IconSvg from '../reusableComponents/iconSvg';

const PopupGallery = ({
    open,
    closeModal,
    images,
    currentIndex,
    prevImage,
    nextImage,
    handleFileDownload,
    theme,
    downloadPath,
}: {
    open: boolean
    closeModal: any
    images: any
    currentIndex: number
    prevImage: any
    nextImage: any
    handleFileDownload: any
    theme: any
    downloadPath: string
}) => (

    <Modal
        open={open}
        onClose={closeModal}
        slotProps={{
            backdrop: {
                sx: {
                    backgroundColor: theme.palette.grey[900],
                },
            },
        }}
    >
        <GalleryPopupModalStyles >
            <Box
                className="close-modal"
                onClick={closeModal}
            >
                <IconSvg name='x-menu.svg' />
            </Box>
            <div className='image-wrapper'>
                <img
                    src={`${downloadPath}${images[currentIndex].file.file}`}
                    alt={`Image ${currentIndex + 1}`}
                    height="450px"
                    style={{
                        objectFit: 'contain',
                        borderRadius: '4px',
                        width: images[currentIndex]?.orientation === 'horizontal' ? '100%' : 'auto',
                        height: images[currentIndex]?.orientation === 'horizontal' ? '400px' : 'revert-layer',
                        maxHeight: '100%',
                    }}
                />
            </div>
            <div className='controller-wrapper'>
                <Box
                    className="nav-button"
                    onClick={prevImage}
                >
                    <IconSvg name='caret-left.svg' />
                </Box>
                <Box
                    className="download-button"
                    onClick={handleFileDownload}
                    style={{ display: 'flex', gap: '8px' }}
                >
                    <Typography
                        variant="bodySAlt"
                        sx={{
                            color: theme.palette.primary[200],
                            letterSpacing: '0.1em',
                        }}
                    >
                        Download
                    </Typography>
                    <IconSvg name='download.svg' />
                </Box>
                <Box
                    className="download-button-mobile"
                    onClick={handleFileDownload}
                >
                    <IconSvg name='download.svg' />
                </Box>
                <Box
                    className="nav-button"
                    onClick={nextImage}
                >
                    <IconSvg name='caret-right.svg' />
                </Box>
            </div>
        </GalleryPopupModalStyles>
    </Modal>
);

export default PopupGallery;
