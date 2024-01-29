import { memo, useState } from "react";
import { Tooltip } from 'react-tooltip'
import { PhotoType } from "../../redux/types/photoType";
import { Modal } from "../Modal/Modal";
import styles from '../../App.module.css';


interface PhotoItemProps{
    photo: PhotoType;
}

export const PhotoItem = memo((props: PhotoItemProps) => {
    const { photo } = props;

    const [modalActive, setModalActive] = useState(false);
    
     const handleOpenModal = () => { 
         setModalActive(true)
    }


    return (
        <div>
            <div
                data-tooltip-id="photo-tooltip"
                onClick={handleOpenModal}
            >
                    <img src={ photo.url } alt='somePhoto' />    
                
            </div>
            <Tooltip id="photo-tooltip" >
               {photo.title.slice(0, 90)}     
            </Tooltip>
            <Modal
                active={modalActive}
                setActive={setModalActive}
                children={
                    <img
                        src={photo.url}
                        alt='somePhoto'
                        className={styles.modal_image}
                    />
                }
            />        

        </div>
        )
    })