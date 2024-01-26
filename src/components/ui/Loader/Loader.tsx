import { classNames } from '../../../helpers/classNames/classNames'
import './Loader.css'

export interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return <div className={classNames('lds-spinner ', {}, [className])}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div>
      </div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div></div>
  </div>
}
