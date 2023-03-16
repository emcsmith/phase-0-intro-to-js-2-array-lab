const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return [...cats, name]
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return [...cats, name]
}

function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield") ;
    return [...cats, name]
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(1)
    return [...cats, name]
}

function appendCat(name) {
    cats.splice("1, Milo", "Broom")
    return [...cats, name]

}

function prependCat(name) {
    cats.unshift()
    return [name, ...cats]
}


function removeLastCat(){
      cats.slice(cats.length-1)
     return cats.slice(0, cats.length-1)
  }

  function removeFirstCat(){
      cats.slice(cats.length-0)
    return cats.slice(1, cats.length-0)
  }