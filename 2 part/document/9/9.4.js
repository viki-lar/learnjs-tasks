//В чём отличие CSS-свойств width и clientWidth

// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// Укажите хотя бы 3 отличия, лучше – больше.

//1.getComputedStyle(elem).width-укажет строку с единицами измерения
//elem.clientWidth- укажет число

//2.Если нет внутренних отступов padding,
//то clientWidth / Height в точности равны размеру области содержимого внутри рамок за вычетом полосы прокрутки(если она есть).
//
//3.из-за кроссбраузерных отличий getComputedStyle(elem).width трактуется браузерами по разному.
//
