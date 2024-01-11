function createCounter(init){
    function increment(){
      init += 1
      return init
    }
    function decrement(){
      init -= 1
      return init
    }

    function reset(){
        return init
    }

    return {
      increment,
      decrement,
      reset,
    }
}
const counter = createCounter(2)
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())