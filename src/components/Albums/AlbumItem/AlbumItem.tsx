import { memo, useState } from "react";
import styles from '../../../App.module.css'
import { ViewButton } from "../../../redux/types/buttonView";
import { ItemList } from "../../UI/ItemList/ItemList";

interface AlbumItemProps{

    title: string;
}

export const AlbumItem = memo((props: AlbumItemProps) => {

    const[view, setView] = useState<ViewButton>(ViewButton.PLUS);

    const onTogglePlus = () => { 
        setView(view === ViewButton.PLUS? ViewButton.MINUS : ViewButton.PLUS);
      }

    const {title} = props;
    return (
        <div>
              <ItemList
                  className={styles.title}
                view={view}
                onClick={onTogglePlus}
                  text={title }/>
              {/* {view === ViewButton.MINUS &&
                  <div>
                      {isLoading && <h1>Идет загрузка...</h1>}
                      {error && <h1>Произошла ошибка при загрузке</h1>}
                      {albums && (<AlbumList albums={albums} />)}
                  </div>
              } */}
        </div>
    )
 })