import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" },[React.createElement("div", { className: "child" },
// [React.createElement("h1", {}, "I'm a heading tag"),React.createElement("h2", {}, "I'm a heading (h2) tag")]),React.createElement("div", { className: "child" },
// [React.createElement("h1", {}, "I'm a heading tag"),React.createElement("h2", {}, "I'm a heading (h2) tag")])   ]);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//heading (react element) ==>babel ==> React.createElement("div",{id :"heading1"},This is Bhanu kumar kotha) ==> js engine understands it
const heading = (<h1 id="heading1" className="headings">This is Bhanu kumar kotha</h1>);

const Title = ()=>(<div>
    <h1 className="headings">Hello coherts 🐱‍🚀</h1>
    {heading}
</div>)

// functional component 




const HeadingComponent = ()=>(<div id="container">
    {Title()}
    <Title></Title>
    <Title/>
    <h1 className="headings">Welcome to portal</h1>
</div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);