import { useState } from 'react';

export const usePerfilData = () => {
  const [isEditingGlobal, setIsEditingGlobal] = useState(false);
  const [editingSections, setEditingSections] = useState({
    estado: false,
    objetivos: false,
    portales: false,
    empresas: false,
    preferencias: false,
    notas: false,
    entrevistas: false
  });

  const [profileData, setProfileData] = useState({
    name: 'Cristina',
    title: 'Developer',
    skills: ['Angular', 'JavaScript', 'Tailwind', 'React', 'Node.js'],
    searchStatus: 'Búsqueda activa',
    desiredPosition: 'Desarrollador Full Stack Senior',
    jobType: 'Remoto / Híbrido',
    salaryRange: '45.000€ - 55.000€',
    sectors: 'Tecnología, Fintech, E-commerce',
    availability: 'Inmediata',
    notes: 'Enfocada en empresas con cultura tech-first y oportunidades de crecimiento profesional.',
    jobPortals: [
      { name: 'LinkedIn', url: 'https://linkedin.com', active: true },
      { name: 'InfoJobs', url: 'https://infojobs.net', active: true },
      { name: 'Indeed', url: 'https://indeed.es', active: false }
    ],
    targetCompanies: ['Google', 'Microsoft', 'Stripe', 'Vercel'],
    shortTermGoals: [
      { task: 'Actualizar CV con último proyecto', completed: true },
      { task: 'Contactar recruiter de Amazon', completed: false },
      { task: 'Preparar presentación personal', completed: true }
    ],
    upcomingInterviews: [
      { 
        company: 'Nestlé', 
        position: 'Desarrollador', 
        date: '22 ene 2026 - 02:07',
        contact: 'Jesús Díaz',
        address: 'Calle La Flores',
        notes: 'Llevar CV impreso'
      },
      { 
        company: 'Globant', 
        position: 'Desarrollador Full Stack Senior', 
        date: '27 ene 2026 - 10:30',
        contact: 'Carlos Mendoza',
        address: 'Av Los Príncipes, Edificio Globant Nº 7',
        notes: 'Llevar proyectos realizados'
      }
    ]
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSectionEdit = (section) => {
    setEditingSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = () => {
    setIsEditingGlobal(false);
    setEditingSections({
      estado: false,
      objetivos: false,
      portales: false,
      empresas: false,
      preferencias: false,
      notas: false,
      entrevistas: false
    });
    console.log('Datos guardados:', profileData);
  };

  return {
    isEditingGlobal,
    setIsEditingGlobal,
    editingSections,
    toggleSectionEdit,
    profileData,
    setProfileData,
    handleInputChange,
    handleSave
  };
};