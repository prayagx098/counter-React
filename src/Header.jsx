import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://media3.giphy.com/media/z1HdiobjzYIrm/giphy.gif?cid=6c09b952nixbvxga8p1nvvxw5yb5adjbamcl00sb01b5o8fz&ep=v1_gifs_search&rid=giphy.gif&ct=g'
              height='60'
              alt=''
              loading='lazy'
            />
            <h1 className='text-dark fw-bolder'>COUNTER APP</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header

