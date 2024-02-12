(function () {
  "use strict";

  const viewer = new Cesium.Viewer("cesium", {
    baseLayerPicker: true,
    timeline: false,
    animation: false,
    homeButton: true,
    geocoder: true,
  });

  const position = Cesium.Cartesian3.fromDegrees(139.774522, 35.700223, -10);
  const heading = Cesium.Math.toRadians(180.0);
  const pitch = Cesium.Math.toRadians(0);
  const roll = Cesium.Math.toRadians(0);
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    new Cesium.HeadingPitchRoll(heading, pitch, roll)
  );
  const entity = viewer.entities.add({
    position: position,
    orientation: orientation,
    model: {
      uri: "assets/Duck.glb",
      scale: 30,
    },
  });
  viewer.trackedEntry = entity;

  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(139.774522, 35.697223, 60), // カメラの位置
    orientation: {
      heading: 0,
      pitch: -0.2,
      roll: 0,
    },
  });
})();
