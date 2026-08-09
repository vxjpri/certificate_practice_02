sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/vxj03/incident/test/integration/pages/IncidentsList.gen",
	"com/vxj03/incident/test/integration/pages/IncidentsObjectPage.gen"
], function (JourneyRunner, IncidentsListGenerated, IncidentsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/vxj03/incident') + '/test/flp.html#app-preview',
        pages: {
			onTheIncidentsListGenerated: IncidentsListGenerated,
			onTheIncidentsObjectPageGenerated: IncidentsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

