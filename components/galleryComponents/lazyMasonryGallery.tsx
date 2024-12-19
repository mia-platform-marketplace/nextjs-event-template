
'use client';

import { useState } from 'react';
import { GalleryGalleryStyled } from '../styles/gallerySectionsStyles/galleyGalleryStyled';
import theme from '../../lib/MUIutils/theme';
import InfiniteScroll from 'react-infinite-scroll-component';
import PopupGallery from './galleryPopup';


const LazyMasonryGallery = ({
  gallery,
  downloadPath
}: {
  gallery: any[] | undefined;
  downloadPath: string
}) => {


  const [items, setItems] = useState(gallery && gallery?.length > 20 ? gallery.slice(0, 20) : gallery)
  const [isOpen, setIsOpen] = useState(false);
  const [more, setMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    if (gallery) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (gallery) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
    }
  };

  const handleFileDownload = () => {
    if (gallery) {
      const fileURL = `${downloadPath}${gallery[currentIndex].file.file}`
      fetch(fileURL).then(function (t) {
        if (t.ok) {
          return t.blob().then((b) => {
            const a = document.createElement('a')
            a.href = URL.createObjectURL(b)
            a.setAttribute('download', gallery[currentIndex].file.name)
            a.click()
          })
        }
      })
    }
  }

  const fetchData = () => {
    if (gallery && items) {
      if (gallery.length >= items.length + 12) {
        const slice = gallery.slice(0, items.length + 12)
        setItems(slice)
      } else if (gallery.length === items.length) {
        setMore(false)
      } else {
        setItems(gallery)
        setMore(false)
      }

    }
  }

  return (
    <>
      <GalleryGalleryStyled>
        <InfiniteScroll
          dataLength={items?.length ?? 0}
          next={fetchData}
          hasMore={more}
          loader={<></>}
          className='gallery-container'
        >
          {items && items.map((image, index) => {
            const fileURL = `${downloadPath}${image.file.file}`
            return (
              <div
                key={index}
                className={`galleryItem ${image.orientation === 'vertical' ? 'vertical' : 'horizontal'}`}
                onClick={() => openModal(index)}
              >
                <div className='innerImageWrapper'>
                  <img
                    src={fileURL}
                    alt={`Image ${index + 1}`}
                    width={'300px'}
                    className="galleryImage"
                  />
                </div>
              </div>
            )
          })}
        </InfiniteScroll>
      </GalleryGalleryStyled>
      {gallery && isOpen && (
        <div>
          <PopupGallery
            open={isOpen}
            closeModal={closeModal}
            images={gallery}
            currentIndex={currentIndex}
            prevImage={prevImage}
            nextImage={nextImage}
            handleFileDownload={handleFileDownload}
            theme={theme}
            downloadPath={downloadPath}
          />
        </div>
      )}
    </>
  );
};

export default LazyMasonryGallery;
