import { memo } from "react";
import { PhotoType } from "../../redux/types/photoType";
import { PhotoItem } from "./PhotosItem";
import styles from '../../App.module.css';

interface PhotoListProps{
    photos: PhotoType[];
}

export const PhotoList = memo((props: PhotoListProps) => {

    const {photos} = props;
    return (
        <div className={styles.albums_list}>
            {photos.map(photo => (
                <PhotoItem
                    url={photo.url}
                    key={photo.albumId}
                    albumId={photo.albumId}

                />
            ))}
        </div>
    )
 })