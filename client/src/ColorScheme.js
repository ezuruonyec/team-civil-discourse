var callOnColorChange;

function CallOnColorChange() {
    this.handlers = [];  // observers
}

CallOnColorChange.prototype = {

    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function (whateverParameters, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, whateverParameters);
        });
    }
}

export const subscribe = (listenerToCall) => {
    if (callOnColorChange === null || callOnColorChange === undefined) {
        callOnColorChange = new CallOnColorChange();
    }

    callOnColorChange.subscribe(listenerToCall);
}

export const unsubscribe = (listenerToCall) => {
    if (callOnColorChange === null || callOnColorChange === undefined) {
        return;
    }

    callOnColorChange.unsubscribe(listenerToCall);
}

export const fallbackColor = "#757575";
export const defaultColors = ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#e34a33", "#b30000"];
export const greyscaleColors = ["#FAFAFA", "#E9E9E9", "#C8C8C8", "#969696", "#646464", "#323232"];
export const deuterColors = ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"];
export const tritanColors = ["#A1FE00", "#A1FE00", "#FFF500", "#FFCE00", "#FF0000", "#C60301"];

var activeColor = {
    colorScreen: 0,
    colorTheme: defaultColors
};

export const getActiveColorScheme = () => {
    return activeColor;
}

export const setColorDefault = () => {

    activeColor.colorScreen = 0;
    activeColor.colorTheme = defaultColors;

    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor);
    }
};

export const setColorGreyscale = () => {

    activeColor.colorScreen = 1;
    activeColor.colorTheme = greyscaleColors;

    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor);
    }
};

export const setColorDeuter = () => {

    activeColor.colorScreen = 2;
    activeColor.colorTheme = deuterColors;
    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor);
    }

};

export const setColorTritan = () => {

    activeColor.colorScreen = 3;
    activeColor.colorTheme = tritanColors;
    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor);
    }
};