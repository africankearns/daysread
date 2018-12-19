//create count in database
if(localStorage.getItem("count")==null){
localStorage.setItem("count",0)

}

//Update HTML to Match Count
function update(){
document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()


//Add One to Count
function plusOne(){
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
	update()
}

//Reset Count
function reset(){
	if(confirm("Are you sure you want to start over?")){
	localStorage.setItem("count",0)
	update()
	}
		
	}

//add 10
function add10(){
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 10)
	update()
}
