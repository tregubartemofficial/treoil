import React from "react";
import HeroSection from "../components/HeroSection";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

const MainPage = () => {
  
  return (
    <>
      <HeroSection />
      <Container component="article" sx={{ py: 30 }}>
        <Stack>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Про нас
          </Typography>
          <Typography letterSpacing={"0.06em"}>
            Наша фірма знаходиться у Вінниці та займається з 2021 продажем і поставками
            олив, мастил, технічних рідин, емульсолів для токарних робіт
            компаній: Texaco, Unil, Prista Oil, Orlen Oil.
          </Typography>
        </Stack>
        <Stack alignItems="center" my={30}>
          <Stack>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Асортимент
            </Typography>
            <Typography letterSpacing={"0.05938em"}>
              У асортименті автомобільні оливи для пересувного транспорту і
              стаціонарних установок. Є оливи для газових двигунів-генераторів,
              когенераційних установок, які вже застосовуються на підприємствах
              теплоенерго. Промислові мастила, емульсоли, гас, нефрас,
              уайтспіріт. Пропонуємо трансформаторну, компресорну і турбінну
              оливи. Оливи компресорні для новітніх систем кондиціонування та
              холодильного обладнання. Є в наявності мастила: термостійкі, для
              електромоторів,
            </Typography>
          </Stack>
          <Stack direction="row">
            <Avatar
              variant="square"
              alt="Orlen"
              src="/images/Orlen.png"
              sx={{ height: 70, width: 70, mx: 1 }}
            />
            <Avatar
              variant="square"
              alt="Texaco"
              src="/images/Texaco.png"
              sx={{ height: 70, width: 70, mx: 1 }}
            />
            <img
              alt="Prista"
              src="/images/Prista.png"
              style={{
                height: "70px",
                width: "70px",
                objectFit: "contain",
                margin: "0 8px",
              }}
            />
            <img
              alt="Unil"
              src="/images/Unil.png"
              style={{
                height: "80px",
                width: "80px",
                objectFit: "contain",
                margin: "0 8px",
              }}
            />
          </Stack>
        </Stack>
        <Stack alignItems="center" my={30} >
          <Stack sx={{ pr: { xs: 0, md: 10 } }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Доставка
            </Typography>
            <Typography letterSpacing={"0.06em"}>
              Поставку товару можемо здійснювати безпосередньо на об'єкт. Масло
              заливається в каністри по 4, 10, 20 літрів. Бочки 210 літрів і
              ємності на 1000 літрів. При необхідності можемо приїхати для
              уточнення технічних питань, складання комерційної пропозиції і
              т.п.
            </Typography>
          </Stack>
          <Stack direction="row">
            <Avatar
              variant="square"
              alt="barrel"
              src="/images/barrel.png"
              sx={{ height: 70, width: 70 }}
            />
            <Avatar
              variant="square"
              alt="20L"
              src="/images/20L.png"
              sx={{ height: 70, width: 70 }}
            />
            <Avatar
              variant="square"
              alt="10L"
              src="/images/10L.png"
              sx={{ height: 70, width: 70 }}
            />
            <Avatar
              variant="square"
              alt="4L"
              src="/images/4L.png"
              sx={{ height: 70, width: 70 }}
            />
          </Stack>
        </Stack>
        <Stack alignItems="center" sx={{ mt: 30, mb: 5 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Знаходимось
          </Typography>
          <Box sx={{ width: "90%", height: 300 }}>
            <iframe
              title="TREOIL Location Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6101.428664284915!2d28.42624796042512!3d49.23700397727064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5da73e9773dd%3A0xa89b208970bd654a!2z0KLRgNC10L7QudC7!5e0!3m2!1suk!2sua!4v1690721689427!5m2!1suk!2sua"
              style={{ border: "0", width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default MainPage;
