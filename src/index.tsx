import React from "react";
import {store} from "./redux/state";
import {rerenderEntireTree} from "./render";


store.subscriber(rerenderEntireTree)
rerenderEntireTree()

