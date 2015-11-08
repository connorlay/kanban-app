import React             from 'react'
import AltContainer      from 'alt/AltContainer'
import Lanes             from './Lanes.jsx'
import LaneActions       from '../actions/LaneActions'
import LaneStore         from '../stores/LaneStore'
import {DragDropContext} from 'react-dnd'
import HTML5Backend      from 'react-dnd-html5-backend'

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
  addItem () {
    LaneActions.create({name: 'New lane'})
  }

  render () {
    return (
      <div>
        <button className='add-lane' onClick={this.addItem}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            items: () => LaneStore.getState().lanes || []
          }}
        >
          <Lanes />
        </AltContainer>
      </div>
    )
  }
}
