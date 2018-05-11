import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'

export default class Todo extends Component {
  render(){
    return(
      <div>
        <PageHeader name='Tasks' small='include'></PageHeader>
      </div>
    )
  }
}
