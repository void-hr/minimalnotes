import './notescontainer.css'
import ibg from '../../assets/background.png'
import lock from '../../assets/lock.svg'
const NotesContainer = () => {
  return (
    <div className='b'>

    <div className='p_content'>
    <img src={ibg} alt="banner"  />
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.
    Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
          </div>
    
    <p className='encrypted_text'>
      <img src={lock} alt="" />end-to-end encrypted</p>
    
    </div> 
  )
}

export default NotesContainer