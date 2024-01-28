import { classNames } from '../../../helpers/classNames/classNames'
import  './PageError.css'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {

  const reloadPage = () => {
    window.location.reload()
  }

  return (
      <div className={classNames('PageError', {}, [className])}>
          <p>Произошла непредвиденная ошибка</p>
          <button onClick={reloadPage}>Обновить страницу</button>
      </div>
  )
}
