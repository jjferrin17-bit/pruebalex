// Interacciones: menú móvil, año dinámico, i18n básico y validación de formulario
(function(){
  // Año dinámico
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Menú móvil
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#menu a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); burger.setAttribute('aria-expanded','false');
    }));
  }

  // i18n mínimo
  const dict = {
    es: {
      'nav.firm':'Estudio','nav.areas':'Áreas','nav.team':'Equipo','nav.contact':'Contacto',
      'hero.kicker':'Estrategia legal clara','hero.title':'Defendemos tus derechos con rigor técnico y cercanía','hero.lead':'Asesoría y litigio para personas y empresas. Comunicación directa, ética profesional y resultados.','hero.badge':'Respuesta en 24h',
      'cta.consult':'Solicitar consulta','cta.areas':'Ver áreas',
      'firm.title':'LEX VALUE ESESORÍA INTEGRAL','firm.sub':'Soluciones legales a medida para cada cliente.','firm.body1':'Equipo con trayectoria en derecho penal económico, civil y empresarial. Integramos prevención, litigación estratégica y cumplimiento para proteger tus intereses.',
      'firm.li1':'Informes periódicos y comunicación directa con tu abogado/a','firm.li2':'Honorarios transparentes y plan de trabajo','firm.li3':'Atención presencial y remota',
      'firm.quick':'Datos rápidos','firm.addr':'Dirección','firm.addrVal':'Luxemburgo y Portugal','firm.phone':'Teléfono','firm.hours':'Horario','firm.hoursVal':'Lun–Vie 9:00–18:00','firm.langs':'Idiomas',
      'areas.title':'Áreas de práctica','areas.sub':'Cobertura integral con foco en resultados.',
      'areas.criminal.chip':'Penal Económico','areas.criminal.title':'Defensa Penal & Compliance','areas.criminal.body':'Investigaciones, medidas cautelares, recursos y programas de cumplimiento.',
      'areas.civil.chip':'Civil','areas.civil.title':'Contratos & Responsabilidad','areas.civil.body':'Redacción y negociación contractual, daños y mediación.',
      'areas.corp.chip':'Corporativo','areas.corp.title':'Empresas & Gobierno Corporativo','areas.corp.body':'Gobierno, matrices de riesgo, investigaciones internas.',
      'areas.family.chip':'Familia','areas.family.title':'Familia & Sucesiones','areas.family.body':'Acuerdos, medidas urgentes y particiones.',
      'areas.labor.chip':'Laboral','areas.labor.title':'Derecho Laboral','areas.labor.body':'Reclamos, auditorías y negociación colectiva.',
      'areas.admin.chip':'Adm.','areas.admin.title':'Contencioso Administrativo','areas.admin.body':'Impugnaciones, acciones constitucionales y contratación pública.',
      'team.title':'Abogados principales','team.sub':'Dirección jurídica y atención personalizada.',
      'contact.title':'Contáctanos','contact.sub':'Respondemos en menos de 24 horas hábiles.',
      'form.name.label':'Nombre y apellido','form.email.label':'Correo electrónico','form.phone.label':'Teléfono','form.topic.label':'Tema','form.topic.placeholder':'Seleccionar…','form.topic.penal':'Consulta Penal','form.topic.civil':'Consulta Civil','form.topic.corp':'Empresas / Compliance','form.topic.familia':'Familia','form.topic.laboral':'Laboral','form.topic.admin':'Administrativo','form.topic.otro':'Otro','form.message.label':'Mensaje','form.send':'Enviar consulta','form.clear':'Limpiar','form.disclaimer':'No incluyas datos sensibles si no es necesario.',
      'contact.where':'Dónde estamos',
      'footer.allrights':'Todos los derechos reservados.'
    },
    en: {
      'nav.firm':'Firm','nav.areas':'Practice','nav.team':'Team','nav.contact':'Contact',
      'hero.kicker':'Clear legal strategy','hero.title':'We protect your rights with rigor and care','hero.lead':'Advisory and litigation for individuals and companies. Direct communication, ethics and results.','hero.badge':'Reply within 24h',
      'cta.consult':'Request consult','cta.areas':'See practice areas',
      'firm.title':'LEX VALUE ESESORÍA INTEGRAL','firm.sub':'Tailored legal solutions for every client.','firm.body1':'Team with experience in white-collar criminal law, civil and corporate matters. We combine prevention, strategic litigation and compliance to protect your interests.',
      'firm.li1':'Periodic updates and direct communication','firm.li2':'Transparent fees and roadmap','firm.li3':'In-person and remote service',
      'firm.quick':'Quick facts','firm.addr':'Address','firm.addrVal':'Luxemburgo y Portugal','firm.phone':'Phone','firm.hours':'Hours','firm.hoursVal':'Mon–Fri 9:00–18:00','firm.langs':'Languages',
      'areas.title':'Practice Areas','areas.sub':'Comprehensive coverage focused on results.',
      'areas.criminal.chip':'White-Collar','areas.criminal.title':'Criminal Defense & Compliance','areas.criminal.body':'Investigations, precautionary measures, appeals and compliance programs.',
      'areas.civil.chip':'Civil','areas.civil.title':'Contracts & Liability','areas.civil.body':'Drafting and negotiation, damages and mediation.',
      'areas.corp.chip':'Corporate','areas.corp.title':'Corporate & Governance','areas.corp.body':'Governance, risk matrices, internal investigations.',
      'areas.family.chip':'Family','areas.family.title':'Family & Probate','areas.family.body':'Agreements, urgent measures and partitions.',
      'areas.labor.chip':'Labor','areas.labor.title':'Labor Law','areas.labor.body':'Claims, audits and collective bargaining.',
      'areas.admin.chip':'Admin.','areas.admin.title':'Administrative Litigation','areas.admin.body':'Challenges, constitutional actions and public procurement.',
      'team.title':'Lead attorneys','team.sub':'Legal leadership and personalized attention.',
      'contact.title':'Contact us','contact.sub':'We reply within 24 business hours.',
      'form.name.label':'Full name','form.email.label':'Email','form.phone.label':'Phone','form.topic.label':'Topic','form.topic.placeholder':'Choose…','form.topic.penal':'Criminal','form.topic.civil':'Civil','form.topic.corp':'Corporate / Compliance','form.topic.familia':'Family','form.topic.laboral':'Labor','form.topic.admin':'Administrative','form.topic.otro':'Other','form.message.label':'Message','form.send':'Send','form.clear':'Clear','form.disclaimer':'Avoid sharing sensitive data unless necessary.',
      'contact.where':'Where we are',
      'footer.allrights':'All rights reserved.'
    }
  };

  const $ = (sel)=>Array.from(document.querySelectorAll(sel));
  function applyLang(lang){
    $('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const str = (dict[lang] && dict[lang][key]) || el.textContent;
      if (str) el.textContent = str;
    });
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn){
    let current = (window.AppConfig && window.AppConfig.defaultLang) || 'es';
    applyLang(current);
    langBtn.addEventListener('click', ()=>{
      current = current === 'es' ? 'en' : 'es';
      applyLang(current);
    });
  } else {
    applyLang('es');
  }

  // Formulario (simulación de envío)
  const form = document.getElementById('contactForm');
  const statusBox = document.getElementById('formStatus');
  function setStatus(type, msg){ if(!statusBox) return; statusBox.className = 'form-status ' + type; statusBox.textContent = msg; }
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(!form.checkValidity()){
        setStatus('err', document.documentElement.lang === 'en' ? 'Please check the required fields.' : 'Revisa los campos obligatorios.');
        form.reportValidity();
        return;
      }
      // Aquí podrías integrar un fetch a tu backend
      setStatus('ok', document.documentElement.lang === 'en' ? 'Thanks! We will contact you soon.' : '¡Gracias! Te contactaremos pronto.');
      form.reset();
    });
  }
})();