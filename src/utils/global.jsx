import React from "react";
const Global = {};
const Local = {};
Global.Navigator = {
    set: (navigateObject) => {
        if (navigateObject) {
            Local.navigator = {
                navigate: navigateObject,
            };
        } else {
            Local.navigator = {
                // eslint-disable-next-line no-unused-vars
                navigate: (..._params) => { },
            };
        }
    },
    get: () => Local.navigator || null,
};
export default Global;