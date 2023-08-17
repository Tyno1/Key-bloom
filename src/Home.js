import { Box, Container, Text } from "@chakra-ui/react";
import mainImg from './images/hero.png';

const Home = () => {
    return (
        <Box className="home">
            <div className="hero">
                <img src={mainImg} alt="" />
            </div>
            <div>
                <h2 className="hero-subheading">
                    ARE YOU A <span style={{color: '#289186'}} >SONGWRITER, PRODUCER/INSTRUMENTALIST?</span>
                    LET US HELP YOU GET PAID
                </h2>
            </div>
        </Box>
    );
}

export default Home;