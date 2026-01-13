import { useState } from "react";

export default function PostulacionesYovanna() {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    platform: '',
    applicationDate: '',
    status: 'Enviada',
    jobUrl: '',
    location: '',
    workMode: '',
    salary: '',
    contactPerson: '',
    contactEmail: '',
    notes: '',
    priority: 'Media',
    tags: ''
  });

  const platforms = [
    'LinkedIn',
    'InfoJobs',
    'Indeed',
    'Glassdoor',
    'Computrabajo',
    'Monster',
    'TotalJobs',
    'Jobatus',
    'Tecnoempleo',
    'Domestika (creativos)',
    'AngelList (startups)',
    'Stack Overflow Jobs (tech)',
    'GitHub Jobs (tech)',
    'Wellfound (startups)',
    'Remote.co',
    'We Work Remotely',
    'Sitio web de empresa',
    'Referido',
    'Otro'
  ];

  const statusOptions = [
    'Enviada',
    'En revisión',
    'Entrevista telefónica',
    'Entrevista técnica',
    'Entrevista final',
    'Oferta recibida',
    'Rechazada',
    'Aceptada',
    'Sin respuesta'
  ];

  const workModes = [
    'Presencial',
    'Remoto',
    'Híbrido',
    'Flexible'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.company || !formData.position || !formData.platform || !formData.applicationDate) {
      alert('Por favor completa todos los campos obligatorios (*)');
      return;
    }
    
    console.log('Datos de la postulación:', formData);
    alert('¡Postulación registrada! (Ver consola para detalles)');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="icon">
            <span className="icon-text">💼</span>
          </div>
          <h1 className="title">Postulación</h1>
          <p className="subtitle">Registra tu aplicación de empleo</p>
        </div>

        <div className="form-content">
          <div className="grid">
            <div className="form-group">
              <label className="label">
                <span className="label-icon">🏢</span> Empresa *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="input"
                placeholder="Ej: Google, Amazon, Startup XYZ"
              />
            </div>

            <div className="form-group">
              <label className="label">
                <span className="label-icon">💼</span> Puesto *
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="input"
                placeholder="Ej: Desarrollador Frontend"
              />
            </div>
          </div>

          <div className="grid">
            <div className="form-group">
              <label className="label">Plataforma *</label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="input"
              >
                <option value="">Selecciona una plataforma</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label">
                <span className="label-icon">📅</span> Fecha de Postulación *
              </label>
              <input
                type="date"
                name="applicationDate"
                value={formData.applicationDate}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          <div className="grid">
            <div className="form-group">
              <label className="label">Estado *</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="input"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label">
                <span className="label-icon">🏷️</span> Prioridad
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="input"
              >
                <option value="Baja">🟢 Baja</option>
                <option value="Media">🟡 Media</option>
                <option value="Alta">🔴 Alta</option>
              </select>
            </div>
          </div>

          <div className="grid">
            <div className="form-group">
              <label className="label">
                <span className="label-icon">🔗</span> URL de la oferta
              </label>
              <input
                type="url"
                name="jobUrl"
                value={formData.jobUrl}
                onChange={handleChange}
                className="input"
                placeholder="https://..."
              />
            </div>

            <div className="form-group">
              <label className="label">
                <span className="label-icon">📍</span> Ubicación
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input"
                placeholder="Ej: Madrid, Barcelona, Remoto"
              />
            </div>
          </div>

          <div className="grid">
            <div className="form-group">
              <label className="label">Modalidad de Trabajo</label>
              <select
                name="workMode"
                value={formData.workMode}
                onChange={handleChange}
                className="input"
              >
                <option value="">Selecciona modalidad</option>
                {workModes.map(mode => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label">
                <span className="label-icon">💰</span> Rango Salarial
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="input"
                placeholder="Ej: 30k-40k, 25€/hora"
              />
            </div>
          </div>

          <div className="grid">
            <div className="form-group">
              <label className="label">Persona de Contacto</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="input"
                placeholder="Nombre del reclutador"
              />
            </div>

            <div className="form-group">
              <label className="label">Email de Contacto</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="input"
                placeholder="reclutador@empresa.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">
              <span className="label-icon">🏷️</span> Etiquetas
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="input"
              placeholder="Ej: react, javascript, frontend (separadas por comas)"
            />
          </div>

          <div className="form-group">
            <label className="label">
              <span className="label-icon">📝</span> Notas Adicionales
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="input textarea"
              placeholder="Requisitos específicos, impresiones de la empresa, próximos pasos..."
            />
          </div>

          <button onClick={handleSubmit} className="submit-button">
            Registrar Postulación
          </button>
          <div className="button-exit-group">
        <button type="button" className="cancel-exit" onClick={() => window.history.back()}>
         Cancelar
         </button>
         <button type="button" className="exit" onClick={() => window.location.href = '/home'}>
         Salir
        </button>
        </div>
          
        </div>
      </div>
    </div>
  );
}