/* Sitenin tüm kopyası. Türkçe kaynak dil, İngilizce çeviri aynı anahtar yapısını izler.
   Başlıklardaki serif italik vurgu {before, accent, after} olarak modellenir;
   Headline bileşeni parçaları boşlukla birleştirir. */

export const siteContent = {
  tr: {
    locale: 'tr',
    header: {
      home: 'Ana sayfa',
      cta: 'Beni haberdar et',
      nav: {
        home: 'Keşfet',
        businesses: 'İşletmeler',
        pricing: 'Fiyatlandırma',
        story: 'Hikâyemiz',
        faq: 'SSS',
        contact: 'İletişim',
      },
      languageLabel: 'EN',
      languageAriaLabel: 'Switch to English',
      navAriaLabel: 'Ana menü',
      menuOpen: 'Menü',
      menuClose: 'Kapat',
      skipToContent: 'İçeriğe geç',
    },
    footer: {
      tagline: 'Taze kalanı, hâlâ tazeyken buluşturuyoruz.',
      discover: 'Keşfet',
      corporate: 'Kurumsal',
      legal: 'Yasal',
      legalLinks: ['KVKK Aydınlatma', 'Kullanım Koşulları', 'Gizlilik Politikası'],
      copyright: '© 2026 FreshlyToo. Tüm hakları saklıdır.',
      location: 'İstanbul, Türkiye',
    },
    home: {
      meta: 'FreshlyToo — Taze yemek, yarı fiyatına, yakınında',
      hero: {
        eyebrow: 'İstanbul’da yakında',
        heading: { before: 'Taze yemek,', accent: 'yarı fiyatına,', after: 'yakınında.' },
        lede: 'Mahallendeki fırın, pastane ve restoranların gün sonunda kalan taze ürünlerini yarı fiyatına al. Sen kazan, lezzet çöpe gitmesin.',
        primaryCta: 'Beni haberdar et',
        secondaryCta: 'İşletme misin?',
        photoAlt: 'Fırın tezgâhında dizili taze ekmek ve hamur işleri, gün sonuna kalan ürünler',
        trust: [
          { value: '%50', label: '’ye kadar indirimli taze ürün' },
          { value: 'Yürüme', label: 'mesafesinde, bugün teslim' },
          { value: 'Sıfır', label: 'üyelik ücreti, sıfır israf' },
        ],
        card: {
          title: 'Sürpriz kutu',
          countdown: '0s 42d',
          price: '42 ₺',
          oldPrice: '95 ₺',
          alt: 'Sürpriz kutu içeriğinden bir kare: karışık tatlı ve hamur işi',
        },
      },
      heroManifesto: {
        eyebrow: 'FreshlyToo',
        heading: {
          before: 'Bugünün yemeği, yarının fiyatına değil —',
          accent: 'yarı fiyatına.',
        },
        body: 'Mahallendeki fırın, pastane ve restoranlar her akşam satılmayan taze ürünleri elden çıkarmak zorunda. FreshlyToo o ürünleri yarı fiyatına sana getiriyor.',
        photos: [
          'Fırın vitrininde dizili taze ekmekler',
          'Pastane tezgâhında kalan tatlı ve pastalar',
          'Gün sonunda servise hazır sıcak yemek tabağı',
          'Kahve ve yanında taze kruvasan',
        ],
      },
      marquee: {
        label: 'Nereden',
        items: ['Fırın', 'Pastane', 'Restoran', 'Kahveci', 'Market', 'Şarküteri'],
      },
      steps: {
        eyebrow: 'Nasıl çalışır',
        heading: 'Üç adım, birkaç dakika.',
        items: [
          {
            number: '01',
            title: 'Yakınını gör',
            description: 'Haritada yürüme mesafendeki taze fırsatlar; kalan süreye göre sıralı.',
            alt: 'FreshlyToo uygulamasının harita ekranı, yakındaki işletmeler işaretli',
          },
          {
            number: '02',
            title: 'Ayır ve öde',
            description:
              'Sürpriz kutu ya da tek tek ürün. Ödeme uygulamada, kuyrukta bekleme yok.',
            alt: 'FreshlyToo ilan detay ekranı, fiyat ve teslim saati görünüyor',
          },
          {
            number: '03',
            title: 'Uğra, al',
            description: 'Teslim saatinde kodunu göster, paketini al. Hepsi bu.',
            alt: 'FreshlyToo teslim alma ekranı, karekod ile sipariş doğrulama',
          },
        ],
      },
      impact: {
        eyebrow: 'Neden önemli',
        heading: { before: 'Sorun kıtlık değil,', accent: 'zamanlama.' },
        body: 'Türkiye’de her yıl yaklaşık 23 milyon ton gıda israf ediliyor — büyük kısmı yenmesinde hiçbir sorun olmayan ürünler. Aldığın her paket bu döngüden bir parça çıkarıyor.',
        source: 'Kaynak: TİSVA ve TMO verileri, 2024–2025.',
        rows: [
          { label: 'Türkiye’de yılda israf edilen gıda', value: 23, suffix: ' mn ton', bar: 100 },
          { label: 'Kişi başına yıllık gıda atığı', value: 102, suffix: ' kg', bar: 66 },
          { label: 'Her gün çöpe atılan ekmek', value: 12, suffix: ' milyon', bar: 48 },
          {
            label: 'Kurtardığın her porsiyonda önlenen karbon',
            value: 2.5,
            decimals: 1,
            suffix: ' kg CO₂',
            bar: 30,
          },
        ],
      },
      app: {
        eyebrow: 'Uygulama',
        heading: {
          before: 'Aramak yok.',
          accent: 'Açtığın an',
          after: 'bugünün fırsatları karşında.',
        },
        shotAlt: 'FreshlyToo uygulamasının ana ekranı, bugünün fırsatları listeleniyor',
        rows: [
          {
            title: 'Kalan süre canlı',
            description: '— teslim saati kapanınca ilan kendiliğinden düşer, boşa yolculuk yok.',
          },
          {
            title: 'Alerjen filtresi',
            description: '— tercihlerini bir kez tanımla, uyumsuz ilanlar hiç görünmesin.',
          },
          {
            title: 'Kendi etkin',
            description: '— kurtardığın kilogram ve önlediğin karbon profilinde birikir.',
          },
          {
            title: 'Türkçe, İngilizce ve dahası',
            description: '— şehirdeki herkes için, sağdan sola yazılan diller dahil.',
          },
        ],
      },
      waitlist: {
        eyebrow: 'Yakında yayında',
        heading: { before: 'Mahallene geldiğimizde', accent: 'ilk sen bil.' },
        body: 'E-postanı bırak. Açılışta sana haber veriyoruz — başka hiçbir şey için kullanmıyoruz.',
        emailLabel: 'E-posta adresin',
        emailPlaceholder: 'e-posta adresin',
        submit: 'Katıl',
        submitting: 'Gönderiliyor…',
        roleLegend: 'Hangisi sensin?',
        roleCustomer: 'Yemek almak istiyorum',
        roleBusiness: 'İşletmem var',
        kvkk: 'KVKK kapsamında dilediğin an listeden çıkabilirsin.',
        successTitle: 'Listeye eklendin.',
        successCustomer: 'Açılış gününde ilk haber sana gelecek.',
        successBusiness: 'İşletme ekibimiz pilot detayları için sana ulaşacak.',
        errorEmail: 'Geçerli bir e-posta adresi gir.',
        errorSubmit: 'Kayıt şu an tamamlanamadı. Birazdan tekrar dener misin?',
      },
    },
    businesses: {
      meta: 'İşletmeler — FreshlyToo',
      hero: {
        eyebrow: 'İşletmeler için',
        heading: { before: 'Gün sonunda kalanı', accent: 'ciroya', after: 'çevirin.' },
        body: 'Vitrinde kalan ürünü indirimli yayınlayın; yakındaki müşteri kapanmadan gelip alsın. Atık maliyeti düşer, yeni müşteri tanışır.',
        primaryCta: 'İşletme başvurusu',
        secondaryCta: 'Planları gör',
        photoAlt: 'Fırın mutfağında tezgâha dizilmiş taze ürünler ve çalışan bir usta',
      },
      how: {
        eyebrow: 'Nasıl işler',
        heading: 'Servis akarken bile birkaç dokunuş.',
        steps: [
          {
            number: '01',
            title: 'İlanı açın',
            description:
              'Ürün, adet, fiyat, teslim saati. Şablonu kaydedin, her akşam tek dokunuşla yayınlayın.',
          },
          {
            number: '02',
            title: 'Siparişi görün',
            description:
              'Rezervasyonlar canlı düşer, stok kendiliğinden azalır. Kasada karışıklık olmaz.',
          },
          {
            number: '03',
            title: 'Kodu okutun, teslim edin',
            description:
              'Müşteri kodunu gösterir, sipariş kapanır. Çift kullanım ve sahte teslim engellenir.',
          },
        ],
      },
      calculator: {
        eyebrow: 'Örnek hesap · fırın',
        rows: [
          { label: 'Günde çöpe giden ürün', value: '18 adet' },
          { label: 'Ortalama indirimli fiyat', value: '32 ₺' },
          { label: 'Satış varsayımı', value: '%70' },
        ],
        totalLabel: 'Aylık ek ciro',
        totalValue: '≈ 12.100 ₺',
        note: 'Temsili senaryo; gerçek sonuç ürün tipine ve konuma göre değişir.',
      },
      features: {
        summary: {
          value: '12 paket',
          caption: 'bugün kurtarıldı · 384 ₺ ciro',
          title: 'Günün özeti',
          description: 'Kaç paket satıldı, ne kadar ciro girdi, kaç porsiyon kurtarıldı.',
        },
        demand: {
          title: 'Talep içgörüsü',
          description: 'Hangi saatte ne satıyor — yarının üretimini buna göre planlayın.',
          chartAlt: 'Saatlere göre talep dağılımını gösteren temsili sütun grafiği',
        },
        scan: {
          quote: ['Tek okutma,', 'sipariş kapanır'],
          title: 'Teslim doğrulama',
          description: 'Tek okutmayla sipariş kapanır; kim ne aldı kayıt altında.',
        },
      },
      cta: {
        heading: 'İstanbul açılışına 30 işletme alıyoruz.',
        body: 'Açılış döneminde komisyon ve abonelik ücreti yok.',
        button: 'Başvuru formu',
      },
    },
    pricing: {
      meta: 'Fiyatlandırma — FreshlyToo',
      eyebrow: 'Fiyatlandırma',
      heading: { before: 'Yemek alan hiç ödemez.', accent: 'İşletme az öder.' },
      body: 'Uygulamayı indirmek ve sipariş vermek her zaman ücretsiz. İşletme tarafında gizli ücret yok.',
      recommended: 'Önerilen',
      plans: [
        {
          name: 'Yemek alan',
          price: 'Ücretsiz',
          description: 'Ödediğin tek şey yemeğin indirimli fiyatı.',
          features: [
            'Sınırsız keşif ve sipariş',
            'Sürpriz kutu ve tek ürün',
            'Kodla hızlı teslim',
            'Kişisel etki takibi',
          ],
          cta: 'Beni haberdar et',
          target: 'waitlist',
        },
        {
          name: 'İşletme · Başlangıç',
          price: '0 ₺',
          period: ' /ay',
          description: 'Ayda 30 ilana kadar. Denemek için.',
          features: [
            'Aylık 30 aktif ilan',
            'Sipariş yönetimi ve teslim doğrulama',
            'Günün özeti',
            'Tek şube',
          ],
          cta: 'Ücretsiz başla',
          target: 'contact',
        },
        {
          name: 'İşletme · Pro',
          price: '99 ₺',
          period: ' /ay',
          description: 'Sınırsız ilan ve tam analitik.',
          features: [
            'Sınırsız ilan',
            'Listede öne çıkma',
            'Saat dilimi ve talep içgörüleri',
            'Etki raporu',
            'Çoklu şube ve ekip erişimi',
          ],
          cta: 'Pro’ya geç',
          target: 'contact',
          featured: true,
        },
      ],
      strip: {
        text: 'Zincir işletme veya kurumsal iş birliği mi? Şube sayısına göre özel plan çıkarıyoruz.',
        cta: 'Bize yazın',
      },
    },
    story: {
      meta: 'Hikâyemiz — FreshlyToo',
      eyebrow: 'Hikâyemiz',
      heading: {
        before: 'Vitrindeki ekmek,',
        accent: 'saat dokuzda',
        after: 'kimsenin olmuyor.',
      },
      paragraphs: [
        'Her akşam binlerce işletme aynı sessiz kararı veriyor: satılmayan taze ürünü çöpe atmak. Kimse istemiyor ama alternatif yok — o ürünün alıcısı, ürünün var olduğunu bilmiyor.',
        'FreshlyToo bu boşluğu kapatıyor. İşletme kalanı yayınlıyor, yakındaki insan yarı fiyatına alıyor. Kimse fedakârlık yapmıyor: biri kaybını ciroya, diğeri bütçesini akşam yemeğine çeviriyor.',
      ],
      photoAlt: 'Mahalle fırınının vitrininde gün sonuna kalan ekmek ve hamur işleri',
      values: [
        {
          title: 'Ölçülebilir',
          description:
            'Her siparişte kurtarılan kilogram ve önlenen karbon hesaplanır. İyi niyet değil, veri.',
        },
        {
          title: 'Zahmetsiz',
          description:
            'Yoğun serviste kimse uzun form doldurmaz. İlan açmak yarım dakika sürüyor.',
        },
        {
          title: 'Herkes için',
          description:
            'Çok dilli arayüz ve zorunlu alerjen etiketi — şehirdeki herkes rahatça kullanabilsin.',
        },
      ],
      roadmapEyebrow: 'Nerede duruyoruz',
      roadmap: [
        {
          status: 'Tamamlandı',
          tone: 'done',
          title: 'Uygulama hazır',
          description:
            'Müşteri ve işletme tarafı, ödeme, teslim doğrulama ve çok dilli arayüz çalışır durumda.',
        },
        {
          status: 'Şimdi',
          tone: 'now',
          title: 'İstanbul açılışı',
          description:
            'İki ilçe, 30 işletme. Gerçek siparişlerle fiyat ve teslim saatlerini birlikte öğreniyoruz.',
        },
        {
          status: 'Sonraki',
          tone: 'next',
          title: 'Mağazalarda yayın',
          description:
            'App Store ve Google Play yayını; TÜBİTAK 1812 BiGG programı desteğiyle ekip büyümesi.',
        },
        {
          status: 'Sonra',
          tone: 'next',
          title: 'Üç büyükşehir',
          description: 'Zincir işletmelerle stok entegrasyonu ve Ankara ile İzmir’e yayılma.',
        },
      ],
      invest: {
        text: 'Yatırım ve iş birliği görüşmelerine açığız.',
        cta: 'Bize ulaşın',
      },
    },
    faq: {
      meta: 'Sıkça sorulan sorular — FreshlyToo',
      eyebrow: 'SSS',
      heading: 'Merak edilenler',
      items: [
        {
          question: 'Uygulamayı şimdi indirebilir miyim?',
          answer:
            'Henüz değil. İstanbul’da ilk mahallelerde açılışa hazırlanıyoruz. Bekleme listesine katılırsan yayına çıktığımız gün haber veriyoruz.',
        },
        {
          question: 'Sürpriz kutu ne demek?',
          answer:
            'İşletmenin o gün elinde kalan ürünlerden hazırladığı, içeriği tam olarak bilinmeyen bir paket. Ürün kategorisi ve alerjen bilgisi her zaman ilanda yazılı olur; içerik gün sonu stoğuna göre değişir.',
        },
        {
          question: 'Ürünler gerçekten taze mi?',
          answer:
            'Evet. Hepsi o gün üretilmiş ya da tüketim tarihi geçmemiş ürünler. Tarihi geçmiş ürünün yayınlanmasına izin verilmiyor.',
        },
        {
          question: 'Ödemeyi nasıl yapıyorum, iade var mı?',
          answer:
            'Ödeme uygulama içinde alınır. Teslim saatinde ürünü alamadıysan ya da işletme siparişi iptal ettiyse tutar otomatik iade edilir.',
        },
        {
          question: 'Teslimatı eve mi getiriyorsunuz?',
          answer:
            'Hayır, kendin gidip alıyorsun. Kurye maliyeti olmadığı için fiyat düşük kalıyor — zaten hedef yakınındaki işletmeler.',
        },
        {
          question: 'Alerjenler ve gıda güvenliği?',
          answer:
            'Her ilanda alerjen etiketi ve teslim saati zorunlu. Profilinde alerjen tercihini tanımlarsan uyumsuz ilanlar sana hiç gösterilmez.',
        },
        {
          question: 'Hangi şehirlerde olacak?',
          answer:
            'İlk aşama İstanbul, iki ilçe. Sonraki durakları buradaki talebe göre belirliyoruz.',
        },
        {
          question: 'Konum verim ne oluyor?',
          answer:
            'Konum yalnızca yakınındaki ilanları göstermek için o anda kullanılır; geçmiş konum kaydı tutulmaz. KVKK uyumlu çalışıyoruz.',
        },
      ],
      footerText: 'Cevabını bulamadın mı?',
      footerCta: 'Bize yaz',
    },
    contact: {
      meta: 'İletişim — FreshlyToo',
      eyebrow: 'İletişim',
      heading: 'Konuşalım.',
      channels: [
        { label: 'İşletme başvurusu', email: 'isletme@freshlytoo.com' },
        { label: 'Genel', email: 'merhaba@freshlytoo.com' },
        { label: 'Basın ve yatırım', email: 'basin@freshlytoo.com' },
      ],
      pressKit: {
        title: 'Basın kiti',
        description: 'Logo, marka renkleri, ekran görüntüleri ve kısa tanıtım metni.',
        link: 'Basın kitini indir →',
      },
      form: {
        title: 'Mesaj bırak',
        note: 'İşletme başvuruları iki iş günü içinde yanıtlanır.',
        nameLabel: 'İsim',
        namePlaceholder: 'Adınız',
        emailLabel: 'E-posta',
        emailPlaceholder: 'ornek@isletme.com',
        subjectLabel: 'Konu',
        subjects: ['İşletme başvurusu', 'Yatırım / iş birliği', 'Basın', 'Diğer'],
        messageLabel: 'Mesaj',
        messagePlaceholder: 'Kısaca anlatın',
        submit: 'Gönder',
        submitting: 'Gönderiliyor…',
        kvkk: 'Formu gönderdiğinizde KVKK kapsamında sizinle iletişime geçmemize izin vermiş olursunuz.',
        successTitle: 'Mesajın bize ulaştı.',
        successBody: 'İki iş günü içinde dönüş yapıyoruz.',
        errorRequired: 'Lütfen isim, e-posta ve mesaj alanlarını doldurun.',
        errorEmail: 'Geçerli bir e-posta adresi girin.',
        errorSubmit: 'Mesaj şu an gönderilemedi. Birazdan tekrar dener misiniz?',
      },
    },
  },

  en: {
    locale: 'en',
    header: {
      home: 'Home',
      cta: 'Notify me',
      nav: {
        home: 'Discover',
        businesses: 'Businesses',
        pricing: 'Pricing',
        story: 'Our story',
        faq: 'FAQ',
        contact: 'Contact',
      },
      languageLabel: 'TR',
      languageAriaLabel: 'Türkçeye geç',
      navAriaLabel: 'Main menu',
      menuOpen: 'Menu',
      menuClose: 'Close',
      skipToContent: 'Skip to content',
    },
    footer: {
      tagline: 'We bring what is left over to people while it is still fresh.',
      discover: 'Discover',
      corporate: 'Company',
      legal: 'Legal',
      legalLinks: ['KVKK Notice', 'Terms of Use', 'Privacy Policy'],
      copyright: '© 2026 FreshlyToo. All rights reserved.',
      location: 'Istanbul, Türkiye',
    },
    home: {
      meta: 'FreshlyToo — Fresh food, half price, close to you',
      hero: {
        eyebrow: 'Coming soon in Istanbul',
        heading: { before: 'Fresh food,', accent: 'at half price,', after: 'close to you.' },
        lede: 'Buy what your neighbourhood bakeries, patisseries and restaurants have left at the end of the day — at half price. You win, and good food stays out of the bin.',
        primaryCta: 'Notify me',
        secondaryCta: 'Run a business?',
        photoAlt: 'Fresh bread and pastries lined up on a bakery counter at the end of the day',
        trust: [
          { value: '50%', label: 'off the very same fresh food' },
          { value: 'Walking', label: 'distance, picked up today' },
          { value: 'Zero', label: 'membership fee, zero waste' },
        ],
        card: {
          title: 'Surprise box',
          countdown: '0h 42m',
          price: '₺42',
          oldPrice: '₺95',
          alt: 'A glimpse inside a surprise box: assorted pastries and desserts',
        },
      },
      heroManifesto: {
        eyebrow: 'FreshlyToo',
        heading: {
          before: 'Today’s food, not at tomorrow’s price —',
          accent: 'at half price.',
        },
        body: 'Every evening the bakeries, patisseries and restaurants in your neighbourhood have to get rid of the fresh food they did not sell. FreshlyToo brings it to you at half price.',
        photos: [
          'Fresh loaves lined up in a bakery window',
          'Cakes and pastries left on a patisserie counter',
          'A hot dish plated and ready to serve at the end of the day',
          'A coffee with a fresh croissant beside it',
        ],
      },
      marquee: {
        label: 'From where',
        items: ['Bakery', 'Patisserie', 'Restaurant', 'Café', 'Market', 'Deli'],
      },
      steps: {
        eyebrow: 'How it works',
        heading: 'Three steps, a few minutes.',
        items: [
          {
            number: '01',
            title: 'See what is near',
            description: 'Fresh offers within walking distance on the map, sorted by time left.',
            alt: 'FreshlyToo app map screen with nearby businesses pinned',
          },
          {
            number: '02',
            title: 'Reserve and pay',
            description:
              'A surprise box or single items. You pay in the app, so there is no queue.',
            alt: 'FreshlyToo listing detail screen showing price and pickup window',
          },
          {
            number: '03',
            title: 'Drop by, pick up',
            description:
              'Show your code during the pickup window and take your bag. That is it.',
            alt: 'FreshlyToo pickup screen confirming the order with a QR code',
          },
        ],
      },
      impact: {
        eyebrow: 'Why it matters',
        heading: { before: 'The problem is not scarcity, it is', accent: 'timing.' },
        body: 'Around 23 million tonnes of food are wasted in Türkiye every year — most of it perfectly good to eat. Every bag you pick up takes a piece out of that cycle.',
        source: 'Source: TİSVA and TMO data, 2024–2025.',
        rows: [
          { label: 'Food wasted in Türkiye per year', value: 23, suffix: 'M tonnes', bar: 100 },
          { label: 'Food waste per person per year', value: 102, suffix: ' kg', bar: 66 },
          { label: 'Loaves of bread binned every day', value: 12, suffix: ' million', bar: 48 },
          {
            label: 'Carbon avoided for every portion you rescue',
            value: 2.5,
            decimals: 1,
            suffix: ' kg CO₂',
            bar: 30,
          },
        ],
      },
      app: {
        eyebrow: 'The app',
        heading: {
          before: 'No searching.',
          accent: 'The moment you open it,',
          after: 'today’s offers are right there.',
        },
        shotAlt: 'FreshlyToo app home screen listing today’s offers',
        rows: [
          {
            title: 'Live countdown',
            description:
              '— a listing drops off by itself once the pickup window closes, so no wasted trips.',
          },
          {
            title: 'Allergen filter',
            description: '— set your preferences once and never see a listing that clashes.',
          },
          {
            title: 'Your own impact',
            description:
              '— the kilos you rescue and the carbon you avoid add up on your profile.',
          },
          {
            title: 'Turkish, English and more',
            description: '— for everyone in the city, right-to-left languages included.',
          },
        ],
      },
      waitlist: {
        eyebrow: 'Launching soon',
        heading: { before: 'Be the first to know', accent: 'when we reach your street.' },
        body: 'Leave your email. We will tell you when we launch — and we will not use it for anything else.',
        emailLabel: 'Your email address',
        emailPlaceholder: 'your email address',
        submit: 'Join',
        submitting: 'Sending…',
        roleLegend: 'Which one are you?',
        roleCustomer: 'I want to buy food',
        roleBusiness: 'I run a business',
        kvkk: 'Under KVKK you can leave the list whenever you like.',
        successTitle: 'You are on the list.',
        successCustomer: 'You will hear from us first on launch day.',
        successBusiness: 'Our business team will reach out with the pilot details.',
        errorEmail: 'Enter a valid email address.',
        errorSubmit: 'We could not save that just now. Care to try again in a moment?',
      },
    },
    businesses: {
      meta: 'For businesses — FreshlyToo',
      hero: {
        eyebrow: 'For businesses',
        heading: { before: 'Turn what is left at closing into', accent: 'revenue.', after: '' },
        body: 'Publish what is still on the shelf at a discount, and a customer nearby picks it up before you close. Waste costs go down, and a new customer meets you.',
        primaryCta: 'Apply as a business',
        secondaryCta: 'See the plans',
        photoAlt: 'Fresh products laid out on a bakery counter with a baker at work',
      },
      how: {
        eyebrow: 'How it works',
        heading: 'A few taps, even mid-service.',
        steps: [
          {
            number: '01',
            title: 'Open a listing',
            description:
              'Product, quantity, price, pickup window. Save it as a template and publish in one tap every evening.',
          },
          {
            number: '02',
            title: 'Watch the orders',
            description:
              'Reservations land live and stock counts down on its own. Nothing gets muddled at the till.',
          },
          {
            number: '03',
            title: 'Scan the code, hand it over',
            description:
              'The customer shows their code and the order closes. Double use and fake pickups are blocked.',
          },
        ],
      },
      calculator: {
        eyebrow: 'Worked example · bakery',
        rows: [
          { label: 'Items binned per day', value: '18 items' },
          { label: 'Average discounted price', value: '₺32' },
          { label: 'Assumed sell-through', value: '70%' },
        ],
        totalLabel: 'Extra revenue per month',
        totalValue: '≈ ₺12,100',
        note: 'An illustrative scenario; real results vary by product type and location.',
      },
      features: {
        summary: {
          value: '12 bags',
          caption: 'rescued today · ₺384 revenue',
          title: 'Today at a glance',
          description: 'How many bags sold, how much came in, how many portions were rescued.',
        },
        demand: {
          title: 'Demand insight',
          description: 'What sells at which hour — plan tomorrow’s production around it.',
          chartAlt: 'Illustrative bar chart showing demand distribution across the day',
        },
        scan: {
          quote: ['One scan and', 'the order closes'],
          title: 'Pickup verification',
          description: 'One scan closes the order, and who took what stays on record.',
        },
      },
      cta: {
        heading: 'We are taking 30 businesses into the Istanbul launch.',
        body: 'No commission and no subscription fee during the launch period.',
        button: 'Application form',
      },
    },
    pricing: {
      meta: 'Pricing — FreshlyToo',
      eyebrow: 'Pricing',
      heading: { before: 'Buyers never pay.', accent: 'Businesses pay little.' },
      body: 'Downloading the app and placing an order is always free. On the business side there are no hidden fees.',
      recommended: 'Recommended',
      plans: [
        {
          name: 'Buyers',
          price: 'Free',
          description: 'The only thing you pay for is the discounted food itself.',
          features: [
            'Unlimited browsing and orders',
            'Surprise boxes and single items',
            'Fast pickup with a code',
            'Personal impact tracking',
          ],
          cta: 'Notify me',
          target: 'waitlist',
        },
        {
          name: 'Business · Starter',
          price: '₺0',
          period: ' /mo',
          description: 'Up to 30 listings a month. For trying it out.',
          features: [
            '30 active listings a month',
            'Order management and pickup verification',
            'Today at a glance',
            'Single location',
          ],
          cta: 'Start for free',
          target: 'contact',
        },
        {
          name: 'Business · Pro',
          price: '₺99',
          period: ' /mo',
          description: 'Unlimited listings and full analytics.',
          features: [
            'Unlimited listings',
            'Priority placement in the list',
            'Time-slot and demand insights',
            'Impact report',
            'Multiple locations and team access',
          ],
          cta: 'Go Pro',
          target: 'contact',
          featured: true,
        },
      ],
      strip: {
        text: 'A chain or a corporate partnership? We put together a custom plan based on your number of locations.',
        cta: 'Write to us',
      },
    },
    story: {
      meta: 'Our story — FreshlyToo',
      eyebrow: 'Our story',
      heading: {
        before: 'The bread in the window belongs to nobody',
        accent: 'by nine o’clock.',
        after: '',
      },
      paragraphs: [
        'Every evening thousands of businesses make the same quiet decision: bin the fresh food that did not sell. Nobody wants to, but there is no alternative — the person who would buy it does not know it exists.',
        'FreshlyToo closes that gap. The business publishes what is left, someone nearby buys it at half price. Nobody sacrifices anything: one turns a loss into revenue, the other turns a budget into dinner.',
      ],
      photoAlt: 'Bread and pastries left in a neighbourhood bakery window at the end of the day',
      values: [
        {
          title: 'Measurable',
          description:
            'Every order calculates the kilos rescued and the carbon avoided. Data, not good intentions.',
        },
        {
          title: 'Effortless',
          description:
            'Nobody fills in a long form mid-service. Opening a listing takes half a minute.',
        },
        {
          title: 'For everyone',
          description:
            'A multilingual interface and mandatory allergen labels — so anyone in the city can use it comfortably.',
        },
      ],
      roadmapEyebrow: 'Where we stand',
      roadmap: [
        {
          status: 'Done',
          tone: 'done',
          title: 'The app is ready',
          description:
            'Customer and business sides, payments, pickup verification and the multilingual interface all work.',
        },
        {
          status: 'Now',
          tone: 'now',
          title: 'Istanbul launch',
          description:
            'Two districts, 30 businesses. We are learning pricing and pickup windows together, on real orders.',
        },
        {
          status: 'Next',
          tone: 'next',
          title: 'Live in the stores',
          description:
            'App Store and Google Play release; team growth supported by the TÜBİTAK 1812 BiGG programme.',
        },
        {
          status: 'Later',
          tone: 'next',
          title: 'Three major cities',
          description: 'Stock integration with chains, and expansion to Ankara and İzmir.',
        },
      ],
      invest: {
        text: 'We are open to investment and partnership conversations.',
        cta: 'Get in touch',
      },
    },
    faq: {
      meta: 'Frequently asked questions — FreshlyToo',
      eyebrow: 'FAQ',
      heading: 'Common questions',
      items: [
        {
          question: 'Can I download the app now?',
          answer:
            'Not yet. We are preparing to launch in the first neighbourhoods of Istanbul. Join the waitlist and we will let you know the day we go live.',
        },
        {
          question: 'What is a surprise box?',
          answer:
            'A bag put together from what a business has left that day, with contents you do not know exactly in advance. The product category and allergen information are always stated in the listing; the contents depend on what is left at closing.',
        },
        {
          question: 'Is the food really fresh?',
          answer:
            'Yes. Everything was made that day or is still within its use-by date. Publishing anything past its date is not allowed.',
        },
        {
          question: 'How do I pay, and can I get a refund?',
          answer:
            'Payment is taken in the app. If you could not collect during the pickup window, or the business cancelled the order, the amount is refunded automatically.',
        },
        {
          question: 'Do you deliver to my door?',
          answer:
            'No, you collect it yourself. There are no courier costs, which is what keeps the price low — and the businesses are nearby anyway.',
        },
        {
          question: 'What about allergens and food safety?',
          answer:
            'Allergen labels and a pickup window are mandatory on every listing. Set your allergen preferences on your profile and clashing listings are never shown to you.',
        },
        {
          question: 'Which cities will you be in?',
          answer:
            'The first stage is Istanbul, two districts. We decide the next stops based on demand here.',
        },
        {
          question: 'What happens to my location data?',
          answer:
            'Location is used only in the moment, to show listings near you; no location history is kept. We operate in line with KVKK.',
        },
      ],
      footerText: 'Did not find your answer?',
      footerCta: 'Write to us',
    },
    contact: {
      meta: 'Contact — FreshlyToo',
      eyebrow: 'Contact',
      heading: 'Let’s talk.',
      channels: [
        { label: 'Business applications', email: 'isletme@freshlytoo.com' },
        { label: 'General', email: 'merhaba@freshlytoo.com' },
        { label: 'Press and investment', email: 'basin@freshlytoo.com' },
      ],
      pressKit: {
        title: 'Press kit',
        description: 'Logo, brand colours, screenshots and a short description.',
        link: 'Download the press kit →',
      },
      form: {
        title: 'Leave a message',
        note: 'Business applications are answered within two working days.',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@business.com',
        subjectLabel: 'Subject',
        subjects: ['Business application', 'Investment / partnership', 'Press', 'Other'],
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us briefly',
        submit: 'Send',
        submitting: 'Sending…',
        kvkk: 'By sending this form you consent, under KVKK, to us contacting you about it.',
        successTitle: 'Your message reached us.',
        successBody: 'We reply within two working days.',
        errorRequired: 'Please fill in the name, email and message fields.',
        errorEmail: 'Enter a valid email address.',
        errorSubmit: 'We could not send that just now. Care to try again in a moment?',
      },
    },
  },
}

export const LANGUAGES = ['tr', 'en']
