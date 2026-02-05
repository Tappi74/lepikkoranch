# Ylläpito-ohje / Maintenance Guide
# LepikköRanch Website

Tämä ohje auttaa sinua tekemään yleisimpiä päivityksiä sivustolle.

## 📋 Sisällysluettelo

1. [Yhteystietojen päivittäminen](#yhteystietojen-päivittäminen)
2. [Kuvien lisääminen ja vaihtaminen](#kuvien-lisääminen)
3. [Tekstisisällön muokkaus](#tekstisisällön-muokkaus)
4. [Värien ja tyylien muuttaminen](#värien-muuttaminen)
5. [Uuden osion lisääminen](#uuden-osion-lisääminen)
6. [Google Maps -koordinaattien päivitys](#google-maps-päivitys)
7. [Social Media -linkkien päivitys](#social-media-linkit)
8. [SEO-optimointi](#seo-optimointi)

---

## Yhteystietojen päivittäminen

### Muokattava tiedosto: `index.html`

Etsi rivi noin **249-295** (yhteystiedot-sektio):

```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-phone"></i>
    </div>
    <div>
        <h3>Puhelin</h3>
        <p><a href="tel:+358401234567">+358 40 123 4567</a></p>
    </div>
</div>
```

**Päivitä:**
- Puhelinnumero: Muuta `tel:+358401234567` ja näkyvä numero
- Sähköposti: Muuta `mailto:info@lepikkoranch.fi` ja näkyvä osoite
- Osoite: Muuta katu-osoite ja postinumero
- Aukioloajat: Muuta aukiolotunnit sopiviksi

**💡 Vinkki:** Älä unohda päivittää myös footer-osiossa olevia yhteystietoja (rivi ~340).

---

## Kuvien lisääminen

### 1. Valmistele kuvat

**Vaatimukset:**
- Hero-kuva: 1920x1080px, max 300KB
- Kortti-kuvat: 800x600px, max 150KB
- WebP tai JPEG format

**Pakkaaminen:**
1. Käytä [TinyPNG](https://tinypng.com) tai [Squoosh](https://squoosh.app)
2. Nimeä kuvat oikein:
   - `hero.jpg` tai `hero.webp`
   - `aloittelijat.jpg`
   - `kokeneet.jpg`
   - `lajit.jpg`
   - `maastoretki.jpg`

### 2. Lisää images-kansioon

Kopioi kuvat `images/`-kansioon projektin juuressa.

### 3. Päivitä Git

```bash
git add images/
git commit -m "Lisätty kuvat sivustolle"
git push origin main
```

**Huom!** Jos kuvien nimet vastaavat yllä olevia, ne latautuvat automaattisesti. 
Jos käytät muita nimiä, päivitä `src`-attribuutit `index.html`:ssä.

---

## Tekstisisällön muokkaus

### Hero-osio (etusivu)

**Tiedosto:** `index.html`, rivit ~46-61

```html
<h1 class="hero-title">Tervetuloa LepikköRanchille</h1>
<p class="hero-subtitle">Lännenratsastusta ja maastoretkeä luonnon rauhassa</p>
<p class="hero-description">Koe aito cowboy-tunnelma...</p>
```

Muokkaa tekstit haluamaksesi.

### Ratsastustunnit-kortit

**Tiedosto:** `index.html`, rivit ~75-170

Etsi kortin sisältö:

```html
<h3 class="card-title">Aloittelijat</h3>
<p class="card-description">
    Tutustumme hevoseen ja lännenratsastuksen...
</p>
<ul class="card-features">
    <li><i class="fas fa-check"></i> Perustunteet ja istunta</li>
    ...
</ul>
```

Muuta otsikko, kuvaus ja ominaisuusluettelo.

### Hintojen lisääminen

Lisää hinnat kortteihin:

```html
<div class="card-content">
    <h3 class="card-title">Aloittelijat</h3>
    <p class="card-price" style="font-size: 1.5rem; color: var(--rust-orange); font-weight: bold; margin-bottom: 1rem;">
        45€ / tunti
    </p>
    <p class="card-description">...</p>
</div>
```

---

## Värien muuttaminen

### Tiedosto: `css/style.css`

Värit määritellään CSS-muuttujina riviltä **7 alkaen**:

```css
:root {
    --primary-brown: #5D4037;
    --secondary-brown: #8D6E63;
    --rust-orange: #D2691E;
    --golden-wheat: #DAA520;
    /* ... */
}
```

**Muokkaus:**
1. Valitse uudet värikoodit (esim. [Adobe Color](https://color.adobe.com))
2. Korvaa hex-koodit
3. Tallenna ja testaa

**Esikatseluvinkki:** Avaa DevTools (F12) → Elements → Muokkaa `:root` -arvoja reaaliajassa ennen tallentamista.

---

## Uuden osion lisääminen

### Esimerkki: "Hevoset"-osio

1. **Lisää HTML** (`index.html` ennen yhteystietoja):

```html
<section id="hevoset" class="section hevoset">
    <div class="container">
        <h2 class="section-title">Meidän Hevoset</h2>
        <p class="section-subtitle">Tutustu tiimiin</p>
        
        <div class="cards-grid">
            <article class="card fade-in">
                <div class="card-image">
                    <img src="images/hevonen1.jpg" alt="Hevosen nimi" loading="lazy">
                </div>
                <div class="card-content">
                    <h3 class="card-title">Hevosen nimi</h3>
                    <p class="card-description">Kuvaus hevosesta...</p>
                </div>
            </article>
            <!-- Lisää kortit tarpeen mukaan -->
        </div>
    </div>
</section>
```

2. **Lisää navigaatio** (rivi ~37):

```html
<li><a href="#hevoset" class="nav-link">Hevoset</a></li>
```

3. **Lisää tyylit** (`css/style.css`):

```css
.hevoset {
    background: var(--light-cream);
}
```

4. **Päivitä sitemap** (`sitemap.xml`):

```xml
<url>
    <loc>https://lepikkoranch.fi/#hevoset</loc>
    <lastmod>2026-02-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
</url>
```

---

## Google Maps -päivitys

### Hanki oikeat koordinaatit:

1. Avaa [Google Maps](https://maps.google.com)
2. Etsi tai klikkaa sijaintisi
3. Klikkaa **Share** → **Embed a map**
4. Kopioi `<iframe>`-koodi

### Päivitä index.html (rivi ~310):

Korvaa nykyinen `<iframe src="...">` omallasi.

**TAI** käytä koordinaatteja:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...SINUN_EMBED_KOODISI"
    ...
</iframe>
```

---

## Social Media -linkit

### Tiedosto: `index.html`, rivi ~333

```html
<a href="https://facebook.com/lepikkoranch" target="_blank">
<a href="https://instagram.com/lepikkoranch" target="_blank">
<a href="https://tiktok.com/@lepikkoranch" target="_blank">
```

Korvaa:
- `facebook.com/lepikkoranch` → oma Facebook-sivusi
- `instagram.com/lepikkoranch` → oma Instagram-tilisi
- `tiktok.com/@lepikkoranch` → oma TikTok-tilisi

**Poista käyttämättömät:**
Jos et käytä TikTokia, poista koko `<a>`-elementti.

**Lisää uusia:**
Esim. YouTube:

```html
<a href="https://youtube.com/@lepikkoranch" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <i class="fab fa-youtube"></i>
</a>
```

---

## SEO-optimointi

### Meta-tagit (index.html, rivit ~5-11)

```html
<meta name="description" content="Päivitä lyhyt (150-160 merkkiä) kuvaus">
<meta name="keywords" content="lännenratsastus, Helsinki, ratsastustunnit, ...">
```

### Sitemap-päivitys

**Aina kun lisäät sisältöä**, päivitä `sitemap.xml`:

```xml
<lastmod>2026-02-XX</lastmod> <!-- Nykyinen päivämäärä -->
```

### Robots.txt

Tämä tiedosto on jo kunnossa, ei yleensä tarvitse muokata.

---

## Yleisiä vinkkejä

### Testaa aina paikallisesti ennen pushaamista

1. Avaa `index.html` selaimessa
2. Tarkista mobiiliversio (DevTools: Toggle device toolbar - Ctrl+Shift+M)
3. Testaa kaikki linkit
4. Tarkista kuvien latautuminen

### Käytä versionhallintaa järkevästi

```bash
# Tee muutoksia...
git add .
git commit -m "Kuvaava viesti: mitä muutit"
git push origin main
```

**Hyviä commit-viestejä:**
- ✅ "Päivitetty yhteystiedot ja aukioloajat"
- ✅ "Lisätty hevoset-osio ja kolme hevoskuvaa"
- ✅ "Korjattu Google Maps -sijainti"
- ❌ "päivitys"
- ❌ "fix"

### Varmuuskopioi säännöllisesti

Käytä Gitiä! Jos teet vahingossa virheitä:

```bash
# Palauta viimeisin versio
git checkout -- index.html

# Palauta koko projekti viimeiseen committiin
git reset --hard HEAD
```

### Suorituskyky

Tarkista sivuston nopeus:
1. Avaa Chrome DevTools (F12)
2. **Lighthouse** -välilehti
3. Klikkaa **Generate report**
4. Tavoite: >90 pistettä kaikissa kategorioissa

---

## Tuki

Jos törmäät ongelmiin:

1. Tarkista selaimesi konsoli virheistä (F12 → Console)
2. Validoi HTML: https://validator.w3.org/
3. Validoi CSS: https://jigsaw.w3.org/css-validator/

---

**Onnea sivuston ylläpitoon! 🐴**
