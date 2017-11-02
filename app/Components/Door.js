import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import DoorItem from './DoorItem';
import Config from '../Config';

class Door extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doorStates: {
                doors_1: ["closed", "openedAllExtremeLeft"],
                doors_1_swing_doors: ["closedSwing", "openedSwingLeft"],
                doors_2: ["closed", "openedAllLeft"],
                doors_2_wall_slide_doors: ["closed", "openedExtremeMiddleSplit"],
                doors_2_swing_doors: ["closedSwing", "openedSwingBoth"],
                doors_3: ["closed", "openedAllLeft", "openedAllRight"],
                doors_4: ["closed", "openedMiddleSplit", "openedAllRightStacked", "openedAllLeftStacked"],
                doors_6: ["closed", "openedMiddleSplit", "openedAllRightStacked", "openedAllLeftStacked"]
            }
        }

        this.doorState = 0;
        this.prevDoorCount = this.props.stateSc.doorCount;
    }

    resetDoors() {
        this.doorState = 0;
        this.prevDoorCount = this.props.stateSc.doorCount;
        this.animateDoor();
    }

    handleTouch(e) {
        this.animateNext();
    }

    getDoorState() {
        if (this.props.stateSc.doorCount) {
            if (this.state.doorStates["doors_" + this.props.stateSc.doorCount + "_" + this.props.stateSc.design.type]) {
                return this.state.doorStates["doors_" + this.props.stateSc.doorCount + "_" + this.props.stateSc.design.type];
            }
            return this.state.doorStates["doors_" + this.props.stateSc.doorCount];
        }
        return null;
    }

    animateNext() {
        var theDoorStates = this.getDoorState();
        this.doorState++;
        if (this.doorState >= theDoorStates.length) {
            this.doorState = 0;
        }
        this.animateDoor();
    }

    animateDoor() {
        var theDoorStates = this.getDoorState();
        if (!theDoorStates) {
            return;
        }

        switch (theDoorStates[this.doorState]) {
            case "closed":
                this.animateCloseDoors();
                break;
            case "closedSwing":
                this.closedSwing();
                break;
            case "openedSwingLeft":
                this.openedSwingLeft();
                break;
            case "openedSwingBoth":
                this.openedSwingBoth();
                break;
            case "openedAllExtremeLeft":
                this.openedAllExtremeLeft();
                break;
            case "openedAllLeft":
                this.animateAllDoorsLeft();
                break;
            case "openedAllRight":
                this.animateAllDoorsRight();
                break;
            case "openedMiddleSplit":
                this.openedMiddleSplit();
                break;
            case "openedExtremeMiddleSplit":
                this.openedExtremeMiddleSplit();
                break;
            case "openedAllRightStacked":
                this.openedAllRightStacked();
                break;
            case "openedAllLeftStacked":
                this.openedAllLeftStacked();
                break;
        }
    }

    animateAllDoorsLeft() {
        var movePercentage = (1 / this.props.stateSc.doorCount * 100).toFixed(2);
        var moveAmount = movePercentage;
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            moveAmount = i * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": "-" + moveAmount + "%" });
        }
    }

    animateAllDoorsRight() {
        var movePercentage = (1 / this.props.stateSc.doorCount * 100).toFixed(2);
        var moveAmount = movePercentage;
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            moveAmount = (this.props.stateSc.doorCount - i - 1) * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": moveAmount + "%" });
        }
    }

    closedSwing() {
        var half = this.props.stateSc.doorCount / 2;
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            var origin = i < half ? "1%" : "99%";
            TweenLite.set($("#door_" + i).parent(), { perspective: 450 });
            TweenLite.to($("#door_" + i), 1, { "rotationY": 0, transformOrigin: origin });
        }
    }

    openedSwingLeft() {
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            TweenLite.set($("#door_" + i).parent(), { perspective: 450 });
            TweenLite.to($("#door_" + i), 1, { "rotationY": -90, transformOrigin: "1%" });
        }
    }

    openedSwingBoth() {
        var half = this.props.stateSc.doorCount / 2;
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            var rotation = i < half ? -90 : 90;
            var origin = i < half ? "1%" : "99%";
            TweenLite.set($("#door_" + i).parent(), { perspective: 450 });
            TweenLite.to($("#door_" + i), 1, { "rotationY": rotation, transformOrigin: origin });
        }
    }

    openedMiddleSplit() {
    // Move left
        var movePercentage = (1 / this.props.stateSc.doorCount * 100).toFixed(2);
        var moveAmount = movePercentage;
        for (var i = 0; i < this.props.stateSc.doorCount / 2; i++) {
            moveAmount = i * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": "-" + moveAmount + "%" });
        }

    // Move Right
        var moveAmount = movePercentage;
        for (var i = this.props.stateSc.doorCount / 2; i < this.props.stateSc.doorCount; i++) {
            moveAmount = (this.props.stateSc.doorCount - i - 1) * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": moveAmount + "%" });
        }
    }

    openedExtremeMiddleSplit() {
        console.log("running extem middle split");
        // Move left
        var movePercentage = (1 / this.props.stateSc.doorCount * 100).toFixed(2);
        var moveAmount = movePercentage;
        for (var i = 0; i < this.props.stateSc.doorCount / 2; i++) {
            moveAmount = moveAmount + i * movePercentage;
            console.log("doing left");
            TweenLite.to($("#door_" + i), 1, { "left": "-" + moveAmount + "%" });
        }

        // Move Right
        var moveAmount = movePercentage;
        for (var i = this.props.stateSc.doorCount / 2; i < this.props.stateSc.doorCount; i++) {
            moveAmount = moveAmount + (this.props.stateSc.doorCount - i - 1) * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": moveAmount + "%" });
        }
    }

    openedAllRightStacked() {
        var movePercentage = (1 / this.props.stateSc.doorCount * 100).toFixed(2);
        var moveAmount = movePercentage;
        for (var i = 0; i < this.props.stateSc.doorCount / 2; i++) {
            moveAmount = (this.props.stateSc.doorCount - 1 - i) * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": moveAmount - movePercentage + "%" });
        }

        // Move Right
        var moveAmount = movePercentage;
        for (var i = this.props.stateSc.doorCount / 2; i < this.props.stateSc.doorCount; i++) {
            moveAmount = (this.props.stateSc.doorCount - i - 1) * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": moveAmount + "%" });
        }
    }

    openedAllLeftStacked() {
        var movePercentage = (1 / this.props.stateSc.doorCount * 100).toFixed(2);
        var moveAmount = movePercentage;
        var half =this.props.stateSc.doorCount / 2;
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            if (i < half) {
                moveAmount = i * movePercentage;
                TweenLite.to($("#door_" + i), 1, { "left": "-" + moveAmount + "%" });
            } else {
                moveAmount = i * movePercentage;
                TweenLite.to($("#door_" + i), 1, { "left": "-" + (moveAmount - movePercentage) + "%" });
            }
        }
    }

    openedAllExtremeLeft() {
        var movePercentage = (1 / this.props.stateSc.doorCount * 100).toFixed(2);
        var moveAmount = movePercentage;
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            moveAmount = moveAmount + i * movePercentage;
            TweenLite.to($("#door_" + i), 1, { "left": "-" + moveAmount + "%" });
        }
    }
    
    animateCloseDoors() {
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
            TweenLite.to($("#door_" + i), 1, { "left": "0%" });
        }
    }

    openTheDoor() {
        var half = this.props.stateSc.doorCount / 2;
        for (var i = 0; i < this.props.stateSc.doorCount; i++) {
          var rotation = i < half ? -90 : 90;
          var origin = i < half ? "1%" : "99%";
          TweenLite.set($("#door_" + i).parent(), { perspective: 450 });
          TweenLite.to($("#door_" + i), 1, { "rotationY": rotation, transformOrigin: origin });
        }
    }

    componentDidUpdate() {
        if (this.prevDoorCount !== this.props.stateSc.doorCount) {
            this.resetDoors();
        }
    }

    render() {
        let doorList = [];
        
        for (var i=0; i < this.props.stateSc.doorCount; i++) {
            doorList.push(<DoorItem key={i} id={'door_' + i} ref={'door_'+i} />);
        }
        
        let borderImage = "url(" + Config.host + this.props.stateSc.frameColor.image + ")";
        let width = this.props.stateSc.dimensions.width * 2.5;
        let height = this.props.stateSc.dimensions.height * 2.5;
        let left = (1000 - width)/2;
        let classDoorContainer = "door-container "+ this.props.stateSc.design.type +" doors-"+this.props.stateSc.doorCount;
        return(
            <div className={classDoorContainer} style={{width: width, height: height, left: left}} onClick={this.handleTouch.bind(this)}>
                <div className="door-frame">
                    <div className="glass" style={{backgroundImage: "url()"}}>
                        <div className="door" style={{borderImageSource:borderImage}}></div>
                    </div>
                </div>
            
                <div className="doors-list">
                    {doorList}
                </div>
            </div>
        );
    }
}

module.exports = connect(function(state) {
    return {stateSc: state}
})(Door);