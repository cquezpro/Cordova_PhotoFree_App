var RR = {
	screens: {},
	settings: {
		tiles: 12,
		baseReward: 100,
		webUrlPrefix : 'http://www.rumpus.com/wtp/',
		clickurl : 'http://trk.rumpus.com/click/wtp',
        replayDelay : 500, //ms
        mixpanelkey : "3d684a4cad3f705217645a5f6eda7863",
        pusherKey: "64069cf5c74b4c8c2c09",
        loggedInViaFaceBook: false,
        loggedInViaEmail: false,
        firstRun : true,
		
//		 apiprefix : 'http://wtp-api-integ.strongerlabs.cloudbees.net/sticky/v1/',
//		 trackprefix : 'http://trk.rumpus.com/track/v1/qa/',
//		 fb_app_id : "461627880520889" 
				
		apiprefix :  'https://wtpapi.rumpus.com/sticky/v1/', 
		trackprefix : 'http://trk.rumpus.com/track/v1/wtp/',
		fb_app_id : "265588170196836"  // MUST BE QUOTED
	}
};

window.addEventListener('load', function(){
	/* checks if the app is running as a standalone bookmarked app with no browser ui */
	Modernizr.load([{
		load: [


















































            'scripts/plugins/iRate.js'
		], 
		complete: function () { 
            if(typeof(cordova) != 'undefined') {
                if(typeof(cordova.exec) != 'undefined' && typeof(cordova.available) == 'undefined'){
                    cordova.available = true;
                }
            }

            $(document).waitForImages({
                finished: function() {
//                    console.log("TEST all images loaded");
                },
                each: function(loaded, count, success) {
//                    console.log("TEST image "+loaded+" loaded from "+count+". Success: "+success);
                },
                waitForAll: true
            });

			var Cordova = window.Cordova || window.cordova;
                    
            Modernizr.addTest("keyframe", Modernizr.testAllProps('animationName'));

			if (typeof(device) != 'undefined' && device.uuid != undefined){

                var fbplugin = 'scripts/lib/cdv-plugin-fb-connect.js';

                if (navigator.userAgent.toLowerCase().match(/android/)) {
                    fbplugin = 'scripts/lib/cdv-plugin-fb-connect.android.js';
                }

				Modernizr.load({
					load: [
					       fbplugin, 'scripts/lib/facebook_js_sdk.js','scripts/notification.js',
					], complete: function(){
                               FB.init({ appId: RR.settings.fb_app_id, nativeInterface: CDV.FB, frictionlessRequests: true });
                            var deviceData = DeviceData.getDeviceData(function(dict){
                                RR.settings.open_udid = dict["open_udid"];
                                RR.settings.has_camera = dict["has_camera"];
                                RR.settings.has_facebook = dict["has_facebook"];                                                                      
			                	RR.settings.push_token = dict["push_token"];                                    
			                	RR.settings.device_model = dict["device_model"];     
			                	RR.settings.app = dict["app"]; 
                                RR.settings.app_version = dict["app_version"];
                                RR.settings.www_version = dict["www_version"];
                                RR.settings.udid = dict["udid"];
                                
                                RR.settings.has_twitter = false;
                                if ( window.plugins && window.plugins.twitter){
                                	window.plugins.twitter.isTwitterAvailable(function( hasTwitter ){
                                		RR.settings.has_twitter = true;
                                	});
                                } 
                                
                                RR.game.setup();
                                    
                                    RR.settings.firstRun = false;
                                    RR.login.checkLogin(); 	                              

//                                        RR.settings.firstRun = true;
//                                        RR.screens['intro'].run();                                  

                            });		
					}
				});

			} else {
				Modernizr.load({
					load: [ 'http://connect.facebook.net/en_US/all.js' ],
					complete : function(){	
						var root = document.location.href.substring(0, document.location.href.lastIndexOf("/"));
			    		FB.init({ appId: RR.settings.fb_app_id, channelUrl : root+'/channel.html' });
                        RR.game.setup();
			        	RR.login.checkLogin(); 	
						RR.screens['lobby'].run();
					}
				});
			}
        }
	}]);

}, false);
