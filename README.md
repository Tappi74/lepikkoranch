# LepikköRanch - Lännenratsastustila

Lännenratsastuksen oppimista ja maastoretkeä tarjoavan ratsastustilan verkkosivut.

## Teknologiat

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Paikallinen kehitys

Avaa `index.html` selaimessa tai käytä live-serveriä:

```bash
# Esimerkiksi VS Code Live Server -laajennuksella
# tai Python SimpleHTTPServer
python -m http.server 8000
```

## GitHub Pages -käyttöönotto

1. Luo uusi GitHub-repositorio (public)
2. Pushaa koodi GitHubiin:
```bash
git init
git add .
git commit -m "Initial commit: LepikköRanch website"
git branch -M main
git remote add origin https://github.com/KAYTTAJANIMI/lepikkoranch.git
git push -u origin main
```

3. Aktivoi GitHub Pages:
   - Mene repositorion **Settings** → **Pages**
   - **Source**: Deploy from a branch
   - **Branch**: main / (root)
   - Tallenna

4. Sivu on käytettävissä osoitteessa: `https://KAYTTAJANIMI.github.io/lepikkoranch`

## Custom Domain -konfiguraatio

Kun domain lepikkoranch.fi on rekisteröity:

1. Lisää DNS-palveluntarjoajasi hallintapaneeliin seuraavat tietueet:

**A-tietueet (root domain):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME-tietue (www-subdomain):**
```
www.lepikkoranch.fi → KAYTTAJANIMI.github.io
```

2. Odota DNS-muutosten leviämistä (5-30 min)
3. GitHub Pages -asetuksissa varmista, että custom domain on `lepikkoranch.fi`
4. Aktivoi **Enforce HTTPS**

## Sisällön päivittäminen

Muokkaa [index.html](index.html) -tiedostoa:
- **Yhteystiedot**: Päivitä puhelinnumero, sähköpostiosoite ja osoite
- **Aukioloajat**: Muokkaa yhteystiedot-sektiossa
- **Hinnat**: Lisää hintatiedot kunkin kortin alle
- **Google Maps**: Korvaa placeholder-koordinaatit todellisella sijainnilla

## Kuvien lisääminen

Lisää kuvat `images/`-kansioon:
- `hero.jpg` tai `hero.webp` - Hero-sektion taustakuva (1920x1080px suositus)
- `aloittelijat.jpg` - Aloittelijoiden tunnit
- `kokeneet.jpg` - Kokeneiden tunnit
- `lajit.jpg` - Lännenratsastuslajit
- `maastoretki.jpg` - Maastoretket

Optimoi kuvat ennen lisäämistä (<200KB per kuva WebP-muodossa).

## Lisenssi

© 2026 LepikköRanch. All rights reserved.
