var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_ViviendasenreasruralesINDEC_3 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_3 = format_ViviendasenreasruralesINDEC_3.readFeatures(json_ViviendasenreasruralesINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_3.addFeatures(features_ViviendasenreasruralesINDEC_3);
var lyr_ViviendasenreasruralesINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_3, 
                style: style_ViviendasenreasruralesINDEC_3,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_0.png" /> 700 - 1.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_1.png" /> 1.501 - 3.250<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_2.png" /> 3.251 - 5.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_3.png" /> 5.501 - 9.000<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 7.250 - 16.000<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 16.001 - 45.000<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 45.001 - 110.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 110.001 o más<br />'
        });
var format_PoblacinpordeptoINDEC_5 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_5 = format_PoblacinpordeptoINDEC_5.readFeatures(json_PoblacinpordeptoINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_5.addFeatures(features_PoblacinpordeptoINDEC_5);
var lyr_PoblacinpordeptoINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_5, 
                style: style_PoblacinpordeptoINDEC_5,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_0.png" /> 12.075 - 35.775<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_1.png" /> 35.776 - 68.750<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_2.png" /> 68.751 - 170.025<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_3.png" /> 170.026 - 340.000<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 750 - 10.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 10.001 - 22.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 22.001 - 40.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 40.001 - 90.000<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 4.250 - 17.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 17.001 - 36.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 36.001 - 73.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 73.001 - 105.000<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 50 - 1.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 1.001 - 2.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 2.501 - 5.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 5.501 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 90.000 - 140.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 140.001 - 215.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 215.001 - 315.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 315.001 - 450.000<br />'
        });
var format_HectreasdearrozMAGyP_10 = new ol.format.GeoJSON();
var features_HectreasdearrozMAGyP_10 = format_HectreasdearrozMAGyP_10.readFeatures(json_HectreasdearrozMAGyP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdearrozMAGyP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdearrozMAGyP_10.addFeatures(features_HectreasdearrozMAGyP_10);
var lyr_HectreasdearrozMAGyP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdearrozMAGyP_10, 
                style: style_HectreasdearrozMAGyP_10,
                interactive: true,
    title: 'Hectáreas de arroz (MAGyP)<br />\
    <img src="styles/legend/HectreasdearrozMAGyP_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdearrozMAGyP_10_1.png" /> 1.500 - 4.000<br />\
    <img src="styles/legend/HectreasdearrozMAGyP_10_2.png" /> 4.001 - 9.000<br />\
    <img src="styles/legend/HectreasdearrozMAGyP_10_3.png" /> 9.001 o más<br />'
        });
var format_HectreasdectricosINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdectricosINDEC_11 = format_HectreasdectricosINDEC_11.readFeatures(json_HectreasdectricosINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdectricosINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdectricosINDEC_11.addFeatures(features_HectreasdectricosINDEC_11);
var lyr_HectreasdectricosINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdectricosINDEC_11, 
                style: style_HectreasdectricosINDEC_11,
                interactive: true,
    title: 'Hectáreas de cítricos (INDEC)<br />\
    <img src="styles/legend/HectreasdectricosINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdectricosINDEC_11_1.png" /> 1 - 50<br />\
    <img src="styles/legend/HectreasdectricosINDEC_11_2.png" /> 51 - 305<br />\
    <img src="styles/legend/HectreasdectricosINDEC_11_3.png" /> (más de 305): 10.000 - 30.000<br />'
        });
var format_HectreasdehortalizasINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_12 = format_HectreasdehortalizasINDEC_12.readFeatures(json_HectreasdehortalizasINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_12.addFeatures(features_HectreasdehortalizasINDEC_12);
var lyr_HectreasdehortalizasINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_12, 
                style: style_HectreasdehortalizasINDEC_12,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_12_1.png" /> 1 - 13<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_12_2.png" /> 13 - 55<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_12_3.png" /> 56 - 205<br />'
        });
var format_HectreasdearndanosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasdearndanosINDEC_13 = format_HectreasdearndanosINDEC_13.readFeatures(json_HectreasdearndanosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdearndanosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdearndanosINDEC_13.addFeatures(features_HectreasdearndanosINDEC_13);
var lyr_HectreasdearndanosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdearndanosINDEC_13, 
                style: style_HectreasdearndanosINDEC_13,
                interactive: true,
    title: 'Hectáreas de arándanos (INDEC)<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_1.png" /> 1 - 13<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_2.png" /> 14 - 100<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_13_3.png" /> 101 o más<br />'
        });
var format_HectreasdenogalesINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdenogalesINDEC_14 = format_HectreasdenogalesINDEC_14.readFeatures(json_HectreasdenogalesINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdenogalesINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdenogalesINDEC_14.addFeatures(features_HectreasdenogalesINDEC_14);
var lyr_HectreasdenogalesINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdenogalesINDEC_14, 
                style: style_HectreasdenogalesINDEC_14,
                interactive: true,
    title: 'Hectáreas de nogales (INDEC)<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_14_1.png" /> 1 - 12<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_14_2.png" /> 13 - 42<br />\
    <img src="styles/legend/HectreasdenogalesINDEC_14_3.png" /> 43 - 68<br />'
        });
var format_HectreasdemazMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_15 = format_HectreasdemazMAGyP_15.readFeatures(json_HectreasdemazMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_15.addFeatures(features_HectreasdemazMAGyP_15);
var lyr_HectreasdemazMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_15, 
                style: style_HectreasdemazMAGyP_15,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_1.png" /> 3.000 - 8.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_2.png" /> 8.001 - 28.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_3.png" /> 28.001 - 50.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_4.png" /> 50.001 - 76.000<br />'
        });
var format_HectreasdetrigoMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_16 = format_HectreasdetrigoMAGyP_16.readFeatures(json_HectreasdetrigoMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_16.addFeatures(features_HectreasdetrigoMAGyP_16);
var lyr_HectreasdetrigoMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_16, 
                style: style_HectreasdetrigoMAGyP_16,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_1.png" /> 3000 - 7250<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_2.png" /> 7250 - 30000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_3.png" /> 30000 - 62500<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_16_4.png" /> 62500 - 120000<br />'
        });
var format_HectreasdegirasolMAGyP_17 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_17 = format_HectreasdegirasolMAGyP_17.readFeatures(json_HectreasdegirasolMAGyP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_17.addFeatures(features_HectreasdegirasolMAGyP_17);
var lyr_HectreasdegirasolMAGyP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_17, 
                style: style_HectreasdegirasolMAGyP_17,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_17_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_17_1.png" /> 100 - 500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_17_2.png" /> 501 - 1.250<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_17_3.png" /> 1.251 - 1.800<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_17_4.png" /> 1.801 o más<br />'
        });
var format_HectreasdesojaMAGyP_18 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_18 = format_HectreasdesojaMAGyP_18.readFeatures(json_HectreasdesojaMAGyP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_18.addFeatures(features_HectreasdesojaMAGyP_18);
var lyr_HectreasdesojaMAGyP_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_18, 
                style: style_HectreasdesojaMAGyP_18,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_1.png" /> 12.500 - 25.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_2.png" /> 25.001 - 80.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_3.png" /> 80.001 - 125.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_4.png" /> 125.001 - 160.000<br />'
        });
var format_Capacitaciones2019tcnicas_19 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_19 = format_Capacitaciones2019tcnicas_19.readFeatures(json_Capacitaciones2019tcnicas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_19.addFeatures(features_Capacitaciones2019tcnicas_19);
var lyr_Capacitaciones2019tcnicas_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_19, 
                style: style_Capacitaciones2019tcnicas_19,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_19.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018_20 = new ol.format.GeoJSON();
var features_Capacitaciones2018_20 = format_Capacitaciones2018_20.readFeatures(json_Capacitaciones2018_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_20.addFeatures(features_Capacitaciones2018_20);
var lyr_Capacitaciones2018_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_20, 
                style: style_Capacitaciones2018_20,
                interactive: true,
    title: 'Capacitaciones 2018<br />\
    <img src="styles/legend/Capacitaciones2018_20_0.png" /> Difusión<br />\
    <img src="styles/legend/Capacitaciones2018_20_1.png" /> Técnica<br />'
        });
var format_Capacitaciones2017tcnicas_21 = new ol.format.GeoJSON();
var features_Capacitaciones2017tcnicas_21 = format_Capacitaciones2017tcnicas_21.readFeatures(json_Capacitaciones2017tcnicas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017tcnicas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017tcnicas_21.addFeatures(features_Capacitaciones2017tcnicas_21);
var lyr_Capacitaciones2017tcnicas_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017tcnicas_21, 
                style: style_Capacitaciones2017tcnicas_21,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2017tcnicas_21.png" /> Capacitaciones 2017 (técnicas)'
            });
var format_LocalidadesEntreRos_22 = new ol.format.GeoJSON();
var features_LocalidadesEntreRos_22 = format_LocalidadesEntreRos_22.readFeatures(json_LocalidadesEntreRos_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesEntreRos_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesEntreRos_22.addFeatures(features_LocalidadesEntreRos_22);
var lyr_LocalidadesEntreRos_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesEntreRos_22, 
                style: style_LocalidadesEntreRos_22,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesEntreRos_22.png" /> Localidades Entre Ríos'
            });
var format_BEREntreRos_23 = new ol.format.GeoJSON();
var features_BEREntreRos_23 = format_BEREntreRos_23.readFeatures(json_BEREntreRos_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEREntreRos_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEREntreRos_23.addFeatures(features_BEREntreRos_23);
var lyr_BEREntreRos_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BEREntreRos_23, 
                style: style_BEREntreRos_23,
                interactive: true,
                title: '<img src="styles/legend/BEREntreRos_23.png" /> BER Entre Ríos '
            });
var format_BEREntreRos_24 = new ol.format.GeoJSON();
var features_BEREntreRos_24 = format_BEREntreRos_24.readFeatures(json_BEREntreRos_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEREntreRos_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEREntreRos_24.addFeatures(features_BEREntreRos_24);
var lyr_BEREntreRos_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BEREntreRos_24, 
                style: style_BEREntreRos_24,
                interactive: true,
                title: '<img src="styles/legend/BEREntreRos_24.png" /> BER Entre Ríos'
            });
var format_AgenciaConcordia_25 = new ol.format.GeoJSON();
var features_AgenciaConcordia_25 = format_AgenciaConcordia_25.readFeatures(json_AgenciaConcordia_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgenciaConcordia_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgenciaConcordia_25.addFeatures(features_AgenciaConcordia_25);
var lyr_AgenciaConcordia_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgenciaConcordia_25, 
                style: style_AgenciaConcordia_25,
                interactive: true,
                title: '<img src="styles/legend/AgenciaConcordia_25.png" /> Agencia - Concordia'
            });
var format_Delegacin_26 = new ol.format.GeoJSON();
var features_Delegacin_26 = format_Delegacin_26.readFeatures(json_Delegacin_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_26.addFeatures(features_Delegacin_26);
var lyr_Delegacin_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_26, 
                style: style_Delegacin_26,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_26.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_ViviendasenreasruralesINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_PoblacinpordeptoINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdearrozMAGyP_10.setVisible(true);lyr_HectreasdectricosINDEC_11.setVisible(true);lyr_HectreasdehortalizasINDEC_12.setVisible(true);lyr_HectreasdearndanosINDEC_13.setVisible(true);lyr_HectreasdenogalesINDEC_14.setVisible(true);lyr_HectreasdemazMAGyP_15.setVisible(true);lyr_HectreasdetrigoMAGyP_16.setVisible(true);lyr_HectreasdegirasolMAGyP_17.setVisible(true);lyr_HectreasdesojaMAGyP_18.setVisible(true);lyr_Capacitaciones2019tcnicas_19.setVisible(true);lyr_Capacitaciones2018_20.setVisible(true);lyr_Capacitaciones2017tcnicas_21.setVisible(true);lyr_LocalidadesEntreRos_22.setVisible(true);lyr_BEREntreRos_23.setVisible(true);lyr_BEREntreRos_24.setVisible(true);lyr_AgenciaConcordia_25.setVisible(true);lyr_Delegacin_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_ViviendasenreasruralesINDEC_3,lyr_PEAINDEC_4,lyr_PoblacinpordeptoINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdearrozMAGyP_10,lyr_HectreasdectricosINDEC_11,lyr_HectreasdehortalizasINDEC_12,lyr_HectreasdearndanosINDEC_13,lyr_HectreasdenogalesINDEC_14,lyr_HectreasdemazMAGyP_15,lyr_HectreasdetrigoMAGyP_16,lyr_HectreasdegirasolMAGyP_17,lyr_HectreasdesojaMAGyP_18,lyr_Capacitaciones2019tcnicas_19,lyr_Capacitaciones2018_20,lyr_Capacitaciones2017tcnicas_21,lyr_LocalidadesEntreRos_22,lyr_BEREntreRos_23,lyr_BEREntreRos_24,lyr_AgenciaConcordia_25,lyr_Delegacin_26];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldAliases', {'vivRur': 'vivRur', });
lyr_PEAINDEC_4.set('fieldAliases', {'pea': 'pea', });
lyr_PoblacinpordeptoINDEC_5.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasdearrozMAGyP_10.set('fieldAliases', {'arroz': 'arroz', });
lyr_HectreasdectricosINDEC_11.set('fieldAliases', {'citricos': 'citricos', });
lyr_HectreasdehortalizasINDEC_12.set('fieldAliases', {'hortalizas': 'hortalizas', });
lyr_HectreasdearndanosINDEC_13.set('fieldAliases', {'arandanos': 'arandanos', });
lyr_HectreasdenogalesINDEC_14.set('fieldAliases', {'nogales': 'nogales', });
lyr_HectreasdemazMAGyP_15.set('fieldAliases', {'maiz': 'maiz', });
lyr_HectreasdetrigoMAGyP_16.set('fieldAliases', {'trigo': 'trigo', });
lyr_HectreasdegirasolMAGyP_17.set('fieldAliases', {'girasol': 'girasol', });
lyr_HectreasdesojaMAGyP_18.set('fieldAliases', {'soja': 'soja', });
lyr_Capacitaciones2019tcnicas_19.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2018_20.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2017tcnicas_21.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_LocalidadesEntreRos_22.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BEREntreRos_23.set('fieldAliases', {'localidad': 'localidad', 'entidad': 'entidad', 'direccion': 'direccion', 'numero': 'numero', });
lyr_BEREntreRos_24.set('fieldAliases', {'localidad': 'localidad', 'entidad': 'entidad', 'direccion': 'direccion', 'numero': 'numero', });
lyr_AgenciaConcordia_25.set('fieldAliases', {'localidad': 'localidad', 'entidad': 'entidad', 'direccion': 'direccion', });
lyr_Delegacin_26.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldImages', {'vivRur': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'pea': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_5.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasdearrozMAGyP_10.set('fieldImages', {'arroz': 'TextEdit', });
lyr_HectreasdectricosINDEC_11.set('fieldImages', {'citricos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_12.set('fieldImages', {'hortalizas': 'TextEdit', });
lyr_HectreasdearndanosINDEC_13.set('fieldImages', {'arandanos': 'TextEdit', });
lyr_HectreasdenogalesINDEC_14.set('fieldImages', {'nogales': 'TextEdit', });
lyr_HectreasdemazMAGyP_15.set('fieldImages', {'maiz': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_16.set('fieldImages', {'trigo': 'TextEdit', });
lyr_HectreasdegirasolMAGyP_17.set('fieldImages', {'girasol': 'TextEdit', });
lyr_HectreasdesojaMAGyP_18.set('fieldImages', {'soja': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_19.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Capacitaciones2018_20.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Capacitaciones2017tcnicas_21.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_LocalidadesEntreRos_22.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BEREntreRos_23.set('fieldImages', {'localidad': 'TextEdit', 'entidad': 'TextEdit', 'direccion': 'TextEdit', 'numero': 'TextEdit', });
lyr_BEREntreRos_24.set('fieldImages', {'localidad': 'TextEdit', 'entidad': 'TextEdit', 'direccion': 'TextEdit', 'numero': 'TextEdit', });
lyr_AgenciaConcordia_25.set('fieldImages', {'localidad': 'TextEdit', 'entidad': 'TextEdit', 'direccion': 'TextEdit', });
lyr_Delegacin_26.set('fieldImages', {'localidad': 'TextEdit', 'direccion': 'TextEdit', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldLabels', {'vivRur': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'pea': 'inline label', });
lyr_PoblacinpordeptoINDEC_5.set('fieldLabels', {'poblacion': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'ovinos': 'no label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasdearrozMAGyP_10.set('fieldLabels', {'arroz': 'inline label', });
lyr_HectreasdectricosINDEC_11.set('fieldLabels', {'citricos': 'inline label', });
lyr_HectreasdehortalizasINDEC_12.set('fieldLabels', {'hortalizas': 'inline label', });
lyr_HectreasdearndanosINDEC_13.set('fieldLabels', {'arandanos': 'inline label', });
lyr_HectreasdenogalesINDEC_14.set('fieldLabels', {'nogales': 'inline label', });
lyr_HectreasdemazMAGyP_15.set('fieldLabels', {'maiz': 'inline label', });
lyr_HectreasdetrigoMAGyP_16.set('fieldLabels', {'trigo': 'inline label', });
lyr_HectreasdegirasolMAGyP_17.set('fieldLabels', {'girasol': 'inline label', });
lyr_HectreasdesojaMAGyP_18.set('fieldLabels', {'soja': 'inline label', });
lyr_Capacitaciones2019tcnicas_19.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2018_20.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2017tcnicas_21.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_LocalidadesEntreRos_22.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BEREntreRos_23.set('fieldLabels', {'localidad': 'inline label', 'entidad': 'inline label', 'direccion': 'inline label', 'numero': 'inline label', });
lyr_BEREntreRos_24.set('fieldLabels', {'localidad': 'inline label', 'entidad': 'inline label', 'direccion': 'inline label', 'numero': 'inline label', });
lyr_AgenciaConcordia_25.set('fieldLabels', {'localidad': 'inline label', 'entidad': 'inline label', 'direccion': 'inline label', });
lyr_Delegacin_26.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_Delegacin_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});