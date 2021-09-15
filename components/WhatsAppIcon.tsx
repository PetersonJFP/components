import React from 'react'
import { FaWhatsappSquare } from 'react-icons/fa'

type Props = {
  phoneNumber: string
}

const WhatsAppIcon = ({ phoneNumber }) => {
  return (
    <span className="fixed bottom-4 right-4">
      <a
        href={`https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare
          size={48}
          className="text-green-500 bg-white rounded-lg animate-bounce"
        />
      </a>
    </span>
  )
}

WhatsAppIcon.displayName = 'WhatsAppIcon'

export default WhatsAppIcon
