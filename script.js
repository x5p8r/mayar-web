// عدّل الأسعار والرقم وأسعار الصرف من هنا (الأسعار الأساسية بالليرة التركية، والصرف: 1 دولار = 47 ليرة = 3.75 ريال)
const PHONE = "966500000000";
const IG_TEAM = "mada_web";      // يوزر انستا مدى ويب
const IG_ME = "salman__emin";    // يوزر انستا سلمان أمين
const CUR = {
  TRY:{label:"ليرة تركية", unit:"ليرة", rate:1, decimals:2},
  SAR:{label:"ريال", unit:"ريال", rate:3.75/47, decimals:2},
  USD:{label:"دولار", unit:"دولار", rate:1/47, decimals:2},
  OMR:{label:"ريال عماني", unit:"ريال عماني", rate:0.3845/47, decimals:3}
};
const TYPES = [
  {id:"one", name:"صفحة واحدة", desc:"تعريف وزر تواصل", price:1000, days:4},
  {id:"corp", name:"موقع تعريفي", desc:"5 إلى 8 صفحات", price:1700, days:10},
  {id:"shop", name:"متجر إلكتروني", desc:"منتجات وسلة", price:2200, days:21}
];
const GROUPS = [
  {title:"التصميم", items:[
    {id:"logo", name:"شعار", price:250, days:3, desc:"تصميم شعار مميز يعبّر عن مشروعك"},
    {id:"brand", name:"هوية بصرية كاملة", price:700, days:7, desc:"ألوان وخطوط وشعار موحّد بكل مكان يظهر فيه اسمك"},
    {id:"social", name:"قوالب سوشل ميديا", price:200, days:3, desc:"تصاميم جاهزة لمنشوراتك على انستقرام وتويتر وغيرها"},
    {id:"banner", name:"بانرات إعلانية", price:150, days:2, desc:"صور إعلانية جاهزة تستخدمها بالحملات والعروض"},
    {id:"icons", name:"أيقونات مخصصة", price:100, days:2, desc:"أيقونات مرسومة خصيصاً تناسب هوية موقعك"},
    {id:"anim", name:"حركات وأنيميشن", price:250, days:3, desc:"حركات بسيطة تخلي الموقع أكثر حيوية عند التصفح"},
    {id:"dark", name:"نسخة داكنة", price:350, days:2, desc:"وضع ليلي مريح للعين يقدر الزائر يفعّله"},
    {id:"card", name:"بطاقة أعمال", price:100, days:1, desc:"تصميم بطاقة تعريف تطبعها أو ترسلها رقمياً"}
  ]},
  {title:"المحتوى", items:[
    {id:"copy", name:"كتابة المحتوى", price:300, days:4, desc:"نكتب لك نصوص الموقع بأسلوب واضح يجذب الزوار"},
    {id:"photo", name:"تجهيز الصور", price:200, days:2, desc:"تحسين وتجهيز صور موقعك بجودة احترافية"},
    {id:"blog", name:"مدونة ومقالات", price:750, days:5, desc:"قسم مقالات بموقعك يساعدك تنشر محتوى بانتظام"},
    {id:"pages", name:"صفحة إضافية", price:100, days:1, desc:"صفحة زيادة على الباقة الأساسية حسب احتياجك"},
    {id:"video", name:"فيديو تعريفي", price:250, days:3, desc:"فيديو قصير يعرّف بمشروعك بالصفحة الرئيسية"},
    {id:"trans", name:"ترجمة المحتوى", price:200, days:2, desc:"ترجمة محتوى الموقع للغة إضافية"},
    {id:"faq", name:"أسئلة شائعة", price:80, days:1, desc:"قسم يجاوب على أكثر أسئلة عملائك تكراراً"},
    {id:"gallery", name:"معرض أعمال", price:120, days:2, desc:"صفحة تعرض صور أعمالك أو منتجاتك بشكل مرتب"}
  ]},
  {title:"التواصل", items:[
    {id:"lang_tr", name:"لغة تركية", price:250, days:2, desc:"نسخة كاملة من الموقع باللغة التركية"},
    {id:"lang_en", name:"لغة إنجليزية", price:250, days:2, desc:"نسخة كاملة من الموقع باللغة الإنجليزية"},
    {id:"chat", name:"زر واتساب", price:60, days:1, desc:"زر ثابت يوصل الزائر لمحادثتك بضغطة وحدة"},
    {id:"form", name:"نموذج تواصل", price:100, days:1, desc:"فورم يعبّي فيه الزائر بياناته ويوصلك مباشرة"},
    {id:"news", name:"نشرة بريدية", price:150, days:2, desc:"يقدر الزائر يشترك بإيميله عشان يوصله جديدك"},
    {id:"mail", name:"بريد رسمي", price:100, days:1, desc:"إيميل باسم نطاق موقعك بدل جيميل عادي"},
    {id:"map", name:"خريطة الموقع", price:60, days:1, desc:"خريطة تحدد موقعك عشان يوصلك العميل بسهولة"},
    {id:"review", name:"آراء العملاء", price:100, days:1, desc:"قسم يعرض تقييمات وتجارب عملائك السابقين"}
  ]},
  {title:"المتجر والدفع", items:[
    {id:"pay", name:"ربط الدفع", price:2500, days:2, desc:"ربط وسائل دفع إلكترونية يقدر العميل يدفع فيها مباشرة"},
    {id:"book", name:"نظام حجوزات", price:400, days:5, desc:"نظام يحجز فيه العميل موعد أو خدمة بنفسه"},
    {id:"coupon", name:"أكواد خصم", price:230, days:2, desc:"أكواد تقدر تنشئها لعروض وخصومات موسمية"},
    {id:"ship", name:"ربط شركات الشحن", price:200, days:2, desc:"ربط موقعك بشركة شحن لتتبع الطلبات تلقائياً"},
    {id:"invoice", name:"فواتير تلقائية", price:200, days:2, desc:"فاتورة تصدر تلقائياً لكل عملية شراء"},
    {id:"member", name:"عضويات واشتراكات", price:450, days:5, desc:"نظام يسجل فيه العميل حساب ويشترك بخدماتك"},
    {id:"rate", name:"تقييم المنتجات", price:170, days:2, desc:"يقدر العميل يقيّم المنتج بعد الشراء"},
    {id:"stock", name:"إدارة المخزون", price:200, days:3, desc:"متابعة كمية المنتجات المتوفرة تلقائياً بالموقع"}
  ]},
  {title:"التقنية والظهور", items:[
    {id:"seo", name:"تحسين قوقل", price:250, days:2, desc:"تهيئة موقعك عشان يظهر بنتائج البحث بقوقل"},
    {id:"speed", name:"سرعة الموقع", price:150, days:2, desc:"تحسينات تخلي موقعك يفتح بشكل أسرع"},
    {id:"secure", name:"حماية إضافية", price:150, days:2, desc:"طبقة حماية زيادة تحمي موقعك من الاختراق"},
    {id:"stats", name:"إحصائيات الزوار", price:100, days:1, desc:"تقرير يوضح عدد زوار موقعك ومصدرهم"},
    {id:"dash", name:"لوحة تحكم", price:500, days:5, desc:"لوحة تقدر تدير فيها محتوى موقعك بنفسك"},
    {id:"backup", name:"نسخ احتياطي", price:100, days:1, desc:"نسخة محفوظة من موقعك تحسباً لأي طارئ"},
    {id:"pixel", name:"بكسل الإعلانات", price:100, days:1, desc:"كود يربط موقعك بإعلانات فيسبوك أو سناب"},
    {id:"gbp", name:"نشاطك في قوقل", price:100, days:1, desc:"إنشاء وتفعيل صفحة نشاطك التجاري على خرائط قوقل"},
    {id:"pwa", name:"تطبيق ويب تقدمي (PWA)", price:1000, days:5, desc:"يشتغل بدون نت ويتثبت على شاشة الجوال زي أي تطبيق عادي، بدون ما يحمّل من المتجر"}
  ]},
  {title:"بعد التسليم", items:[
    {id:"care", name:"صيانة 3 أشهر", price:1692, days:0, desc:"متابعة وإصلاح أي مشكلة بالموقع لمدة 3 أشهر"},
    {id:"sub", name:"دومين فرعي", price:0, days:0, note:"أول شهرين مجاني", desc:"رابط فرعي مجاني تحت نطاق مدى ويب"},
    {id:"domain", name:"دومين لسنة", price:470, days:0, desc:"اسم نطاق خاص بموقعك لمدة سنة كاملة"},
    {id:"host", name:"استضافة لشهر", price:517, days:0, desc:"استضافة الموقع على سيرفر لمدة شهر"},
    {id:"train", name:"تدريب على الإدارة", price:120, days:1, desc:"جلسة نشرح فيها كيف تدير موقعك بنفسك"}
  ]}
];
const EXTRAS = GROUPS.flatMap(g=>g.items);
let type = TYPES[1].id, sel = new Set(), cur = "TRY", openG = new Set([GROUPS[0].title]);
let infoOpen = null; // حالة مؤقتة (مو محفوظة)، آي دي الإضافة اللي شرحها مفتوح الحين (وحدة بس بنفس اللحظة)
const LANGS = {ar:{label:"عربي",dir:"rtl",loc:"ar-SA-u-nu-latn",i:0},tr:{label:"Türkçe",dir:"ltr",loc:"tr-TR",i:1},en:{label:"English",dir:"ltr",loc:"en-US",i:2}};
let L = (navigator.language||"ar").slice(0,2).toLowerCase();
if(!LANGS[L]) L = "ar";
const KEY = "madaweb-pricing-v1";
try {
  const d = JSON.parse(localStorage.getItem(KEY) || "null");
  if (d) {
    if (TYPES.some(x=>x.id===d.type)) type = d.type;
    if (Array.isArray(d.sel)) sel = new Set(d.sel.filter(id=>EXTRAS.some(x=>x.id===id)));
    if (CUR[d.cur]) cur = d.cur;
    if (LANGS[d.L]) L = d.L;
    if (Array.isArray(d.open)) openG = new Set(d.open);
  }
} catch(e) {}
function save(){
  try { localStorage.setItem(KEY, JSON.stringify({type, sel:[...sel], cur, L, open:[...openG]})); } catch(e) {}
}
const I = () => LANGS[L].i;
const convC = (price, k) => { const c = CUR[k]; const f = Math.pow(10, c.decimals); return Math.round(price * c.rate * f) / f; };
const conv = price => convC(price, cur);
const fmt = (n, k=cur) => n.toLocaleString(LANGS[L].loc, {minimumFractionDigits:CUR[k].decimals, maximumFractionDigits:CUR[k].decimals});

const UI = {
  tag:["مدى ويب","Mada Web","Mada Web"],
  name:["سلمان أمين","Salman Amin","Salman Amin"],
  sub:["اختر اللي تبيه وشوف السعر.","Seçimini yap, fiyatı hemen gör.","Pick what you need and see the price."],
  site:["الموقع","Site","Website"],
  hint:["اللغة الأساسية عربي، والباقي من الإضافات","Ana dil Arapça, diğer diller ek olarak eklenir","The base language is Arabic; other languages are add-ons"],
  extras:["إضافات","Ekler","Add-ons"],
  cost:["التكلفة التقديرية","Tahmini maliyet","Estimated cost"],
  order:["اطلب الموقع","Siteyi sipariş et","Order the site"]
};
const t = k => UI[k][I()];
const DAYS = [n=>"مدة التسليم التقريبية: "+n+" أيام", n=>"Tahmini teslim: "+n+" gün", n=>"Estimated delivery: "+n+" days"];
const MSG = [
  (T,X,n,u)=>"السلام عليكم سلمان، أبغا "+T+(X?" مع: "+X:"")+". التقدير: "+n+" "+u+".",
  (T,X,n,u)=>"Merhaba Salman, "+T+" istiyorum"+(X?", ekler: "+X:"")+". Tahmini: "+n+" "+u+".",
  (T,X,n,u)=>"Hello Salman, I'd like "+T+(X?" with: "+X:"")+". Estimate: "+n+" "+u+"."
];
const CL = {TRY:["ليرة تركية","Türk lirası","Turkish lira"],SAR:["ريال","Suudi riyali","Saudi riyal"],USD:["دولار","ABD doları","US dollar"],OMR:["ريال عماني","Umman riyali","Omani rial"]};
const CU = {TRY:["ليرة","TL","TRY"],SAR:["ريال","SAR","SAR"],USD:["دولار","USD","USD"],OMR:["ر.ع.","OMR","OMR"]};
const U = () => CU[cur][I()];
const NOTE = ["أول شهرين مجاني","İlk 2 ay ücretsiz","First 2 months free"];
const GT = {"التصميم":["Tasarım","Design"],"المحتوى":["İçerik","Content"],"التواصل":["İletişim","Contact"],"المتجر والدفع":["Mağaza ve ödeme","Store & payments"],"التقنية والظهور":["Teknik ve görünürlük","Tech & visibility"],"بعد التسليم":["Tesliminden sonra","After delivery"]};
const DESC = {
  one:["Tanıtım ve iletişim butonu","Intro and contact button"],
  corp:["5-8 sayfa","5–8 pages"],
  shop:["Ürünler ve sepet","Products and cart"],
  logo:["Projeni yansıtan özel bir logo tasarımı","A custom logo that represents your project"],
  brand:["Her yerde aynı görünen renk, yazı ve logo bütünlüğü","Consistent colors, fonts and logo everywhere your brand appears"],
  social:["Instagram ve diğer platformlar için hazır paylaşım şablonları","Ready-made templates for your Instagram and other posts"],
  banner:["Kampanyalarında kullanacağın hazır reklam görselleri","Ready ad visuals for your campaigns and offers"],
  icons:["Sitenin kimliğine uygun özel çizilmiş ikonlar","Custom-drawn icons that match your site's identity"],
  anim:["Sitede gezinirken hissedilen küçük canlandırma hareketleri","Small motion effects that make browsing feel more alive"],
  dark:["Ziyaretçinin açabileceği göz dostu karanlık mod","An eye-friendly dark mode visitors can switch on"],
  card:["Basabileceğin veya dijital gönderebileceğin kartvizit tasarımı","A business card design to print or send digitally"],
  copy:["Site metinlerini ziyaretçiyi çeken bir dille biz yazıyoruz","We write your site's text in a way that engages visitors"],
  photo:["Sitendeki görsellerin profesyonel düzenlenmesi","Professional editing and prep for your site's images"],
  blog:["Düzenli içerik paylaşmana yardımcı bir blog bölümü","A blog section to help you post content regularly"],
  pages:["Temel pakete ek, ihtiyacına göre bir sayfa daha","An extra page beyond the base package, as you need it"],
  video:["Ana sayfada projeni tanıtan kısa bir video","A short intro video for your homepage"],
  trans:["Site içeriğinin ek bir dile çevrilmesi","Translation of your site's content into another language"],
  faq:["Müşterilerinin en çok sorduğu soruların yer aldığı bölüm","A section answering your customers' most common questions"],
  gallery:["Ürünlerini ya da işlerini düzenli şekilde gösteren bir sayfa","A page that neatly showcases your work or products"],
  lang_tr:["Sitenin tamamının Türkçe sürümü","A full Turkish version of your site"],
  lang_en:["Sitenin tamamının İngilizce sürümü","A full English version of your site"],
  chat:["Ziyaretçiyi tek tıkla WhatsApp'ta sana bağlayan sabit bir buton","A fixed button that opens WhatsApp chat with you in one tap"],
  form:["Ziyaretçinin bilgilerini doldurup direkt sana ulaştığı form","A form visitors fill in that reaches you directly"],
  news:["Ziyaretçinin e-postasıyla yeniliklerine abone olabilmesi","Lets visitors subscribe by email to hear what's new"],
  mail:["Gmail yerine kendi alan adınla kurumsal e-posta","A business email on your own domain instead of Gmail"],
  map:["Müşterinin seni kolayca bulmasını sağlayan konum haritası","A location map so customers can find you easily"],
  review:["Önceki müşterilerinin yorum ve deneyimlerinin yer aldığı bölüm","A section showing past customers' reviews and experiences"],
  pay:["Müşterinin direkt sitede ödeme yapabileceği ödeme entegrasyonu","Payment integration so customers can pay directly on the site"],
  book:["Müşterinin kendi kendine randevu veya hizmet ayırtabildiği sistem","A system where customers can book an appointment or service themselves"],
  coupon:["Sezonluk kampanyalar için oluşturabileceğin indirim kodları","Discount codes you can create for seasonal offers"],
  ship:["Siparişlerin otomatik takip edilmesi için kargo firması entegrasyonu","Shipping company integration so orders are tracked automatically"],
  invoice:["Her satış için otomatik oluşan fatura","An invoice generated automatically for every sale"],
  member:["Müşterinin hesap açıp hizmetlerine abone olabildiği sistem","A system where customers can create an account and subscribe"],
  rate:["Müşterinin satın aldıktan sonra ürünü puanlayabilmesi","Lets customers rate a product after buying it"],
  stock:["Sitede mevcut ürün miktarının otomatik takibi","Automatic tracking of available product quantities on the site"],
  seo:["Sitenin Google aramalarında çıkması için yapılan düzenlemeler","Optimizations so your site shows up in Google search"],
  speed:["Sitenin daha hızlı açılmasını sağlayan iyileştirmeler","Improvements that make your site load faster"],
  secure:["Siteni saldırılara karşı koruyan ekstra güvenlik katmanı","An extra layer of protection against attacks"],
  stats:["Site ziyaretçi sayını ve kaynağını gösteren rapor","A report showing how many visitors you get and where from"],
  dash:["Site içeriğini kendin yönetebileceğin bir panel","A panel where you can manage your site's content yourself"],
  backup:["Herhangi bir soruna karşı sitenin saklı bir kopyası","A saved copy of your site in case anything goes wrong"],
  pixel:["Siteni Facebook veya Snapchat reklamlarına bağlayan kod","Code that connects your site to Facebook or Snapchat ads"],
  gbp:["Google Haritalar'da işletme profilinin oluşturulup aktifleştirilmesi","Creating and activating your business profile on Google Maps"],
  pwa:["İnternetsiz çalışır, mağazadan indirmeden telefona kurulur","Works offline and installs on the phone without an app store"],
  care:["3 ay boyunca sitedeki sorunların takibi ve çözümü","Follow-up and fixes for any site issues for 3 months"],
  sub:["Mada Web alan adı altında ücretsiz alt alan adı","A free subdomain under the Mada Web domain"],
  domain:["Sitene özel, 1 yıllık alan adı","A dedicated domain name for your site, for one year"],
  host:["Sitenin bir sunucuda 1 aylık barındırılması","Hosting your site on a server for one month"],
  train:["Siteni nasıl yöneteceğini gösteren bir eğitim oturumu","A training session showing you how to manage your site"]
};
const NAMES = {
  one:["Tek sayfa","One page"],corp:["Kurumsal site","Business site"],shop:["E-ticaret sitesi","Online store"],
  logo:["Logo","Logo"],brand:["Tam kurumsal kimlik","Full brand identity"],social:["Sosyal medya şablonları","Social media templates"],banner:["Reklam bannerları","Ad banners"],icons:["Özel ikonlar","Custom icons"],anim:["Animasyonlar","Animations"],dark:["Koyu tema","Dark mode"],card:["Kartvizit","Business card"],
  copy:["İçerik yazımı","Copywriting"],photo:["Görsel hazırlama","Image prep"],blog:["Blog ve makaleler","Blog & articles"],pages:["Ek sayfa","Extra page"],video:["Tanıtım videosu","Intro video"],trans:["İçerik çevirisi","Content translation"],faq:["SSS","FAQ"],gallery:["Portfolyo galerisi","Portfolio gallery"],
  lang_tr:["Türkçe dil","Turkish language"],lang_en:["İngilizce dil","English language"],chat:["WhatsApp butonu","WhatsApp button"],form:["İletişim formu","Contact form"],news:["E-bülten","Newsletter"],mail:["Kurumsal e-posta","Business email"],map:["Konum haritası","Location map"],review:["Müşteri yorumları","Testimonials"],
  pay:["Ödeme entegrasyonu","Payments"],book:["Rezervasyon sistemi","Booking system"],coupon:["İndirim kodları","Discount codes"],ship:["Kargo entegrasyonu","Shipping integration"],invoice:["Otomatik fatura","Auto invoices"],member:["Üyelik ve abonelik","Memberships"],rate:["Ürün puanlama","Product reviews"],stock:["Stok yönetimi","Inventory"],
  seo:["Google SEO","Google SEO"],speed:["Site hızı","Site speed"],secure:["Ek güvenlik","Extra security"],stats:["Ziyaretçi istatistikleri","Visitor stats"],dash:["Yönetim paneli","Admin panel"],backup:["Yedekleme","Backups"],pixel:["Reklam pikseli","Ad pixel"],gbp:["Google İşletme profili","Google Business"],pwa:["İlerlemeli Web Uygulaması (PWA)","Progressive Web App (PWA)"],
  care:["3 aylık bakım","3-month maintenance"],sub:["Alt alan adı","Subdomain"],domain:["1 yıllık alan adı","Domain, 1 year"],host:["1 aylık hosting","Hosting, 1 month"],train:["Yönetim eğitimi","Admin training"]
};
const nm = o => I()===0 ? o.name : NAMES[o.id][I()-1];
const ds = o => I()===0 ? o.desc : DESC[o.id][I()-1];
const gt = g => I()===0 ? g.title : GT[g.title][I()-1];
const note = o => NOTE[I()];

function typeBtn(o){
  const b = document.createElement("button");
  b.type="button"; b.className="type"; b.setAttribute("role","radio"); b.setAttribute("aria-checked", o.id===type);
  b.innerHTML='<span class="dot"></span><span class="t"><b>'+nm(o)+'</b><small>'+ds(o)+'</small></span><span class="p">'+fmt(conv(o.price))+'</span>';
  b.onclick=()=>{type=o.id;render()}; return b;
}
function chipBtn(o){
  const wrap = document.createElement("span");
  wrap.className = "chip-wrap";
  const b = document.createElement("button");
  b.type="button"; b.className="chip"; b.setAttribute("role","checkbox"); b.setAttribute("aria-checked", sel.has(o.id));
  b.innerHTML = '<b>'+nm(o)+'</b><small>'+(o.note ? note(o) : '+'+fmt(conv(o.price))+' '+U())+'</small>';
  b.onclick=()=>{sel.has(o.id)?sel.delete(o.id):sel.add(o.id);render()};
  wrap.appendChild(b);
  if (o.desc) {
    const q = document.createElement("button");
    q.type="button"; q.className="qbtn"; q.textContent="؟";
    q.setAttribute("aria-label", ds(o));
    q.setAttribute("aria-expanded", infoOpen===o.id);
    q.onclick=(e)=>{e.stopPropagation();infoOpen=(infoOpen===o.id?null:o.id);render()};
    wrap.appendChild(q);
    if (infoOpen===o.id) {
      const info = document.createElement("div");
      info.className = "qinfo"; info.textContent = ds(o);
      wrap.appendChild(info);
    }
  }
  return wrap;
}
function pill(label, on, fn){
  const b = document.createElement("button");
  b.type="button"; b.textContent=label; b.setAttribute("aria-pressed", on); b.onclick=fn; return b;
}
const ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
function setIg(id, handle, label){ const a = document.getElementById(id); a.href = "https://instagram.com/" + handle; a.innerHTML = ICO + label; }
function texts(){
  const d = document.documentElement; d.lang = L; d.dir = LANGS[L].dir;
  document.title = t("name") + " | " + t("tag");
  ["name","sub","site","hint","extras","cost","order"].forEach(k => document.getElementById("t-"+k).textContent = t(k));
  setIg("ig-team", IG_TEAM, t("tag"));
  setIg("ig-me", IG_ME, t("name"));
}
function render(){
  save();
  texts();
  document.getElementById("langs").replaceChildren(...Object.keys(LANGS).map(k=>pill(LANGS[k].label, k===L, ()=>{L=k;render()})));
  document.getElementById("cur").replaceChildren(...Object.keys(CUR).map(k=>pill(CU[k][I()], k===cur, ()=>{cur=k;render()})));
  document.getElementById("types").replaceChildren(...TYPES.map(typeBtn));
  document.getElementById("extras").replaceChildren(...GROUPS.map(g=>{
    const d = document.createElement("details"); d.className="grp"; d.open = openG.has(g.title);
    d.ontoggle = () => { d.open ? openG.add(g.title) : openG.delete(g.title); save(); };
    const n = g.items.filter(x=>sel.has(x.id)).length;
    const h = document.createElement("summary");
    h.innerHTML = "<span>"+gt(g)+"</span>" + (n ? '<span class="cnt">'+n+'</span>' : "");
    const c = document.createElement("div"); c.className="chips"; c.append(...g.items.map(chipBtn));
    d.append(h,c); return d;
  }));
  update();
}
let shown = 0, raf;
function animate(to){
  cancelAnimationFrame(raf);
  const from = shown, t0 = performance.now(), f = Math.pow(10, CUR[cur].decimals);
  const step = k0 => {
    const k = Math.min((k0-t0)/350,1);
    shown = Math.round((from + (to-from)*(1-Math.pow(1-k,3)))*f)/f;
    document.getElementById("tot").textContent = fmt(shown);
    if(k<1) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
}
function update(){
  const T = TYPES.find(x=>x.id===type), X = EXTRAS.filter(x=>sel.has(x.id));
  const baseTotal = T.price + X.reduce((s,x)=>s+x.price,0);
  const total = conv(baseTotal);
  const days = T.days + X.reduce((s,x)=>s+x.days,0);
  animate(total);
  document.getElementById("cur-unit").textContent = U();
  document.getElementById("days").textContent = DAYS[I()](days);
  document.getElementById("multi").textContent = "≈ " + Object.keys(CUR).filter(k=>k!==cur).map(k=>fmt(convC(baseTotal,k),k)+" "+CU[k][I()]).join(" · ");
  const list = X.map(x=>nm(x)+(x.note?" ("+note(x)+")":"")).join(I()===0?"، ":", ");
  document.getElementById("wa").href = "https://wa.me/" + 905520420027 + "?text=" + encodeURIComponent(MSG[I()](nm(T), list, fmt(total), U()));
}
render();

// يحدّث أسعار الصرف تلقائياً من الدولار (يبقى على الأرقام الثابتة فوق لو ما فيه نت أو تعذّر الطلب)
const RATE_KEY = "madaweb-rates-v1", RATE_TTL = 12*60*60*1000; // كل 12 ساعة
function validRates(r){
  return r && ["TRY","SAR","OMR"].every(k=>Number.isFinite(r[k]) && r[k]>0);
}
function applyRates(r){ // r: كم وحدة من كل عملة = 1 دولار
  if (!validRates(r)) return;
  CUR.SAR.rate = r.SAR / r.TRY;
  CUR.USD.rate = 1 / r.TRY;
  CUR.OMR.rate = r.OMR / r.TRY;
  render();
}
(async function loadLiveRates(){
  try {
    let cached = null;
    try { cached = JSON.parse(localStorage.getItem(RATE_KEY) || "null"); } catch(e) {}
    if (cached && validRates(cached.r)) {
      applyRates(cached.r);
      if (Date.now() - cached.t < RATE_TTL) return;
    }
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.result === "success" && data.rates) {
      const r = { TRY:data.rates.TRY, SAR:data.rates.SAR, OMR:data.rates.OMR };
      if (!validRates(r)) return;
      try { localStorage.setItem(RATE_KEY, JSON.stringify({t:Date.now(), r})); } catch(e) {}
      applyRates(r);
    }
  } catch(e) { /* بدون نت أو تعذّر الطلب: يفضل شغال على الأسعار الثابتة */ }
})();
