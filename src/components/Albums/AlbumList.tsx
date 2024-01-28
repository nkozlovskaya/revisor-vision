import { memo } from "react";
import { AlbumType } from "../../redux/types/albumType";
import { AlbumItem } from "./AlbumItem";
import styles from '../../App.module.css';

interface AlbumListProps{
    albums: AlbumType[];
}

export const AlbumList = memo((props: AlbumListProps) => {

    const {albums} = props;
    return (
        <div className={styles.albums_list}>
            {albums.map(album => (
                <AlbumItem
                    title={album.title}
                    key={album.albumId}
                    albumId={album.albumId}

                />
            ))}
        </div>
    )
 })