import React from "react"
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import JogNote from "../components/jogs/JogNote";

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

it("renders text in jog note correctly", () => {
    act( () => {
        render(<JogNote distance={1} time={1} date={Date.parse(new Date()) / 1000} submitJogDelete={() => {}}/>, container)
    });

    expect(container.textContent).toBe("2020-7-27Speed:60 kmhTime:1 minDistance:1 km");
});

it("renders image in jog note correctly", () => {
    act( () => {
        render(<JogNote distance={1} time={1} date={Date.parse(new Date()) / 1000} submitJogDelete={() => {}}/>, container)
    });

    expect(container.querySelector('.jogIcon')).toBeInTheDocument();
});