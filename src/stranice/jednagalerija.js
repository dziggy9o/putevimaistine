import React, { useState, useCallback} from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";




export default function JG(props) {
        const [trenutnaSlika, settrenutnaSlika] = useState(0);
        const [otvorenModal, setotvorenModal] = useState(false);
    
        const otvoriModal = useCallback((event, { photo, index }) => {
        settrenutnaSlika(index);
        setotvorenModal(true);
        }, []);
    
        const closeLightbox = () => {
        settrenutnaSlika(0);
        setotvorenModal(false);
        };

        return (
                <div>
                    <Gallery photos={props.slike} onClick={otvoriModal} />
                    <ModalGateway>
                    {otvorenModal ? (
                    <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={trenutnaSlika}
                    views={props.slike.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                    }))}
                    />
                    </Modal>
                    ) : null}
                    </ModalGateway>
                </div>
  
        )
}

