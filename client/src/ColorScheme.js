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

    fire: function (o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
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

const deuterColors = ["#08519c", "#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#eff3ff", "#757575"]

const defaultColors = ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#e34a33", "#b30000", "#757575"]

var activeColor = {
    colorScreen: 0,
    colorTheme: defaultColors

};

export const getActiveColorScheme = () => {
    return activeColor;
}

export const setColorDeuter = () => {

    activeColor.colorScreen = 1;
    activeColor.colorTheme = deuterColors;
    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor.colorScreen);
    }
    
};

export const setColorProtan = () => {
    
    activeColor.colorScreen = 1;
    activeColor.colorTheme = deuterColors;
    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor.colorScreen);
    }
};

export const setColorTritan = () => {

    activeColor.colorScreen = 0;
    activeColor.colorTheme = defaultColors;
    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor.colorScreen);
    }
};

export const setColorDefault = () => {

    activeColor.colorScreen = 0;
    activeColor.colorTheme = defaultColors;

    if (callOnColorChange !== null && callOnColorChange !== undefined) {
        callOnColorChange.fire(activeColor.colorScreen);
    }
};