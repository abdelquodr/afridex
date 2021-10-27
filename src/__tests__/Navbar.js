import '../matchMediia.mock'
import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import { Navbar } from "../component";
import '@testing-library/jest-dom/extend-expect'
import { queries } from '@testing-library/dom'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'


test(`render drawer when the menu butoon is clicked`, async () => {

    const { container } = render( <Router> <Navbar /> </Router > )
    const menuButton = queries.getByRole( container, /toggle/i )
    const drawer = queries.queryByRole( container, /drawer/i )
  
    expect(drawer).not.toBeInTheDocument()
    await act( async() => { 
        user.click(menuButton)
    })
    waitFor( () => expect(drawer).toBeInTheDocument() )
}) 


