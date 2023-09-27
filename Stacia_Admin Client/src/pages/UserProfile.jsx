import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import DefaultImage from "../assets/DefaultImage.png";
import Typography from "@mui/material/Typography";
import backGroungImage from "../assets/profileBackGround.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import socialMediaIcons from "../assets/socialMediaIcons.svg";
export default function RecipeReviewCard() {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter",
      fontSize: 10,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <img src={backGroungImage} alt="" />
      </div>
      <div className="items-end pl-20 absolute top-24">
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            height="194"
            image={DefaultImage}
            alt="Paella dish"
          />

          <CardContent>
            <p className="font-inter text-sm font-bold">ABOUT</p>
            <Typography variant="body2">
              I am a passionate full-stack developer dedicated to crafting
              seamless and innovative web applications. With a deep
              understanding of both front-end and back-end technologies, I
              thrive on turning complex ideas into elegant, user-friendly
              solutions. My expertise spans across languages like JavaScript,
              Python allowing me to build robust and dynamic websites
            </Typography>
            <div className="font-inter text-sm font-medium grid grid-cols-3 ">
              <p className="inline ">Post : 24</p>
              <p className="inline"> Response : 18</p>
            </div>
            <div className="pl-36 pt-3">
              <img src={socialMediaIcons} alt="" />
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
