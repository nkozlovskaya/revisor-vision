import { memo, useState } from "react";
import { PhotoType } from "../../redux/types/photoType";
import { PhotoItem } from "./PhotosItem";
import styles from '../../App.module.css';
import { Modal } from "../Modal/Modal";

interface PhotoListProps{
    photos: PhotoType[];
}

export const PhotoList = memo((props: PhotoListProps) => {

    const { photos } = props;

    // const [modalActive, setModalActive] = useState(false);

   

    return (
        <div className={styles.photos_list}>
            {photos.map((photo) => (
                
                <PhotoItem
                    key={photo.id}
                        photo={photo}
                        // onClick={() => handleOpenModal()}
                    />
                  
                
            ))}
            {/* {photos[0] && <PhotoItem photo={photos[0]} />} */}
        </div>
    )
 })