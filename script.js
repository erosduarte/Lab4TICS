const grid = document.getElementById("grid");
const estado = document.getElementById("estado");
const buscador = document.getElementById("buscador");
const botonBuscar = document.getElementById("botonBuscar");

async function buscarProductos(termino) {
  estado.textContent = "Buscando...";
  grid.innerHTML = "";

  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(termino)}&search_simple=1&action=process&json=1&page_size=20&lc=es`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const productos = datos.products.filter((p) => p.product_name);

    if (productos.length === 0) {
      estado.textContent = "No se encontraron productos.";
      return;
    }

    estado.textContent = `${productos.length} resultados para "${termino}"`;

    for (const producto of productos) {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta";

      const imagen = document.createElement("img");
      imagen.src = producto.image_front_small_url || producto.image_url || "";
      imagen.alt = producto.product_name;

      const titulo = document.createElement("h2");
      titulo.textContent = producto.product_name;

      const marca = document.createElement("span");
      marca.className = "precio";
      marca.textContent = producto.brands || "Sin marca";

      tarjeta.append(imagen, titulo, marca);
      grid.appendChild(tarjeta);
    }
  } catch {
    estado.textContent = "No se pudo conectar con Open Food.";
  }
}

botonBuscar.addEventListener("click", () => {
  const termino = buscador.value.trim() || "galletas";
  buscarProductos(termino);
});

buscador.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    botonBuscar.click();
  }
});

buscarProductos("galletas");

  