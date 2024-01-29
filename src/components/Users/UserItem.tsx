import {  memo,useState} from "react";
import styles from '../../App.module.css';
import { AlbumList } from "../Albums/AlbumList";
import {albumAPI} from "../../redux/reducers/Albums/AlbumService/AlbumService";
import { ViewButton } from "../../redux/types/buttonView";
import { ItemList } from "../UI/ItemList/ItemList";
import { Loader } from "../UI/Loader/Loader";

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
                      {isLoading && <Loader/>}
                      {error && <h1>Произошла ошибка при загрузке</h1>}
                      {albums && (<AlbumList albums={albums} />)}
                  </>
              }
            
        </div>
    );
})




// import styles from './UserItem.module.css';
// import { useAppDispatch } from "../../../hooks/useAppDispatch";
// import { fetchAlbums } from "../../../redux/reducers/Albums/ActionCreators/albumActionCreator";
// import { useAppSelector } from "../../../hooks/useAppSelector";
 // const dispatch = useAppDispatch();

        // useEffect(() => {
        // dispatch((fetchAlbums(userId)))
        // }, [dispatch, userId])

    // const { albums } = useAppSelector(state => state.albums);
    