import withLogger from "../ulti/logger.js";
import { createStore } from "./core.js";
import reducer from "./reducer.js";


const { attach, connect, dispatch } = createStore(withLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}
