    var jokes = [
  "Why was Santa's little helper feeling depressed? Because he has low elf esteem.",
  "How are false teeth like stars? They come out at night!"
  "What type of bees make milk? Boo-bees."
  "Did you hear about the cow who jumped over the barbed wire fence? It was udder destruction."
  ]

  function newJoke() {
    var randomNumber = (Math.floor(Math.random() * jokes.length));
  
  document.getElementById('jokeDisplay').innerHTML = jokes[randomNumber];
  }

