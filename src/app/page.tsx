"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Trophy, Flame, Star, Calendar, BarChart3, Users, Heart, Bell, Twitter, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Lakers"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085699862-sth91r9v.jpg"
          logoAlt="Los Angeles Lakers"
          navItems={[
            { name: "Team", id: "team" },
            { name: "Schedule", id: "schedule" },
            { name: "Tickets", id: "tickets" },
            { name: "News", id: "news" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Los Angeles Lakers"
          description="Experience Championship Basketball. Join the legacy of greatness, tradition, and excellence."
          tag="NBA Champions"
          tagIcon={Trophy}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085700757-2hmexbk1.jpg"
          imageAlt="Lakers basketball arena game"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Get Tickets", href: "tickets" },
            { text: "Learn More", href: "team" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Legacy"
          title="Lakers Basketball Excellence"
          description="Since 1948, the Lakers have been a beacon of NBA excellence. Seventeen championships, countless iconic moments, and a legacy of legendary players that continue to inspire generations of basketball fans worldwide. From Kobe to LeBron, from Magic to Shaq, the purple and gold represents the pinnacle of professional basketball."
          tagIcon={Flame}
          phoneOne={{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085701861-7311kiqk.jpg" }}
          phoneTwo={{ imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085703958-mmccig3g.jpg" }}
          buttons={[
            { text: "Explore History", href: "https://www.nba.com/lakers" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Team Strengths"
          description="Discover what makes the Lakers the most prestigious franchise in basketball"
          tag="Excellence"
          tagIcon={Star}
          features={[
            {
              title: "Championship Tradition",
              description: "17 NBA Championships and counting. The purple and gold legacy runs deep in every victory.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085705147-2fknzxbs.jpg"
            },
            {
              title: "Elite Players",
              description: "Home to some of the greatest basketball talents in NBA history. Today's stars continue the tradition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085706118-lzx206td.jpg"
            },
            {
              title: "Historic Moments",
              description: "From Showtime Lakers to Kobe Bryant era. Every season writes another chapter in basketball history.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085707327-n6brlb8i.jpg"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="schedule" data-section="schedule">
        <ProductCardThree
          title="Upcoming Games"
          description="Secure your seats for the most thrilling Lakers matchups of the season"
          tag="Live Events"
          tagIcon={Calendar}
          products={[
            {
              id: "1",
              name: "Lakers vs Warriors",
              price: "$85",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085702872-93az3wmu.jpg",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Lakers vs Celtics",
              price: "$120",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085702872-93az3wmu.jpg",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Lakers vs Suns",
              price: "$95",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085702872-93az3wmu.jpg",
              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Team Statistics"
          description="Season performance highlights and achievements"
          tag="Stats"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "17",
              description: "NBA Championships Won"
            },
            {
              id: "2",
              value: "76",
              description: "Games Played This Season"
            },
            {
              id: "3",
              value: "120.5",
              description: "Average Points Per Game"
            },
            {
              id: "4",
              value: "52.3%",
              description: "Field Goal Percentage"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Team"
          description="The world-class athletes who represent the purple and gold"
          tag="Roster"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "LeBron James",
              role: "Forward",
              description: "NBA legend and leader. Bringing championship experience and excellence to every game.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085703958-mmccig3g.jpg",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "2",
              name: "Anthony Davis",
              role: "Center",
              description: "One of the most dominant forces in basketball. Elite defender and scorer.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085705147-2fknzxbs.jpg",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "3",
              name: "Austin Reaves",
              role: "Guard",
              description: "Rising star with incredible basketball IQ and clutch performance abilities.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085706118-lzx206td.jpg",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "4",
              name: "D'Angelo Russell",
              role: "Guard",
              description: "Talented playmaker bringing versatility and range to the Lakers lineup.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085707327-n6brlb8i.jpg",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Fan Love"
          description="Hear from Lakers fans about their passion for the purple and gold"
          tag="Community"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Marcus",
              handle: "@lakers_fan_forever",
              testimonial: "Being a Lakers fan for 30 years has been incredible. This team represents excellence and championship tradition. The energy at Crypto.com Arena is unmatched!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085708564-cej46kja.jpg",
              icon: Heart
            },
            {
              id: "2",
              name: "Sarah",
              handle: "@purple_and_gold_pride",
              testimonial: "LeBron brought something special to LA. The way this team plays together is mesmerizing. Every game is must-watch basketball!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085709717-dwbo9f9l.jpg",
              icon: Heart
            },
            {
              id: "3",
              name: "James",
              handle: "@hoops_junkie",
              testimonial: "The Lakers have always been my team. Growing up watching Kobe to now watching LeBron and AD dominate. This legacy is everything.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085710968-wiq3964w.jpg",
              icon: Heart
            },
            {
              id: "4",
              name: "Jessica",
              handle: "@lakers_daily",
              testimonial: "Championship culture runs deep in this organization. From front office to players, everyone is committed to excellence. Go Lakers!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764085712035-7y9me50l.jpg",
              icon: Heart
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Connected with Lakers News"
          description="Get the latest updates on games, player news, tickets, and exclusive content delivered to your inbox."
          tagIcon={Bell}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime from our Lakers newsletter."
          onSubmit={(email) => console.log('Subscribed:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Lakers"
          columns={[
            {
              items: [
                { label: "Schedule", href: "schedule" },
                { label: "Tickets", href: "tickets" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "News", href: "news" },
                { label: "Stats", href: "metrics" },
                { label: "Community", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Shop", href: "https://www.nbastore.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}