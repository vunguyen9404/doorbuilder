var redux = require('redux');
var stateDefault = require('./state');

var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DOOR_MINUS_WIDTH':
            return {...state, dimensions: {...state.dimensions, width: state.dimensions.width - 1}};
        case 'DOOR_PLUS_WIDTH':
            return {...state, dimensions: {...state.dimensions, width: state.dimensions.width + 1}};
        case 'DOOR_MINUS_HEIGHT':
            return {...state, dimensions: {...state.dimensions, height: state.dimensions.height - 1}};
        case 'DOOR_PLUS_HEIGHT':
            return {...state, dimensions: {...state.dimensions, height: state.dimensions.height + 1}};
        case 'CHANGE_WIDTH':
            return {...state, dimensions: {...state.dimensions, width: action.width}};
        case 'CHANGE_HEIGHT':
            return {...state, dimensions: {...state.dimensions, height: action.height}};
        case 'CHANGE_DOOR_COUNT':
            return {...state, doorCount: action.number};
        case 'CHANGE_DOOR_FRAME':
            return {...state, frameColor: action.color};
        case 'CHANGE_DOOR_DESIGN':
            return {...state, doorDesign: action.design};
        case 'CHANGE_GLASS_OPTION':
            return {...state, glassOption: action.glass};
        case 'CHANGE_WALL_COLOR':
            return {...state, wallColor: action.color};
        case 'CHANGE_FLOORING':
            return {...state, flooring: action.flooring};
        case 'CHANGE_ROOM_STYLE':
            return {...state, roomStyle: action.style};
        case 'OPEN_BUILDER':
            return {...state, openBuilder: action.builder};
        case 'CHANGE_FUR':
            return {...state, furniture: action.fur};
        case 'CHANGE_DESIGNKEY':
            return {...state, design: action.design};
        default:
    }
    return state;
}
var store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));
module.exports = store;