import { Box, Typography, Container, Divider, List, ListItem, ListItemText } from '@mui/material'

const PrivacyPolicy = () => {
  return (
     <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Tietosuojaseloste
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={4}>
        Päivitetty: 10.5.2025
      </Typography>

      <Section title="1. Rekisterinpitäjä">
        <Typography>
          <strong>Metsätyö Petri Myller</strong><br />
          Osoite: Särkäntie 14, 80100 Joensuu<br />
          Y-tunnus: 2617685-6 <br />
          Sähköposti: petri@metsa-myller.fi<br />
          Puhelin: 0400 858 720
        </Typography>
      </Section>

      <Section title="2. Rekisterin nimi">
        <Typography>Verkkosivujen yhteydenottolomakkeen rekisteri</Typography>
      </Section>

      <Section title="3. Henkilötietojen käsittelyn tarkoitus">
        <Typography>
          Henkilötietoja käsitellään, jotta voimme käsitellä ja vastata
          yhteydenottopyyntöihin sekä tarjouspyyntöihin.
        </Typography>
      </Section>

      <Section title="4. Rekisterin tietosisältö">
        <List dense>
          {["Nimi", "Sähköpostiosoite", "Puhelinnumero", "Vapaa viestikenttä"].map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>
      </Section>

      <Section title="5. Tietojen säilytysaika">
        <Typography>
          Tietoja säilytetään vain niin kauan kuin on tarpeellista
          yhteydenoton käsittelyä varten. Tarpeettomat tiedot poistetaan
          säännöllisesti.
        </Typography>
      </Section>

      <Section title="6. Tietojen luovutus ja siirto">
        <Typography>
          Tietoja ei luovuteta ulkopuolisille tahoille ilman käyttäjän
          suostumusta. Tietoja ei siirretä EU:n tai ETA:n ulkopuolelle.
        </Typography>
      </Section>

      <Section title="7. Rekisteröidyn oikeudet">
        <List dense>
          {[
            "Tarkastaa itseäsi koskevat tiedot",
            "Pyytää virheellisten tietojen korjaamista",
            "Pyytää tietojen poistamista",
            "Vastustaa tietojesi käsittelyä",
          ].map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>
        <Typography mt={1}>
          Pyynnöt voi lähettää sähköpostitse osoitteeseen{" "}
          <strong>petri@metsa-myller.fi</strong>.
        </Typography>
      </Section>

      <Section title="8. Tietoturva">
        <Typography>
          Kaikki tiedot suojataan asianmukaisin teknisin ja organisatorisin keinoin.
        </Typography>
      </Section>
    </Container>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box mb={4}>
    <Typography variant="h6" gutterBottom fontWeight="medium">
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    {children}
  </Box>
);

export default PrivacyPolicy;