// const heading =React.createElement("h1",{},"Hello world from react");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent =React.createElement("div",{id:"parent"},[
    React.createElement("divd",{id:"child"},[
        React.createElement("h1",{},"I AM AN H1 TAG"),
        React.createElement("h2",{},"I AM AN H2 TAG")   
    ]),
    React.createElement("divd",{id:"child2"},[
        React.createElement("h1",{},"I AM AN H1 TAG"),
        React.createElement("h2",{},"I AM AN H2 TAG")   
    ]),

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);