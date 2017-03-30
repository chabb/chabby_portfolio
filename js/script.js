$(function(){
	main();
})

function main(){
	let current_infos = [{
		img: 'images/smartscan.png',
		title: 'SmartScan', 
		description: "The Breitling B55 is a swiss-made connected chrongraph. I coded the iOS companion application of this watch and designed the bluetooth" 
			+ "specification of the interactions between the watch and the smartphone.",
		id: 'smartScan',
		link: 'http://www.smartscan.icare.ch',
	}];
	
	let older_infos = [];

		//detailsOnHover('#btn_smartscan', smartscan_infos);

	current_infos.forEach((info) => {
		detailsOnHover('.current-project', info);
	});	
}

function detailsOnHover(containerId, project_infos){
		let ctn = $(containerId);
		let link = project_infos.link;
		let img = project_infos.img;
		let title = project_infos.title;
		let description = project_infos.description;
		let btnId = project_infos.id;
		



		let html = `<a target="_blank" href="${link}"> 
			   			<div id="${btnId}" class="btn waves-light">${title}</div>
			   		</a>`
		// generate content
		ctn.append(html);

		btn = $('#' + btnId);

		btn.on("mouseover", function(d, i){ 
			$("#project_img").attr("src", img)
			$("#project_title").html(title);
			$("#project_text").html(description); 
		}).on("mouseout", function(){
			$("#project_text").html(" ");
			$("#project_img").attr("src"," ")
			$("#project_title").html(" ");
		});
}

