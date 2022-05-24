import { Avatar, Container, Grid, Typography } from "@mui/material";
import Socials from "../../components/commons/Socials";
import img from "./aboutme.jpg";

const About = () => {
  return (
    <>
      <Container
        sx={{ height: "90vh", display: "flex", alignContent: "center" }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={6} container justifyContent="center">
            <Avatar
              src={img}
              alt="About me profile"
              sx={{ width: 256, height: 256 }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" component="h1">
              Carron Mauricio David
            </Typography>
            <Typography variant="h5" component="h2" mb={4}>
              Front-End React Developer
            </Typography>
            <Typography variant="subtitle2" mb={1}>
              📸️ Photographer <em>turned</em> 👨‍💻️ Developer
            </Typography>
            <Typography lineHeight={1.5} mb={4}>
              As a photographer & videographer I work with brands to produce
              digital content for their marketing strategies. In this rapid
              evolving technology world, I felt that I could bring more value to
              the entrepreneurs, so I wondered. What if all the experience I'd
              gained working as a creative could be synthesized into an exciting
              career in technology?. I was intrigued by the possibilities for a
              creator who knew how to code.
            </Typography>
            <Socials />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
