document.getElementById('button3').addEventListener('click', getExternal);

function getExternal() {
  fetch('https://www.hulabeck.se/html/temp/products.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.products.forEach(function(products) {
        output += `<li>${products.id}</li>`;
        output += `<li>${products.name}</li>`;
        output += `<li>${products.description}</li>`;
        output += `<li>${products.consumerPrice}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}