# Nokkakivi

my very first self designed and developed website !

site uses html, css and javascript

muistilista:

muista vaihtaa kausikortin hinta oikeaksi!

# Nettisivujen ohjeet!

# 1. Evästeiden käyttö

index.js tiedosto javascript

valmiina on google analytics ja youtube evästeet, mutta jos lisäät sivuille jotain muita esim 3 osapuolen liitteitä jotka käyttävät evästeitä on sinun vietävä "scripti" "cookie-concent" bannerin läpi

![cookie-banneri](/src/img/cookie-ohje.PNG)

# 2. Liikkuvan tekstin muutos

onnistuu index.html tiedoston alkupäästä heti youtube videon jälkeen

<!--  <div class="marquee"><div>MUOKKAA TÄTÄ KOHTAA INDEX.HTML TIEDOSTOSTA</div>

</div> -->

# 3. Kalenteri! (päivitettävä joka kevät)

tämä on sivun toiminnallisesti isoin komponentti joten ole tarkkana muokkauksissa!
Tässä joudumme avaamaan index.js tiedoston eli javascriptin joka vastaa sivujen toiminnallisuudesta

## a) aseta aukiolopäivät

tähän päivitetään puiston aukiolopäivät "7.6.2023", "8.6.2023" tässä muodossa oltava tarkalleen päivä.kuukausi.vuosi ja erotellaan päivät , pilkulla

![kalenteri openDays](/src/img/kalenteri-ohje1.PNG)

## b) avoinna tekstit huom. tässä parametreinä on että puisto on joko kiinni, aukiolo ennen juhannusta, aukiolo juhannuksen jälkeen

en osaa tehdä helppokäyttöisempää tästä. Ensiksi säädät kesäkuun jonka jälkeen päivät juhannukseen asti 2023 vuonna siis 22päivä on juhannus joten asetamme pienempi kuin < 23 &&(ja merkki) koska kalenteri näyttää myös 5 seuraavan kuun päivää on myös asetettava suurempi kuin > 5 (eli 5päivää heinäkuusta tätä osaa ei tarvitse säätää ellei puisto aukea 2024+ ennen kesäkuun 5 päivää)

![kalenterin ohje](/src/img/kalenteri-ohje2.PNG)

jos haluat vaihtaa ponnahdusikkunoiden tekstiä se onnistuu clickedDay.textContent = "Avoinna klo 11-17! Tervetuloa"; "" sisällä olevan tekstin muokkauksella

# 4. uuden laitteen lisääminen on helppoa se onnistuu tiedostosta laitteet.html

käytä alla olevaa mallia esim
data-img = laita tähän popup ikkunaan tuleva kuva (~900px leveä)

img src = pienempi kuva joka näkyy "kortissa" (400-500px leveä riittää)

p data-attr="alone" = pituusraja yksin

p data-attr="parent" = pituusraja vanhemman kanssa jos on pieni laite laita max140cm tai --- esim mutta elä yritä poistaa tai jättää tyhjäksi

p class="card\_\_description" = lyhyt mainos lausahdus laitteesta

p class="info" = pop up ikkunassa näkyvä tarkempi seloste laitteesta

 <!-- <div
            class="card stacked"
            data-img="../src/img/laitteet/scrambler-large.jpg"
          >
            <img
              src="../src/img/laitteet/scrambler.JPG"
              alt="scrambler"
              class="card__img"
            />
            <div class="card__content">
              <h4 class="card__title">Scrambler</h4>
              <div>
                <svg class="height-limit">
                  <use xlink:href="../src/img/symbol-defs.svg#icon-child"></use>
                </svg>
                <p class="card__pituusraja" data-attr="alone">120cm</p>
              </div>
              <p class="card__description">
                Scrambler on nokkakiven vauhdikkain pyörittäjä!Tämä ei jätä
                kylmäksi!
              </p>
              <div>
                <svg class="height-limit">
                  <use
                    xlink:href="../src/img/symbol-defs.svg#icon-escalator_warning"
                  ></use>
                </svg>

                <p class="card__pituusraja" data-attr="parent">100cm</p>
              </div>
              <p class="info">
                Scrambler on puiston vauhdikkain pyörityslaite. Siinä 12 vaunua
                pyörii ja liikkuu siksakkia vain hieman maanpinnan yläpuolella.
                Yhteen vaunuun mahtuu kerrallaan 3 ihmistä, eli yhteen ajoon
                mahtuu peräti 36 matkustajaa kerrallaan
              </p>
            </div>
          </div> -->

![laitteen lisäys](/src/img/laittteen-lisays.PNG)
