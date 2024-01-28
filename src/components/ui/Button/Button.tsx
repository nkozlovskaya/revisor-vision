import { memo } from "react";
import { ViewButton } from "../../../redux/types/buttonView";

interface ButtonProps{
    view: ViewButton;
    onClick: () => void;
}

export const Button = memo((props: ButtonProps) => {
    const { view, onClick } = props;
    return (
        <button className={`${view}`} onClick={onClick}/>
    )
})