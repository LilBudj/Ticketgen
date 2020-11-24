import React from "react"
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {Provider} from "react-redux";
import store from "../redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import Header from "../components/header/Header";

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

it("renders header links correctly", () => {
    act( () => {
        render(<Provider store={store}>
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        </Provider>, container)
    });

    expect(container.textContent).toBe("JOGSINFOCONTACT US");
});

it("renders header logo correctly", () => {
    act( () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </Provider>, container)
    });

    expect(container.querySelector('.logoImg')).toBeInTheDocument();
});