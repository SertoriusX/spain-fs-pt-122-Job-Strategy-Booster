import React, { useState } from 'react';
import { 
  Briefcase, Target, FileText, Edit2, Save, Upload, ExternalLink, 
  Building2, CheckCircle2, Circle, Activity, Plus, X, Calendar, 
  User, MapPin 
} from 'lucide-react';
import { usePerfilData } from '../hooks/usePerfilData';
import '../styles/PerfilUsuario.css';

export default function PerfilUsuario() {
  const {
    isEditingGlobal,
    setIsEditingGlobal,
    editingSections,
    toggleSectionEdit,
    profileData,
    handleInputChange,
    handleSave
  } = usePerfilData();

  const [newGoal, setNewGoal] = useState('');
  const [newPortal, setNewPortal] = useState({ name: '', url: '' });
  const [newCompany, setNewCompany] = useState('');
  const [newInterview, setNewInterview] = useState({
    company: '', position: '', date: '', contact: '', address: '', notes: ''
  });

  const handleSkillsChange = (value) => {
    const skillsArray = value.split(',').map(s => s.trim()).filter(s => s);
    handleInputChange('skills', skillsArray);
  };

  const toggleGoalCompletion = (index) => {
    const updatedGoals = [...profileData.shortTermGoals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    handleInputChange('shortTermGoals', updatedGoals);
  };

  const addGoal = () => {
    if (newGoal.trim()) {
      handleInputChange('shortTermGoals', [...profileData.shortTermGoals, { task: newGoal, completed: false }]);
      setNewGoal('');
    }
  };

  const removeGoal = (index) => {
    handleInputChange('shortTermGoals', profileData.shortTermGoals.filter((_, i) => i !== index));
  };

  const togglePortalActive = (index) => {
    const updatedPortals = [...profileData.jobPortals];
    updatedPortals[index].active = !updatedPortals[index].active;
    handleInputChange('jobPortals', updatedPortals);
  };

  const addPortal = () => {
    if (newPortal.name.trim() && newPortal.url.trim()) {
      handleInputChange('jobPortals', [...profileData.jobPortals, { ...newPortal, active: true }]);
      setNewPortal({ name: '', url: '' });
    }
  };

  const removePortal = (index) => {
    handleInputChange('jobPortals', profileData.jobPortals.filter((_, i) => i !== index));
  };

  const addCompany = () => {
    if (newCompany.trim()) {
      handleInputChange('targetCompanies', [...profileData.targetCompanies, newCompany]);
      setNewCompany('');
    }
  };

  const removeCompany = (index) => {
    handleInputChange('targetCompanies', profileData.targetCompanies.filter((_, i) => i !== index));
  };

  const addInterview = () => {
    if (newInterview.company.trim() && newInterview.position.trim()) {
      handleInputChange('upcomingInterviews', [...profileData.upcomingInterviews, newInterview]);
      setNewInterview({ company: '', position: '', date: '', contact: '', address: '', notes: '' });
    }
  };

  const removeInterview = (index) => {
    handleInputChange('upcomingInterviews', profileData.upcomingInterviews.filter((_, i) => i !== index));
  };

  const updateInterview = (index, field, value) => {
    const updatedInterviews = [...profileData.upcomingInterviews];
    updatedInterviews[index][field] = value;
    handleInputChange('upcomingInterviews', updatedInterviews);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-layout">
        <div className="perfil-sidebar">
          <div className="profile-card">
            <div className="avatar-wrapper">
              <div className="avatar">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%2366D9EF' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='80' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='system-ui'%3E👩‍💻%3C/text%3E%3C/svg%3E"
                  alt="Avatar"
                  className="avatar-image"
                />
                <div className="verified-badge">✓</div>
              </div>
              {isEditingGlobal && (
                <button className="upload-avatar-button">
                  <Upload size={16} />
                  Cambiar foto
                </button>
              )}
            </div>
            
            {isEditingGlobal ? (
              <>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="name-input"
                />
                <input
                  type="text"
                  value={profileData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="title-input"
                />
              </>
            ) : (
              <>
                <h2 className="name">{profileData.name}</h2>
                <p className="job-title">{profileData.title}</p>
              </>
            )}
          </div>

          <div className="section">
            <h3 className="section-title">SKILLS</h3>
            {isEditingGlobal ? (
              <input
                type="text"
                value={profileData.skills.join(', ')}
                onChange={(e) => handleSkillsChange(e.target.value)}
                className="input-field"
                placeholder="Separadas por comas"
              />
            ) : (
              <div className="skills-grid">
                {profileData.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            )}
          </div>

          <div className="section">
            <div className="section-header">
              <h3 className="section-title">ESTADO DE BÚSQUEDA</h3>
              <button
                onClick={() => toggleSectionEdit('estado')}
                className="edit-button-small"
              >
                {editingSections.estado ? <Save size={14} /> : <Edit2 size={14} />}
              </button>
            </div>
            <div className="status-indicator">
              <Activity size={18} className="status-icon" />
              {editingSections.estado ? (
                <select
                  value={profileData.searchStatus}
                  onChange={(e) => handleInputChange('searchStatus', e.target.value)}
                  className="status-select"
                >
                  <option value="Búsqueda activa">Búsqueda activa</option>
                  <option value="Abierto a ofertas">Abierto a ofertas</option>
                  <option value="En entrevistas">En entrevistas</option>
                  <option value="No disponible">No disponible</option>
                </select>
              ) : (
                <span className="status-text">{profileData.searchStatus}</span>
              )}
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <h3 className="section-title">OBJETIVOS</h3>
              <button
                onClick={() => toggleSectionEdit('objetivos')}
                className="edit-button-small"
              >
                {editingSections.objetivos ? <Save size={14} /> : <Edit2 size={14} />}
              </button>
            </div>
            <div className="goals-list">
              {profileData.shortTermGoals.map((goal, index) => (
                <div key={index} className="goal-item">
                  <button 
                    onClick={() => toggleGoalCompletion(index)}
                    className="goal-check-button"
                  >
                    {goal.completed ? (
                      <CheckCircle2 size={18} className="goal-icon-completed" />
                    ) : (
                      <Circle size={18} className="goal-icon-pending" />
                    )}
                  </button>
                  <span className={goal.completed ? "goal-text-completed" : "goal-text"}>
                    {goal.task}
                  </span>
                  {editingSections.objetivos && (
                    <button onClick={() => removeGoal(index)} className="remove-button">
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {editingSections.objetivos && (
              <div className="add-item-container">
                <input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="Nueva tarea..."
                  className="add-input"
                  onKeyPress={(e) => e.key === 'Enter' && addGoal()}
                />
                <button onClick={addGoal} className="add-button">
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="section">
            <div className="section-header">
              <h3 className="section-title">PORTALES</h3>
              <button
                onClick={() => toggleSectionEdit('portales')}
                className="edit-button-small"
              >
                {editingSections.portales ? <Save size={14} /> : <Edit2 size={14} />}
              </button>
            </div>
            <div className="portals-list">
              {profileData.jobPortals.map((portal, index) => (
                <div key={index} className="portal-item-container">
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={portal.active ? "portal-link-active" : "portal-link-inactive"}
                    onClick={(e) => editingSections.portales && e.preventDefault()}
                  >
                    <span>{portal.name}</span>
                    <ExternalLink size={14} />
                  </a>
                  {editingSections.portales && (
                    <div className="portal-actions">
                      <button onClick={() => togglePortalActive(index)} className="toggle-button">
                        {portal.active ? '✓' : '○'}
                      </button>
                      <button onClick={() => removePortal(index)} className="remove-button">
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {editingSections.portales && (
              <div className="add-portal-container">
                <input
                  type="text"
                  value={newPortal.name}
                  onChange={(e) => setNewPortal({...newPortal, name: e.target.value})}
                  placeholder="Nombre"
                  className="add-input-small"
                />
                <input
                  type="text"
                  value={newPortal.url}
                  onChange={(e) => setNewPortal({...newPortal, url: e.target.value})}
                  placeholder="URL"
                  className="add-input-small"
                />
                <button onClick={addPortal} className="add-button">
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="section">
            <div className="section-header">
              <h3 className="section-title">EMPRESAS OBJETIVO</h3>
              <button
                onClick={() => toggleSectionEdit('empresas')}
                className="edit-button-small"
              >
                {editingSections.empresas ? <Save size={14} /> : <Edit2 size={14} />}
              </button>
            </div>
            <div className="companies-list">
              {profileData.targetCompanies.map((company, index) => (
                <div key={index} className="company-item">
                  <div className="company-content">
                    <Building2 size={16} className="company-icon" />
                    <span className="company-name">{company}</span>
                  </div>
                  {editingSections.empresas && (
                    <button onClick={() => removeCompany(index)} className="remove-button-company">
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {editingSections.empresas && (
              <div className="add-item-container">
                <input
                  type="text"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  placeholder="Nueva empresa..."
                  className="add-input"
                  onKeyPress={(e) => e.key === 'Enter' && addCompany()}
                />
                <button onClick={addCompany} className="add-button">
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="perfil-main-content">
          <div className="perfil-header">
            <h1 className="page-title">Objetivos de Búsqueda</h1>
            <button
              onClick={() => isEditingGlobal ? handleSave() : setIsEditingGlobal(true)}
              className="edit-button-main"
            >
              {isEditingGlobal ? (
                <>
                  <Save size={18} />
                  <span>Guardar Todo</span>
                </>
              ) : (
                <>
                  <Edit2 size={18} />
                  <span>Editar Perfil</span>
                </>
              )}
            </button>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title-wrapper">
                <Target size={20} className="card-icon" />
                <h3 className="card-title">Preferencias Profesionales</h3>
              </div>
              <button
                onClick={() => toggleSectionEdit('preferencias')}
                className="edit-button-small"
              >
                {editingSections.preferencias ? <Save size={14} /> : <Edit2 size={14} />}
              </button>
            </div>
            
            <div className="grid">
              <div className="field">
                <label className="field-label">Puesto Deseado</label>
                {editingSections.preferencias ? (
                  <input
                    type="text"
                    value={profileData.desiredPosition}
                    onChange={(e) => handleInputChange('desiredPosition', e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <div className="field-value">{profileData.desiredPosition}</div>
                )}
              </div>

              <div className="field">
                <label className="field-label">Disponibilidad</label>
                {editingSections.preferencias ? (
                  <input
                    type="text"
                    value={profileData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <div className="field-value">{profileData.availability}</div>
                )}
              </div>

              <div className="field">
                <label className="field-label">Modalidad de Trabajo</label>
                {editingSections.preferencias ? (
                  <input
                    type="text"
                    value={profileData.jobType}
                    onChange={(e) => handleInputChange('jobType', e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <div className="field-value">{profileData.jobType}</div>
                )}
              </div>

              <div className="field">
                <label className="field-label">Rango Salarial</label>
                {editingSections.preferencias ? (
                  <input
                    type="text"
                    value={profileData.salaryRange}
                    onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <div className="field-value">{profileData.salaryRange}</div>
                )}
              </div>

              <div className="field field-full">
                <label className="field-label">Sectores de Interés</label>
                {editingSections.preferencias ? (
                  <input
                    type="text"
                    value={profileData.sectors}
                    onChange={(e) => handleInputChange('sectors', e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <div className="field-value">{profileData.sectors}</div>
                )}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title-wrapper">
                <FileText size={20} className="card-icon" />
                <h3 className="card-title">Notas de Búsqueda</h3>
              </div>
              <button
                onClick={() => toggleSectionEdit('notas')}
                className="edit-button-small"
              >
                {editingSections.notas ? <Save size={14} /> : <Edit2 size={14} />}
              </button>
            </div>
            
            {editingSections.notas ? (
              <textarea
                value={profileData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                className="textarea-field"
                rows="4"
              />
            ) : (
              <p className="notes-text">{profileData.notes}</p>
            )}
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title-wrapper">
                <FileText size={20} className="card-icon" />
                <h3 className="card-title">Documentos</h3>
              </div>
            </div>
            
            <div className="documents-grid">
              <div className="document-item">
                <div className="document-info">
                  <FileText size={24} className="document-icon" />
                  <div>
                    <div className="document-title">Currículum Vitae</div>
                    <div className="document-status">PDF • 245 KB</div>
                  </div>
                </div>
                <button className="upload-button-small">Subir</button>
              </div>

              <div className="document-item">
                <div className="document-info">
                  <FileText size={24} className="document-icon" />
                  <div>
                    <div className="document-title">Carta de Presentación</div>
                    <div className="document-status">PDF • 180 KB</div>
                  </div>
                </div>
                <button className="upload-button-small">Subir</button>
              </div>

              <div className="document-item">
                <div className="document-info">
                  <FileText size={24} className="document-icon" />
                  <div>
                    <div className="document-title">Certificados</div>
                    <div className="document-status">ZIP • 1.2 MB</div>
                  </div>
                </div>
                <button className="upload-button-small">Subir</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title-wrapper">
                <Calendar size={20} className="card-icon" />
                <h3 className="card-title">Próximas entrevistas</h3>
              </div>
              <button
                onClick={() => toggleSectionEdit('entrevistas')}
                className="edit-button-small"
              >
                {editingSections.entrevistas ? <Save size={14} /> : <Edit2 size={14} />}
              </button>
            </div>
            
            <div className="interviews-list">
              {profileData.upcomingInterviews.map((interview, index) => (
                <div key={index} className="interview-card">
                  <div className="interview-header">
                    {editingSections.entrevistas ? (
                      <div className="interview-edit-container">
                        <input
                          type="text"
                          value={interview.position}
                          onChange={(e) => updateInterview(index, 'position', e.target.value)}
                          placeholder="Posición"
                          className="interview-input-title"
                        />
                        <input
                          type="text"
                          value={interview.company}
                          onChange={(e) => updateInterview(index, 'company', e.target.value)}
                          placeholder="Empresa"
                          className="interview-input-subtitle"
                        />
                      </div>
                    ) : (
                      <div>
                        <h4 className="interview-position">{interview.position}</h4>
                        <p className="interview-company">{interview.company}</p>
                      </div>
                    )}
                    {editingSections.entrevistas && (
                      <button onClick={() => removeInterview(index)} className="remove-button">
                        <X size={16} />
                      </button>
                    )}
                  </div>
                  
                  <div className="interview-details">
                    <div className="interview-detail-item">
                      <Calendar size={16} className="interview-detail-icon" />
                      {editingSections.entrevistas ? (
                        <input
                          type="text"
                          value={interview.date}
                          onChange={(e) => updateInterview(index, 'date', e.target.value)}
                          placeholder="Fecha"
                          className="interview-input-detail"
                        />
                      ) : (
                        <span className="interview-detail-text">{interview.date}</span>
                      )}
                    </div>
                    <div className="interview-detail-item">
                      <User size={16} className="interview-detail-icon" />
                      {editingSections.entrevistas ? (
                        <input
                          type="text"
                          value={interview.contact}
                          onChange={(e) => updateInterview(index, 'contact', e.target.value)}
                          placeholder="Contacto"
                          className="interview-input-detail"
                        />
                      ) : (
                        <span className="interview-detail-text">Contacto: {interview.contact}</span>
                      )}
                    </div>
                    <div className="interview-detail-item">
                      <MapPin size={16} className="interview-detail-icon" />
                      {editingSections.entrevistas ? (
                        <input
                          type="text"
                          value={interview.address}
                          onChange={(e) => updateInterview(index, 'address', e.target.value)}
                          placeholder="Dirección"
                          className="interview-input-detail"
                        />
                      ) : (
                        <span className="interview-detail-text">Dirección: {interview.address}</span>
                      )}
                    </div>
                    <div className="interview-detail-item">
                      <FileText size={16} className="interview-detail-icon" />
                      {editingSections.entrevistas ? (
                        <input
                          type="text"
                          value={interview.notes}
                          onChange={(e) => updateInterview(index, 'notes', e.target.value)}
                          placeholder="Notas"
                          className="interview-input-detail"
                        />
                      ) : (
                        <span className="interview-detail-text">Nota: {interview.notes}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {editingSections.entrevistas && (
              <div className="add-interview-container">
                <h4 className="add-interview-title">Agregar Nueva Entrevista</h4>
                <div className="add-interview-grid">
                  <input
                    type="text"
                    value={newInterview.position}
                    onChange={(e) => setNewInterview({...newInterview, position: e.target.value})}
                    placeholder="Posición"
                    className="add-input"
                  />
                  <input
                    type="text"
                    value={newInterview.company}
                    onChange={(e) => setNewInterview({...newInterview, company: e.target.value})}
                    placeholder="Empresa"
                    className="add-input"
                  />
                  <input
                    type="text"
                    value={newInterview.date}
                    onChange={(e) => setNewInterview({...newInterview, date: e.target.value})}
                    placeholder="Fecha"
                    className="add-input"
                  />
                  <input
                    type="text"
                    value={newInterview.contact}
                    onChange={(e) => setNewInterview({...newInterview, contact: e.target.value})}
                    placeholder="Contacto"
                    className="add-input"
                  />
                  <input
                    type="text"
                    value={newInterview.address}
                    onChange={(e) => setNewInterview({...newInterview, address: e.target.value})}
                    placeholder="Dirección"
                    className="add-input"
                  />
                  <input
                    type="text"
                    value={newInterview.notes}
                    onChange={(e) => setNewInterview({...newInterview, notes: e.target.value})}
                    placeholder="Notas"
                    className="add-input"
                  />
                </div>
                <button onClick={addInterview} className="add-interview-button">
                  <Plus size={16} />
                  Agregar Entrevista
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}