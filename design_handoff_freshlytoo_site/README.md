# Handoff: FreshlyToo marka web sitesi

## Genel bakış

FreshlyToo'nun pazarlama/marka web sitesi tasarımı. Altı bölümden oluşan tek sayfalık bir uygulama (client-side routing):

1. **Ana sayfa** (Keşfet) — hero, kategori şeridi, "Nasıl çalışır", Türkiye gıda israfı verileri, uygulama tanıtımı, bekleme listesi formu
2. **İşletmeler** — restoran/fırın tarafına satış sayfası
3. **Fiyatlandırma** — 3 plan (müşteri ücretsiz / işletme Başlangıç 0 ₺ / işletme Pro 99 ₺)
4. **Hikâyemiz** — misyon + yol haritası
5. **SSS** — 8 soruluk accordion
6. **İletişim** — e-posta kanalları, basın kiti, iletişim formu

Uygulama henüz yayında olmadığı için tüm birincil CTA'lar App Store/Play linki değil, **e-posta bekleme listesi**dir.

## Tasarım dosyaları hakkında

Bu paketteki HTML dosyaları **tasarım referansıdır** — üretime alınacak kod değil. Amaçlanan görünüm, kopya ve davranışı gösteren prototiplerdir. Yapılacak iş, bu tasarımları hedef kod tabanının kendi ortamında (React + Next.js öneriliyor; mevcut bir kurulum varsa onun konvansiyonları) **yeniden inşa etmektir**. HTML'i doğrudan kopyalamayın.

`FreshlyToo Site.dc.html` tarayıcıda doğrudan açılabilir; `support.js` yalnızca bu prototipi çalıştıran çalışma zamanıdır, taşınmasına gerek yoktur.

## Hedef repo

Ekli repo (`food-rescue`) **React Native + Expo SDK 54** mobil uygulamasıdır (TypeScript strict, Supabase, React Navigation 7, i18next 5 dil). Bu pazarlama sitesi oraya bir RN ekranı olarak girmez.

Öneri: monorepo içinde ayrı bir web uygulaması — `web/` klasöründe **Next.js (App Router) + TypeScript**. Mobil uygulamanın `src/` ağacı değişmez. Repo'da hazır bir web kurulumu varsa onun konvansiyonları geçerlidir.

Paylaşılan tek şey marka: renk paleti uygulamanın `src/constants/Colors.ts` paletiyle akrabadır (primary `#2e7d32` ailesi web için koyulaştırıldı) ve ekran görüntüleri gerçek uygulamadan alınmıştır.

## Fidelity

**High-fidelity.** Renkler, tipografi, boşluklar, hover durumları ve animasyon süreleri nihai kabul edilebilir. Piksel düzeyinde birebir kurulmalı.

## Design tokens

### Renkler
| Rol | Hex |
|---|---|
| Sayfa zemini (krem) | `#faf7ef` |
| İkincil zemin / şerit | `#f4f1e6` |
| Üçüncül zemin (görsel kutusu) | `#efeade` |
| Koyu zemin (footer, etki bölümü) | `#14251a` |
| Ana metin | `#14251a` |
| Gövde metni | `#3d4c42` / `#4d5c51` |
| İkincil metin, etiket | `#5b6b5f` |
| Marka yeşili (buton, link) | `#14532d` |
| Yeşil hover / vurgu | `#15803d` |
| Açık yeşil (koyu zeminde vurgu) | `#4ade80`, `#86efac`, `#a7d3b4` |
| Koyu zeminde gövde | `#c8d5cb` |
| Koyu zeminde ikincil | `#9fb1a3` / `#7d8a81` |
| Kenarlık (krem üzeri) | `#e6dfd0`, `#e0d9c9`, `#ded5c1`, `#d6cdb9` |
| Uyarı / geri sayım (turuncu) | `#b45309` |

Kaynak: uygulamanın `src/constants/Colors.ts` paletiyle uyumlu (primary `#2e7d32` ailesi koyulaştırılarak web'e uyarlandı).

### Tipografi
- **Instrument Sans** (400/500/600/700) — arayüz, gövde, butonlar
- **Instrument Serif** (regular + italic) — display vurguları, büyük sayılar, footer sloganı
- Google Fonts üzerinden yükleniyor.

Ölçek:
| Kullanım | Değer |
|---|---|
| Hero H1 | `clamp(40px, 4.9vw, 64px)` / line-height 1 / letter-spacing −.045em / 600 |
| Manifesto H1 | `clamp(40px, 6.4vw, 88px)` / .96 / −.05em |
| Bölüm H2 | `clamp(28px, 3.4vw, 46px)` / 1.05 / −.04em / 600 |
| Sayfa H1 (alt sayfalar) | `clamp(36px, 4.6vw, 56px)` |
| Gövde büyük | 18–19px / 1.6 |
| Gövde | 15–16.5px / 1.55–1.68 |
| Etiket (eyebrow) | 11px / 600 / letter-spacing .16em / uppercase |
| Dipnot | 12.5px |
| Büyük sayı (serif) | 30–48px |

### Boşluk & geometri
- İçerik genişliği `max-width: 1200px`, yatay padding `32px` (SSS sayfası 840px)
- Bölüm dikey ritmi `76–88px`
- Radius: buton/input `11px`, kart `16px`, büyük kart/panel `20–22px`, küçük görsel `10px`
- Kart gölgesi: `0 26px 60px -26px rgba(20,37,26,.4)` (hero görsel), `0 20px 44px -14px rgba(20,37,26,.32)` (yüzen kart), `0 12px 30px -14px rgba(20,37,26,.35)` (ekran görüntüsü)
- Grid: `repeat(auto-fit, minmax(280–330px, 1fr))` + `gap: 20–60px`. Mobil için ayrı breakpoint gerekmiyor, auto-fit yeterli.

## Ekranlar

### Ana sayfa — hero (3 varyant)
Tasarımda üç hero düzeni var; **biri seçilip diğerleri atılabilir** (prototipte `heroLayout` prop'u ile geçiş yapılıyor).

1. **editoryal** (varsayılan) — iki kolon. Solda H1 "Taze yemek, / *yarı fiyatına,* / yakınında." (2. satır serif italic `#15803d`), alt metin, iki buton, üç maddeli güven satırı (`%50` / `Yürüme` / `Sıfır` + açıklama). Sağda dikey yemek fotoğrafı (`min(58vh,540px)`, radius 20) ve sol-alt köşesinden dışarı taşan beyaz mini ürün kartı (206px: fotoğraf 132px + "Sürpriz kutu" + `0S 42D` turuncu + `42 ₺` / üstü çizili `95 ₺`). Mini kart `pointer-events:none` ve 6s `drift` animasyonuyla yüzüyor.
2. **manifesto** — tam koyu (`#14251a`) blok. H1 "Bugünün yemeği, yarının fiyatına değil — *yarı fiyatına.*", altında paragraf + butonlar, en altta 4'lü fotoğraf şeridi (2. ve 4. kutu `translateY(-24px)`).
3. **vitrin** — bento grid: koyu metin bloğu (2 kolon) + 4 fotoğraf/istatistik kutusu.

### Ana sayfa — kategori şeridi
Krem şerit, sol sabit "NEREDEN" etiketi, sağda sonsuz kayan (marquee, 34s linear) serif kelimeler: Fırın · Pastane · Restoran · Kahveci · Market · Şarküteri (kesintisiz döngü için liste iki kez tekrarlanır, `translateX(-50%)`). Kenarlarda `mask-image` ile silinme.

### Ana sayfa — "Üç adım, birkaç dakika"
3 kolonlu grid. Her kolon: 460px yüksekliğinde krem kutu (`#efeade`, radius 16, 1px `#e0d9c9`) içinde **tam görünen** telefon ekran görüntüsü (`height:100%; width:auto`, radius 8, gölgeli), altında serif sıra numarası (`01/02/03`, `#15803d`) + başlık + açıklama.
1. **Yakınını gör** — harita ekranı
2. **Ayır ve öde** — ilan detayı ekranı
3. **Uğra, al** — "Teslim Alınacak" QR kodu ekranı

Hover: görsel `scale(1.04)`, 0.9s `cubic-bezier(.2,.7,.2,1)`.

### Ana sayfa — etki bölümü (koyu)
Sol: eyebrow + H2 "Sorun kıtlık değil, *zamanlama.*" + paragraf + kaynak dipnotu (TİSVA/TMO 2024–2025). Sağ: 4 satır, her biri `etiket ——— büyük serif sayı` + altında ince ilerleme çubuğu (`4px`, `#4ade80`).

Rakamlar viewport'a girince sayarak animasyonlu (1s, ease-out cubic):
| Etiket | Değer | Bar |
|---|---|---|
| Türkiye'de yılda israf edilen gıda | 23 mn ton | 100% |
| Kişi başına yıllık gıda atığı | 102 kg | 66% |
| Her gün çöpe atılan ekmek | 12 milyon | 48% |
| Kurtardığın her porsiyonda önlenen karbon | 2,5 kg CO₂ | 30% |

### Ana sayfa — uygulama bölümü
Sol: telefon ekranı üstten 420px görünüp alta doğru krem gradyanla siliniyor (`linear-gradient(to bottom, rgba(250,247,239,0), #faf7ef)`). Sağ: H2 + 4 satırlık çizgili liste (kalan süre / alerjen filtresi / kişisel etki / çok dillilik).

### Ana sayfa — bekleme listesi (`#waitlist`)
Krem bölüm. Sol metin, sağda e-posta input + "Katıl" butonu, altında iki rol pill'i ("Yemek almak istiyorum" / "İşletmem var" — seçili olan `#14251a` zemin), KVKK dipnotu. Geçerli e-posta girilince (`/.+@.+\..+/`) form yerine yeşil kenarlıklı teşekkür kartı gelir; metin seçilen role göre değişir.

### İşletmeler
Hero (metin + işletme fotoğrafı) → "Nasıl işler" 3 adım + örnek hesap kartı (18 adet/gün, 32 ₺, %70 → **≈ 12.100 ₺** aylık ek ciro; "temsili senaryo" dipnotu) → 3 özellik kartı: koyu yeşil özet bandı (`12 paket / bugün kurtarıldı · 384 ₺ ciro`), CSS ile çizilmiş saatlik talep grafiği (8 bar, en yüksek `#14532d`), koyu tipografik bant ("Tek okutma, sipariş kapanır") → koyu CTA bloğu (30 işletme pilot çağrısı).

### Fiyatlandırma
Ortalanmış başlık + 3 kart. Üçüncü kart (Pro) koyu zeminli, sol üstünde `#4ade80` "ÖNERİLEN" etiketi. Altta zincir/kurumsal için tek satırlık CTA şeridi.

### Hikâyemiz
Başlık + iki kolon metin → geniş fotoğraf → 3 değer kartı → "Nerede duruyoruz" 4 satırlık yol haritası (`TAMAMLANDI` yeşil / `ŞİMDİ` turuncu / `SONRAKİ` ve `SONRA` gri etiketler) → yatırım CTA satırı.

### SSS
840px kolon, 8 soruluk accordion. Satırlar 1px üst kenarlıkla ayrılır; sağda serif `+` / `−` işareti `#15803d`. Aynı anda tek soru açık; açık olana tekrar basılırsa hepsi kapanır. Açılan cevap `fade .25s`.

### İletişim
Sol: 3 e-posta kanalı (isletme@ / merhaba@ / basin@ freshlytoo.com) + basın kiti kartı. Sağ: beyaz kart içinde form (isim, e-posta, konu select — İşletme başvurusu / Yatırım-iş birliği / Basın / Diğer —, mesaj textarea, Gönder). Form şu an submit etmiyor; backend bağlanması gerekiyor.

## Etkileşim ve animasyon

- **Routing**: 6 sayfa client-side; sayfa değişince `window.scrollTo({top:0, behavior:'smooth'})`. Gerçek implementasyonda URL'ler ayrı route olmalı (`/`, `/isletmeler`, `/fiyatlandirma`, `/hikayemiz`, `/sss`, `/iletisim`).
- **Scroll ilerleme çubuğu**: header'ın alt kenarında 2px `#15803d`, genişlik = scroll yüzdesi, `transition: width .12s linear`.
- **Scroll reveal**: `[data-reveal]` elemanları `opacity:0; translateY(26–30px)` başlar; viewport'un %90'ına girince açılır. Geçiş `.7–.8s cubic-bezier(.2,.7,.2,1)`, kolonlar arası `.05s / .14s / .23s` gecikme. Production'da `IntersectionObserver` + `prefers-reduced-motion` kontrolü kullanın. Prototipte 2.2s'lik güvenlik zamanlayıcısı her şeyi açar — JS hata verirse içerik gizli kalmasın diye.
- **Sayaçlar**: `[data-count]` görünür olunca 1s ease-out cubic ile sayar, ondalık ayırıcı virgül.
- **Barlar**: `[data-bar]` genişliği 0 → hedef, `1.2s`, satır başına 120ms gecikme.
- **Marquee**: 34s linear sonsuz.
- **Hover**: butonlarda zemin `#14532d → #15803d` (koyu zeminde `#4ade80 → #86efac`), ikincil butonlarda kenarlık `#d6cdb9 → #14251a`, nav item'larda `#efeade` zemin, görsellerde `scale(1.04–1.07)`.
- **Hareket kapatma**: "sakin" modda tüm reveal'lar anında açık, marquee durur.

## State

| State | Tip | Not |
|---|---|---|
| `page` | `'home' \| 'resto' \| 'pricing' \| 'about' \| 'faq' \| 'contact'` | routing |
| `email` | string | bekleme listesi input |
| `role` | `'customer' \| 'business'` | bekleme listesi rol pill'i |
| `subscribed` | boolean | form → teşekkür kartı |
| `openFaq` | number | açık SSS indeksi, `-1` = hepsi kapalı |

Bekleme listesi ve iletişim formu için backend gerekiyor (e-posta toplama + KVKK onay kaydı). Şu an yalnızca istemci tarafı doğrulama var.

## Varlıklar

Hepsi bu pakette; prototipteki uzak URL'ler yerel dosyalara çevrildi (HTML dosyası çevrimdışı açılır).

- `assets/photos/photo-1..3.png` — **geçici** yemek fotoğrafları (AI ile üretildi). photo-1 hero (dikey), photo-2 mini ürün kartı + vitrin, photo-3 işletme hero. Ticari kullanım için lisanslı stok veya kendi çekimlerinizle değiştirin.
- `assets/icon.png` — uygulama ikonu / wordmark yanındaki marka işareti (mevcut Expo `assets/icon.png`)
- `assets/shots/map.png`, `detail.png`, `pickup-qr.png`, `home.png` — gerçek uygulama ekran görüntüleri (`docs/tanitim/img` içinden)
- **Yemek fotoğrafları geçicidir.** Tasarımda üç adet AI ile üretilmiş editoryal fotoğraf uzak URL'lerden (CloudFront) çekiliyor. Production'a geçerken **lisanslı stok fotoğraf veya kendi çekimlerinizle değiştirin** ve dosyaları repoya indirin. Fotoğraf alanları prototipte sürükle-bırak yer tutucudur (`<image-slot>`), gerçek kodda düz `<img>` olacak.

Fotoğraf yerleşimleri: hero (dikey, ~3:4), mini ürün kartı (kare kırpma), işletme hero (4:3), hikâye (16:9), manifesto/vitrin şeritleri.

## Dosyalar

- `CLAUDE_CODE_PROMPT.md` — Claude Code oturumuna yapıştırılacak görev tanımı **(buradan başla)**
- `FreshlyToo Site.dc.html` — tasarımın tamamı, tarayıcıda çift tıkla açılır
- `tokens.css` — renk / tipografi / geometri token'ları, doğrudan projeye alınabilir
- `assets/` — fotoğraflar, ikon, uygulama ekran görüntüleri
- `support.js`, `image-slot.js` — yalnızca prototipi çalıştıran runtime; **repoya taşınmaz**

## Notlar

- Site şu an tek dil (Türkçe). İngilizce sürüm gerekiyorsa uygulamanın mevcut `i18n` sözlükleriyle aynı anahtar yapısını kullanın.
- Tüm etiket/dipnot renkleri WCAG AA kontrast için seçildi (`#5b6b5f` krem üzerinde 5.28:1). Daha açık gri kullanmayın.
- Emoji ve ikon seti yok — tasarım bilinçli olarak tipografi ağırlıklı.
