/* tslint:disable */
let World = {
    loaded: false,
    drawables: [],
    imagesTrackable: null,
    models: [],
    currentModel: null,
    lights: [],

    init: function initFn() {
        World.createAugmentation();
        World.hideButtonDrawer();

    },

    createAugmentation: function createAugmentationFn() {
        let CubeAugmentation = World.getAugmentationCube(0.0, 0.0);
        World.drawables.push(CubeAugmentation);

        let occluder = World.getOccluder(0.0, 0.0);
        World.drawables.push(occluder);
    },

    getOccluder: function getOccluderFn(positionX, positionZ) {
        let AugmentationScale = 0.8;
        return new AR.OccluderCylinder(
            AugmentationScale,
            24,
            AugmentationScale,
            {
                translate: {
                    x: positionX,
                    y: 0,
                    z: positionZ
                },
                rotate: {
                    x: -90
                }
            }
        );
    },

    getAugmentationCube: function getAugmentationCubeFn(positionX, positionZ) {
        let AugmentationScale = 0.01;
        let cubeModelPath = 'assets/green-transparent-cube-06-best_light.wt3';
        let sphereModelPath = 'assets/green-sphere.wt3';
        return new AR.Model(cubeModelPath, {
            scale: {
                x: AugmentationScale,
                y: AugmentationScale,
                z: AugmentationScale
            },
            translate: {
                x: positionX,
                y: 0,
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

    loadTargets: function loadTargets(wtc, models) {
        if (wtc) {

            let targetCollectionResource = new AR.TargetCollectionResource(wtc, {
                onError: World.onError
            });

            let tracker = new AR.ImageTracker(targetCollectionResource, {
                maximumNumberOfConcurrentlyTrackableTargets: 20,
                onError: World.onError
            });

            let imageTrackable = new AR.ImageTrackable(tracker, '*', {
                drawables: {
                    cam: World.drawables
                },
                onImageRecognized: function (target) {
                    let model = World.models.find(m => m._id === target.name);
                    World.currentModel = model;
                    if (model && model.product) {
                        document.getElementById('productName').innerHTML = model.product.title;
                        document.getElementById('productPrice').innerHTML = model.product.price || 'N/A';
                        World.showButtonDrawer();
                        World.setAugmentationsEnabled(true);
                    }
                },

                onImageLost: World.imageLost,
                onError: World.onError
            });
            World.imagesTrackable = imageTrackable;
            World.models = models;
        }
    },

    imageLost: function imageLostFn() {
        World.hideButtonDrawer();
        World.setAugmentationsEnabled(false);
    },

    objectLost: function objectLostFn() {
        World.hideButtonDrawer();
        World.setAugmentationsEnabled(false);
    },

    setAugmentationsEnabled: function setAugmentationsEnabledFn(enabled) {
        for (let i = 0; i < World.drawables.length; i++) {
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