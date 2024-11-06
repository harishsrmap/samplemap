var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_collge_boundary_1 = new ol.format.GeoJSON();
var features_collge_boundary_1 = format_collge_boundary_1.readFeatures(json_collge_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collge_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collge_boundary_1.addFeatures(features_collge_boundary_1);
var lyr_collge_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_collge_boundary_1, 
                style: style_collge_boundary_1,
                popuplayertitle: "collge_boundary",
                interactive: true,
                title: '<img src="styles/legend/collge_boundary_1.png" /> collge_boundary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_collge_boundary_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_collge_boundary_1];
lyr_collge_boundary_1.set('fieldAliases', {'id': 'id', });
lyr_collge_boundary_1.set('fieldImages', {'id': '', });
lyr_collge_boundary_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_collge_boundary_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});