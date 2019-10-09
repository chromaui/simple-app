//ar-stitching-camera

var allCurrentModels = [];

//define timeout waiting function
var wait = ms => new Promise((r, j) => setTimeout(r, ms));

var World = {
    corners: [],
    cornersList: [],
    currentShape: null,
    fullShelfScreenModel: null,
    initializeTrackerCalled: false,
    isCalibrated: false,
    isTracking: false,
    photos: [],
    pictureCount: 0,
    pictureDelay: 300,
    platformAssisstedTrackingSupported: false,
    redScreens: [],
    semaphoreClicks: null,
    stitchingThreshold: 0.3,
    trackingOrientation: AR.CONST.INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION.VERTICAL,

    // COMMUNICATION WITH CORDOVA
    closeArExperience: function closeArExperienceFn() {
        AR.platform.sendJSONObject({
            action: "closeWikitudePlugin",
        });
    },

    // ON-SCREEN BUTTONS INTERACTIONS

    clickClose: function clickCloseFn() {
        // Close AR experience and go back to Cordova
        World.closeArExperience();
    },

    clickFinish: function clickCloseFn() {
        // TODO : Send Stitching info to Cordova, then from Cordova to Server

        // Close AR experience and go back to Cordova
        World.closeArExperience();
    },

    async clickPhoto() {
        if (!World.isCalibrated) {
            World.changeTrackerState();
            World.isCalibrated = true;
            World.isTracking = true;
            await wait(300);
        }
        if (World.isTracking) {

            World.corners = [];
            World.pictureCount += 1;
            // World.resetModels();
            const p1 = new Promise((resolve, reject) => {
                let click = World.simulateScreenClick(0, window.innerHeight);
                resolve(click);
            }).then(() => {
                World.simulateScreenClick(window.innerWidth, window.innerHeight);
            }).then(() => {
                World.simulateScreenClick(window.innerWidth, 0);
            }).then(() => {
                World.simulateScreenClick(0, 0);
            }).then(async () => {
                await World.semaphoreClicks.acquire();
                if (World.isValidPicture(World.corners)) {
                    World.cornersList.push({
                        LL: World.corners[0],
                        LR: World.corners[1],
                        UL: World.corners[3],
                        UR: World.corners[2],
                    });
                    // World.picturesWidths.push(World.computeWidth(World.corners));

                    if (World.currentShape === null) {
                        World.currentShape = World.corners;
                    } else {
                        let unionPolygon = turf.union(
                            convertPointsToTurfPolygon(World.corners),
                            convertPointsToTurfPolygon(World.currentShape))
                            .geometry.coordinates[0];
                        unionPolygon.pop();
                        World.currentShape = convertVerticestoPoints(unionPolygon);
                    }
                } else {
                    World.redScreens.push(World.corners);
                    // alert("Picture not valid, please add more overlap with previous pictures to add to set");
                }
                World.semaphoreClicks.release();
                World.checkIfRedScreenJoined();
                World.addFullShelfScreen().then(() => {
                    World.takePicture();
                });
            });
            document.getElementById("buttonRight").style.display = "flex";
        }
    },

    clickRecalibrate: function clickRecalibrateFn() {
        World.pictureCount = 0;
        World.resetModels();
        World.semaphoreClicks.purge();
        World.redScreens = [];
        World.currentShape = null;
        if (World.isCalibrated) {
            World.isCalibrated = false;
            document.getElementById("buttonRight").style.display = "none";
        }
        if (World.isTracking) {
            World.isTracking = false;
            World.changeTrackerState();
        }
    },

    async simulateScreenClick(x, y) {
        // Simulate screen click at (x,y) scree coordinates, to inteact with Wikitude AR objects
        try {
            // use Semaphore to wait for click to be processed by AR before simulating next click
            await World.semaphoreClicks.acquire();
            var X = x;
            var Y = y;
            var event = {
                changedTouches: [{
                    clientX: X,
                    clientY: Y,
                    screenX: X,
                    screenY: Y,
                }],
            };
            event.preventDefault = function() { /* Intentionally Left Blank */ };

            if (AR && AR.js && AR.js.click && AR.js.click.executePlatformClick) {
                AR.js.click.executePlatformClick(event);
            }
        } catch (e) {
            // console.error(e);
        }
    },

    isValidPicture: function isValidPictureFn(pictureCorners) {
        //Check if picture has enough overlap with at least one previous picture

        if (World.currentShape === null) {
            return true;
        }
        if (pictureCorners.length === 4) {
            if (intersect(World.currentShape, pictureCorners).length !== 0) {
                let len = World.cornersList.length;
                Loop2:
                for (let i = 0; i < len; i++) {
                    let corners = convertVerticestoPoints(convertCornersJSONToVertices(World.cornersList[i]));
                    let intersection = intersect(corners, pictureCorners);

                    if (intersection.length === 0) { continue Loop2; }

                    let areaIntersection = calcPolygonArea(intersection[0]);
                    let areaCorners = calcPolygonArea(corners);

                    if (areaIntersection / areaCorners > World.stitchingThreshold) {
                        return true;
                    }
                }
            }
        }
        return false;
    },

    checkIfRedScreenJoined: function checkIfRedScreenJoinedFn() {
        if (World.redScreens.length === 0) { return; }
        for (let i = 0; i < World.redScreens.length; i++) {
            if (World.isValidPicture(World.redScreens[i])) {
                // IF SUCCESSFUL ADD TO CURRENT SHAPE
                let unionPolygon = turf.union(
                    convertPointsToTurfPolygon(World.redScreens[i]),
                    convertPointsToTurfPolygon(World.currentShape))
                    .geometry.coordinates[0];
                unionPolygon.pop();
                World.currentShape = convertVerticestoPoints(unionPolygon);

                // DELETE FROM RED SCREENS
                World.redScreens.splice(i, 1);

                // TRY TO JOIN OTHER SCREENS
                return World.checkIfRedScreenJoined();
            }
        }
        return;
    },

    computeWidth: function computeWidthFn(corners) {
        return (corners[1].x - corners[0].x + corners[2].x - corners[3].x) / 2;
    },

    takePicture: function takePictureFn() {
        World.deleteModels();
        // Save picture (calls cordova side)
        // World.takeScreenShot();
        setTimeout(function() {
            World.drawModels();
        }, World.pictureDelay);
    },

    /// ??
    setLastPhotoUrl: function setLastPhotoUrlFn(url) {
        let lenPhotos = World.photos.length;
        if (lenPhotos > 0) {
            World.photos[lenPhotos - 1].url = url;
        }
    },

    async addFullShelfScreen() {
        try {
            await World.semaphoreClicks.acquire();

            if (World.fullShelfScreenModel && World.fullShelfScreenModel.destroy) {
                this.instantTrackable.drawables.removeCamDrawable(World.fullShelfScreenModel);
                World.fullShelfScreenModel.destroy();
                allCurrentModels.splice(allCurrentModels.indexOf(World.fullShelfScreenModel), 1);
            }

            let corners = World.getCurrentShapeOuterCorners();
            let UL = corners[0];
            let LR = corners[1];

            let x1 = UL.x;
            let y1 = LR.y;

            let x2 = LR.x;
            let y2 = UL.y;

            var html = World.writeSvgHtmlFullScreen(UL, LR);

            var htmlDrawable = new AR.HtmlDrawable({ html: html }, 1, {
                opacity: 0.3,

                rotate: {
                    z: 0,
                },
                scale: {
                    x: (x2 - x1),
                    y: (y2 - y1),
                },
                translate: {
                    x: (x1 + x2) / 2,
                    y: (y1 + y2) / 2,
                },
                viewportHeight: 1024,
                viewportWidth: 1024,

            });

            if (this.tracker.state === AR.InstantTrackerState.TRACKING) {
                World.fullShelfScreenModel = htmlDrawable;
                allCurrentModels.push(htmlDrawable);
                this.instantTrackable.drawables.addCamDrawable(htmlDrawable);
            }
            World.semaphoreClicks.release();

        } catch (e) {
            // console.error(e);
        }
    },

    averageOfArray: function averageOfArray(elmt) {
        var sum = 0;
        for (var i = 0; i < elmt.length; i++) {
            sum += elmt[i]; //don't forget to add the base
        }

        var avg = sum / elmt.length;
        return avg;

    },

    writeSvgHtmlFullScreen: function writeSvgHtmlFullScreenFn(cornerUL, cornerLR) {
        let ratioW = 0.65;
        let ratioH = 0.8;

        let polygonsHTML = "";
        let totalShapesHTML = "";

        let minX = cornerUL.x;
        let maxX = cornerLR.x;
        let minY = cornerLR.y;
        let maxY = cornerUL.y;

        if (World.currentShape != null) {
            let j = 0;
            let points = World.currentShape;
            let totalShapeMiddleHTML = "";

            let Xs = [];
            let Ys = [];

            for (let i = 0; i < points.length; i++) {
                let point = points[i];
                let x = point.x;
                let y = point.y;

                totalShapeMiddleHTML += "L" + x.toString() + "," + y.toString() + " ";
            }
            let totalShapeHTML = "<defs><path id='ld" + j.toString() + "' d='M" + totalShapeMiddleHTML.substr(1);
            totalShapeHTML += "Z' />\
                                    <clipPath id='clip" + j.toString() + "'>\
                                        <use xlink:href='#ld" + j.toString() + "' />\
                                    </clipPath>\
                                </defs>\
                                <g>\
                                    <use xlink:href='#ld" + j.toString() + "' fill='#67E300' opacity='1' clip-path='url(#clip" + j.toString() + ")' transform='scale(1,-1)'/>\
                                </g>";

            totalShapesHTML += totalShapeHTML;
        }

        for (let j = 0; j < World.redScreens.length; j++) {
            let points = World.redScreens[j];
            let polygonMiddleHTML = "";
            for (let i = 0; i < points.length; i++) {
                polygonMiddleHTML += points[i].x.toString() + "," + points[i].y.toString() + " ";
            }
            polygonsHTML += "<polygon points='" + polygonMiddleHTML + "' style='fill:red' transform='scale(1,-1)'/>";
        }

        let beginningHTML = "<div style='background:transparent;margin:0;'><svg style='background:transparent;' preserveAspectRatio='none'  width='100%' height='100%' viewBox='" + minX.toString() + " " + (0 - maxY).toString() + " " + (maxX - minX).toString() + " " + ((maxY - minY)).toString() + "'>"; // + "<polygon points='";
        let endHTML = "</svg></div>";

        let fullHTML = beginningHTML + totalShapesHTML + polygonsHTML + endHTML;
        return fullHTML;
    },

    changeTrackingOrientation: function changeTrackingOrientationFn() {
        // not used in this experience : only vertical planes tracked
        if (World.trackingOrientation === AR.CONST.INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION.HORIZONTAL) {
            World.trackingOrientation = AR.CONST.INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION.VERTICAL;
            document.getElementById("buttonRight").innerHTML = "Vertical";
        } else {
            World.trackingOrientation = AR.CONST.INITIAL_INSTANT_TRACKING_PLANE_ORIENTATION.HORIZONTAL;
            document.getElementById("buttonRight").innerHTML = "Horizontal";
        }
        World.instantTrackable.drawables.initialization = [];
        World.instantTrackable.drawables.cam = [];
        World.tracker.destroy();

        World.resetModels();
        World.initializeTrackerCalled = false;
        World.initializeTracker();
    },

    init: function initFn() {
        let semaphore = new World.Semaphore(1);
        World.semaphoreClicks = semaphore;
        /*
            When you'd like to make use of the SMART feature, make sure to call this function and await the result
            in the AR.hardware.smart.onPlatformAssistedTrackingAvailabilityChanged callback.
         */
        //AR.hardware.smart.isPlatformAssistedTrackingSupported();
        AR.context.clickBehavior = AR.CONST.CLICK_BEHAVIOR.TOUCH_DOWN;
        World.initializeTracker();
    },

    initializeTracker: function initializeTrackerFn() {
        if (World.initializeTrackerCalled) {
            return;
        }
        document.getElementById("boxTitle").innerHTML = "Take 1st picture";
        document.getElementById("boxDescription").innerHTML = "parallel to shelf";

        World.initializeTrackerCalled = true;

        this.tracker = new AR.InstantTracker({
            deviceHeight: 1.0,
            onChangeStateError: World.onError,
            onChangedState: function onChangedStateFn(state) {
                if (state === AR.InstantTrackerState.INITIALIZING) {
                    // document.getElementById("boxDescription").innerHTML = "Initializing";
                } else {
                    if (World.platformAssisstedTrackingSupported) {
                        //     document.getElementById("boxTitle").innerHTML = "Assisted";
                    }
                    // document.getElementById("boxDescription").innerHTML = "Tracking started";
                }
            },
            /*
                Device height needs to be as accurate as possible to have an accurate scale returned by the Wikitude
                SDK.
             */
            onError: World.onError,
            smartEnabled: false,
            trackingPlaneOrientation: World.trackingOrientation,
        });

        this.instantTrackable = new AR.InstantTrackable(this.tracker, {
            drawables: {
                enabled: true,
            },
            onError: World.onError,
            onTrackingPlaneClick: function onTrackingPlaneClickFn(xpos, ypos) {
                /*
                    xPos and yPos are the intersection coordinates of the click ray and the instant tracking plane.
                    They can be applied to the transform component directly.
                */
                if (this.enabled) {
                    World.corners.push({ x: xpos, y: ypos });
                    World.semaphoreClicks.release();
                }
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

        });
    },

    changeTrackerState: function changeTrackerStateFn() {
        if (this.tracker.state === AR.InstantTrackerState.INITIALIZING) {
            this.tracker.state = AR.InstantTrackerState.TRACKING;
            document.getElementById("buttonTopLeft").style.display = "flex";
            document.getElementById("buttonRight").style.display = "flex";
            document.getElementById("boxTitle").innerHTML = "Overlap with previous picture";
            document.getElementById("boxDescription").innerHTML = "";

        } else { // this.tracker.state === AR.InstantTrackerState.TRACKING
            this.tracker.state = AR.InstantTrackerState.INITIALIZING;

            document.getElementById("buttonRight").style.display = "none";
            document.getElementById("buttonTopLeft").style.display = "none";

            // document.getElementById('buttonTopLeft').innerHTML = 'Start';
            // document.getElementById('buttonDrawer').style.display = 'none';

            document.getElementById("boxTitle").innerHTML = "Take 1st picture";
            document.getElementById("boxDescription").innerHTML = "parallel to shelf";
        }
    },

    changeTrackingHeight: function changeTrackingHeightFn(height) {
        this.tracker.deviceHeight = parseFloat(height);
    },

    deleteModels: function deleteModelsFn() {
        this.instantTrackable.drawables.removeCamDrawable(allCurrentModels);
    },
    drawModels: function drawModelsFn() {
        this.instantTrackable.drawables.addCamDrawable(allCurrentModels);
    },

    resetModels: function resetModelsFn() {
        this.instantTrackable.drawables.removeCamDrawable(allCurrentModels);
        if (World.fullShelfScreenModel && World.fullShelfScreenModel.destroy) {
            World.fullShelfScreenModel.destroy();
        }

        allCurrentModels = [];
        AR.platform.sendJSONObject({
            action: "resetData",
        });
        World.cornersList = [];
        World.photos = [];
        World.corners = [];

    },

    getCurrentShapeOuterCorners: function getCurrentShapeOuterCornersFn() {
        let xMaxCS;
        let xMinCS;
        let yMaxCS;
        let yMinCS;

        if (World.currentShape !== null) {
            xMaxCS = Math.max.apply(Math, World.currentShape.map(function(o) { return o.x; }));
            xMinCS = Math.min.apply(Math, World.currentShape.map(function(o) { return o.x; }));
            yMaxCS = Math.max.apply(Math, World.currentShape.map(function(o) { return o.y; }));
            yMinCS = Math.min.apply(Math, World.currentShape.map(function(o) { return o.y; }));
            if (World.redScreens.length > 0) {
                let xMaxRS = Math.max.apply(Math, World.redScreens.map(function(arr) {
                    return Math.max.apply(Math, arr.map(function(o) { return o.x; }));
                }));
                let xMinRS = Math.min.apply(Math, World.redScreens.map(function(arr) {
                    return Math.min.apply(Math, arr.map(function(o) { return o.x; }));
                }));
                let yMaxRS = Math.max.apply(Math, World.redScreens.map(function(arr) {
                    return Math.max.apply(Math, arr.map(function(o) { return o.y; }));
                }));
                let yMinRS = Math.min.apply(Math, World.redScreens.map(function(arr) {
                    return Math.min.apply(Math, arr.map(function(o) { return o.y; }));
                }));

                xMaxCS = Math.max(xMaxCS, xMaxRS);
                xMinCS = Math.min(xMinCS, xMinRS);
                yMaxCS = Math.max(yMaxCS, yMaxRS);
                yMinCS = Math.min(yMinCS, yMinRS);

            }
        } else {
            xMaxCS = Math.max.apply(Math, World.corners.map(function(o) { return o.x; }));
            xMinCS = Math.min.apply(Math, World.corners.map(function(o) { return o.x; }));
            yMaxCS = Math.max.apply(Math, World.corners.map(function(o) { return o.y; }));
            yMinCS = Math.min.apply(Math, World.corners.map(function(o) { return o.y; }));
        }

        return [{ x: xMinCS, y: yMaxCS }, { x: xMaxCS, y: yMinCS }];
    },

    onError: function onErrorFn(error) {
        alert(error);
    },

    Semaphore: function SemaphoreFn(max) {
        var counter = 0;
        var waiting = [];

        var take = function() {
            if (waiting.length > 0 && counter < max) {
                counter++;
                let promise = waiting.shift();
                promise.resolve();
            }
        };

        this.acquire = function() {
            if (counter < max) {
                counter++;
                return new Promise(resolve => {
                    resolve();
                });
            } else {
                return new Promise((resolve, err) => {
                    waiting.push({ resolve: resolve, err: err });
                });
            }
        };

        this.release = function() {
            counter--;
            take();
        };

        this.purge = function() {
            let unresolved = waiting.length;

            for (let i = 0; i < unresolved; i++) {
                waiting[i].err("Task has been purged.");
            }

            counter = 0;
            waiting = [];

            return unresolved;
        };
    },
};

AR.hardware.smart.onPlatformAssistedTrackingAvailabilityChanged = function(availability) {
    switch (availability) {
        case AR.hardware.smart.SmartAvailability.INDETERMINATE_QUERY_FAILED:
            /* Query failed for some reason; try again or accept the fact. */
            // document.getElementById("boxTitle").innerHTML = "Not assisted";

            World.initializeTracker();
            break;
        case AR.hardware.smart.SmartAvailability.CHECKING_QUERY_ONGOING:
            /* Query currently ongoing; be patient and do nothing or inform the user about the ongoing process. */
            break;
        case AR.hardware.smart.SmartAvailability.UNSUPPORTED:
            /* Not supported, create the scene now without platform assisted tracking enabled. */
            // document.getElementById("boxTitle").innerHTML = "Not assisted";
            World.initializeTracker();
            break;
        case AR.hardware.smart.SmartAvailability.SUPPORTED_UPDATE_REQUIRED:
        case AR.hardware.smart.SmartAvailability.SUPPORTED:
            /*
                Supported, create the scene now with platform assisted tracking enabled SUPPORTED_UPDATE_REQUIRED
                may be followed by SUPPORTED, make sure not to create the scene twice (see check in initializeTracker).
             */
            World.platformAssisstedTrackingSupported = true;
            // document.getElementById("boxTitle").innerHTML = "Assisted, move phone";

            World.initializeTracker();
            break;
    }
};

// initialize AR World
World.init();

// POINTS FORMAT CONVERSION FUNCTIONS
function convertCornersJSONToTurfPolygon(corners) {
    let vertices = convertPointsToVertices(convertCornersToPoints(corners));
    vertices.push(vertices[0]);
    return turf.polygon([vertices]);
}

function convertPointsToTurfPolygon(points) {
    let vertices = convertPointsToVertices(points);
    vertices.push(vertices[0]);
    return turf.polygon([vertices]);
}

function convertPointsToVertices(points) {
    let vertices = [];
    for (let i = 0; i < points.length; i++) {
        vertices.push([points[i].x, points[i].y]);
    }
    return vertices;
}

function convertCornersJSONToVertices(corners) {
    return [
        [corners.LL.x, corners.LL.y],
        [corners.LR.x, corners.LR.y],
        [corners.UR.x, corners.UR.y],
        [corners.UL.x, corners.UL.y],
    ];
}

function convertVerticestoPoints(vertices) {
    let points = [];
    for (let i = 0; i < vertices.length; i++) {
        points.push({ x: vertices[i][0], y: vertices[i][1] });
    }
    return points;
}

function convertCornersToPoints(corners) {
    return [{ x: corners.LL.x, y: corners.LL.y },
    { x: corners.LR.x, y: corners.LR.y },
    { x: corners.UR.x, y: corners.UR.y },
    { x: corners.UL.x, y: corners.UL.y },
    ];
}

// MATHS HELPER FUNCTIONS
function calcPolygonArea(p) {
    var total = 0;

    if (p.length === 3) {
        return Math.abs(p[0].x * (p[1].y - p[2].y) + p[1].x * (p[2].y - p[0].y) + p[2].x * (p[0].y - p[1].y));
    }

    for (var i = 0, l = p.length; i < l; i++) {
        var addX = p[i].x;
        var addY = p[i === p.length - 1 ? 0 : i + 1].y;
        var subX = p[i === p.length - 1 ? 0 : i + 1].x;
        var subY = p[i].y;

        total += (addX * addY * 0.5);
        total -= (subX * subY * 0.5);
    }
    return Math.abs(total);
}

// filterPolygons.js functions
function intersect(fig1, fig2) {
    fig2a = alignPolygon(fig2, fig1);
    if (!checkPolygons(fig1, fig2a)) {
        return false;
    }
    var edges = edgify(fig1, fig2a);
    var polygons = polygonate(edges);
    var filteredPolygons = filterPolygons(polygons, fig1, fig2a, "intersect");
    return filteredPolygons;
}

function alignPolygon(polygon, points) {
    for (let i = 0; i < polygon.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (distance(polygon[i], points[j]) < 0.00000001) {
                polygon[i] = points[j];
            }
        }
    }
    return polygon;
}

function distance(p1, p2) {
    var dx = Math.abs(p1.x - p2.x);
    var dy = Math.abs(p1.y - p2.y);
    return Math.sqrt(dx * dx + dy * dy);
}

//check polygons for correctness
function checkPolygons(fig1, fig2) {
    var figs = [fig1, fig2];
    for (var i = 0; i < figs.length; i++) {
        if (figs[i].length < 3) {
            // console.error("Polygon " + (i + 1) + " is invalid!");
            return false;
        }
    }
    return true;
}

//create array of edges of all polygons
function edgify(fig1, fig2) {
    //create primary array from all edges
    var primEdges = getEdges(fig1).concat(getEdges(fig2));
    var secEdges = [];
    //check every edge
    for (var i = 0; i < primEdges.length; i++) {
        var points = [];
        //for intersection with every edge except itself
        for (var j = 0; j < primEdges.length; j++) {
            if (i !== j) {
                var interPoints = findEdgeIntersection(primEdges[i], primEdges[j]);
                addNewPoints(interPoints, points);
            }
        }
        //add start and end points to intersection points
        startPoint = primEdges[i][0];
        startPoint.t = 0;
        endPoint = primEdges[i][1];
        endPoint.t = 1;
        addNewPoints([startPoint, endPoint], points);
        //sort all points by position on edge
        points = sortPoints(points);
        //break edge to parts
        for (var k = 0; k < points.length - 1; k++) {
            var edge = [
                { x: points[k].x, y: points[k].y },
                { x: points[k + 1].x, y: points[k + 1].y },
            ];
            // check for existanse in sec.array
            if (!edgeExists(edge, secEdges)) {
                //push if not exists
                secEdges.push(edge);
            }
        }
    }
    return secEdges;
}

function addNewPoints(newPoints, points) {
    if (newPoints.length > 0) {
        //check for uniqueness
        for (var k = 0; k < newPoints.length; k++) {
            if (!pointExists(newPoints[k], points)) {
                points.push(newPoints[k]);
            }
        }
    }
}

function sortPoints(points) {
    var p = points;
    p.sort((a, b) => {
        if (a.t > b.t) { return 1; }
        if (a.t < b.t) { return -1; }
    });
    return p;
}

function getEdges(fig) {
    var edges = [];
    var len = fig.length;
    for (var i = 0; i < len; i++) {
        edges.push([
            { x: fig[(i % len)].x, y: fig[(i % len)].y },
            { x: fig[((i + 1) % len)].x, y: fig[((i + 1) % len)].y },
        ]);
    }
    return edges;
}

function findEdgeIntersection(edge1, edge2) {
    var x1 = edge1[0].x;
    var x2 = edge1[1].x;
    var x3 = edge2[0].x;
    var x4 = edge2[1].x;
    var y1 = edge1[0].y;
    var y2 = edge1[1].y;
    var y3 = edge2[0].y;
    var y4 = edge2[1].y;
    var nom1 = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    var nom2 = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    var t1 = nom1 / denom;
    var t2 = nom2 / denom;
    var interPoints = [];
    //1. lines are parallel or edges don't intersect
    if (((denom === 0) && (nom1 !== 0)) || (t1 <= 0) || (t1 >= 1) || (t2 < 0) || (t2 > 1)) {
        return interPoints;
    } else if ((nom1 === 0) && (denom === 0)) {
        //check if endpoints of edge2 lies on edge1
        for (var i = 0; i < 2; i++) {
            var classify = classifyPoint(edge2[i], edge1);
            //find position of this endpoints relatively to edge1
            if (classify.loc === "ORIGIN" || classify.loc === "DESTINATION") {
                interPoints.push({ x: edge2[i].x, y: edge2[i].y, t: classify.t });
            } else if (classify.loc === "BETWEEN") {
                x = +((x1 + classify.t * (x2 - x1)).toPrecision(10));
                y = +((y1 + classify.t * (y2 - y1)).toPrecision(10));
                interPoints.push({ x: x, y: y, t: classify.t });
            }
        }
        return interPoints;
    } else {
        for (var i1 = 0; i1 < 2; i1++) {
            var classify1 = classifyPoint(edge2[i1], edge1);
            if (classify1.loc === "ORIGIN" || classify1.loc === "DESTINATION") {
                interPoints.push({ x: edge2[i1].x, y: edge2[i1].y, t: classify1.t });
            }
        }
        if (interPoints.length > 0) {
            return interPoints;
        }
        var x = +((x1 + t1 * (x2 - x1)).toPrecision(10));
        var y = +((y1 + t1 * (y2 - y1)).toPrecision(10));
        interPoints.push({ x: x, y: y, t: t1 });
        return interPoints;
    }
    return interPoints;
}

function classifyPoint(p, edge) {
    var ax = edge[1].x - edge[0].x;
    var ay = edge[1].y - edge[0].y;
    var bx = p.x - edge[0].x;
    var by = p.y - edge[0].y;
    var sa = ax * by - bx * ay;
    if ((p.x === edge[0].x) && (p.y === edge[0].y)) {
        return { loc: "ORIGIN", t: 0 };
    }
    if ((p.x === edge[1].x) && (p.y === edge[1].y)) {
        return { loc: "DESTINATION", t: 1 };
    }
    var theta = (polarAngle([edge[1], edge[0]]) -
        polarAngle([{ x: edge[1].x, y: edge[1].y }, { x: p.x, y: p.y }])) % 360;
    if (theta < 0) {
        theta = theta + 360;
    }
    if (sa < -0.0000000001) {
        return { loc: "LEFT", theta: theta };
    }
    if (sa > 0.00000000001) {
        return { loc: "RIGHT", theta: theta };
    }
    if (((ax * bx) < 0) || ((ay * by) < 0)) {
        return { loc: "BEHIND", theta: 0 };
    }
    if ((Math.sqrt(ax * ax + ay * ay)) < (Math.sqrt(bx * bx + by * by))) {
        return { loc: "BEYOND", theta: 180 };
    }
    var t;
    if (ax !== 0) {
        t = bx / ax;
    } else {
        t = by / ay;
    }
    return { loc: "BETWEEN", t: t };
}

function polarAngle(edge) {
    var dx = edge[1].x - edge[0].x;
    var dy = edge[1].y - edge[0].y;
    if ((dx === 0) && (dy === 0)) {
        //console.error("Edge has zero length.");
        return false;
    }
    if (dx === 0) {
        return ((dy > 0) ? 90 : 270);
    }
    if (dy === 0) {
        return ((dx > 0) ? 0 : 180);
    }
    var theta = Math.atan(dy / dx) * 360 / (2 * Math.PI);
    if (dx > 0) {
        return ((dy >= 0) ? theta : theta + 360);
    } else {
        return (theta + 180);
    }
}

function pointExists(p, points) {
    if (points.length === 0) {
        return false;
    }
    for (var i = 0; i < points.length; i++) {
        if ((p.x === points[i].x) && (p.y === points[i].y)) {
            return true;
        }
    }
    return false;
}

function edgeExists(e, edges) {
    if (edges.length === 0) {
        return false;
    }
    for (var i = 0; i < edges.length; i++) {
        if (equalEdges(e, edges[i])) {
            return true;
        }
    }
    return false;
}

function equalEdges(edge1, edge2) {
    if (((edge1[0].x === edge2[0].x) &&
        (edge1[0].y === edge2[0].y) &&
        (edge1[1].x === edge2[1].x) &&
        (edge1[1].y === edge2[1].y)) || (
            (edge1[0].x === edge2[1].x) &&
            (edge1[0].y === edge2[1].y) &&
            (edge1[1].x === edge2[0].x) &&
            (edge1[1].y === edge2[0].y))) {
        return true;
    } else {
        return false;
    }
}

function polygonate(edges) {
    var polygons = [];
    var polygon = [];
    var len = edges.length;
    var midpoints = getMidpoints(edges);
    //start from every edge and create non-selfintersecting polygons
    for (var i = 0; i < len - 2; i++) {
        var org = { x: edges[i][0].x, y: edges[i][0].y };
        var dest = { x: edges[i][1].x, y: edges[i][1].y };
        var currentEdge = i;
        var point;
        var p;
        var direction;
        var stop;
        //while we havn't come to the starting edge again
        for (direction = 0; direction < 2; direction++) {
            polygon = [];
            stop = false;
            while ((polygon.length === 0) || (!stop)) {
                //add point to polygon
                polygon.push({ x: org.x, y: org.y });
                point = undefined;
                //look for edge connected with end of current edge
                for (var j = 0; j < len; j++) {
                    p = undefined;
                    //except itself
                    if (!equalEdges(edges[j], edges[currentEdge])) {
                        //if some edge is connected to current edge in one endpoint
                        if ((edges[j][0].x === dest.x) && (edges[j][0].y === dest.y)) {
                            p = edges[j][1];
                        }
                        if ((edges[j][1].x === dest.x) && (edges[j][1].y === dest.y)) {
                            p = edges[j][0];
                        }
                        //compare it with last found connected edge for minimum angle between itself and current edge
                        if (p) {
                            var classify = classifyPoint(p, [org, dest]);
                            //if this edge has smaller theta then last found edge update data of next edge of polygon
                            if (!point ||
                                ((classify.theta < point.theta) && (direction === 0)) ||
                                ((classify.theta > point.theta) && (direction === 1))) {
                                point = { x: p.x, y: p.y, theta: classify.theta, edge: j };
                            }
                        }
                    }
                }
                //change current edge to next edge
                org.x = dest.x;
                org.y = dest.y;
                dest.x = point.x;
                dest.y = point.y;
                currentEdge = point.edge;
                //if we reach start edge
                if ((org.x === edges[i][0].x) &&
                    (org.y === edges[i][0].y) &&
                    (dest.x === edges[i][1].x) &&
                    (dest.y === edges[i][1].y)) {
                    stop = true;
                    //check polygon for correctness
                    /*for (var k = 0; k < allPoints.length; k++) {
                      //if some point is inside polygon it is incorrect
                      if ((!pointExists(allPoints[k], polygon)) && (findPointInsidePolygon(allPoints[k], polygon))) {
                        polygon = false;
                      }
                    }*/
                    for (k = 0; k < midpoints.length; k++) {
                        //if some midpoint is inside polygon (edge inside polygon) it is incorrect
                        if (findPointInsidePolygon(midpoints[k], polygon)) {
                            polygon = false;
                        }
                    }
                }
            }
            //add created polygon if it is correct and was not found before
            if (polygon && !polygonExists(polygon, polygons)) {
                polygons.push(polygon);
            }
        }
    }
    return polygons;
}

function polygonExists(polygon, polygons) {
    //if array is empty element doesn't exist in it
    if (polygons.length === 0) { return false; }
    //check every polygon in array
    for (var i = 0; i < polygons.length; i++) {
        //if lengths are not same go to next element
        if (polygon.length !== polygons[i].length) { continue; } else {
            //if all the points are same
            for (var j = 0; j < polygon.length; j++) {
                //if point is not found break forloop and go to next element
                if (!pointExists(polygon[j], polygons[i])) { break; } else {
                    //and it is last point in polygon we found polygon in array!
                    if (j === polygon.length - 1) { return true; }
                }
            }
        }
    }
    return false;
}

function filterPolygons(polygons, fig1, fig2, mode) {
    var filtered = [];
    var c1;
    var c2;
    var point;
    var bigPolygons = removeSmallPolygons(polygons, 0.0001);
    for (var i = 0; i < bigPolygons.length; i++) {
        point = getPointInsidePolygon(bigPolygons[i]);
        c1 = findPointInsidePolygon(point, fig1);
        c2 = findPointInsidePolygon(point, fig2);
        if (
            ((mode === "intersect") && c1 && c2) || //intersection
            ((mode === "cut1") && c1 && !c2) || //fig1 - fig2
            ((mode === "cut2") && !c1 && c2) || //fig2 - fig2
            ((mode === "sum") && (c1 || c2))) { //fig1 + fig2
            filtered.push(bigPolygons[i]);
        }
    }
    return filtered;
}

function removeSmallPolygons(polygons, minSize) {
    var big = [];
    for (var i = 0; i < polygons.length; i++) {
        if (polygonArea(polygons[i]) >= minSize) {
            big.push(polygons[i]);
        }
    }
    return big;
}

function polygonArea(p) {
    var len = p.length;
    var s = 0;
    for (var i = 0; i < len; i++) {
        s += Math.abs((p[i % len].x * p[(i + 1) % len].y) - (p[i % len].y *
            p[(i + 1) % len].x));
    }
    return s / 2;
}

function getPointInsidePolygon(polygon) {
    var point;
    var size = getSize(polygon);
    var edges = getEdges(polygon);
    var y = size.y.min + (size.y.max - size.y.min) / Math.PI;
    var dy = (size.y.max - size.y.min) / 13;
    var line = [];
    var points;
    var interPoints = [];
    var pointsOK = false;
    while (!pointsOK) {
        line = [{ x: (size.x.min - 1), y: y }, { x: (size.x.max + 1), y: y }];
        //find intersections with all polygon edges
        for (var i = 0; i < edges.length; i++) {
            points = findEdgeIntersection(line, edges[i]);
            //if edge doesn't lie inside line
            if (points && (points.length === 1)) {
                interPoints.push(points[0]);
            }
        }
        interPoints = sortPoints(interPoints);
        //find two correct interpoints
        for (var j = 0; j < interPoints.length - 1; j++) {
            if (interPoints[j].t !== interPoints[j + 1].t) {
                //enable exit from loop and calculate point coordinates
                pointsOK = true;
                point = { x: ((interPoints[j].x + interPoints[j + 1].x) / 2), y: y };
            }
        }
        //all points are incorrect, need to change line parameters
        y = y + dy;
        if (((y > size.y.max) || (y < size.y.min)) && (pointsOK === false)) {
            pointsOK = true;
            point = undefined;
        }
    }
    return point;
}

function getSize(polygon) {
    var size = {
        x: {
            max: polygon[0].x,
            min: polygon[0].x,
        },
        y: {
            max: polygon[0].y,
            min: polygon[0].y,
        },
    };
    for (var i = 1; i < polygon.length; i++) {
        if (polygon[i].x < size.x.min) { size.x.min = polygon[i].x; }
        if (polygon[i].x > size.x.max) { size.x.max = polygon[i].x; }
        if (polygon[i].y < size.y.min) { size.y.min = polygon[i].y; }
        if (polygon[i].y > size.y.max) { size.y.max = polygon[i].y; }
    }
    return size;
}

function findPointInsidePolygon(point, polygon) {
    var cross = 0;
    var edges = getEdges(polygon);
    var classify;
    var org;
    var dest;
    for (var i = 0; i < edges.length; i++) {
        [org, dest] = edges[i];
        classify = classifyPoint(point, [org, dest]);
        if ((
            (classify.loc === "RIGHT") &&
            (org.y < point.y) &&
            (dest.y >= point.y)
        ) ||
            (
                (classify.loc === "LEFT") &&
                (org.y >= point.y) &&
                (dest.y < point.y)
            )
        ) {
            cross++;
        }
        if (classify.loc === "BETWEEN") { return false; }
    }
    if (cross % 2) {
        return true;
    } else {
        return false;
    }
}

function getMidpoints(edges) {
    var midpoints = [];
    var x;
    var y;
    for (var i = 0; i < edges.length; i++) {
        x = (edges[i][0].x + edges[i][1].x) / 2;
        y = (edges[i][0].y + edges[i][1].y) / 2;
        midpoints.push({ x: x, y: y });
    }
    return midpoints;
}
