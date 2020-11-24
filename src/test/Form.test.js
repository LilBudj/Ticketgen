import React from "react"
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {Provider} from "react-redux";
import store from "../redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import JogForm from "../components/jog_form/JogForm";

let container = null;
beforeEach( () => {
    container = document.createElement("div");
    document.body.appendChild(container)
});

afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders form labels correctly", () => {
    act( () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <JogForm/>
            </BrowserRouter>
        </Provider>, container)
    });

    expect(container.textContent).toBe("Distance:Time:Date: Save");
});

it("renders form fields correctly", () => {
    act( () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <JogForm/>
            </BrowserRouter>
        </Provider>, container)
    });

    expect(container.querySelector('.inputField')).toBeInTheDocument();
});

it("renders submit button correctly", () => {
    act( () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <JogForm/>
            </BrowserRouter>
        </Provider>, container)
    });

    expect(container.querySelector('.jogSubmit')).toBeInTheDocument();
});