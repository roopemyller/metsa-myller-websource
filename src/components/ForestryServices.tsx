import { Box, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

const ForestryServices = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Metsätyö Petri Myller tarjoaa seuraavia palveluita
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Pihapuiden kaadot
        </Typography>
        <List>
          <ListItem><ListItemText primary="Maastakaadot tarkasti ja ammattitaidolla" /></ListItem>
          <ListItem><ListItemText primary="Tarvittaessa puut karsitaan ja katkotaan asiakkaan tarpeiden mukaisesti" /></ListItem>
          <ListItem><ListItemText primary="Tarvittaessa kaadetut puut tehdään polttopuiksi" /></ListItem>
          <ListItem><ListItemText primary="Puujätteen poiskuljetus järjestetään" /></ListItem>
        </List>
      </Paper>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Kaatokiipeily
        </Typography>
        <List>
          <ListItem><ListItemText primary="Jos puu ei mahdu kaatumaan kokonaisena, karsitaan se pystyyn ja katkotaan kiipeilytekniikalla latvasta alkaen" /></ListItem>
          <ListItem><ListItemText primary="Oksat, latvus ja runko otetaan alas tarvittaessa köysien avulla turvallisesti" /></ListItem>
        </List>
      </Paper>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Kantojen jyrsintä
        </Typography>
        <ListItem><ListItemText primary="Kannot jyrsitään asiakkaan haluamaan syvyyteen ammattikäyttöön tarkoitetulla Vermeer SC252 kantojyrsimellä." /></ListItem>
      </Paper>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Muut metsätyöt
        </Typography>
        <List>
          <ListItem><ListItemText primary="Pienimuotoiset taimikonhoitotyöt sekä erikoiskohteiden puunkaadot metsänomistajan toiveiden mukaisesti kohteilla, missä ei voida tai haluta käyttää metsäkoneita" /></ListItem>
          <ListItem><ListItemText primary="Leimikon teko ja metsäsuunnitelman päivitys" /></ListItem>
          <ListItem><ListItemText primary="Metsätilan hoito avaimet käteen -periaatteella asiakkaalle, joka haluaa kokonaisvaltaista palvelua metsäomaisuutensa hoitoon" /></ListItem>
        </List>
      </Paper>
      
      <Typography variant="body1" paragraph>
        Yrityksellä on tarvittavat vakuutukset mahdollisten vahinkojen varalta.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Muista myös, että pihapuiden kaato ja polttopuiden teko on kotitalousvähennyskelpoista palvelun ostoa. Kotitalousvähennyksestä saat lisätietoa <a href="https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/mista-toista-vahennyksen-saa/" target="_blank" rel="noopener noreferrer">Verohallinnon sivuilta</a>.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Ota yhteyttä ja pyydä tarjous! Arviointikäynti veloituksetta!
      </Typography>
    </Box>
  );
};

export default ForestryServices;
