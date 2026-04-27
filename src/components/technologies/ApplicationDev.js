// src/components/ApplicationDev.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import colors from "../Colors";
import {
  Cloud,
  Security,
  Build,
  BugReport,
  Speed,
  BarChart,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";

export default function ApplicationDev() {
  const devPlatforms = [
    { title: "Windows", icon: "mdi:microsoft-windows" },
    { title: "MacOS", icon: "mdi:apple" },
    { title: "Linux", icon: "mdi:linux" },
    { title: "Web (React/Angular/Vue)", icon: "mdi:web" },
    { title: "Cross-Platform (Electron/Flutter)", icon: "mdi:code-braces" },
  ];

  const whatWeDo = [
    {
      title: "Top Notch Quality",
      text: "Our team of experienced development specialists always prioritize quality in every application we deliver.",
      icon: "mdi:check-circle-outline",
    },
    {
      title: "Consultancy",
      text: "We provide expert guidance and consultation to help you create the best possible application for your business.",
      icon: "mdi:account-tie",
    },
    {
      title: "Smooth Communication",
      text: "We ensure clear and timely communication, supporting you across different time zones for seamless collaboration.",
      icon: "mdi:message-text-outline",
    },
    {
      title: "Flexibility",
      text: "Following agile methodology, we adapt to changes while keeping projects on track and meeting deadlines.",
      icon: "mdi:autorenew",
    },
    {
      title: "Objective Oriented",
      text: "We focus on your business goals and work diligently to help you achieve them efficiently.",
      icon: "mdi:target",
    },
    {
      title: "Transparency",
      text: "We maintain complete transparency and honesty, building trust as the foundation of our collaboration.",
      icon: "mdi:eye-outline",
    },
  ];

  const industries = [
    { title: "Game & Utilities", icon: "mdi:gamepad-variant" },
    { title: "Education & E-Learning", icon: "mdi:school" },
    { title: "Sports & Recreation", icon: "mdi:soccer" },
    { title: "Banking & Finance", icon: "mdi:bank" },
    { title: "Travel & Tourism", icon: "mdi:airplane" },
    { title: "Media & Entertainment", icon: "mdi:movie" },
  ];

  const technologies = [
    { title: "Java", icon: "mdi:language-java" },
    { title: "C#", icon: "mdi:language-csharp" },
    { title: "Python", icon: "mdi:language-python" },
    { title: "React", icon: "mdi:react" },
    { title: "Node.js", icon: "mdi:nodejs" },
    { title: "Electron", icon: "mdi:react" },
    { title: "SQL", icon: "mdi:database" },
    { title: "AWS", icon: "mdi:amazon" },
  ];

  const services = [
    {
      title: "Web Applications",
      text: "Build dynamic, responsive, and scalable web apps tailored to your business needs.",
      icon: "mdi:web",
    },
    {
      title: "Desktop Applications",
      text: "Develop high-performance desktop applications for Windows, Mac, and Linux.",
      icon: "mdi:desktop-classic",
    },
    {
      title: "Enterprise Software",
      text: "Create enterprise-grade systems with secure, robust, and scalable architecture.",
      icon: "mdi:office-building",
    },
    {
      title: "API Development",
      text: "Design and implement APIs for seamless integration with your applications.",
      icon: "mdi:api",
    },
    {
      title: "Mobile Applications",
      text: "Develop cross-platform mobile apps for Android and iOS with smooth performance and intuitive UX.",
      icon: "mdi:cellphone",
    },
    {
      title: "Software Maintenance & Support",
      text: "Provide ongoing maintenance, updates, and support to ensure your applications run efficiently and securely.",
      icon: "mdi:tools",
    },
  ];
  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/appdev.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "250px", md: "400px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Application Development
          </Typography>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>

      {/* ===== Section: Intro ===== */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Left Side - Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/appdev1.png"
              alt="Mobile App Development"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          {/* Right Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Application Development
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We create robust, scalable, and user-friendly applications for
              web, desktop, and enterprise platforms. Our solutions are tailored
              to your business requirements, ensuring seamless integration, high
              performance, and an intuitive user experience.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              From concept to deployment, our development team ensures quality,
              security, and maintainability at every stage, delivering software
              that drives business efficiency and innovation.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Divider />
      {/* Second intro */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* left Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Custom Application Solutions
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              With years of experience, we develop custom applications that are
              robust, scalable, and tailored to meet the unique needs of
              businesses across industries. Our solutions are built using the
              latest technologies and frameworks to ensure reliability and
              efficiency.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              From initial concept and requirement analysis to design,
              development, and deployment, we transform your ideas into fully
              functional applications compatible across web, desktop, and mobile
              platforms. Our team ensures seamless integration, intuitive
              interfaces, and maintainable code for long-term success.
            </Typography>
          </Box>

          {/* right side - img */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/appdev2.png"
              alt="Mobile App Development"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </Box>
      </Container>
      <Divider />

      {/* Service */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 6,
          }}
        >
          Our Services
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" }, // 4 per row on desktop
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Icon
                icon={item.icon}
                width={50}
                height={50}
                color={colors.primary}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  mb: 1,
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ===== Section: Our Other Support ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 6,
          }}
        >
          Our Other Support
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {[
            {
              title: "Software Maintenance",
              text: "Ongoing maintenance and updates to keep your applications running smoothly and efficiently.",
              icon: <Build sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Quality Assurance & Testing",
              text: "Comprehensive testing to ensure bug-free, reliable, and high-performance applications.",
              icon: <BugReport sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Cloud & Backend Integration",
              text: "Seamless integration with cloud services and backend systems for scalable and reliable solutions.",
              icon: <Cloud sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Application Security",
              text: "Implement advanced security measures to protect your software and sensitive data.",
              icon: <Security sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Performance Optimization",
              text: "Enhancing application speed, responsiveness, and resource efficiency for smooth operations.",
              icon: <Speed sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Analytics & Insights",
              text: "Provide actionable insights and reporting to monitor and improve application performance.",
              icon: <BarChart sx={{ fontSize: 50, color: colors.primary }} />,
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 1 }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
      <Container sx={{ py: 4 }}>
        {/* ===== Development Section ===== */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 2,
          }}
        >
          Development
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          Our skilled and experienced development team ensures your software
          products are delivered efficiently and on schedule, without
          compromising quality. We specialize in building robust, scalable, and
          user-friendly applications across web, desktop, mobile, and enterprise
          platforms. From initial concept and requirement analysis to design,
          development, and final deployment, we focus on creating solutions
          tailored to your business needs. Our team emphasizes clean code, high
          performance, intuitive UI/UX, and rigorous quality assurance, ensuring
          every application not only meets but exceeds client expectations while
          providing a seamless experience to end-users.
        </Typography>
        <Grid container spacing={4} justifyContent="center" mb={8}>
          {devPlatforms.map((item, i) => (
            <Grid item xs={3} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  width: "100%",
                }}
              >
                <Icon
                  icon={item.icon}
                  width={50}
                  height={50}
                  color={colors.primary}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* ===== What We Do ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          What We Do
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We provide end-to-end application development services, ensuring
          timely delivery without compromising quality. Our team carefully
          estimates project scope, assesses user requirements, creates
          prototypes, fixes issues, and implements solutions effectively. We
          also design comprehensive wireframes with full UI/UX analysis to
          ensure scalable, user-friendly, and high-performance applications that
          exceed client expectations across web, desktop, mobile, and enterprise
          platforms.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {whatWeDo.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                mb: 3,
                textAlign: "center",
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Icon
                icon={item.icon}
                width={50}
                height={50}
                color={colors.primary}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  mb: 1,
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>

        {/* ===== Our Focusing Industries ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Our Focusing Industries
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We serve a diverse range of industries, delivering tailored mobile
          applications and solutions that meet unique business needs. From Game
          & Utilities to Education & E-Learning, Sports & Recreation, Banking &
          Finance, Travel & Tourism, and Media & Entertainment, our expertise
          ensures high-quality, scalable, and engaging digital products. Our
          team leverages cutting-edge technologies to create apps that enhance
          user experience, drive growth, and deliver measurable results across
          all industry verticals.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {industries.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                mb: 3,
                textAlign: "center",
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Icon
                icon={item.icon}
                width={50}
                height={50}
                color={colors.primary}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  mb: 1,
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>

        {/* ===== Technology ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Technology
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We leverage the latest technologies to build high-quality mobile
          applications and games. Our expertise spans iOS, Android, Java, React
          Native, Adobe Illustrator, and Unity, ensuring scalable, efficient,
          and visually engaging solutions that deliver seamless performance and
          a superior user experience across multiple platforms.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mb={8}>
          {technologies.map((item, i) => (
            <Grid item xs={12} sm={6} md={2.3} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  width: "100%",
                }}
              >
                <Icon
                  icon={item.icon}
                  width={50}
                  height={50}
                  color={colors.primary}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
