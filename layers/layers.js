var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_KlasterEkonomiHijau_1 = new ol.format.GeoJSON();
var features_KlasterEkonomiHijau_1 = format_KlasterEkonomiHijau_1.readFeatures(json_KlasterEkonomiHijau_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlasterEkonomiHijau_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasterEkonomiHijau_1.addFeatures(features_KlasterEkonomiHijau_1);
var lyr_KlasterEkonomiHijau_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlasterEkonomiHijau_1, 
                style: style_KlasterEkonomiHijau_1,
                popuplayertitle: "Klaster Ekonomi Hijau",
                interactive: true,
    title: 'Klaster Ekonomi Hijau<br />\
    <img src="styles/legend/KlasterEkonomiHijau_1_0.png" /> Klaster 1<br />\
    <img src="styles/legend/KlasterEkonomiHijau_1_1.png" /> Klaster 2<br />\
    <img src="styles/legend/KlasterEkonomiHijau_1_2.png" /> Klaster 3<br />\
    <img src="styles/legend/KlasterEkonomiHijau_1_3.png" /> Klaster 4<br />\
    <img src="styles/legend/KlasterEkonomiHijau_1_4.png" /> Klaster 5<br />'
        });
var format_BatasKabupaten_2 = new ol.format.GeoJSON();
var features_BatasKabupaten_2 = format_BatasKabupaten_2.readFeatures(json_BatasKabupaten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_2.addFeatures(features_BatasKabupaten_2);
var lyr_BatasKabupaten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_2, 
                style: style_BatasKabupaten_2,
                popuplayertitle: "Batas Kabupaten",
                interactive: false,
                title: '<img src="styles/legend/BatasKabupaten_2.png" /> Batas Kabupaten'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KlasterEkonomiHijau_1.setVisible(true);lyr_BatasKabupaten_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KlasterEkonomiHijau_1,lyr_BatasKabupaten_2];
lyr_KlasterEkonomiHijau_1.set('fieldAliases', {'Desa': 'Desa', 'Kode Desa': 'Kode Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Aktivitas_Ekonomi_Penduduk': 'Aktivitas_Ekonomi_Penduduk', 'Keterbangunan_Wilayah': 'Keterbangunan_Wilayah', 'Kehijauan_Negatif': 'Kehijauan_Negatif', 'Polusi_Udara': 'Polusi_Udara', 'Klaster': 'Klaster', });
lyr_BatasKabupaten_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_KlasterEkonomiHijau_1.set('fieldImages', {'Desa': 'TextEdit', 'Kode Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Aktivitas_Ekonomi_Penduduk': 'TextEdit', 'Keterbangunan_Wilayah': 'TextEdit', 'Kehijauan_Negatif': 'TextEdit', 'Polusi_Udara': 'TextEdit', 'Klaster': 'Range', });
lyr_BatasKabupaten_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_KlasterEkonomiHijau_1.set('fieldLabels', {'Desa': 'inline label - visible with data', 'Kode Desa': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', 'Aktivitas_Ekonomi_Penduduk': 'inline label - visible with data', 'Keterbangunan_Wilayah': 'inline label - visible with data', 'Kehijauan_Negatif': 'inline label - visible with data', 'Polusi_Udara': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', });
lyr_BatasKabupaten_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_BatasKabupaten_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});