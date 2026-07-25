# Claude Code'a verilecek görev (kopyala–yapıştır)

> Bu dosyanın altındaki bloğu Claude Code oturumuna olduğu gibi yapıştır.
> Öncesinde bu klasörü (`design_handoff_freshlytoo_site/`) repo köküne kopyala,
> ya da klasör yolunu prompt içinde güncelle.

---

FreshlyToo için pazarlama web sitesini kuracaksın. Tasarım referansı repo içindeki
`design_handoff_freshlytoo_site/` klasöründe:

- `README.md` — tam spec: her bölüm, ölçü, renk, kopya, animasyon, state. **Önce bunu oku.**
- `FreshlyToo Site.dc.html` — tasarımın çalışan HTML prototipi. Tarayıcıda aç, davranışı gör.
- `tokens.css` — renk/tipografi/geometri token'ları. Hedef projede bunu kullan, hex uydurma.
- `assets/` — uygulama ikonu, gerçek uygulama ekran görüntüleri (`shots/`), geçici yemek fotoğrafları (`photos/`).

## Kurallar

1. **HTML'i kopyalama.** `.dc.html` bir prototip; içindeki `support.js`, `image-slot.js`,
   `<x-dc>`, `<sc-for>`, `<sc-if>`, `data-props` tamamen prototip runtime'ıdır — repoya girmez.
   Tasarımı hedef ortamın kendi bileşen modeliyle **yeniden yaz**.
2. **Hedef ortam:** bu repo (`food-rescue`) React Native + Expo SDK 54 mobil uygulamasıdır.
   Pazarlama sitesi RN ekranı **değil**; ayrı bir web uygulaması olarak kur:
   `web/` klasöründe Next.js (App Router) + TypeScript. Mobil uygulamanın `src/` ağacına dokunma.
   Repo'da zaten bir web kurulumu varsa onu kullan ve onun konvansiyonlarına uy.
3. **Fidelity: high.** Renkler, tipografi, boşluk, hover ve animasyon süreleri nihai. Birebir kur.
4. **Rotalar** (README'deki `page` state'i yerine gerçek route):
   `/` · `/isletmeler` · `/fiyatlandirma` · `/hikayemiz` · `/sss` · `/iletisim`
5. **Hero varyantı:** prototipte 3 hero düzeni var (`editoryal` / `manifesto` / `vitrin`).
   Sadece **editoryal**'i kur; diğer ikisini yazma (spec'te referans olarak duruyor).
6. **Fotoğraflar geçici.** `assets/photos/*` AI ile üretilmiş yer tutucudur; ticari kullanım için
   lisanslı stok veya kendi çekimlerinizle değiştirilecek. Kodda `next/image` ile, `alt` metinleri
   Türkçe ve açıklayıcı olacak şekilde bağla. `assets/shots/*` gerçek uygulama görüntüleri — kalsın.
7. **Erişilebilirlik:** `prefers-reduced-motion` altında tüm reveal/sayaç/marquee animasyonlarını
   kapat (içerik anında görünür olsun). Kontrast için README'deki gri tonlarından açığa gitme.
   Form alanlarında gerçek `<label>`, accordion'da `aria-expanded` + `<button>`.
8. **Performans:** scroll reveal ve sayaçlar `IntersectionObserver` ile, tek observer üstünden.
   Fontlar `display=swap`. Sayfa başına gereksiz client component açmayın — sadece hero mini kart,
   marquee, reveal/sayaç, SSS accordion, bekleme listesi ve iletişim formu interaktif.

## Sıra

1. `web/` iskeleti + `tokens.css` + fontlar + header/footer + scroll ilerleme çubuğu.
2. Ana sayfa: hero (editoryal) → kategori marquee → "Üç adım" → koyu etki bölümü (sayaç + barlar)
   → uygulama bölümü → bekleme listesi.
3. `/isletmeler`, `/fiyatlandirma`, `/hikayemiz`, `/sss`, `/iletisim`.
4. Formlar: şu an backend yok. Bekleme listesi ve iletişim formunu tek bir sunucu action'ı arkasına al
   (`app/actions.ts`), Supabase'te `waitlist` ve `contact_messages` tabloları öner (migration yaz,
   RLS: yalnızca insert), KVKK onayını kayıt anında `consented_at` olarak sakla.
5. Bitirince: `README.md`'deki her bölümü prototiple yan yana karşılaştır ve sapmaları listele.

## Yapma

- Yeni renk, font, radius, gölge uydurmak (hepsi `tokens.css`'te).
- Emoji veya ikon seti eklemek — tasarım bilinçli olarak tipografi ağırlıklı.
- Mobil uygulamanın `src/`, `ios/`, `supabase/functions` ağacını değiştirmek.
- Prototipten `support.js` / `image-slot.js` / `<image-slot>` taşımak.
