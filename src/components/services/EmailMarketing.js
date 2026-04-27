// src/components/EmailMarketing.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function EmailMarketing() {
  const zigZagSections = [
    {
      title: "Crafting Effective Email Campaigns",
      text: "At Rohil Technologies, we design powerful, personalized, and data-driven email marketing campaigns that help businesses engage audiences and boost conversions. Our approach focuses on storytelling, visual appeal, and measurable outcomes, ensuring every message connects with the right audience at the right time.",
      img: "/service/emailMarketing2.png",
      imgLeft: true,
    },
    {
      title: "Optimizing Engagement with Automation",
      text: "We simplify your marketing workflows using smart automation tools. From welcome emails to drip campaigns, our automation systems help maintain consistent engagement, reduce manual effort, and enhance customer retention with precision-timed communication.",
      img: "/service/emailMarketing1.png",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Custom Email Campaigns",
      text: "Design and execute email campaigns tailored to your business needs, ensuring maximum engagement and conversion.",
      icon: "mdi:email-edit-outline",
    },
    {
      title: "Detailed Analytics",
      text: "Track campaign performance with insights into open rates, click-throughs, and conversions for better decisions.",
      icon: "mdi:chart-line",
    },
    {
      title: "Automation Tools",
      text: "Automate your marketing process to save time while achieving higher engagement through scheduled and triggered emails.",
      icon: "mdi:robot-outline",
    },
    {
      title: "Audience Segmentation",
      text: "Segment your subscribers based on demographics, interests, and behavior to deliver highly targeted content.",
      icon: "mdi:account-group-outline",
    },
    {
      title: "A/B Testing",
      text: "Compare subject lines, visuals, and content variations to discover what resonates best with your audience.",
      icon: "mdi:flask-outline",
    },
    {
      title: "Template Design",
      text: "Create visually appealing, mobile-friendly templates aligned with your brand identity.",
      icon: "mdi:palette-outline",
    },
    {
      title: "Deliverability Optimization",
      text: "Ensure your emails land in inboxes, not spam folders, through tested best practices and domain reputation monitoring.",
      icon: "mdi:send-check-outline",
    },
    {
      title: "Integration with CRM",
      text: "Seamlessly connect with CRM tools for automated lead nurturing and personalized campaign management.",
      icon: "mdi:database-sync-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Section ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/emailMarketing.png')",
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
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Email Marketing
          </Typography>
        </Box>
      </Box>

      {/* ===== Zigzag Sections ===== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} sx={{ py: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: section.imgLeft ? "row" : "row-reverse",
              },
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <img
                src={section.img}
                alt={section.title}
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
              >
                {section.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>
                {section.text}
              </Typography>
            </Box>
          </Box>
          {index < zigZagSections.length - 1 && <Divider sx={{ mt: 8 }} />}
        </Container>
      ))}

      {/* ===== Services Section ===== */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 6,
            }}
          >
            Our Email Marketing Services
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
                  flex: { xs: "100%", sm: "48%", md: "23%" },
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
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

          <Divider sx={{ my: 6 }} />

          {/* ===== Our Approach ===== */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Our Approach
          </Typography>
          <Typography sx={{ color: colors.grey, mb: 2 }}>
            We believe email marketing is a blend of creativity, strategy, and
            technology. Our approach focuses on understanding your audience,
            crafting compelling messages, and tracking performance for
            continuous improvement.
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
            <Typography component="li">
              Data-driven segmentation and targeting
            </Typography>
            <Typography component="li">
              Personalized email content and automation
            </Typography>
            <Typography component="li">
              Consistent testing, monitoring, and optimization
            </Typography>
            <Typography component="li">
              Continuous improvement through analytics insights
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* ===== Why Choose Us ===== */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Why Choose Rohil Technologies
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Targeted Campaigns
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Deliver personalized messages to the right audience for stronger
              engagement and better conversions.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Improved ROI
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Our cost-effective email strategies help you achieve measurable
              results and maximize your marketing budget.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Enhanced Engagement
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              With compelling content and optimized visuals, we help brands
              build lasting connections and increase open and click rates.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
