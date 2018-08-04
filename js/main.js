var foods = [
{
	name: "Vietnamese",
	image :"https://en.pimg.jp/019/992/750/1/19992750.jpg"
},
{
	name: "Pizza",
	image: "https://vignette.wikia.nocookie.net/oddsquad/images/f/f4/Pizza.png/revision/latest?cb=20170203223737"
},
{
	name: "Korean BBQ",
	image: "http://blogs.mercurynews.com/eat-drink-play/files/2015/02/blog-genkorean-2.jpg"
},
{
	name:"BBQ",
	image: "http://is2.4chan.org/ck/1532984552897.png"
},
{
	name: "Mexican",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT0M49liQqEI6IIMCZlmxIKHrixi02aQiaefUnwW0N472a49C"
},
{
	name: "Indian",
	image : "http://www.pngmart.com/files/5/Indian-Food-PNG-Pic.png"
},
{
	name: "Italian",
	image: "https://www.revlocal.com/FileStore.ashx?id=121739"
},
{
	name:"Chinese",
	image: "https://cdn.vox-cdn.com/thumbor/tfOrodajj-yXnTyjFDqWI8CCkVE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/10193281/Screen_Shot_2018_02_09_at_12.17.54_PM.png"
},
{
	name : "Veggie",
	image : "https://i.warosu.org/data/ck/img/0074/69/1457939826322.png"
},
{
	name: "Mediterian",
	image: "http://cdn0.wideopeneats.com/wp-content/uploads/2017/06/health-benefits-mediterranean-diet.png"

},
{
	name: "African",
	image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/African_nigerian_fried_rice_eith_stew_..._plantain_and_fresh_salad.png"
},
{
	name: "Japanese",
	image: "http://www.pngmart.com/files/7/Japanese-Food-PNG-File.png"
}
];

var foodDiv = document.getElementById("food");



function foodSelect() {
	var randomFoo = Math.floor(Math.random () * (foods.length - 1 + 1));

	foodDiv.innerHTML = "<h1>" + foods[randomFoo].name + `</h1><img src='`+ foods[randomFoo].image + "' alt='" + foods[randomFoo].name + " '>";
}