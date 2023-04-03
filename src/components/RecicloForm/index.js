import React, { useState } from "react";
function RecyclingForm() {
  const [materials, setMaterials] = useState([]);
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [observations, setObservations] = useState("");

  const handleMaterialChange = (e) => {
    const selectedMaterials = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setMaterials(selectedMaterials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      materials,
      weight,
      volume,
      observations,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="materials">Material a reciclar:</label>
        <select
          id="materials"
          value={materials}
          onChange={handleMaterialChange}
        >
          <option type="checkbox" value="vidrio">
            Vidrio
          </option>
          <option type="checkbox" value="madera">
            Madera
          </option>
          <option type="checkbox" value="papel">
            Papel
          </option>
          <option type="checkbox" value="ewaste">
            E-waste
          </option>
          <option type="checkbox" value="carton">
            Cartón
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="weight">Peso aproximado:</label>
        <select
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        >
          <option value="">Selecciona un rango de peso</option>
          <option value="menos de 3kg">Menos de 3kg</option>
          <option value="3kg a 10kg">3kg a 10kg</option>
          <option value="10kg a 20kg">10kg a 20kg</option>
          <option value="más de 20kg">Más de 20kg</option>
        </select>
      </div>
      <div>
        <label htmlFor="volume">Volumen:</label>
        <select
          id="volume"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        >
          <option value="">Selecciona un tamaño de volumen</option>
          <option value="pequeño">Pequeño (cajas o bolsas)</option>
          <option value="mediano">Mediano (3 a 10 cajas)</option>
          <option value="grande">Grande (10 cajas o más)</option>
        </select>
      </div>
      <div>
        <label for="img">Sube una imágen de muestra.</label>
        <input type="file" id="img" name="img" accept="image/*" />
        <small>Tamaño máximo del archivo: 2 MB</small>
      </div>
      <div>
        <label htmlFor="observations">Observaciones:</label>
        <textarea
          id="observations"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default RecyclingForm;
