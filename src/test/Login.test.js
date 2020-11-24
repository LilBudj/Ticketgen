import React from "react"
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {Provider} from "react-redux";
import store from "../redux/reduxStore";
import Login from "../components/login/Login";

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

it("renders login page correctly", () => {
    act( () => {
        render(<Provider store={store}>
            <Login/>
        </Provider>, container)
    });

    expect(container.textContent).toBe("Let me in");
});