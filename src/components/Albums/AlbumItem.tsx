import { memo, useState } from "react";
import styles from '../../App.module.css'
import { ViewButton } from "../../redux/types/buttonView";
import { ItemList } from "../UI/ItemList/ItemList";
import { photoAPI } from "../../redux/reducers/Photos/PhotoService/PhotoService";
import { PhotoList } from "../Photos/PhotosList";

interface AlbumItemProps{
    albumId: string;
    title: string;
}

export const AlbumItem = memo((props: AlbumItemProps) => {
    const { albumId, title } = props;

    const { data: photos, error, isLoading, }=photoAPI.useFetchPhotosQuery(albumId)

    const[view, setView] = useState<ViewButton>(ViewButton.PLUS);

    const onTogglePlus = () => { 
        setView(view === ViewButton.PLUS? ViewButton.MINUS : ViewButton.PLUS);
      }

    return (
        <div>
              <ItemList
                  className={styles.title}
                view={view}
                onClick={onTogglePlus}
                  text={title }/>
              {view === ViewButton.MINUS &&
                  <div>
                      {isLoading && <h1>Идет загрузка...</h1>}
                      {error && <h1>Произошла ошибка при загрузке</h1>}
                      {photos && (<PhotoList photos={photos} />)}
                  </div>
              }
        </div>
    )
 })