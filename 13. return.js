
function logger () {
    console.log (`My name is Alejandro`);
}

// calling / running / invoking function
logger();
logger();
logger();
/*
Mi planteamiento fue 
Por lo que entiendo tiene que ver con lo de las variable locales y globales no? El hecho de que la variable area que fue
declarada dentro de la funcion no aparece fuera de este y por ende es variable local ...  
Entonces con el return la puedo tipo convertir a una variable global es decri que retorna hacia afuera  para
poder ser usada ?

La declaracion return en una funcion de JavaScript te permite (por llamarlo asi ) exportar un valor calculado '
dentro de la funcion , efectivamente convirtiendolo en una variable global o mas precisamente accesible fuera del ambito
de la funcion

Cuando declaras una variable dentro de una funcion SIN UTILIZAR return esa variable solo existe dentro del 
ambito de esa funcion y no puede ser accedida desde fuera de ella. A eso se le llama una variable locaL

AL UTILIZAR return estas especificando que valor se devuelve de la funcion cuando es llamada. Este valor puede ser
asignado a una variable fuera de la funcion. lo que la hace disponible en un ambito mas amplio como el ambito global o el 
ambito de otra funcion

Por lo tanto puedes pensar en return COMO el mecanismo que permite a una funcion comunicarse con el codigo 
que la llamo, devolviendo un valor que puede ser utilizado en otro lugar del programa. 
Esto es fundamental para la modularidad y la reutilizacion del codigo en JAVASCRITP, y en la programacion en general. 


