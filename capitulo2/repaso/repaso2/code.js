
let array1 = ["maria", "como", "estas"];
let array2 = ["luis", "fernanda", "gerardo", array1, "diana"];
forRancio:
for ( let array in array2){
    if (array == 3){
        for(array of array1){
                if(array == "como"){
                    continue;
                }else{
                document.write(array +"<br>")
                }
        }
    }else{
        document.write(array2[array] + "<br>")
    }
}

