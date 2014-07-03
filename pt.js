var exec = require('child_process').exec,
    fs= require('fs'),
    _= require('lodash'),
    jade = require('jade'),
    os = require('os');

function pt(){
    var html;
    fs.readFile('./test.jade','utf8', function(err, data){
        if(err) console.log(err);
        html= jade.compile(data, {pretty: true} )({ //ipaddress: myIpAddress || null, serverId: format,
            //linkstatus:settings.nwinfo.LINK,dnsstatus:settings.nwinfo.DNS,dhcpserver:settings.nwinfo.DHCP,
            });

        fs.writeFile('./test.html', html, function(err){
            if (err) console.log(err);

//            setTimeout(function () {
//                noticeDisplayInProgress = false;
//                if (piGlobals.playlistOn) {
//                    changePlaylist(function (err) {
//                    })
//                }
//            }, 8000);
        })
    })
}

pt();


//Islamic Month, Hijri date; English date; time
//Temperature?
//Tulu, Jawal, Gurub
//currrent Jamat [fajr] [time]
//Tahajjud start/end
//Suhr, iftar,
//azaan

//Kiblah direction