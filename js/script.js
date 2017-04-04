$(function(){
	main();
});

function main(){
	let current_infos = [{
		img: 'images/smartscan.png',
		title: 'SmartScan WEBSITE', 
		description: "SmartScan website proposes several OCR libraries for smartphones. KESKE T'AS FAIT EXACTEMENT?",
		id: 'smartScan Website',
		link: 'http://smartscan.icare.ch'
	}, {
		img: 'images/breitlingb55.png',
		title: 'Exospace B55 App',
		description:
			"The Exospace B55 connected watch offers functionalities tailored for pilots. " +
			"I implemented the watch's iOS application and designed the bluetooth specification for" +
				" communication between the watch and the smartphone",
		id: 'breitling',
		link: 'https://www.breitling.com/en/campaigns/exospace-b55-connected'
	}, {
		img: 'images/flarePlot.png',
		title: 'FlarePlot Visualization',
		description: "FlarePlot is a plot designed to see evolutions of network over time",
		id: 'flarePlot',
		link: 'http://rasmusfonseca.github.io/EvoBundle/gpcr_demo2/'
	}, {
		img: 'images/techo-vert.png',
		title: 'Technopole vert Visualization',
		description: "Technopole Vert (a.k.a 'Green technopole') is an information system that retrieves measures" +
		" from sensors. It stores in a database (MongoDB) the electrical production of solar panels installed on the roof a given building, " +
		" and stores the electrical of the consumption of this building. A visualization has been designed on the top" +
			"of this system. I built the various part of this system",
		id: 'tp-vert',
		link: 'http://www.technopole-vert.ch'
	}, {
		img: 'images/dominoPlot.png',
		title: 'dominoPlot Visualization',
		description: "Traditionally, Venn Diagram are used to visualize multiple sets and their intersections." +
		". When more than 4 sets are presents, these diagrams tend to be very messy." + "" +
		"DominoPlot is new type of chart that has been created to allow an easy and interactive visualisations of " +
		" multiple sets.",
		id: 'dominoPlot',
		link: 'http://zemihlebach.github.io/dominoPlot/'
	}, {
        img: 'images/smartscan.png',
        title: 'Natural capital dashboard`',
        description: "The Upper Tana Nairobi Water Fund aims to improve water quality and supply for the Nairobi region, in Kenya. "+
		"To do so while preserving natural capital and managing landscapes sustainably, several interventions could to be undertaken on the watersheds."+
		" To optimize the conservation strategy, a multi-objective optimization has been conducted by the Natural Capital Project. This interactive visualization dashboard allows to explore the complex dataset,"+
		"allowing to visualize tradeoffs between objectives, correlations between metrics, compare scenarios and assess uncertainty.",
        id: 'natcap',
        link: 'https://charlottegiseleweil.github.io/webviz_natcap/'
	}];
	
	let older_infos = [
        {
            title: 'D3 Blocks',
            description: "A lot of experimentations in D3. Some of these are worth taking a look",
            id: 'blocks',
            link: 'https://bl.ocks.org/zemihlebach',
            noImage: true
        },
        {
            title: 'FCGridView Library',
            description: "A library that implement a gridlayout using constraints, written in Objective-C.",
            id: 'fcgridview',
            link: 'https://github.com/zemihlebach/FCGridView',
			noImage: true
        },
        {
            title: 'Bachelor thesis/Ninapro',
            description: "The goal of this bachelor thesis was to build a information system that was able to store data of electromyograms",
            id: 'ninapro',
            link: 'ninapro',
            noImage: true
        }
	];

		//detailsOnHover('#btn_smartscan', smartscan_infos);

	current_infos.forEach((info) => {
		detailsOnHover('.current-project', info);
	});	

	older_infos.forEach((info) => {
		detailsOnHover('.older-project', info);
	});

}



function detailsOnHover(containerId, project_infos){
		let ctn = $(containerId);
		let link = project_infos.link;
		let img = project_infos.img;
		let title = project_infos.title;
		let description = project_infos.description;
		let btnId = project_infos.id;
		let noImg = !!project_infos.noImage;
		
		let html = `<a target="_blank" href="${link}"> 
			   			<div id="${btnId}" class="btn waves-light">${title}</div>
			   		</a>`
		// generate content
		ctn.append(html);
		btn = $('#' + btnId);
		btn.on("mouseover", (d, i) => {
			$("#project_img").attr("src", img)
			$("#project_title").html(title);
			$("#project_text").html(description);
			if (!noImg) {
                $("#project_img").removeClass("hidden");
			}
		}).on("mouseout", function(){
			$("#project_text").html(" ");
			$("#project_img").attr("src"," ")
			$("#project_title").html(" ");
            $("#project_img").addClass("hidden");

		});
}

// faire un bout de text, petit resume a la place de l'image

