import { Button } from "../Button/Button"
import styles from '../../../App.module.css'
import { memo } from "react"
import { ViewButton } from "../../../redux/types/buttonView";

interface ItemListProps{
    className?: string;
    view: ViewButton;
    onClick: () => void;
    text: string;
}

export const ItemList = memo((props: ItemListProps) => {
    
    const { view, onClick, text, className } = props;
    return (
           <div className={styles.item_content} >
                <Button view={view} onClick={onClick}/>
                <div className={className}>
                    {text}
                </div>
            </div>
    )
})