import { FC, memo } from "react"

interface NavbarProps{
    className?: string
}

export const Navbar: FC = memo((props: NavbarProps) => {
    return(
        <div>
            <button>Каталог</button>
            <button>Избранное</button>
        </div>
    )
})