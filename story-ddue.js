const storyNodes = [...document.querySelectorAll('.article-heading h1,.article-heading p:last-child,.article section h2,.article section p:not(.eyebrow),.caption')].filter(el => !el.closest('#original'));
const storyCopy = {ja:storyNodes.map(el=>el.innerHTML), en:[
'Forms that leave room for imagination.',
'Move your hands. Touch the material. Discover forms that have no name yet.<br>A story of co-creation connecting Galicia and Japan.',
'creative space NHUMA · Time spent exploring patterns',
'Creating forms with D-due.',
'Charo Flojan &amp; Alfredo Olmedo<br>D-due · PETALO pattern design',
'PETALO’s patterns began with Alfredo’s hand-drawn lines. Roughness, sharpness, softness: tactile experiences became the starting point for forms that leave each person free to find their own meaning.',
'“To create a graphic tool that allows anyone<br>to enjoy non-verbal expression.”',
'Charo Flojan &amp; Alfredo Olmedo · Translated excerpt from their support message',
'For D-due, this project is a natural extension of our practice. It is a way of engaging through design with coherence, sensitivity and practical usefulness.',
'At its origin were no garments, but a deeply human wish: to create a graphic tool that allows anyone to enjoy non-verbal expression.',
'Yumico Otsubo, who initiated the project, noticed that children and adults alike can feel hesitation or resistance towards drawing. She proposed a manual stamping system to make expression freer, more accessible and more natural.',
'Conceived through functional simplicity and respect for materials, the organic forms come from Alfredo’s hand-drawn lines. They draw on tactile experiences: roughness, sharpness and softness.',
'The participants were essential co-creators, rather than recipients. The result is an open system for drawing, telling stories or simply playing.',
'Edited English translation of the support message. The original Spanish text is available below.',
'Exploring together,<br>without a fixed answer.',
'Children and adults alike can hesitate to draw. PETALO began with the wish to make that first step freer and more accessible.',
'At NHUMA, we gathered around patterns, moved our hands and shared impressions. Forms without a fixed meaning became a space for each person to discover their own landscape.',
'Galicia and Japan.<br>A continuing conversation.',
'Sensibilities nurtured in distant places met through PETALO. Touching materials, moving our hands and discovering unexpected beauty: we hope to continue nurturing this dialogue together.',
'Yumico Otsubo · PETALO'
], es:[
'Formas que dejan espacio a la imaginación.',
'Mover las manos. Tocar la materia. Descubrir formas que todavía no tienen nombre.<br>Una historia de creación compartida entre Galicia y Japón.',
'creative space NHUMA · Un tiempo para explorar las formas',
'Crear formas junto a D-due.',
'Charo Flojan &amp; Alfredo Olmedo<br>D-due · Diseño de los motivos de PETALO',
'Los motivos de PETALO nacieron del trazo manual de Alfredo. Lo áspero, lo afilado, lo blando: la experiencia táctil fue el punto de partida para formas en las que cada persona puede descubrir su propio significado.',
'«Crear una herramienta gráfica que permita a cualquier persona<br>disfrutar de formas de expresión no verbal».',
'Charo Flojan &amp; Alfredo Olmedo · Fragmento de su mensaje de apoyo',
'Para D-due, este proyecto es una extensión natural de su práctica. Una forma de intervenir desde el diseño con coherencia, sensibilidad y utilidad real.',
'En el origen no hay prendas, sino una propuesta profundamente humana: crear una herramienta gráfica que permita a cualquier persona disfrutar de formas de expresión no verbal.',
'Yumico Otsubo, impulsora del proyecto, observó cómo, tanto en niños como en adultos, dibujar puede generar bloqueo, pudor o resistencia. Propuso un sistema de estampación manual que hiciera la expresión más libre, accesible y natural.',
'Concebidas desde la sencillez funcional y el respeto por el material, las formas orgánicas derivan del trazo manual de Alfredo y de la experiencia táctil: lo áspero, lo afilado, lo blando.',
'Los participantes fueron co-creadores fundamentales del proceso. Un sistema abierto para dibujar, narrar o simplemente jugar.',
'Versión editada del mensaje de apoyo. El texto original completo está disponible a continuación.',
'Explorar juntos,<br>sin una respuesta fija.',
'Tanto niños como adultos pueden sentir resistencia a dibujar. PETALO nació del deseo de hacer ese primer paso más libre y cercano.',
'En NHUMA nos reunimos en torno a las formas, movimos las manos y compartimos impresiones. Los motivos sin un significado fijo dejaron espacio para que cada persona descubriera su propio paisaje.',
'Galicia y Japón.<br>Una conversación que continúa.',
'Sensibilidades que crecieron en lugares lejanos se encontraron a través de PETALO. Tocar la materia, mover las manos y descubrir una belleza inesperada: queremos seguir cultivando este diálogo juntos.',
'Yumico Otsubo · PETALO'
]};
function setStoryLanguage(lang){
 if(!storyCopy[lang]) lang='ja';
 document.documentElement.lang=lang;
 document.title = {ja:'D-due × PETALO — 共創の物語',en:'D-due × PETALO — A story of co-creation',es:'D-due × PETALO — Una historia de creación compartida'}[lang];
 document.querySelector('.wide').alt={ja:'NHUMAで図案やスタンプを囲み、対話する共創の風景',en:'Co-creators exploring PETALO patterns and stamps at NHUMA',es:'Co-creadores explorando los motivos y sellos de PETALO en NHUMA'}[lang];
 storyNodes.forEach((el,i)=>el.innerHTML=storyCopy[lang][i] ?? storyCopy.ja[i]);
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 document.querySelectorAll('a[href^="index.html"]').forEach(a=>a.href=`index.html?lang=${lang}#story-behind`);
 const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);
 try{localStorage.setItem('petalo-language',lang)}catch{}
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setStoryLanguage(b.dataset.lang)));
setStoryLanguage(new URL(location.href).searchParams.get('lang')||'ja');
