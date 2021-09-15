import { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'

type Props = { children: React.ReactNode; className?: string }

const Alert = ({ children, className }: Props) => {
  const [show, setShow] = useState(true)

  if (!show) {
    return null
  }

  return (
    <div className={`w-full bg-white p-6 shadow-lg relative ${className}`}>
      {children}
      <button className="absolute top-5 right-5">
        <RiCloseLine size="24" onClick={() => setShow(false)} />
      </button>
    </div>
  )
}

Alert.displayName = 'Alert'

export default Alert
