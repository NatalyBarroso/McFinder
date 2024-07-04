# Express Server Project
Este proyecto es una aplicacion Express que sirve archivos estaticos y proporciona un API para obtener sucursales en formato geojson.

# Objetivo 
Desarrollar un endpoint en el API que devuelva los resultados en formato geojson de almenos cinco registros de la entidad "branch", los cuales como minimo deberan tener las propiedades: `name`, `manager_name`, `latitude`, `longitude`.

# Caracteristicas
- **Endpoint API**: devuelve sucursale en formato geojson.
- **Pagina de inicio**: Despliega la ubicacion de las sucursales en un mapa dentro del estado de Guanajuato.
- **Pagina de rutas**: Muestra la mejor ruta desde la ubicacion del cliente hasta la sucursal mas cercana.

  ## Instalación

1. Clona el repositorio en tu máquina local.
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2. Navega al directorio del proyecto.
    ```sh
    cd tu-repositorio
    ```
3. Instala las dependencias del proyecto.
    ```sh
    npm install
    ```

    ## Uso

1. Inicia el servidor.
    ```sh
    node server.js
    ```
    O para desarrollo, utiliza nodemon.
    ```sh
    node server.js
    ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la página de inicio.


## Endpoints

### Obtener sucursales en formato geojson

- **URL**: `/api/branches`
- **Método**: `GET`
- **Respuesta**: 
  ```json
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Sucursal 1",
          "manager_name": "Manager 1"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-101.0, 21.0]
        }
      },
      ...
    ]
  }

