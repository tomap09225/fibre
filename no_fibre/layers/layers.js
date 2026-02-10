ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([132547.391652, 5390254.572972, 184586.358087, 5430761.358480]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="osm.org">OSMContributeurs</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_1, 
                style: style_Communes_1,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_IMBaux3metrimestre2025_2 = new ol.format.GeoJSON();
var features_IMBaux3metrimestre2025_2 = format_IMBaux3metrimestre2025_2.readFeatures(json_IMBaux3metrimestre2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMBaux3metrimestre2025_2 = new ol.source.Vector({
    attributions: '&nbsp;&middot; <a href="https://www.data.gouv.fr/datasets/ma-connexion-internet">arcep</a>',
});
jsonSource_IMBaux3metrimestre2025_2.addFeatures(features_IMBaux3metrimestre2025_2);
cluster_IMBaux3metrimestre2025_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IMBaux3metrimestre2025_2
});
var lyr_IMBaux3metrimestre2025_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IMBaux3metrimestre2025_2, 
                style: style_IMBaux3metrimestre2025_2,
                popuplayertitle: 'IMB aux 3ème trimestre 2025',
                interactive: true,
                title: '<img src="styles/legend/IMBaux3metrimestre2025_2.png" /> IMB aux 3ème trimestre 2025'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Communes_1.setVisible(true);lyr_IMBaux3metrimestre2025_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Communes_1,lyr_IMBaux3metrimestre2025_2];
lyr_Communes_1.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'code_insee': 'code_insee', 'libelle': 'libelle', 'libcom': 'libcom', 'code_fantoir': 'code_fantoir', 'id_ban_commune': 'id_ban_commune', });
lyr_IMBaux3metrimestre2025_2.set('fieldAliases', {'x': 'x', 'y': 'y', 'imb_id': 'imb_id', 'num_voie': 'num_voie', 'cp_no_voie': 'cp_no_voie', 'type_voie': 'type_voie', 'nom_voie': 'nom_voie', 'batiment': 'batiment', 'code_insee': 'code_insee', 'code_poste': 'code_poste', 'nom_com': 'Commune', 'catg_loc_imb': 'catg_loc_imb', 'imb_etat': 'imb_etat', 'pm_ref': 'pm_ref', 'pm_etat': 'pm_etat', 'pm_date_mad': 'Date reliement du secteur (pm_date_mad)', 'code_l331': 'code_l331', 'type_imb': 'type_imb', 'date_completude': 'date_completude', 'date_completude_manquante': 'date_completude_manquante', });
lyr_Communes_1.set('fieldImages', {'geo_point_2d': 'KeyValue', 'code_insee': 'Range', 'libelle': 'TextEdit', 'libcom': 'TextEdit', 'code_fantoir': 'Range', 'id_ban_commune': 'TextEdit', });
lyr_IMBaux3metrimestre2025_2.set('fieldImages', {'x': 'Hidden', 'y': 'Hidden', 'imb_id': 'TextEdit', 'num_voie': 'Range', 'cp_no_voie': 'TextEdit', 'type_voie': 'TextEdit', 'nom_voie': 'TextEdit', 'batiment': 'Hidden', 'code_insee': 'Hidden', 'code_poste': 'Range', 'nom_com': 'TextEdit', 'catg_loc_imb': 'Hidden', 'imb_etat': 'TextEdit', 'pm_ref': 'TextEdit', 'pm_etat': 'TextEdit', 'pm_date_mad': 'DateTime', 'code_l331': 'Hidden', 'type_imb': 'Hidden', 'date_completude': 'Hidden', 'date_completude_manquante': 'Hidden', });
lyr_Communes_1.set('fieldLabels', {'geo_point_2d': 'no label', 'code_insee': 'no label', 'libelle': 'no label', 'libcom': 'no label', 'code_fantoir': 'no label', 'id_ban_commune': 'no label', });
lyr_IMBaux3metrimestre2025_2.set('fieldLabels', {'imb_id': 'header label - visible with data', 'num_voie': 'header label - visible with data', 'cp_no_voie': 'header label - visible with data', 'type_voie': 'header label - visible with data', 'nom_voie': 'header label - visible with data', 'code_poste': 'header label - visible with data', 'nom_com': 'header label - visible with data', 'imb_etat': 'header label - visible with data', 'pm_ref': 'header label - visible with data', 'pm_etat': 'header label - visible with data', 'pm_date_mad': 'header label - visible with data', });
lyr_IMBaux3metrimestre2025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});