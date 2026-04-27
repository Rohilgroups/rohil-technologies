// src/components/BusinessDevelopment.js
import React from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function BusinessDevelopment() {
  const zigZagSections = [
    {
      title: "Empowering Business Growth",
      text: "At Rohil Technologies, we understand that business development is more than just driving sales — it’s about building long-term value for organizations through strategic partnerships, market expansion, and customer engagement. We help businesses identify growth opportunities, streamline operations, and create strategies that enhance profitability and sustainability.",
      img: "/service/businessDevelopment1.png",
      imgLeft: true,
    },
    {
      title: "Accelerating Market Expansion",
      text: "Rohil Technologies supports businesses in identifying new markets, building strategic alliances, and optimizing go-to-market strategies. From data-driven market research to competitive analysis, we guide organizations in expanding their presence across local and global markets with confidence and precision.",
      img: "/service/businessDevelopment2.png",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Strategic Business Planning",
      text: "Develop growth-focused strategies that align operations, marketing, and innovation with business goals.",
      icon: "mdi:chart-timeline-variant",
    },
    {
      title: "Market Expansion",
      text: "Explore untapped markets and new customer segments through research-driven insights and competitive analysis.",
      icon: "mdi:earth",
    },
    {
      title: "Partnership Development",
      text: "Build strategic alliances, vendor relationships, and collaborations to enhance reach and profitability.",
      icon: "mdi:handshake-outline",
    },
    {
      title: "Sales Enablement",
      text: "Strengthen your sales team with modern tools, data insights, and processes that increase conversions.",
      icon: "mdi:chart-line",
    },
    {
      title: "Customer Acquisition",
      text: "Implement targeted campaigns and personalized approaches to attract and retain high-value clients.",
      icon: "mdi:account-arrow-right-outline",
    },
    {
      title: "Digital Growth Strategy",
      text: "Use digital platforms, SEO, and social media to build brand presence and increase customer engagement.",
      icon: "mdi:web",
    },
    {
      title: "Product Positioning",
      text: "Define market positioning and brand messaging to differentiate your business from competitors.",
      icon: "mdi:bullhorn-outline",
    },
    {
      title: "Financial Growth Consulting",
      text: "Enhance profitability and optimize resources through financial planning and cost management.",
      icon: "mdi:finance",
    },
    {
      title: "Innovation & R&D Support",
      text: "Foster innovation by integrating technology, research, and creative strategies into business processes.",
      icon: "mdi:lightbulb-on-outline",
    },
    {
      title: "Process Optimization",
      text: "Streamline business operations and improve productivity with performance-driven management solutions.",
      icon: "mdi:cog-outline",
    },
    {
      title: "Brand Expansion",
      text: "Develop brand identity and awareness strategies that strengthen your market presence globally.",
      icon: "mdi:palette-outline",
    },
    {
      title: "Lead Generation",
      text: "Create automated pipelines and CRM systems to convert prospects into long-term customers.",
      icon: "mdi:account-search-outline",
    },
    {
      title: "Risk & Opportunity Analysis",
      text: "Identify potential challenges and capitalize on growth opportunities with predictive analytics.",
      icon: "mdi:shield-check-outline",
    },
    {
      title: "Project Management",
      text: "Deliver business development initiatives on time, on budget, and aligned with strategic goals.",
      icon: "mdi:clipboard-check-outline",
    },
    {
      title: "Sustainability Consulting",
      text: "Develop eco-friendly business strategies to ensure long-term, responsible growth.",
      icon: "mdi:leaf",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/businessDevelopment.png')",
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
            Business Development
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
            Our Business Development Services
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

          {/* Our Approach */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Our Approach
          </Typography>
          <Typography sx={{ color: colors.grey, mb: 2 }}>
            Our business development approach combines innovation,
            collaboration, and data-driven insights. From identifying potential
            markets to nurturing client relationships, we work closely with your
            team to create sustainable growth models and ensure measurable
            results.
          </Typography>

          <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
            <Typography component="li">
              Strategic planning for market entry and diversification
            </Typography>
            <Typography component="li">
              Data-driven sales and marketing strategies
            </Typography>
            <Typography component="li">
              Long-term partnerships and alliance building
            </Typography>
            <Typography component="li">
              Continuous performance measurement and improvement
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Why Choose Rohil */}
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
              Industry Expertise
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Our team has deep industry experience in technology, retail,
              manufacturing, and professional services, ensuring tailored
              business development strategies.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Data-Driven Growth
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              We leverage data analytics and market insights to make informed
              decisions, ensuring your growth strategy is both effective and
              sustainable.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              End-to-End Support
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              From initial consultation to implementation and monitoring, Rohil
              Technologies provides complete business development support at
              every stage of your growth journey.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
