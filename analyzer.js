/**
 * QA Page Analyzer
 * Script de análise automatizada de qualidade de páginas web
 */

const report = {

  
  pagina: document.title,
  url: location.href,

  meta_description: document.querySelector('meta[name="description"]')?.content || "AUSENTE",

  imagens_sem_alt: [...document.querySelectorAll('img:not([alt])')].map(img => ({
    src: img.src,
    id: img.id || '(sem id)'
  })),

  links_sem_destino: [...document.querySelectorAll('a')].filter(a => {
    const href = a.getAttribute('href');
    return !href || href === '' || href === '#';
  }).map(a => ({
    texto: a.innerText.trim().substring(0, 60) || '(sem texto)',
    id: a.id || '(sem id)',
    href: a.getAttribute('href')
  })),

  inputs_sem_label: [...document.querySelectorAll('input:not([type="hidden"]), select, textarea')]
    .filter(el => {
      const temLabel = el.labels?.length > 0;
      const temAria = el.getAttribute('aria-label');
      const temPlaceholder = el.getAttribute('placeholder');
      return !temLabel && !temAria && !temPlaceholder;
    })
    .map(el => ({
      name: el.name || '(sem name)',
      type: el.type || 'text',
      id: el.id || '(sem id)'
    })),

  formularios: [...document.querySelectorAll('form')].map(f => ({
    id: f.id || '(sem id)',
    method: f.method.toUpperCase(),
    action: f.action,
    total_campos: f.elements.length,
    aviso: f.method.toLowerCase() === 'get'
      ? 'Dados enviados via GET'
      : 'OK'
  })),

  botoes_sem_texto: [...document.querySelectorAll('button, input[type="submit"]')]
    .filter(b => b.innerText?.trim() === '' && !b.getAttribute('aria-label'))
    .map(b => ({
      id: b.id || '(sem id)',
      html: b.outerHTML.substring(0, 100)
    })),

  erros_validacao: [...document.querySelectorAll('[oninvalid]')]
    .map(el => ({
      campo: el.name || '(sem name)',
      mensagem: el.getAttribute('oninvalid')
    }))
    .filter(el => el.mensagem),

};

console.log('%cPágina: ' + report.pagina + ' | URL: ' + report.url, 'color:#555');
console.log('');


console.log('  Formulários com GET:', report.formularios.filter(f => f.method === 'GET').length);
console.log('  Links sem destino:', report.links_sem_destino.length);


console.log('  Inputs sem label:', report.inputs_sem_label.length);
console.log('  Botões sem texto:', report.botoes_sem_texto.length);
console.log('  Meta description:', report.meta_description.substring(0, 80));

console.log('  Imagens sem alt:', report.imagens_sem_alt.length);

console.log('');

console.log(JSON.stringify(report, null, 2));

