import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ren() {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

store.subscribe(ren);
ren();
