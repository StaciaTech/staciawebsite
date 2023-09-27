import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import DefaultImage from "../assets/DefaultImage.png";
import Typography from "@mui/material/Typography";
import backGroungImage from "../assets/profileBackGround.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import socialMediaIcons from "../assets/socialMediaIcons.svg";
import { post } from "../Data/PostData";
import like from "../assets/like.svg";
import shear from "../assets/shear.svg";
import status from "../assets/status.svg";
import shearicon from "../assets/shearIcon.svg";

export default function RecipeReviewCard() {
  console.log(post);
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
      <div className=" max-w-screen-2xl min-w-min-50 pl-96 ml-20 ">
        {post.map((items, id) => {
          return (
            <div className="" key={id}>
              <div>
                <p
                  className="font-medium font-[Inter] p-3"
                  style={{ fontSize: "14px" }}
                >
                  {items.content}
                </p>
              </div>
              <div className=" grid grid-cols-8 pl-3">
                <div className=" pr-14">
                  <img src={like} alt="" className="inline pr-2 pb-1" />
                  {items.likeCount}
                </div>
                <div className=" pr-14">
                  <img src={shear} className="inline pr-2 pb-1" alt="" />
                  {items.shear}
                </div>
                <div className=" pr-14">
                  <img src={status} className="inline pr-2 pb-1" alt="" />
                  {items.analyesd}
                </div>
                <div className=" pr-14">
                  <img src={status} className="inline pr-2 pb-1" alt="" />
                </div>
                <div className=" pr-14">
                  <img src={shearicon} className="inline pr-2 pb-1" alt="" />
                </div>
                <div>
                  {items.original ? (
                    <p className=" text-center  border-2 border-black rounded-full w-28 bg-black text-white">
                      Original
                    </p>
                  ) : (
                    <p className="text-center  border-2 border-black rounded-full w-28">
                      Replied
                    </p>
                    
                  )}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </ThemeProvider>
  );
}
