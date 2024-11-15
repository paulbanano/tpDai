import axios from 'axios';

const CLAVE_API = '1225dd87655a41a6a1eb4c270d55a3ab'; 
const URL_BASE = 'https://api.spoonacular.com/recipes';

export const servicioSpoonacular = {
  // Búsqueda compleja de recetas
  buscarRecetas: async (consulta, numero = 10) => {
    try {
      const respuesta = await axios.get(`${URL_BASE}/complexSearch`, {
        params: {
          apiKey: CLAVE_API,
          query: consulta,
          number: numero,
          addRecipeInformation: true,
          fillIngredients: true
        }
      });

      // Mapear los resultados para obtener solo la información necesaria
      return respuesta.data.results.map(receta => ({
        id: receta.id,
        titulo: receta.title,
        imagen: receta.image,
        precio: receta.pricePerServing,
        puntuacionSalud: receta.healthScore,
        vegano: receta.vegan,
        minutosPreparacion: receta.readyInMinutes,
        porciones: receta.servings
      }));
    } catch (error) {
      console.error('Error buscando recetas:', error);
      throw error;
    }
  },

  // Obtener detalles de un plato específico
  obtenerDetallesPlato: async (idPlato) => {
    try {
      const respuesta = await axios.get(`${URL_BASE}/${idPlato}/information`, {
        params: {
          apiKey: CLAVE_API,
          includeNutrition: true
        }
      });

      const receta = respuesta.data;
      return {
        id: receta.id,
        titulo: receta.title,
        imagen: receta.image,
        resumen: receta.summary,
        instrucciones: receta.instructions,
        ingredientes: receta.extendedIngredients,
        precio: receta.pricePerServing,
        puntuacionSalud: receta.healthScore,
        vegano: receta.vegan,
        minutosPreparacion: receta.readyInMinutes,
        porciones: receta.servings
      };
    } catch (error) {
      console.error('Error obteniendo detalles del plato:', error);
      throw error;
    }
  }
};