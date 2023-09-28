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
import location from "../assets/location.svg";
import bin from "../assets/bin.svg";

import MoreIcon from "../assets/MoreIcon.png";
import { Box, CardHeader } from "@mui/material";
import { useState } from "react";

export default function RecipeReviewCard() {

  const [show , setShow] = useState(false)
  console.log(post);
  const theme = createTheme({
    typography: {
      fontFamily: "Inter",
      fontSize: 10,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className=" font-[Inter]">
        <div>
          <img src={backGroungImage} alt="" />
          <div className=" absolute 2xl:top-36 xl:top-20 left-96 pl-24 right-80">
            <p className="font-bold pt-5" style={{ fontSize: "32px" }}>
              Vikram Varma
            </p>
            <p className="pt-5">Vikram_varma@gmail.com</p>
            <p className="pt-5">Stacia developer at Stacia</p>
            <div className="pt-5">
              <img className="inline pr-2 pb-1" src={location} alt="" />
              Tamil nadu india
            </div>
            <div className=" absolute right-0 bottom-3 cursor-pointer">
              <div className=" h-10 w-36 flex items-center justify-center border-2 border-black rounded-full bg-transparent text-black">
                <img src={bin} className=" h-5 pr-2" alt="" />
                Remove
              </div>
            </div>
          </div>
        </div>
        <div className="items-end pl-20 absolute top-24">
          <Card sx={{ maxWidth: 350 }}>
            <div className=" absolute left-36 top-80 flex">
              <div className=" h-8 w-44 flex items-center justify-center border-2 border-black rounded-full bg-black text-white ">
                Subscriber
              </div>
              <div 
              className="cursor-pointer h-8 ml-4 w-8 flex items-center justify-center border-2 border-slate-950 rounded-full bg-transparent text-white" 
              onClick={()=>{setShow(!show)}}
              >
                <img src={MoreIcon} alt="" />
              </div>
            </div>
            <CardMedia
              component="img"
              height="194"
              image={DefaultImage}
              alt="Paella dish"
            ></CardMedia>
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
        {show && 
        <div className=" absolute left-96 top-40">
          <div className=" bg-white h-72 w-64 flex justify-center rounded-t-lg rounded-r-lg">
            <CardContent>
              <p className=" font-bold">@Vikram123 </p>
              <p className=" text-[10px]">Joined Jan-10/2023</p>
              <div className=" flex space-y-3 font-bold mt-3">
                <div className="mt-3 pr-8 flex flex-col gap-3 ">
                  <p>Total Views</p>
                  <p>Total Likes</p>
                  <p>Total Shares</p>
                  <p>Total Responses</p>
                  <p>Total Responsed</p>
                </div>
                <div className="flex flex-col gap-3"> 
                  <p>20</p>
                  <p>25</p>
                  <p>26</p>
                  <p>59</p>
                  <p>55</p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
        }
        <div className=" max-w-screen pl-96 ml-20 overflow-y-scroll h-96">
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
                <div className=" pl-3 flex 2xl:space-x-16 xl:space-x-8">
                  <div className=" ">
                    <img src={like} alt="" className="inline pr-2 pb-1" />
                    {items.likeCount}
                  </div>
                  <div className="">
                    <img src={shear} className="inline pr-2 pb-1" alt="" />
                    {items.shear}
                  </div>
                  <div className=" ">
                    <img src={status} className="inline pr-2 pb-1" alt="" />
                    {items.analyesd}
                  </div>
                  <div className="cursor-pointer">
                    <img src={bin} className="inline pr-2 h-5 pb-1" alt="" />
                  </div>
                  <div className="cursor-pointer">
                    <img src={shearicon} className="inline pr-2 pb-1" alt="" />
                  </div>
                  <div className=" pb-2">
                    {items.original ? (
                      <div className=" text-center  border-2 border-black rounded-full w-28 bg-black text-white">
                        Original
                      </div>
                    ) : (
                      <p className="text-center  border-2 border-black rounded-full w-28">
                        Replied
                      </p>
                    )}
                  </div>
                  <div className="inline pb-1 2xl:pl-96 text-[#555555] text-[14px] xl:pl-48">
                    <div className=" ">{items.date}</div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </ThemeProvider>
  );
}
