# GitHub Pages Deployment Guide
# LepikköRanch Website

Tämä ohje auttaa julkaisemaan LepikköRanch-verkkosivut GitHub Pagesin kautta.

## Vaihe 1: GitHub-repositorion luominen

1. Kirjaudu sisään [GitHub.com](https://github.com)
2. Klikkaa oikeasta yläkulmasta **+** → **New repository**
3. Anna repositorion nimi: `lepikkoranch` (tai vapaasti valitsemasi nimi)
4. Aseta **Public** (GitHub Pages vaatii ilmaisen version käyttäjillä public-repon)
5. **ÄLÄ** lisää README, .gitignore tai LICENSE (ne on jo projektissa)
6. Klikkaa **Create repository**

## Vaihe 2: Koodin pushaaminen GitHubiin

Avaa terminaali/komentokehote projektikansiossa ja aja seuraavat komennot:

```bash
# Lisää kaikki tiedostot
git add .

# Luo ensimmäinen commit
git commit -m "Initial commit: LepikköRanch static website"

# Linkitä GitHub-repositorioon (korvaa KÄYTTÄJÄNIMI)
git remote add origin https://github.com/KÄYTTÄJÄNIMI/lepikkoranch.git

# Vaihda päähaara main-nimiseksi
git branch -M main

# Pushaa koodi GitHubiin
git push -u origin main
```

**Huom!** Korvaa `KÄYTTÄJÄNIMI` omalla GitHub-käyttäjätunnuksellasi.

## Vaihe 3: GitHub Pages -aktivointi

1. Mene GitHub-repositorioosi
2. Klikkaa **Settings** (yläreunan välilehdet)
3. Valitse vasemmasta valikosta **Pages**
4. **Source**-kohdasta:
   - **Branch:** Valitse `main`
   - **Folder:** Valitse `/ (root)`
5. Klikkaa **Save**

GitHub alkaa rakentaa sivustoa. Tämä kestää 1-3 minuuttia.

## Vaihe 4: Sivuston testaus

1. GitHub Pagesin asetuksissa näkyy sininen laatikko:
   ```
   Your site is live at https://KÄYTTÄJÄNIMI.github.io/lepikkoranch/
   ```

2. Klikkaa linkkiä tai kopioi se selaimeesi
3. Sivuston pitäisi nyt olla näkyvissä!

## Vaihe 5: Custom Domain -konfiguraatio

### 5.1 Cloudflare (suositeltu) tai domain-palveluntarjoaja

1. Kirjaudu domain-palveluntarjoajaasi (esim. Cloudflare, Louhi, Namecheap)
2. Mene DNS-asetuksiin
3. Lisää seuraavat tietueet:

#### A-tietueet (root domain: lepikkoranch.fi):
```
Type: A
Name: @ (tai lepikkoranch.fi)
Value: 185.199.108.153
TTL: Auto tai 3600

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### CNAME-tietue (www-subdomain):
```
Type: CNAME
Name: www
Value: KÄYTTÄJÄNIMI.github.io
TTL: Auto tai 3600
```

4. Tallenna muutokset
5. Odota 5-30 minuuttia DNS-muutosten leviämiselle

### 5.2 GitHub Pages Custom Domain -asetus

1. Mene GitHub-repositorion **Settings** → **Pages**
2. **Custom domain** -kenttään kirjoita: `lepikkoranch.fi`
3. Klikkaa **Save**
4. Odota hetki, kunnes GitHub varmistaa domainin
5. Kun vihreä checkmark näkyy, valitse:
   - ☑️ **Enforce HTTPS** (pakollinen!)

### 5.3 Varmistus

Testaa seuraavat URLit selaimessa:
- `http://lepikkoranch.fi` → pitäisi ohjata HTTPS:ään
- `https://lepikkoranch.fi` → näyttää sivuston
- `https://www.lepikkoranch.fi` → näyttää sivuston

## Vaihe 6: Sisällön päivittäminen

Kun haluat päivittää sivuston sisältöä:

1. Muokkaa tiedostoja paikallisesti (index.html, CSS, JS)
2. Testaa muutokset avaamalla `index.html` selaimessa
3. Commitoi ja pushaa muutokset:

```bash
git add .
git commit -m "Päivitetty yhteystiedot / kuvat / tms."
git push origin main
```

4. Odota 1-2 minuuttia → muutokset näkyvät sivustolla

## Yleisiä ongelmia ja ratkaisuja

### Sivusto näyttää 404-virheen
- Varmista, että `index.html` on repositorion juuressa
- Tarkista GitHub Pages -asetuksista, että source on `main / (root)`
- Odota muutama minuutti deployment-prosessin valmistumista

### CSS-tyylit eivät lataudu
- Tarkista, että CSS-linkki on oikein: `<link rel="stylesheet" href="css/style.css">`
- Varmista, että `css/style.css` on oikeassa kansiossa
- Tyhjennä selaimen välimuisti (Ctrl + Shift + R tai Cmd + Shift + R)

### Custom domain ei toimi
- Varmista, että DNS-tietueet on lisätty oikein
- Odota DNS-leviämistä (jopa 24h, yleensä 30min)
- Tarkista DNS-asetukset: https://dnschecker.org/
- Varmista, että `CNAME`-tiedosto on repositoriossa

### Kuvat eivät näy
- Lisää kuvat `images/`-kansioon
- Varmista tiedostonimet vastaavat HTML:ssä olevia
- Commit ja push kuvat GitHubiin

### HTTPS-varoitus
- Odota hetki GitHub Pages -aktivoinnin jälkeen
- Varmista "Enforce HTTPS" on valittu
- Custom domainin kanssa voi kestää tunnin

## Vinkkejä

### Paikallinen kehitys Live Serverillä
1. Asenna VS Code -laajennus: **Live Server**
2. Avaa `index.html`
3. Klikkaa oikealla hiiren painikkeella → **Open with Live Server**
4. Sivu aukeaa osoitteeseen `http://localhost:5500`

### Google Analytics -lisäys (valinnainen)
Lisää `index.html`:n `<head>`-osioon ennen `</head>`-tagia:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Korvaa `G-XXXXXXXXXX` omalla Google Analytics tracking ID:lläsi.

### Suorituskyky-optimointi
- Pakkaa kuvat WebP-muotoon (<200KB)
- Käytä Lighthouse-audiittia (Chrome DevTools)
- Minimoi HTML/CSS/JS (tuotantovaiheessa)

## Tuki ja dokumentaatio

- GitHub Pages: https://docs.github.com/en/pages
- DNS-asetukset: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Cloudflare Pages: https://developers.cloudflare.com/pages/

---

**Onnea sivuston julkaisuun! 🤠🐴**

Jos törmäät ongelmiin, tarkista GitHub Pages build status:
`https://github.com/KÄYTTÄJÄNIMI/lepikkoranch/actions`
