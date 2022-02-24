//const list = {
//	value:[12,4,23,5,23,6,43],
//	get_length(){
//		return this.value.length
//	},
//	sum(){
//		for (let i = 0; i < this.get_length(); i++) {
//			result+=this.value[i];
//		}
//		return result
//	},
//	avg(){
//		return this.sum()/this.get_length();
//	}
//}
//
//console.log(list.get_length())
//console.log(list.sum())
//console.log(list.avg())

const pElem=document.querySelector('#text');
//console.log(pElem.innerText);

const pArr=document.querySelectorAll('p');
const text_arr=['батон', 'матрон', 'кашпо', 'авто'];

for (let i = 0; i < pArr.length; i++) {
	pArr[i].innerText=text_arr[i];
}