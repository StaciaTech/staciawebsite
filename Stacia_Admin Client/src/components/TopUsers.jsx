
import React, { useEffect, useState } from 'react';
import DefaultIcon from '../assets/defaulticon.svg';
import correct from '../assets/correct.svg';
import wrong from '../assets/worng.svg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',

      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',

    },
  },
});

const TopUsers = ({ topUser }) => {
  const history = useNavigate();
  const [top3, setTop3] = useState([]);
  useEffect(() => {
    const top3User = topUser.sort((a, b) => {
      return b.responces - a.responces;
    });
    setTop3(top3User.slice(0, 3));
  }, [topUser]);
  return (
    <ThemeProvider theme={theme}>
      <div className='px-10 w-full'>
        <div className='grid grid-cols-5 justify-between '>
          <div className=' grid justify-center text-base font-bold font-[Inter] '>
            User
          </div>
          <div className=' flex justify-center text-base font-bold font-[Inter]'>
            Status
          </div>
          <div className=' flex justify-center text-base font-bold font-[Inter]'>
            Posts
          </div>
          <div className=' flex justify-center text-base font-bold font-[Inter]'>
            Responces
          </div>
          <div className=' flex justify-center '></div>
        </div>
      </div>
      <div className='px-2 w-full'>
        {top3.map((element, id) => {
          return (
            <div className='py-1' key={id}>
              <div className='grid grid-cols-5 justify-between py-2 bg-[#F8F8F8] rounded-xl'>
                <div className=' grid justify-start pl-8 '>
                  <div className='flex '>
                    <div className='w-10 h-10 flex items-center'>
                      <img
                        src={element.image ? element.image : DefaultIcon}
                        alt='user'
                        className='rounded-full'
                      />
                    </div>
                    <div className='flex flex-col justify-center ps-8'>
                      <div className='text-base font-bold font-[Inter]'>

                        {element.name}
                      </div>
                    </div>
                  </div>
                </div>

                <div className=' flex justify-center items-center'>
                  {
                    <img
                      src={element.subscription ? correct : wrong}
                      alt='icon'
                    />
                  }
                </div>
                <div className=' flex justify-center items-center text-base font-bold font-[Inter]'>
                  {element.posts}
                </div>
                <div className=' flex justify-center items-center text-base font-bold font-[Inter]'>
                  {element.responces}
                </div>
                <button className='border-2 rounded-full w-32 border-black font-[Jost] font-medium text-base'>

                  Views details
                </button>
              </div>
            </div>
          );
        })}

        <div className='float-right w-38 bg-[#FFFFFF] rounded-xl py-1 my-2'>
          <Button
            variant='primary'
            onClick={() => history('/users')}

            endIcon={<ArrowRightAltIcon />}
          >
            Click More
          </Button>

        </div>

        {/* <button className="float-right w-36 bg-[#EDEDED] rounded-2" onClick={()=>history("/users")} >Click More </button> */}
      </div>
    </ThemeProvider>
  );
};

export default TopUsers;
