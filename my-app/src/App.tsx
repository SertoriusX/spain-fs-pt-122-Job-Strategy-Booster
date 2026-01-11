import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

function App() {
  const cvRef = useRef<HTMLDivElement>(null);

  const [cv, setCv] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    about: '',
    skills: '',
    languages: '',
    education: '',
    experience: '',
    photo: '',
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setCv({ ...cv, [e.target.name]: e.target.value });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv((prev) => ({ ...prev, photo: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const generatePdf = () => {
    if (!cvRef.current) return;
    html2pdf()
      .from(cvRef.current)
      .set({
        margin: 0,
        filename: 'my-cv.pdf',
        html2canvas: { scale: 1.5 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .save();
  };

  return (
    <div style={page}>
      <div style={formBox}>
        <h2>Create Your CV</h2>

        <Input name="name" placeholder="Full Name" onChange={handle} value={cv.name} />
        <Input name="title" placeholder="Job Title" onChange={handle} value={cv.title} />
        <Input name="email" placeholder="Email" onChange={handle} value={cv.email} />
        <Input name="phone" placeholder="Phone" onChange={handle} value={cv.phone} />
        <Input name="location" placeholder="Location" onChange={handle} value={cv.location} />

        <label style={{ marginBottom: 6, display: 'block', fontWeight: 'bold' }}>Profile Photo:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: 20 }} />

        <Textarea name="about" placeholder="About Me" onChange={handle} value={cv.about} />
        <Textarea name="skills" placeholder="Skills (comma separated)" onChange={handle} value={cv.skills} />
        <Textarea name="languages" placeholder="Languages" onChange={handle} value={cv.languages} />
        <Textarea name="education" placeholder="Education" onChange={handle} value={cv.education} />
        <Textarea name="experience" placeholder="Experience" onChange={handle} value={cv.experience} />

        <button style={btn} onClick={generatePdf}>
          Download PDF
        </button>
      </div>

      {/* ===== CV PREVIEW ===== */}
      <div ref={cvRef} style={cvPage}>
        {/* Left sidebar */}
        <div style={leftCol}>
          {cv.photo && (
            <img
              src={cv.photo}
              alt="Profile"
              style={{
                width: 130,
                height: 130,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 20,
                border: '3px solid #1a1a1a',
              }}
            />
          )}

          <Section title="FORTALEZAS">
            {cv.skills
              .split(',')
              .filter((s) => s.trim() !== '')
              .map((skill, i) => (
                <Tag key={i}>{skill.trim()}</Tag>
              ))}
          </Section>

          <Section title="IDIOMAS">
            <p>{cv.languages}</p>
          </Section>

        </div>

        <div style={rightCol}>
          <h1 style={{ fontWeight: '900', fontSize: 22, color: '#103864' }}>{cv.name || 'YOUR NAME'}</h1>
          <h3 style={{ color: '#1e40af', marginBottom: 10 }}>{cv.title}</h3>

          <div style={contactRow}>
            <span>📧 {cv.email}</span>
            <span>📞 {cv.phone}</span>
            <span>📍 {cv.location}</span>
          </div>

          <Section title="SOBRE MI">
            <p style={{ fontStyle: 'italic', lineHeight: 1.5 }}>{cv.about}</p>
          </Section>

          <Section title="EDUCACIÓN">
            <p>{cv.education}</p>
          </Section>

          <Section title="EXPERIENCIA">
            <p>{cv.experience}</p>
          </Section>
        </div>
      </div>
    </div>
  );
}


const Input = (p: any) => <input style={input} {...p} />;
const Textarea = (p: any) => <textarea style={textarea} {...p} />;

function Section({ title, children }: any) {
  return (
    <div style={{ marginBottom: 18 }}>
      <h4 style={sectionTitle}>{title}</h4>
      <div style={{ fontSize: 14, color: '#222' }}>{children}</div>
    </div>
  );
}

function Tag({ children }: any) {
  return (
    <span style={{
      display: 'inline-block',
      backgroundColor: '#e2e2e2',
      borderRadius: 12,
      padding: '4px 12px',
      fontSize: 12,
      margin: 4,
      border: '1px solid #ccc',
      color: '#333',
      fontWeight: '500',
    }}>
      {children}
    </span>
  );
}


const page: React.CSSProperties = {
  display: 'flex',
  gap: 20,
  padding: 20,
  background: '#f0f0f0',
  minHeight: '100vh',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const formBox: React.CSSProperties = {
  width: 320,
  background: '#fff',
  padding: 20,
  borderRadius: 12,
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  overflowY: 'auto',
  maxHeight: '90vh',
};

const cvPage: React.CSSProperties = {
  width: '200mm',
  height: '300mm',
  overflow: 'hidden',
  background: '#fff',
  display: 'grid',
  gridTemplateColumns: '35% 65%',
  boxShadow: '0 0 25px rgba(0,0,0,0.15)',
  color: '#222',
  padding: 20,
  boxSizing: 'border-box',
};

const leftCol: React.CSSProperties = {
  background: '#d9cea4',
  padding: '30px 20px',
  color: '#000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 13,
};

const rightCol: React.CSSProperties = {
  padding: 30,
  color: '#103864',
};

const input: React.CSSProperties = {
  width: '100%',
  padding: 10,
  marginBottom: 10,
  borderRadius: 6,
  border: '1px solid #ccc',
  fontSize: 14,
};

const textarea: React.CSSProperties = {
  width: '100%',
  padding: 10,
  marginBottom: 10,
  minHeight: 80,
  borderRadius: 6,
  border: '1px solid #ccc',
  fontSize: 14,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const btn: React.CSSProperties = {
  width: '100%',
  padding: 12,
  backgroundColor: '#103864',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: 10,
};

const sectionTitle: React.CSSProperties = {
  borderBottom: '3px solid #c27c02',
  color: '#103864',
  paddingBottom: 4,
  marginBottom: 6,
  fontWeight: '700',
  fontSize: 16,
  textTransform: 'uppercase',
};

const contactRow: React.CSSProperties = {
  display: 'flex',
  gap: 20,
  marginBottom: 20,
  fontSize: 14,
  color: '#444',
  flexWrap: 'wrap',
};

export default App;
