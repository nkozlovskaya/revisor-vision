import { memo } from "react";

interface PhotoItemProps{
    albumId: string;
    url: string;
}

export const PhotoItem = memo((props: PhotoItemProps) => {
    const { url } = props;

    return (
        <div>
            <img src={ url } alt='some_photo' />    
        </div>
    )
 })