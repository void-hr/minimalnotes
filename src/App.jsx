import './App.css'
import AddNotesPopup from './components/addnotespopup/AddNotesPopup';

import NotesContainer from './components/notescontainer/NotesContainer'
import NotesMenu from './components/notesmenu/NotesMenu'
import { useEffect, useRef, useState } from 'react';
function App() {
  const [isPopup, setIsPopup] = useState(false);
  const  popupRef = useRef(null);

  useEffect(()=> {
    const handleClickOutside = (e) => {
      if(popupRef.current && !popupRef.current.contains(e.target)) {
        setIsPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },[isPopup]);

  return (
    <div className='d'>

      <NotesMenu setIsPopup={setIsPopup}/>
      <NotesContainer />
      <div ref={popupRef}>
      {
          isPopup && <AddNotesPopup />
        }
      </div>
    
    
    </div>
  )
}

export default App
