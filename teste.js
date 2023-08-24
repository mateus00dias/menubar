var string = "hello word"
var tamanho = 0 
var vogais  = 'aeiou'
for (var j = 0; j < 10; j++){
    for (var i = 0; i < 10; i++){
        if(string[i] == vogais[j]){
            tamanho = tamanho+1
            console.log(`A letra ${string[i]} e uma vogal`)
        }else{
            console.log(`A letra ${string[i]} não e uma vogal`)
        }
        
    }
}
console.log (`A frase tem ${tamanho} vogais`)