fetch("https://github.com/GomesAngelo/GomesAngelo")
.then((Response) => Response.json())
.then((json) => console.log(json))
.catch((error) => console.log("error", error));