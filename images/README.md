# Kuvat / Images

Lisää tähän kansioon seuraavat kuvat optimoituna verkkoon:

## Tarvittavat kuvat:

### 1. Hero-kuva (pakollinen)
- **Tiedostonimi:** `hero.jpg` tai `hero.webp`
- **Koko:** 1920 x 1080 px (16:9 kuvasuhde)
- **Max tiedostokoko:** 300KB
- **Sisältö:** Cowboy/ratsastaja hevosen selässä, auringonlasku/nousu, dramattinen tunnelma
- **Käyttö:** Etusivun hero-sektion taustakuva

### 2. Ratsastustunnit-kortit
- **aloittelijat.jpg** (800 x 600 px, max 150KB)
  - Aloittelija ratsastustunnilla, turvallinen tunnelma
  
- **kokeneet.jpg** (800 x 600 px, max 150KB)
  - Edistynyt ratsastus, liike tai tekniikka esillä
  
- **lajit.jpg** (800 x 600 px, max 150KB)
  - Lännenratsastuslaji esittelyssä (reining, trail, tms.)

### 3. Maastoretket
- **maastoretki.jpg** (1200 x 800 px, max 200KB)
  - Maastoratsastus luonnossa, ryhmä tai yksittäinen ratsastaja

## Kuvaformaatti-suositukset:

**WebP** (suositeltu):
- Paras pakkaus ja laatu
- Tuki moderneissa selaimissa
- Käytä `.webp` tiedostopäätettä

**JPEG** (vaihtoehto):
- Hyvä yhteensopivuus
- 85% laatuasetus
- Progressiivinen JPEG

## Kuvien optimointi:

### Online-työkalut:
- [TinyPNG](https://tinypng.com/) - Helppokäyttöinen pakkaus
- [Squoosh](https://squoosh.app/) - Google's kuva-optimointityökalu
- [Compress JPEG](https://compressjpeg.com/) - Nopea online-pakkaaja

### Desktop-työkalut:
- **Photoshop:** Export for Web (Save for Web)
- **GIMP:** Export As → Laaduksi 85%
- **ImageMagick:** `convert input.jpg -quality 85 -resize 1920x1080 output.jpg`

## Placeholder-kuvat (väliaikainen):

Sivut käyttävät automaattisesti Unsplash-placeholder-kuvia, jos omia kuvia ei ole lisätty.
Tämä toimii kehitysvaiheessa, mutta korvaa nämä omilla kuvilla ennen julkaisua!

## Tekijänoikeudet:

Varmista, että sinulla on oikeus käyttää kuvia kaupallisesti. Suositeltavat lähteet:

### Ilmaiset kuvapankit (commercial use):
- [Unsplash](https://unsplash.com/) - Vapaa käyttö
- [Pexels](https://pexels.com/) - Ilmainen, laaja valikoima
- [Pixabay](https://pixabay.com/) - Ilmainen
- [Freepik](https://freepik.com/) - Ilmainen + premium

### Maksulliset (laadukkaat):
- [Adobe Stock](https://stock.adobe.com/)
- [Shutterstock](https://shutterstock.com/)
- [iStock](https://istockphoto.com/)

## Kuvien lisääminen:

1. Nimeä kuvat oikein (ks. yllä)
2. Optimoi koko ja tiedostokoko
3. Kopioi tähän `/images/` kansioon
4. Testaa sivu selaimessa
5. Tarkista, että kuvat latautuvat oikein

## Huomioitavaa:

- **Alt-tekstit** on jo lisätty HTML:ään
- Kuvat ovat **lazy-loaded** suorituskyvyn parantamiseksi
- **Responsive**: Kuvat skaalautuvat automaattisesti eri näyttöko'oille
- **Fallback**: Jos kuva ei lataudu, näytetään Unsplash-placeholder

---

**Vinkki:** Ota valokuvia itse tallillasi! Aito sisältö on parasta markkinointia. 📸🤠
