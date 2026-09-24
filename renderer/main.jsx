import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Veyling Studio</h1>
            <p>React and JSX are working!</p>
        </div>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);