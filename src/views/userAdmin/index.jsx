import React, { Component } from 'react'
import ModalAdmin from '../../components/Form/modals/ModalAdmin'
import TableAdmin from '../../components/Form/modals/TableAdmin'
import Search from '../../components/Form/modals/Seach'
import Header from './Hearder'
export default class index extends Component {
  render() {
    return (
      <React.Fragment>
         <Header/>
        <ModalAdmin/>
        <Search/>
        <hr/>
        <TableAdmin/>
      </React.Fragment>
    )
  }
}
