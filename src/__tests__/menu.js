import '../matchMediia.mock'
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import Menu from '../component/Menu';
import { render, act, fireEvent } from "@testing-library/react";
import { queries } from '@testing-library/dom';
import user from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'

const history = createMemoryHistory();

test('should redirect and update history', async () => {
    const { container } = render(<Router history={ history }><Menu /></Router>)
    const aboutLink = queries.getByText( container, /about/i) 

    await act( async() => { 
         fireEvent.click( aboutLink )
    });
    expect(history.location.pathname).toEqual('/about') 
})


test('should redirect and update dom', async() => {
   const { container }  = render(<Router history={ history }> <Menu /> </Router>);

    await act( async() => { 
        user.click( queries.getByText( container, /About/i ))
    }) ;
    expect( queries.getByText( container, /About Us/i )).toBeInTheDocument()
});


test('ensure all list item are displayed', async() => {
    const { container } = render( <Router history={ history}> <Menu /> </Router> );

    const menuItems = queries.getAllByRole( container, /menuitem/i )
    await act(async() => expect( menuItems ).toHaveLength( 8 ))
    expect( menuItems ).not.toContain(null)
})