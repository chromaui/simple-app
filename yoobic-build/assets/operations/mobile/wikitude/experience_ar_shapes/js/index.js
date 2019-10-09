/* tslint:disable */
//ar_shapes from stitching

var colors = ["red", "blue", "green", "yellow"];
class Shape {
    constructor(category) {
        this.category = category;
        this.corners = [];
        this.segments = [];
        this.points = [];
        this.pointPairs = [];
        this.surface = null;
        this.screen = null;
        this.isBlocked = false;

    }
    reset() {
        this.corners = [];
        this.segments = [];
        this.points = [];
        this.pointPairs = [];
        this.surface = null;
    }
    addPoint(newPoint, model) {
        let res = false;
        let firstPoint = this.getFirstPoint();
        this.points.push(newPoint);
        let isNewPoint = true;
        let numPoints = this.points.length;

        if (firstPoint) {
            let pair = {
                point1: this.points[numPoints - 2],
                point2: this.points[numPoints - 1]
            };
            let distance = this.computeDistance(firstPoint, newPoint);
            if (distance < 0.03) {
                isNewPoint = false;
                this.deleteLastPoint();
                pair.point2 = firstPoint;
                this.surface = this.calcPolygonArea(this.points);
                res = true;
            }
            this.addPair(pair);
        }
        if (isNewPoint) { this.addCorner(model); }
        return res;
    }
    translatePoint(index, dx, dy) {
        let oldPoint = this.points[index];
        let newPoint = {
            x: dx,
            y: dy
        };
        this.points[index] = newPoint;
    }
    setShapeBlocked() {
        this.setCornersUndraggable(); // useless ?
        this.segments = [];
        this.corners = [];
        this.isBlocked = true;
    }
    setCornersUndraggable() {
        for (i = 0; i < this.corners.length; i++) {
            this.corners[i].draggable = false;
        }
    }
    updatePairs() {
        this.deleteAllPointPairs();
        let numPoints = this.points.length;
        if (numPoints > 1) {
            if (this.surface != null) {
                for (i = 0; i < numPoints - 1; i++) {
                    let pair = {
                        point1: this.points[i],
                        point2: this.points[i + 1]
                    };
                    this.addPair(pair);
                    this.surface = this.calcPolygonArea(this.points);
                }
                let lastPair = {
                    point1: this.points[numPoints - 1],
                    point2: this.points[0]
                };
                this.addPair(lastPair);
            } else {
                for (i = 0; i < numPoints - 1; i++) {
                    let pair = {
                        point1: this.points[i],
                        point2: this.points[i + 1]
                    };
                    this.addPair(pair);
                }
            }
        }
    }
    addCorner(corner) {
        this.corners.push(corner);
    }
    addPair(pair) {
        this.pointPairs.push(pair);
    }
    addSegment(segment) {
        this.segments.push(segment);
    }
    deleteAllCorners() {
        this.corners = [];
    }
    deleteLastCorner() {
        if (this.corners.length > 0) { this.corners.pop(); }
    }

    deleteAllSegments() {
        this.segments = [];
    }
    getPoints() {
        return this.points;
    }
    getFirstPoint() {
        if (this.points[0]) {
            return this.points[0];
        } else return null;
    }
    deleteLastPoint() {
        if (this.points.length > 0) { this.points.pop(); }
    }
    getCorners() {
        return this.corners;
    }
    getSegments() {
        return this.segments;
    }
    getPointPairs() {
        return this.pointPairs;
    }
    deleteAllPointPairs() {
        this.pointPairs = [];
    }
    getLastPair() {
        if (this.pointPairs.length > 0) {
            return this.pointPairs[this.pointPairs.length - 1];
        } else return null;

    }
    getSegmentsAdjacentToCorner(indexCorner) {
        if (indexCorner > this.points.length - 1) {
            return null;
        }
        if (indexCorner === this.points.length - 1 && this.surface === null) {
            return [this.segments.length - 1];
        }
        if (indexCorner === this.points.length - 1 && this.surface != null) {
            return [this.segments.length - 1, this.segments.length - 2];
        }
        if (indexCorner === 0) {
            if (this.surface === null) {
                if (this.segments.length > 0) {
                    return [0];
                } else {
                    return null;
                }
            } else {
                return [0, this.segments.length - 1]
            }
        }
        return [indexCorner - 1, indexCorner]

    }
    getAllDrawables() {
        if (this.screen != null) {
            return (this.corners.concat(this.segments).concat(this.screen));
        } else {
            return (this.corners.concat(this.segments));
        }
    }
    deleteAllDrawables() {
        this.deleteAllCorners();
        this.deleteAllSegments();
    }
    computeDistance(p1, p2) {
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    calcPolygonArea() {
        var total = 0;
        let vertices = this.points

        for (var i = 0, l = vertices.length; i < l; i++) {
            var addX = vertices[i].x;
            var addY = vertices[i == vertices.length - 1 ? 0 : i + 1].y;
            var subX = vertices[i == vertices.length - 1 ? 0 : i + 1].x;
            var subY = vertices[i].y;

            total += (addX * addY * 0.5);
            total -= (subX * subY * 0.5);
        }
        return Math.abs(total);
    }
    computeArea() {
        var area = this.calcPolygonArea();
        this.surface = area;
    }
    collectGarbage() {
        // destroy segments
        for (let i = 0; i < this.segments.length; i++) {
            this.segments[i].destroy();
        }
        // destroy corners
        for (let i = 0; i < this.corners.length; i++) {
            this.corners[i].destroy();
        }
    }
    collectGarbageScreen() {
        // destroy screen
        if (this.screen != null) {
            this.screen.destroy();
        }
    }
}

var World = {

    trackingOrientation: AR.CONST.INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION.VERTICAL,
    platformAssisstedTrackingSupported: false,
    createOverlaysCalled: false,
    shapes: [],
    isTracking: false,
    isShapeOver: true,
    clickPlaneAllowed: true,

    closeArExperience: function closeArExperience() {
        AR.platform.sendJSONObject({
            name: 'button',
            action: 'closeWikitudePlugin'
        });
    },

    clickStart: function clickStartFn() {
        World.changeTrackerState()
    },

    clickReset: function clickResetFn() {
        document.getElementById("boxTitle").innerHTML = "Draw ";
        World.deleteLastShapeModels();
        World.ClickNext();
    },

    ClickNext: function ClickNextFn() {
        if (World.shapes.length > 0) {
            World.resetModels();
            let lastShape = World.shapes[World.shapes.length - 1];
            lastShape.collectGarbage();
            lastShape.setShapeBlocked();
            World.updateDrawables();
            document.getElementById("boxTitle").innerHTML = "Draw next shape";
            document.getElementById("boxText").innerHTML = "";
            document.getElementById("buttonLeft").style.display = "none";
        }
        World.clickPlaneAllowed = true;
        World.updateDrawables();
    },

    clickOnPlane: function clickOnPlaneFn(xpos, ypos) {
        if (World.clickPlaneAllowed === true) {

            if (World.isShapeOver) {
                let newShape = new Shape();
                World.shapes.push(newShape);
                World.isShapeOver = false;
            }
            let shapesLen = World.shapes.length;
            let shapeIndex = shapesLen - 1;

            let color = colors[shapeIndex % 4];
            let hexColor = World.convertHexColor(color);

            cornerModel = World.createCornerModel(xpos, ypos, hexColor);

            let newPoint = {
                x: xpos,
                y: ypos
            };

            shapeFinished = World.shapes[shapeIndex].addPoint(newPoint, cornerModel);
            if (shapeFinished === true) {
                World.isShapeOver = true;
                // World.resetModels();
                // World.shapes[World.shapes.length - 1].segments = [];
                // World.updateDrawables();
                World.updateAreaRatio();
                World.updateShapeScreen();
                World.clickPlaneAllowed = false;

            }

            let newPair = World.shapes[shapeIndex].getLastPair();

            if (newPair) {
                let p1 = newPair.point1;
                let p2 = newPair.point2;
                let segment = World.createSegmentDrawableHtml(p1, p2, shapeIndex);
                World.shapes[shapeIndex].addSegment(segment);
            }
            World.updateDrawables();
        }
    },
    updateShapeScreen: function updateShapeScreenFn() {
        let shapeIndex = World.shapes.length - 1;
        let lastShape = World.shapes[shapeIndex];
        let color = colors[shapeIndex % 4];
        let colorScreen = World.createColorScreen(lastShape.getPoints(), color);
        lastShape.collectGarbageScreen();
        lastShape.screen = colorScreen;
    },

    addShapeSegments: function addShapeSegments(shapeIndex) {
        console.log("addShapeSegments() called")
        let pairs = World.shapes[shapeIndex].getPointPairs();
        let pairsLen = pairs.length;

        for (i = 0; i < pairsLen; i++) {
            let p1 = pairs[i].point1;
            let p2 = pairs[i].point2;
            // console.log(i);
            let segment = World.createSegmentDrawableHtml(p1, p2, shapeIndex);
            World.shapes[shapeIndex].addSegment(segment);
        }
        World.updateDrawables();
    },

    createColorScreen: function createColorScreenFn(corners, color) {
        let svgPolygon = World.writeSvgHtmlPolygon(corners, color);

        let html = svgPolygon.html;
        let x1 = svgPolygon.minX;
        let y1 = svgPolygon.minY;
        let x2 = svgPolygon.maxX;
        let y2 = svgPolygon.maxY;

        var htmlDrawable = new AR.HtmlDrawable({ html: html }, 1, {
            zOrder: 0,
            viewportHeight: 1024,
            viewportWidth: 1024,
            scale: {
                x: (x2 - x1),
                y: (y2 - y1)
            },
            translate: {
                x: (x1 + x2) / 2,
                y: (y1 + y2) / 2,
            },
            rotate: {
                z: 0
            },
            opacity: 1
        });
        return htmlDrawable;
    },
    writeSvgHtmlPolygon: function writeSvgHtmlPolygonFn(points, color) {
        let endHTML = "' style='' transform='scale(1,-1)'/></svg></div>";
        let middleHTML = '';
        let scalingFactor = 1;
        let minX = 0;
        let maxX = 0;
        let minY = 0;
        let maxY = 0;
        for (i = 0; i < points.length; i++) {
            let point = points[i];
            let x = scalingFactor * point.x;
            let y = scalingFactor * point.y;
            if (i == 0) {
                minX = x;
                maxX = x;
                minY = y;
                maxY = y;
            }
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
            middleHTML += x.toString() + ',' + y.toString() + ' ';
        }
        let beginningHTML = "<div style='background:transparent;margin:0;'><svg style='background:transparent;fill:" + color + ";stroke:" + color + ";stroke-width:0.01' fill-opacity='0.3' stroke-opacity='0.7' preserveAspectRatio='none'  width='100%' height='100%' viewBox='" + minX.toString() + " " + (0 - maxY).toString() + " " + (maxX - minX).toString() + " " + ((maxY - minY)).toString() + "'><polygon points='";
        let fullHTML = beginningHTML + middleHTML + endHTML;
        result = {
            html: fullHTML,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY
        };
        return result;
    },
    createSegmentDrawableHtml: function createSegmentDrawableHtmlFn(point1, point2, shapeIndex) {
        let x1 = point1.x;
        let y1 = point1.y;
        let x2 = point2.x;
        let y2 = point2.y;

        let dx = x2 - x1;
        let dy = y2 - y1;

        let distance = Math.sqrt(dx * dx + dy * dy);
        let angle = World.calculateAngle(dx, dy);

        let color = colors[shapeIndex % 4];

        let html = "<div style = 'background-color:none;'>\
        <svg style='background:transparent;fill:" + color + "' fill-opacity='0.7' preserveAspectRatio='none'  width='100%' height='100%' viewBox='0 0 100 100'>\
             <rect width='100' height='100'  />\
        </svg>\
    </div>"

        var htmlDrawable = new AR.HtmlDrawable({ html: html }, 1, {
            zOrder: 0,
            viewportHeight: 1024,
            viewportWidth: 1024,
            scale: {
                x: distance,
                y: 0.01,
                z: 1
            },
            translate: {
                x: x1 + dx / 2,
                y: y1 + dy / 2
            },
            rotate: {
                z: angle
            },
            opacity: 1
        });

        if (this.tracker.state === AR.InstantTrackerState.TRACKING) {
            return htmlDrawable;
        }
    },
    createCornerModel: function createCornerModelFn(xpos, ypos, hexColor) {
        let scalingFactor = 0.1;
        if (this.tracker.state === AR.InstantTrackerState.TRACKING) {
            var circle = new AR.Circle(0.1, {
                zOrder: 1,
                scale: {
                    x: 1 * scalingFactor,
                    y: 1 * scalingFactor,
                    z: 1 * scalingFactor
                },
                translate: {
                    x: xpos,
                    y: ypos,
                },
                rotate: {
                    /* Create with a random rotation to provide visual variety. */
                    z: 0 //Math.random() * 360.0
                },
                style: {
                    fillColor: hexColor
                },
                opacity: 0.7,
                onDragBegan: function( /*x, y*/ ) {
                    if (this.draggable === true) {
                        oneFingerGestureAllowed = true;
                        this.scale.x = this.scale.x * 3;
                        this.scale.y = this.scale.y * 3;
                        this.opacity = 1;

                    }
                },
                onDragChanged: function(relativeX, relativeY, intersectionX, intersectionY) {
                    if (this.draggable === true) {

                        if (oneFingerGestureAllowed) {
                            /*
                                We recommend setting the entire translate property rather than its individual components
                                as the latter would cause several call to native, which can potentially lead to performance
                                issues on older devices. The same applied to the rotate and scale property.
                            */
                            this.translate = {
                                x: intersectionX,
                                y: intersectionY
                            };
                            // if (World.shapes.length > 0/* && !World.isShapeOver*/) {
                            //     let indexLastShape = World.shapes.length - 1;
                            //     indexPoint = World.shapes[indexLastShape].getCorners().indexOf(this);
                            //     World.shapes[indexLastShape].translatePoint(indexPoint, intersectionX, intersectionY);
                            //     World.shapes[indexLastShape].updatePairs();
                            //     World.redrawDrag(indexLastShape, indexPoint);
                            // }
                        }
                    }
                },
                onDragEnded: function(relativeX, relativeY, intersectionX, intersectionY) {
                    if (this.draggable === true) {
                        if (World.shapes.length > 0 /* && !World.isShapeOver*/ ) {
                            let indexLastShape = World.shapes.length - 1;
                            indexPoint = World.shapes[indexLastShape].getCorners().indexOf(this);
                            World.shapes[indexLastShape].translatePoint(indexPoint, intersectionX, intersectionY);
                            World.shapes[indexLastShape].updatePairs();
                            // if (World.shapes[indexLastShape].segments != []) {
                            World.redrawDrag(indexLastShape, indexPoint);
                            // }
                        }
                        if (World.isShapeOver) {
                            World.resetModels();
                            World.updateAreaRatio();
                            World.updateShapeScreen();
                            World.updateDrawables();
                        }
                        this.scale.x = this.scale.x / 3;
                        this.scale.y = this.scale.y / 3;
                        this.opacity = 0.7;

                    }
                },
                onError: World.onError
            });
            circle.draggable = true;
            return circle;
        }
        return null;
    },

    convertHexColor: function convertHexColor(color) {
        switch (color) {
            case 'red':
                return "#A70000";
            case 'blue':
                return "#060BC5";
            case 'yellow':
                return "#DABE00";
            case 'green':
                return "#008B00";
        }
    },
    calculateAngle: function calculateAngleFn(dx, dy) {
        //returns angle in degree
        let angleRad = Math.atan2(dy, dx);
        let angleDeg = angleRad * 180 / Math.PI;
        return -angleDeg;
    },

    computeAreaRatio: function computeAreaRatioFn() {
        let firstArea = World.shapes[0].surface;
        let totalArea = 0.00001;
        for (i = 0; i < World.shapes.length; i++) {
            World.shapes[i].computeArea();
            totalArea += World.shapes[i].surface;
        }
        return firstArea / totalArea;
    },

    resetModels: function resetModelsFn() {
        let allModels = [];
        for (var i = 0, l = World.shapes.length; i < l; i++) {
            allModels = allModels.concat(World.shapes[i].getAllDrawables());
        }
        this.instantTrackable.drawables.removeCamDrawable(allModels);
    },

    updateDrawables: function updateDrawablesFn() {
        World.resetModels();

        var drawables = [];
        var shapesLen = World.shapes.length;
        for (i = 0; i < shapesLen; i++) {
            let shape = World.shapes[i];
            drawables = drawables.concat(shape.getAllDrawables());
        }
        var drawablesLen = drawables.length;
        this.instantTrackable.drawables.addCamDrawable(drawables);
    },

    redrawDrag: function redrawDragFn(indexShape, indexPoint) {
        let indexes = World.shapes[indexShape].getSegmentsAdjacentToCorner(indexPoint);
        if (indexes != null) {
            for (i = 0; i < indexes.length; i++) {
                let index = indexes[i];

                let pair = World.shapes[indexShape].pointPairs[index];
                let segment = World.createSegmentDrawableHtml(pair.point1, pair.point2, indexShape);
                this.instantTrackable.drawables.removeCamDrawable(World.shapes[indexShape].segments[index]);

                World.shapes[indexShape].segments[index].destroy();
                World.shapes[indexShape].segments[index] = segment;
                this.instantTrackable.drawables.addCamDrawable(World.shapes[indexShape].segments[index]);
            }
        }
    },

    deleteLastShapeModels: function deleteLastShapeModelsFn() {
        let indexLastShape = World.shapes.length - 1;
        let lastShape = World.shapes[indexLastShape]
        lastShape.collectGarbage();
        lastShape.collectGarbageScreen();

        let lastShapeModels = lastShape.getAllDrawables();
        World.shapes.pop();
        World.isShapeOver = true;
        this.instantTrackable.drawables.removeCamDrawable(lastShapeModels);
    },
    updateAreaRatio: function updateAreaRatioFn() {
        let AreaRatio = World.computeAreaRatio();
        document.getElementById("boxTitle").innerHTML = "area1 / (all areas) =";
        document.getElementById("boxText").innerHTML = Math.round(100 * AreaRatio).toString() + " %";
        document.getElementById("buttonLeft").style.display = "flex";
    },

    init: function initFn() {
        // AR.context.onScreenClick = World.onFirstClickScreen;
        /*
            When you'd like to make use of the SMART feature, make sure to call this function and await the result
            in the AR.hardware.smart.onPlatformAssistedTrackingAvailabilityChanged callback.
         */
        // AR.hardware.smart.isPlatformAssistedTrackingSupported();
        document.getElementById("buttonLeft").style.display = "none";
        World.createOverlays();
    },

    createOverlays: function createOverlaysFn() {
        if (World.createOverlaysCalled) {
            return;
        }
        document.getElementById("boxTitle").innerHTML = "Press start to calibrate";
        document.getElementById("boxText").innerHTML = "";
        World.createOverlaysCalled = true;

        var crossHairsRedImage = new AR.ImageResource("assets/crosshairs_red.png", {
            onError: World.onError
        });
        this.crossHairsRedDrawable = new AR.ImageDrawable(crossHairsRedImage, 1.0);

        var crossHairsBlueImage = new AR.ImageResource("assets/crosshairs_blue.png", {
            onError: World.onError
        });
        this.crossHairsBlueDrawable = new AR.ImageDrawable(crossHairsBlueImage, 1.0);

        var crossHairsGreenImage = new AR.ImageResource("assets/crosshairs_green.png", {
            onError: World.onError
        });
        this.crossHairsGreenDrawable = new AR.ImageDrawable(crossHairsGreenImage, 1.0);

        this.tracker = new AR.InstantTracker({
            onChangedState: function onChangedStateFn(state) {
                if (state === AR.InstantTrackerState.INITIALIZING) {
                    document.getElementById("boxText").innerHTML = "Initializing";
                } else {
                    if (World.platformAssisstedTrackingSupported) {
                        document.getElementById("boxTitle").innerHTML = "Assisted";
                    }
                    document.getElementById("boxText").innerHTML = "Tracking started";
                }
            },
            /*
                Device height needs to be as accurate as possible to have an accurate scale returned by the Wikitude
                SDK.
             */
            deviceHeight: 1.0,
            onError: World.onError,
            onChangeStateError: World.onError,
            smartEnabled: World.platformAssisstedTrackingSupported,
            trackingPlaneOrientation: World.trackingOrientation
        });
        this.instantTrackable = new AR.InstantTrackable(this.tracker, {
            drawables: {
                cam: World.crossHairsBlueDrawable,
                initialization: World.crossHairsRedDrawable,
                enabled: true
            },
            onTrackingStarted: function onTrackingStartedFn() {
                World.isTracking = true;
                /* Do something when tracking is started (recognized). */
            },
            onTrackingStopped: function onTrackingStoppedFn() {
                //this.instantTrackable.destroy();
                /* Do something when tracking is stopped (lost). */
                World.isTracking = false;

            },
            onTrackingPlaneClick: function onTrackingPlaneClickFn(xpos, ypos) {
                /*
                    xPos and yPos are the intersection coordinates of the click ray and the instant tracking plane.
                    They can be applied to the transform component directly.
                */
                if (this.enabled) {
                    World.clickOnPlane(xpos, ypos);
                }
            },
            onError: World.onError
        });
        // World.trackable = this.instantTrackable;
        setInterval(
            function() {
                if (World.tracker.canStartTracking) {
                    World.instantTrackable.drawables.initialization = [World.crossHairsGreenDrawable];
                } else {
                    World.instantTrackable.drawables.initialization = [World.crossHairsRedDrawable];
                }
            },
            1000
        );
    },

    changeTrackerState: function changeTrackerStateFn() {
        if (this.tracker.state === AR.InstantTrackerState.INITIALIZING) {
            document.getElementById('buttonRight').style.display = 'flex';
            document.getElementById('buttonTopLeft').innerHTML = 'Stop';
            this.tracker.state = AR.InstantTrackerState.TRACKING;
            document.getElementById("boxTitle").innerHTML = "draw area1 (your products)";
            document.getElementById("boxText").innerHTML = "";
            document.getElementById('buttonDrawer').style.display = 'flex';

        } else {
            document.getElementById('buttonRight').style.display = 'flex';
            document.getElementById('buttonTopLeft').innerHTML = 'Start';
            document.getElementById('buttonDrawer').style.display = 'none';
            this.tracker.state = AR.InstantTrackerState.INITIALIZING;
            document.getElementById("boxTitle").innerHTML = "Press start to calibrate";
            document.getElementById("boxText").innerHTML = "";
            World.clickReset()
        }
    },
    changeTrackingHeight: function changeTrackingHeightFn(height) {
        this.tracker.deviceHeight = parseFloat(height);
    },

    onError: function onErrorFn(error) {
        alert(error);
    },



    hideButtonDrawer: function hideButtonDrawer() {
        document.getElementById('buttonDrawer').style.display = 'none';
    },

    showButtonDrawer: function showButtonDrawer() {
        document.getElementById('buttonDrawer').style.display = 'flex';
    }
};

AR.hardware.smart.onPlatformAssistedTrackingAvailabilityChanged = function(availability) {
    switch (availability) {
        case AR.hardware.smart.SmartAvailability.INDETERMINATE_QUERY_FAILED:
            /* Query failed for some reason; try again or accept the fact. */
            document.getElementById("boxTitle").innerHTML = "Not assisted";
            World.createOverlays();
            break;
        case AR.hardware.smart.SmartAvailability.CHECKING_QUERY_ONGOING:
            /* Query currently ongoing; be patient and do nothing or inform the user about the ongoing process. */
            break;
        case AR.hardware.smart.SmartAvailability.UNSUPPORTED:
            /* Not supported, create the scene now without platform assisted tracking enabled. */
            document.getElementById("boxTitle").innerHTML = "Not assisted";
            World.createOverlays();
            break;
        case AR.hardware.smart.SmartAvailability.SUPPORTED_UPDATE_REQUIRED:
        case AR.hardware.smart.SmartAvailability.SUPPORTED:
            /*
                Supported, create the scene now with platform assisted tracking enabled SUPPORTED_UPDATE_REQUIRED
                may be followed by SUPPORTED, make sure not to create the scene twice (see check in createOverlays).
             */
            World.platformAssisstedTrackingSupported = true;
            document.getElementById("boxTitle").innerHTML = "Assisted, move phone";
            World.createOverlays();
            break;
    }
};

World.init();