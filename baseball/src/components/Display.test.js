import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Display from './Display'
import { italic } from "ansi-colors";

//with the strike count underneath and a header Balls and the ball count underneath'

describe('<Display />', () => {
    it('should render a header Strikes', () => {
       const disp = render(<Display />)
       disp.getByText(/strikes/i) 
    })


    it('should render a header Balls', () => {
        const bHead = render(<Display />)
        bHead.getByText(/balls/i)
    })



    
})