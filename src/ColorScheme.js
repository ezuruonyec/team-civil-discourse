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
//for color blindness and accessibility
export const fallbackColor = "#757575";

//Default Color Schemes + Changes
    /** Purple -> Light Blue */
//export const defaultColors = ["#edf8fb", "#bfd3e6", "#9ebcda", "#8c96c6", "#8856a7", "#810f7c"];
    /** Purple -> Pink */
//export const defaultColors = ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#c51b8a", "#7a0177"];
    /** Burgundy -> Pink -> Purple */
//export const defaultColors = ["#f1eef6", "#d4b9da", "#c994c7", "#df65b0", "#dd1c77", "#980043"];
    /**Reds */
//export const defaultColors = ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#a50f15"];
    /** Orange/Browns */
export const defaultColors = ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#d95f0e", "#993404"];
/* Original: export const defaultColors = ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#2c7fb8", "#253494"];
*/
export const greyscaleColors = ["#FAFAFA", "#E9E9E9", "#C8C8C8", "#969696", "#646464", "#323232"];
export const deuterColors = ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"];
export const tritanColors = ["#F8FF01", "#FFE002", "#FE9D00", "#FF6501", "#FF2301", "#D50002"];
export const protanColors = ["#fff2c8", "#ffeca2", "#FE9D00", "#FF6501", "#FF2301", "#D50002"];
export const redYellowColors = ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#e34a33", "#b30000"];

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

export const setColorProtan = () => {
    activeColor.colorScreen = 4;
    activeColor.colorTheme = protanColors;
    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor);
    }
};

export const setColorRedYellow = () => {
    activeColor.colorScreen = 4;
    activeColor.colorTheme = redYellowColors;
    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor);
    }
};