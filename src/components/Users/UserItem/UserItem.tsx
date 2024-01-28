import {  memo,useState} from "react";
import styles from '../../../App.module.css';
import { AlbumList } from "../../Albums/AlbumList/AlbumList";
import {albumAPI} from "../../../redux/reducers/Albums/AlbumService/AlbumService";
import { ViewButton } from "../../../redux/types/buttonView";
import { Button } from "../../UI/Button/Button";
import { ItemList } from "../../UI/ItemList/ItemList";


interface UsersItemProps{
    className?: string;
    name: string;
    userId: string;
};


export const UserItem = memo((props: UsersItemProps) => {
    const { name, userId } = props;
   
    const { data: albums, error, isLoading, }=albumAPI.useFetchAlbumsQuery(userId)

    const[view, setView] = useState<ViewButton>(ViewButton.PLUS);

    const onTogglePlus = () => { 
        setView(view === ViewButton.PLUS? ViewButton.MINUS : ViewButton.PLUS);
      }

      
      return (
          <div className={styles.item} >
              <ItemList
                  className={styles.name}
                  view={view} onClick={onTogglePlus}
                  text={name } />
              {view === ViewButton.MINUS &&
                  <>
                      {isLoading && <h1>Идет загрузка...</h1>}
                      {error && <h1>Произошла ошибка при загрузке</h1>}
                      {albums && (<AlbumList albums={albums} />)}
                  </>
              }
            
        </div>
    );
})


 {/* <div className={styles.item_content} >
                <Button view={view} onClick={onTogglePlus}/>
                <div className={styles.name}>
                    {name}
                </div>
            </div> */}

// import styles from './UserItem.module.css';
// import { useAppDispatch } from "../../../hooks/useAppDispatch";
// import { fetchAlbums } from "../../../redux/reducers/Albums/ActionCreators/albumActionCreator";
// import { useAppSelector } from "../../../hooks/useAppSelector";
 // const dispatch = useAppDispatch();

        // useEffect(() => {
        // dispatch((fetchAlbums(userId)))
        // }, [dispatch, userId])

    // const { albums } = useAppSelector(state => state.albums);
    