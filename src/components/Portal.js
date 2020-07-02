import { useState, useEffect } from 'react'
import { createPortal } from "react-dom";

export default function Portal({ children }) {
   const [movieModalContainer] = useState(document.createElement('div'));

   useEffect(() => {
      let modalRoot = document.getElementById('modal-root');
      if (!modalRoot) {
         const tempEl = document.createElement('div');
         tempEl.id = 'modal-root';
         document.body.append(tempEl);
         modalRoot = tempEl;
      }
      modalRoot.appendChild(movieModalContainer);
      return () => {
         modalRoot.removeChild(movieModalContainer)
       }
   }, [movieModalContainer])

   return createPortal(
      children,
      movieModalContainer
   )
}
