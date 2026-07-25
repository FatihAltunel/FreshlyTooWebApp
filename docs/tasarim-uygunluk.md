# Tasarım uygunluk raporu

`design_handoff_freshlytoo_site/README.md` ve `FreshlyToo Site.dc.html` ile kurulan sitenin
bölüm bölüm karşılaştırması. Amaç: nerede birebir olduğunu, nerede ve **neden** saptığını kayda geçirmek.

Doğrulama: `npm run lint` ve `npm run build` temiz; altı rota headless Chromium'da
1440 / 768 / 390 px'de konsol hatasız açılıyor ve hiçbirinde yatay taşma yok.

---

## Birebir kurulan bölümler

| Bölüm | Durum |
|---|---|
| Hero (manifesto) | ✅ Tam koyu blok, `clamp(40px,6.4vw,88px)` başlık, sağa yaslı butonlar, 4'lü fotoğraf şeridi (2. ve 4. kutu `translateY(-24px)`) — **ana sayfada kullanılan varyant** |
| Hero (editoryal) | ✅ Kurulu ama kullanılmıyor — iki kolon, üç maddeli güven satırı, yüzen mini kart (206px, `drift` 6s, `pointer-events:none`) |
| Kategori şeridi | ✅ 34s marquee, `mask-image` silinme, sabit "NEREDEN" etiketi |
| Üç adım | ✅ 460px krem kutu, tam görünen ekran görüntüsü, hover `scale(1.04)` 0.9s, serif sıra numarası |
| Etki bölümü | ✅ Sayaçlar 1s ease-out cubic, barlar 1.2s + 120ms kademeli. Ölçüldü: 540 / 356.4 / 259.2 / 162 px = %100 / 66 / 48 / 30 |
| Uygulama bölümü | ✅ 290×420 telefon, 120px krem gradyan silinme, 4 satırlık çizgili liste |
| Bekleme listesi | ✅ Form → yeşil kenarlıklı teşekkür kartı, role göre değişen metin |
| İşletmeler | ✅ Örnek hesap kartı, CSS talep grafiği (8 bar), koyu tipografik bant, koyu CTA |
| Fiyatlandırma | ✅ 3 kart, Pro koyu + taşan "ÖNERİLEN" etiketi, zincir CTA şeridi |
| Hikâyemiz | ✅ İki kolon metin, geniş foto, 3 değer kartı, 4 satırlık yol haritası, yatırım CTA |
| SSS | ✅ 840px kolon, 8 soru, tek açık, açığa tekrar basınca hepsi kapanır |
| İletişim | ✅ 3 e-posta kanalı, basın kiti kartı, beyaz kart içinde form |
| Scroll ilerleme çubuğu | ✅ Header alt kenarı, 2px, `transition: width .12s linear` |
| Footer | ✅ 4 kolon, serif slogan, alt şerit |

---

## Sapmalar

### 1. Hedef ortam — Vite, Next.js değil

Brief `web/` altında Next.js istiyordu; aynı brief'in kuralı "repo'da web kurulumu varsa onu kullan"
diyordu. Bu repo zaten bir Vite + React 19 landing page ve GitHub Pages'e statik deploy ediliyor.
Mevcut kurulum kullanıldı.

Sonuçları:

- **`app/actions.ts` sunucu action'ı yok.** GitHub Pages statik olduğu için sunucu çalışma zamanı
  yok — Next.js kurulsa bile `output: export` altında server action çalışmazdı. Yerine tek giriş
  noktası olarak `src/lib/actions.js`: her iki form da aynı `insertRow` üstünden, yalnızca INSERT
  yetkisi olan anon anahtarıyla PostgREST'e yazıyor. Migration ve RLS istendiği gibi.
- **`next/image` yok.** Düz `<img>` + `loading="lazy"` / `decoding="async"` / hero'da
  `fetchpriority="high"` ve açık `width`/`height`. `alt` metinleri TR ve EN olarak sözlükte.
- Gerçek rotalar için `react-router-dom`. GitHub Pages'in SPA rewrite'ı olmadığından
  `vite.config.js` derleme sonrası `index.html`i `404.html` olarak kopyalıyor ve `base`
  `/FreshlyTooWebApp/` yapıldı (router `basename`i `import.meta.env.BASE_URL`ten alıyor).
  Not: bu, `base: './'` yapan son commit'i geri alıyor — göreli base ile derin rotalar çalışmıyor.

### 2. Site tek dil değil, TR/EN

Tasarım tek dil (Türkçe). Mevcut sitedeki dil değiştirici korunmasına karar verildi; tüm kopya
`src/i18n/content.js` içinde `tr` + `en` olarak duruyor, İngilizce çeviriler bu iş kapsamında yazıldı.

**Tasarımda olmayan tek arayüz ögesi:** header'daki `TR`/`EN` düğmesi. Nav ritmini bozmaması için
tipografik ve küçük tutuldu (12px, 0.1em, 1px kenarlık), CTA'nın soluna kondu.

Sayı biçimlendirmesi dile bağlandı: TR'de `2,5 kg CO₂`, EN'de `2.5 kg CO₂`.

### 3. `#6b7a70` grisi kullanılmadı — erişilebilirlik

Prototip üç yerde `#6b7a70` kullanıyor: hero güven satırı etiketleri (13.5px), üstü çizili eski fiyat
(13.5px) ve wordmark'taki "Too" (19.5px, 400).

Bu renk krem zeminde **3.90:1** — WCAG AA'nın normal metin için istediği 4.5:1'in altında. Handoff
README'si de "`#5b6b5f`ten daha açık gri kullanmayın" diyor (madde 7). Üçünde de `--ft-muted`
(`#5b6b5f`, 5.28:1) kullanıldı.

**Görünür fark:** bu üç etiket prototiptekinden bir tık koyu. Bilinçli; tasarım tarafı ısrar ederse
tek değişiklik `tokens.css`e `--ft-muted-2: #6b7a70` eklemek olur.

### 4. `tokens.css` prototipin kullandığı 16 değeri içermiyordu

Handoff'un `tokens.css`i eksikti. Prototipte geçen ama tokenlarda tanımsız olan değerler
bileşenlere hex olarak gömülmedi; `src/styles/tokens.css` içinde açıkça işaretli bir blokta
toplandı. Hiçbiri uydurma değil, hepsi `.dc.html`ten birebir:

`#e4ebe5` · `#cfc6b2` · `#ece5d5` · `#bfe0c8` · `#0a1f0b` · `#cfd9cd` · `#a7c4ae` · `#dcfce7` ·
`rgba(244,241,230,.16/.12/.28)` · 4 gölge (telefon, geniş foto, işletme hero, Pro kartı)

### 5. Responsive eklemeler (prototipte breakpoint yok)

Handoff "mobil için ayrı breakpoint gerekmiyor, auto-fit yeterli" diyor. Üç yerde yetmiyordu:

- **Header:** sabit `height: 74px`, nav sarınca içeriği kırpıyordu → `min-height` + sarma;
  900px altında nav kendi satırına iniyor.
- **Hero mini kartı:** `left: -42px`, grid tek kolona düşünce 32px'lik gutter'ı aşıp yatay
  kaydırma yaratıyordu → 820px altında -16px / 184px.
- **Yol haritası:** `130px 1fr` grid'i 560px altında tek kolona iniyor.

### 6. Marquee döngüsü düzeltildi

Prototip düz bir listeye tek `gap` veriyor; `translateX(-50%)` bu durumda yarım `gap` kadar
şaşıyor ve döngü her turda görünür şekilde zıplıyor. Boşluk kelime gruplarının içine alındı,
böylece iki yarı tam eşit ve döngü kusursuz. Bilinçli düzeltme — görsel sonuç aynı, atlama yok.

### 7. Erişilebilirlik sertleştirmeleri

- **Rol pill'leri** iki `<button>` yerine gerçek radio grubu (görsel olarak gizli input + pill
  `<label>`). Görünüm birebir aynı, klavye ve ekran okuyucu doğru çalışıyor.
- **SSS** `<button aria-expanded>` + `role="region"` panel; panel `hidden` ile açılıp kapanıyor
  (koşullu render yerine), böylece `aria-controls` her zaman geçerli bir ögeyi gösteriyor.
- **Formlar** gerçek `<label>` kullanıyor; bekleme listesi e-postasında görsel olarak gizli label.
- Hata mesajları `role="alert"`, başarı kartları `role="status"`.
- Marquee'nin ikinci kopyası `aria-hidden`, talep grafiği `role="img"` + `aria-label`.

### 8. Hareket azaltma

Prototipte "sakin" bir prop'tu; burada `prefers-reduced-motion: reduce` okunuyor. Açıkken:
observer hiç kurulmuyor (içerik anında görünür), sayaçlar hedef değeri doğrudan yazıyor, barlar
tam genişlikte, marquee duruyor, rota geçişlerinde kaydırma `auto`. Headless'ta doğrulandı.

Prototipin "JS patlarsa içerik gizli kalmasın" diye koyduğu 2.2s güvenlik zamanlayıcısı
taşınmadı; yerine `scrollObserver` `IntersectionObserver` yoksa içeriği anında açıyor.

### 9. Tasarımda karşılığı olmayan eklemeler

Backend bağlandığı için gerekli oldu:

- Her iki formda gönderiliyor / başarılı / hatalı durumları ve metinleri. İletişim formunun
  başarı kartı, bekleme listesinin teşekkür kartıyla aynı dille kuruldu.
- İletişim formuna KVKK satırı (tasarımda yalnızca bekleme listesinde vardı).
- Sayfa başına `<title>`.

### 10. Kurulmayanlar

- **`vitrin` hero varyantı** — bento grid düzeni kurulmadı.
  (Brief başta "sadece editoryal" diyordu; sonradan manifesto istendi. Şu an ana sayfada
  **manifesto** var, editoryal de kurulu ve `src/pages/Home/Home.jsx` içinde tek satırla
  geri alınabiliyor. İkisinden biri kalıcı seçilince diğeri silinebilir.)
- Prototipin `showImpactCounters` / `waitlistRoleToggle` / `motion` prop'ları — bunlar tasarım
  aracının yazım anahtarları, üretimde karşılığı yok.
- Yasal sayfalar (KVKK / kullanım / gizlilik) ve basın kiti indirme bağlantısı `href="#"`.
  İçerik henüz yazılmadı; sayfalar hazırlanınca route bağlanacak.

---

## Varlıklar

- `assets/photos/*` PNG → JPEG (q82, en fazla 1200px): **5.8 MB → 759 KB**. Hâlâ yer tutucu;
  ticari kullanım için lisanslı stok veya kendi çekimlerinizle değiştirilecek.
- `assets/icon.png` 1200px → 256px: 90 KB → 25 KB.
- `assets/shots/*` handoff'takiyle bayt bayt aynıydı, repodakiler kullanıldı.
- Kalan iyileştirme: dört uygulama ekran görüntüsü PNG ve toplam ~1.5 MB. Gerçek arayüz
  görüntüsü oldukları için PNG makul; ileride WebP'ye çevrilebilir.

## Silinen dosyalar

Yeni tasarımın yerini aldığı için kaldırıldı (git geçmişinde duruyor): `src/sections/*` (10 bölüm),
`components/{Button,FeatureCard,PhoneMockup,StatBadge}`, eski `layout/{Header,Footer}`,
`hooks/useRevealOnScroll.js`, `styles/variables.css`, `assets/mockups/*`, kullanılmayan
`assets/{hero.png,react.svg,vite.svg}` ve eski `i18n/content.js` kopyası.
