$(function(){
	main();
})

function main(){
	var smartscan_infos = ["Smart Scan", "images/smartscan.png","The Breitling B55 is a swiss-made connected chrongraph. I coded the iOS companion application of this watch and designed the bluetooth specification of the interactions between the watch and the smartphone."]

	
		detailsOnHover('#btn_smartscan', smartscan_infos);
}

function detailsOnHover(btnID, project_infos){
		var btn = $(btnID)

		btn.on("mouseover", function(d, i){ 
			$("#project_img").attr("src",project_infos[1])
			$("#project_title").html(project_infos[0]);
			$("#project_text").html(project_infos[2]); 
		}).on("mouseout", function(){
			$("#project_text").html(" ");
			$("#project_img").attr("src"," ")
			$("#project_title").html(" ");
		});
}

