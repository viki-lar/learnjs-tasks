// Какой результат будет у выражений ниже?

"" + 1 + 0; //"10"
"" - 1 + 0; //-1
true + false; //1
6 / "3"; //2
"2" * "3"; // 6
4 + 5 + "px"; //9px
"$" + 4 + 5; //"$45"
"4" - 2; //2
"4px" - 2; //NaN
"  -9  " + 5; //"  -9  5"
"  -9  " - 5; //-14
null + 1; // 1
undefined + 1; //NaN
" \t \n" - 2; //-2
/*Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n",
 аналогично пустой строке, становится 0 после численного преобразования*/
