/* tslint:disable */
var World = {
    loaded: false,
    drawables: [],
    objectTrackable: null,
    models: [],
    currentModel: null,
    lights: [],
    objectRotation: {
        x: 0,
        y: 0,
        z: 0
    },
    objectCenter: {
        x: 0.2,
        y: 1.5,
        z: -0.9
    },
    objectLength: 1.4,
    objectHeight: 3,

    init: function initFn() {
        World.createAugmentation();
        World.hideButtonDrawer();

    },

    createAugmentation: function createAugmentationFn() {
        var AugmentationDistance = World.objectLength * 1.2;

        // var frontRightAugmentation = World.getAugmentationImageBox(+AugmentationDistance, +AugmentationDistance);
        // World.drawables.push(frontRightAugmentation);

        var CubeAugmentation = World.getAugmentationCube(0.0, 0.0);
        World.drawables.push(CubeAugmentation);

        var occluder = World.getOccluder(0.0, 0.0);
        World.drawables.push(occluder);
    },

    getOccluder: function getOccluderFn(positionX, positionZ) {
        return new AR.OccluderCylinder(
            1.2 * World.objectLength / 2,
            24,
            0.8 * World.objectHeight,
            {
                translate: {
                    x: positionX,
                    y: World.objectCenter.y,
                    z: positionZ
                },
                rotate: {
                    x: -90
                }
            }
        );
    },


    getAugmentationImageBox: function getAugmentationImageBoxFn(positionX, positionZ) {
        var AugmentationScale = 0.8 * this.objectLength;

        var imageBoxImage = new AR.ImageResource('assets/sanpellegrino_instructions.jpg', {
            onError: World.onError
        });
        return new AR.ImageDrawable(imageBoxImage, 1, {
            scale: {
                x: AugmentationScale,
                y: AugmentationScale,
                z: AugmentationScale
            },
            translate: {
                x: positionX,
                y: World.objectCenter.y + World.objectHeight / 3,
                z: positionZ
            },
        });
    },

    getAugmentationCube: function getAugmentationCubeFn(positionX, positionZ) {
        var AugmentationScale = 0.05 * 0.15 * this.objectLength;
        let cubeModelPath = 'assets/green-transparent-cube-06-best_light.wt3';
        let sphereModelPath = 'assets/green-sphere.wt3';
        let scaleFactor = 1.4;
        return new AR.Model(cubeModelPath, {
            scale: {
                x: AugmentationScale * scaleFactor,
                y: AugmentationScale * scaleFactor,
                z: AugmentationScale * scaleFactor
            },
            translate: {
                x: positionX,
                y: World.objectCenter.y,
                z: positionZ
            },
            rotate: {
                x: -90
            },
            onError: World.onError
        });
    },

    closeArExperience: function closeArExperience() {
        //alert('Alert : close button clicked')
        AR.platform.sendJSONObject({
            name: 'button',
            action: 'closeWikitudePlugin'
        });

    },

    showProductInfo: function showProductInfo() {
        AR.platform.sendJSONObject({
            name: 'button',
            action: 'showProductInfo',
            model: World.currentModel
        });
    },

    loadTargets: function loadTargets(wto, models) {
        if (wto) {

            let targetCollectionResource = new AR.TargetCollectionResource(wto, {
                onError: World.onError
            });

            let tracker = new AR.ObjectTracker(targetCollectionResource, {
                onError: World.onError
            });

            let objectTrackable = new AR.ObjectTrackable(tracker, '*', {
                drawables: {
                    cam: World.drawables
                },
                onObjectRecognized: function (targetName) {
                    let model = World.models.find(m => m._id === targetName);
                    World.currentModel = model;
                    if (model && model.product) {
                        document.getElementById('productName').innerHTML = model.product.title;
                        document.getElementById('productPrice').innerHTML = model.product.price || 'N/A';
                        World.showButtonDrawer();
                        World.setAugmentationsEnabled(true);
                    }
                },

                onObjectLost: World.objectLost,
                onError: World.onError
            });
            World.objectTrackable = objectTrackable;
            World.models = models;
        }
    },

    objectLost: function objectLostFn() {
        World.hideButtonDrawer();
        World.setAugmentationsEnabled(false);
    },

    setAugmentationsEnabled: function setAugmentationsEnabledFn(enabled) {
        for (var i = 0; i < World.drawables.length; i++) {
            World.drawables[i].enabled = enabled;
        }
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

World.init();