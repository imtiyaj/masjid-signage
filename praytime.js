'use strict';

var school=["Leva Research Institute, Qom, Iran",
                "University of Islamic Sciences, Karachi",
                "Islamic Society of North America (ISNA)",
                "Muslim World League (MWL)",
                "Umm al-Qura, Makkah, Saudi Arabia",
                "Egyptian General Authority of Survey"]
var rest = require('restler')
var curl = require('node-curl');


var latitude=12.9833, longitude=77.5832980000000,  gmtinmin=330, vmonth=5,vyear=2014, schoolno=2;
var fullyrprayertime=[];
function getprayertimes(){

    for (vmonth=1; vmonth<2; vmonth++) {

        var resturl='http://praytime.info/getprayertimes.php?lat=12.9833&lon=77.58329800000001&gmt=330&m='
    +vmonth+'&y='+vyear+'&school='+schoolno ;

        curl(resturl, function(err) {
            console.log(err);
        })


        //console.log(vmonth)
        /*
        rest.json(resturl).on('complete', function (result) {
            if (result instanceof Error) {

                console.log(JSON.parse(result))
            } else {
                console.log(JSON.parse(result))

                fullyrprayertime.push(result)
                //console.log(fullyrprayertime);
            }
        }) */
    }
}

getprayertimes();