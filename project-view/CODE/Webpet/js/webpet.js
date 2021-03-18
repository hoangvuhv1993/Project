
const product = [
{id: 1, image:"../images/dog_1.jpg", title: "Chó Corgi"},
{id: 2, image:"../images/cat_1.jpg"},
{id: 3, image:"../images/chim-1.jpg"},
{id: 4, image:"../images/ca_1.jpg"},
{id: 5, image:"../images/chuot_1.jpeg"},
{id: 6, image:"../images/ran_1.jpg"},
{id: 7, image:"../images/tacke_1.jpg"},
{id: 8, image:"../images/dog_2.jpg"},
{id: 9, image:"../images/chim_2.jpg"},
{id: 10, image:"../images/ca_3.jpg"},
{id: 11, image:"../images/cat_2.jpg"},
{id: 12, image:"../images/dog_3.jpg"},
{id: 13, image:"../images/chim_3.jpg"},
{id: 14, image:"../images/dog_4.jpg"},
{id: 15, image:"../images/cat_3.jpg"},
{id: 16, image:"../images/dog_6.jpg"},
{id: 17, image:"../images/ca_5.jpg"},
{id: 18, image:"../images/chim_5.jpg"},

]
let perPage = 6;
let currentPage = 1;
let start = 0;
let end = perPage;

function renderProduct(){
	html = '';
	const content = product.map((item, index)=> {
		if (index >= start && index < end) {
			html +='<div class="card middle">';
			html +='<div class="front">';
			html +='<img src='+ item.image +'>';
			html +='</div>';
			html +='<div class="back">';
			html +='<div class="back-content middle">';
			html +='<h4>' + item.title +'</h4>';
			html +='<span>'+ item.title +'</span>';
			html +='<p>'+ item.title +'</p>';
			html +='<div class="sm">';
			html +='<a>';
			html +='<i>'+ item.icon +'</i>';
			html +='</div>';
			html +='</div>';
			html +='</div>';
			html +='</div>';
			console.log(html);
			return html;
		}
	})
	document.getElementById('product').innerHTML = html;
}
renderProduct();