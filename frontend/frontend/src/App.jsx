import { useEffect, useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    poliza: "",
    motivo: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cases, setCases] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Cargar historial
  const fetchCases = async () => {

    try {

      const response = await fetch(
        "https://emergency-ai-backend-4e56.onrender.com/cases"
      );

      const data = await response.json();

      setCases(data);

    } catch (error) {
      console.error(error);
    }

  };

  // Ejecutar al iniciar
  useEffect(() => {
    fetchCases();
  }, []);

  // Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch(
        "https://emergency-ai-backend-4e56.onrender.com/emergency",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      setResult(data);

      // Actualizar historial
      fetchCases();

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        textAlign: "center",
        marginBottom: "30px"
      }}>
        🚑 Emergency AI Agent

      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >

        <input
          type="text"
          name="nombre"
          placeholder="Nombre paciente"
          onChange={handleChange}
        />

        <input
          type="text"
          name="cedula"
          placeholder="Cédula"
          onChange={handleChange}
        />

        <input
          type="text"
          name="poliza"
          placeholder="Póliza"
          onChange={handleChange}
        />

        <input
          type="text"
          name="motivo"
          placeholder="Motivo emergencia"
          onChange={handleChange}
        />

        <button type="submit">
          Analizar Emergencia
        </button>

        <button
        type="button"
        onClick={() => setShowHistory(!showHistory)}
      >
        📋 Historial
      </button>

      </form>

      {
        loading &&
        <p style={{
          textAlign: "center",
          marginTop: "20px"
        }}>
          Analizando caso...
        </p>
      }

      {
        result && (

          <div style={{
            maxWidth: "700px",
            margin: "40px auto",
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px"
          }}>

            <h2>Resultado</h2>

            <p>
              <strong>Póliza:</strong>{" "}
              {result.policy_status}
            </p>

            <p>
              <strong>Cobertura:</strong>{" "}
              {result.coverage}
            </p>

            <p>
              <strong>Copago:</strong>{" "}
              ${result.copay}
            </p>

            <p>
              <strong>Preexistencias:</strong>{" "}
              {result.preexisting_conditions?.join(", ")}
            </p>

            <p>
              <strong>Resumen IA:</strong>
            </p>

            <p>
              {result.ai_summary}
            </p>

            <p>
              <strong>Notificaciones:</strong>
            </p>

            <ul>
              {
                result.notifications?.map((n, i) => (
                  <li key={i}>{n}</li>
                ))
              }
            </ul>

          </div>

        )
      }

      {/* DASHBOARD */}

      {
  showHistory && (

    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      background: "#1e293b",
      padding: "20px",
      borderRadius: "10px"
    }}>

      <h2>📋 Historial Emergencias</h2>

      <table
        width="100%"
        style={{
          marginTop: "20px",
          textAlign: "left"
        }}
      >

        <thead>
          <tr>
            <th>Paciente</th>
            <th>Póliza</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>

          {
            cases.map((c, i) => (

              <tr key={i}>

                <td>{c.patient_name}</td>

                <td>{c.policy_number}</td>

                <td>{c.coverage_status}</td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  )
}

    </div>
  );
}

export default App;