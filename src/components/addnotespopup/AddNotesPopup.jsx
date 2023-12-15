import React from 'react'
import './addnotespopup.css'

const colourPallete = [{
    
        id: 1,
        colour: '#B38BFA'
    },
    {
        id: 2,
        colour: '#FF79F2'
    },
    {
        id: 3,
        colour: '#43E6FC'
    },
    {
        id: 4,
        colour: '#F19576'
    },
    {
        id: 5,
        colour: '#0047FF'
    },
    {
        id: 6,
        colour: '#6691FF'
    },

]
const AddNotesPopup = () => {
  return (
    <div className='add_notes_popup'>
        <div className="add_notes_inner">
        <h2>Create New Group</h2>
        
        <div className="group_name">
            <p>Group Name</p>
            <input type="text" name="" id="" />

            </div>
        <div className="choose_colour">Choose colour
            <div className='select_color'>

            
            {colourPallete?.map((elem)=> {
              return (<div key={elem.id} className="colour_pallete" style={{background: elem.colour}}></div>)
            })}
</div>
        </div>
        <div className="create_group_container">

        <button className='create_group'>Create</button>
        </div>

        </div>
     
    </div>
  )
}

export default AddNotesPopup