/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 't',
                type: 'image',
                rect: ['0px', '192px','300px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'p8',
                type: 'image',
                rect: ['288px', '0px','206px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p8.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'p7',
                type: 'image',
                rect: ['288px', '0px','206px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p7.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'p6',
                type: 'image',
                rect: ['288px', '1px','206px','138px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p6.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'p5',
                type: 'image',
                rect: ['288px', '0px','206px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p5.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'p4',
                type: 'image',
                rect: ['288px', '-1px','206px','154px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'p3',
                type: 'image',
                rect: ['288px', '-1px','206px','154px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'p2',
                type: 'image',
                rect: ['288px', '-1px','206px','154px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'p1',
                type: 'image',
                rect: ['303px', '11px','175px','135px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1.jpg",'0px','0px']
            },
            {
                id: 'f',
                type: 'image',
                rect: ['1px', '8px','118px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.jpg",'0px','0px']
            },
            {
                id: 'a',
                type: 'image',
                rect: ['29px', '154px','400px','21px','auto', 'auto'],
                clip: ['rect(0px 253px 21px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a.jpg",'0px','0px']
            },
            {
                id: 'f122',
                type: 'image',
                rect: ['122px', '125px','176px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f12.jpg",'0px','0px']
            },
            {
                id: 'portal2',
                type: 'image',
                rect: ['-3617px', '82px','8810px','110px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"portal2.svg",'0px','0px'],
                transform: [[],[],[],['0.12','0.13']]
            },
            {
                id: 'l',
                type: 'image',
                rect: ['8px', '67px','106px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_p7}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '206px']
            ],
            "${_p6}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '206px']
            ],
            "${_p1}": [
                ["style", "top", '11px'],
                ["style", "height", '135px'],
                ["style", "opacity", '0'],
                ["style", "left", '303px'],
                ["style", "width", '175px']
            ],
            "${_a}": [
                ["style", "top", '154px'],
                ["style", "left", '29px'],
                ["style", "clip", [0,253,21,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_portal2}": [
                ["style", "top", '82px'],
                ["transform", "scaleY", '0.13'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.12'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,8810,110,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-3617px']
            ],
            "${_f122}": [
                ["style", "top", '125px'],
                ["style", "right", 'auto'],
                ["style", "height", '21px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '176px']
            ],
            "${_p5}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '206px']
            ],
            "${_p4}": [
                ["style", "top", '-1px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '206px']
            ],
            "${_l}": [
                ["style", "top", '67px'],
                ["style", "height", '80px'],
                ["style", "opacity", '1'],
                ["style", "left", '8px'],
                ["style", "width", '106px']
            ],
            "${_f}": [
                ["style", "top", '8px'],
                ["style", "height", '50px'],
                ["style", "opacity", '1'],
                ["style", "left", '1px'],
                ["style", "width", '118px']
            ],
            "${_t}": [
                ["style", "top", '192px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "height", '31px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ],
            "${_p8}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "height", '141px'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '206px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_portal}": [
                ["style", "left", '-4139px'],
                ["style", "top", '9px']
            ],
            "${_p2}": [
                ["style", "top", '-1px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '206px']
            ],
            "${_p3}": [
                ["style", "top", '-1px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '288px'],
                ["style", "width", '206px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17000,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_p1}", "left", '122px', { fromValue: '303px'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid8", tween: [ "style", "${_p1}", "left", '303px', { fromValue: '122px'}], position: 2000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid51", tween: [ "style", "${_f122}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid78", tween: [ "style", "${_f122}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid24", tween: [ "style", "${_p5}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid25", tween: [ "style", "${_p5}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid28", tween: [ "style", "${_p6}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid29", tween: [ "style", "${_p6}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${_p4}", "left", '107px', { fromValue: '288px'}], position: 6000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid19", tween: [ "style", "${_p4}", "left", '288px', { fromValue: '107px'}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid52", tween: [ "style", "${_portal2}", "left", '-3750px', { fromValue: '-3617px'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid67", tween: [ "style", "${_portal2}", "left", '-3916px', { fromValue: '-3750px'}], position: 4000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid14", tween: [ "style", "${_p3}", "left", '107px', { fromValue: '288px'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid15", tween: [ "style", "${_p3}", "left", '288px', { fromValue: '107px'}], position: 16000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid10", tween: [ "style", "${_p2}", "left", '107px', { fromValue: '288px'}], position: 10000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${_p2}", "left", '288px', { fromValue: '107px'}], position: 12000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid40", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid32", tween: [ "style", "${_p7}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid33", tween: [ "style", "${_p7}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid63", tween: [ "style", "${_portal2}", "background-position", [-1589.3939396667,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "style", "${_portal2}", "background-position", [-2772.7272736667,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1589.39394,0]}], position: 6000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid71", tween: [ "style", "${_portal2}", "background-position", [-3797.727274,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2772.727274,0]}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid73", tween: [ "style", "${_portal2}", "background-position", [-4706.0606073333,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3797.727274,0]}], position: 10000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid74", tween: [ "style", "${_portal2}", "background-position", [-5606.060607,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4706.060607,0]}], position: 12000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid76", tween: [ "style", "${_portal2}", "background-position", [-6464.3939403333,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5606.060607,0]}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid70", tween: [ "style", "${_portal2}", "clip", [0,2726.66650390625,110,1525], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,8810,110,0]}], position: 6000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid72", tween: [ "style", "${_portal2}", "clip", [0,2593.333251953125,110,1525], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2726.66650390625,110,1525]}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid75", tween: [ "style", "${_portal2}", "clip", [0,2501.66650390625,110,1525], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2593.333251953125,110,1525]}], position: 12000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid42", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid68", tween: [ "style", "${_portal2}", "top", '81px', { fromValue: '82px'}], position: 4000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid22", tween: [ "style", "${_p5}", "left", '107px', { fromValue: '288px'}], position: 2000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid23", tween: [ "style", "${_p5}", "left", '288px', { fromValue: '107px'}], position: 4000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid4", tween: [ "style", "${_p1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid9", tween: [ "style", "${_p1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid44", tween: [ "style", "${_portal}", "left", '-175px', { fromValue: '-4139px'}], position: 0, duration: 16500 },
                { id: "eid77", tween: [ "style", "${_portal2}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid46", tween: [ "style", "${_portal}", "top", '58px', { fromValue: '9px'}], position: 0, duration: 16500 },
                { id: "eid20", tween: [ "style", "${_p4}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid21", tween: [ "style", "${_p4}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid30", tween: [ "style", "${_p7}", "left", '107px', { fromValue: '288px'}], position: 12000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid31", tween: [ "style", "${_p7}", "left", '288px', { fromValue: '107px'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${_a}", "top", '184px', { fromValue: '154px'}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid36", tween: [ "style", "${_p8}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${_p8}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid26", tween: [ "style", "${_p6}", "left", '107px', { fromValue: '288px'}], position: 4000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid27", tween: [ "style", "${_p6}", "left", '288px', { fromValue: '107px'}], position: 6000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid12", tween: [ "style", "${_p2}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid13", tween: [ "style", "${_p2}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid16", tween: [ "style", "${_p3}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid17", tween: [ "style", "${_p3}", "opacity", '0', { fromValue: '1'}], position: 16000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${_t}", "top", '150px', { fromValue: '192px'}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid34", tween: [ "style", "${_p8}", "left", '107px', { fromValue: '288px'}], position: 8000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid35", tween: [ "style", "${_p8}", "left", '288px', { fromValue: '107px'}], position: 10000, duration: 500, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-67363");
