import { useEffect, useRef, useState } from "react"
import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Text,
  Badge,
  Button,
  Icon,
  Container,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import {
  profile, social, about, codeCard, education, skillTechStack,
  projectsList, researchData, achievementsList, contact, footer,
} from "./data"
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuGraduationCap,
  LuBrainCircuit,
  LuCode,
  LuDatabase,
  LuCpu,
  LuBot,
  LuSparkles,
  LuLayers,
  LuServer,
  LuTrophy,
  LuMedal,
  LuStar,
  LuFlaskConical,
  LuScrollText,
  LuZap,
  LuGlobe,
  LuArrowRight,
  LuChevronDown,
  LuMapPin,
  LuBinary,
  LuWandSparkles,
  LuChartNetwork,
  LuUniversity,
  LuBriefcase,
  LuCodeXml,
} from "react-icons/lu"

function TechCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; alpha: number
    }[] = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(90, 129, 191, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(90, 165, 210, ${p.alpha})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  )
}


function SectionHeading({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <VStack align="start" gap="3" mb="12">
      <HStack gap="3">
        <Box p="2.5" rounded="lg" style={{ background: "#1a365d" }} color="white">{icon}</Box>
        <Heading size={{ base: "xl", md: "2xl" }} color="navy.800" fontFamily="mono" letterSpacing="tight">{title}</Heading>
      </HStack>
      {subtitle && <Text color="fg.muted" fontSize="md" maxW="2xl">{subtitle}</Text>}
      <Box w="16" h="1" bg="blue.500" rounded="full" />
    </VStack>
  )
}

function ProjectCard({
  title, description, tags, icon, gradient,
}: {
  title: string; description: string; tags: string[]; icon: React.ReactNode; gradient: string
}) {
  return (
    <Box
      bg="white" rounded="xl" overflow="hidden" shadow="md"
      border="1px solid" borderColor="gray.100"
      transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
      _hover={{ transform: "translateY(-6px) scale(1.02)", shadow: "xl", borderColor: "blue.200" }}
    >
      <Box h="4px" style={{ background: gradient }} />
      <Box p="6">
        <HStack gap="3" mb="3">
          <Box p="2.5" rounded="lg" style={{ background: gradient.replace(/linear-gradient.*$/, "") + "15" }}>
            {icon}
          </Box>
          <Heading size="md" color="navy.800" fontFamily="mono">{title}</Heading>
        </HStack>
        <Text color="fg.muted" fontSize="sm" lineHeight="tall" mb="4">{description}</Text>
        <Flex gap="2" flexWrap="wrap">
          {tags.map((tag) => (
            <Badge key={tag} size="sm" variant="subtle" colorPalette="blue">{tag}</Badge>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

function TimelineItem({
  period, title, institution, description, tags, isLast = false,
}: {
  period: string; title: string; institution: string; description: string; tags?: string[]; isLast?: boolean
}) {
  return (
    <Flex gap="4">
      <Flex direction="column" align="center" flexShrink={0}>
        <Box
          w="12px" h="12px" rounded="full" mt="1.5" flexShrink={0}
          style={{ background: "#1a365d", boxShadow: "0 0 0 3px rgba(26,54,93,0.15)" }}
        />
        {!isLast && <Box w="2px" flex="1" bg="gray.200" mt="2" minH="8" />}
      </Flex>
      <Box pb={isLast ? "0" : "8"} flex="1">
        <Text fontSize="xs" color="blue.500" fontWeight="semibold" mb="1" fontFamily="mono">{period}</Text>
        <Heading size="sm" color="navy.800" mb="0.5">{title}</Heading>
        <HStack gap="1" mb="2">
          <Icon as={LuMapPin} color="fg.muted" boxSize="3" />
          <Text fontSize="sm" color="fg.muted">{institution}</Text>
        </HStack>
        <Text fontSize="sm" color="fg.muted" lineHeight="tall" mb="3">{description}</Text>
        {tags && (
          <Flex gap="2" flexWrap="wrap">
            {tags.map((tag) => <Badge key={tag} size="xs" variant="outline" colorPalette="gray">{tag}</Badge>)}
          </Flex>
        )}
      </Box>
    </Flex>
  )
}

function AchievementCard({ icon, title, org, date, description }: {
  icon: React.ReactNode; title: string; org: string; date: string; description: string
}) {
  return (
    <HStack
      gap="4" p="5" bg="white" rounded="xl" border="1px solid" borderColor="gray.100"
      shadow="sm" align="start" transition="all 0.2s"
      _hover={{ shadow: "md", borderColor: "blue.200" }}
    >
      <Box p="3" rounded="lg" style={{ background: "#1a365d" }} color="yellow.300" flexShrink={0}>{icon}</Box>
      <Box flex="1">
        <Heading size="sm" color="navy.800" mb="0.5">{title}</Heading>
        <HStack gap="2" mb="1">
          <Text fontSize="xs" color="blue.500" fontWeight="semibold">{org}</Text>
          <Text fontSize="xs" color="fg.subtle">·</Text>
          <Text fontSize="xs" color="fg.muted">{date}</Text>
        </HStack>
        <Text fontSize="sm" color="fg.muted">{description}</Text>
      </Box>
    </HStack>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: "关于", href: "#about" },
    { label: "教育", href: "#education" },
    { label: "技能", href: "#skills" },
    { label: "项目", href: "#projects" },
    { label: "研究", href: "#research" },
    { label: "荣誉", href: "#achievements" },
  ]

  return (
    <Box
      as="nav" pos="fixed" top="0" left="0" right="0" zIndex="sticky"
      transition="all 0.3s"
      bg={scrolled ? "white" : "transparent"}
      borderBottom={scrolled ? "1px solid" : "none"}
      borderColor="gray.100"
      style={{ backdropFilter: scrolled ? "blur(12px)" : "none", boxShadow: scrolled ? "0 1px 20px rgba(26,54,93,0.08)" : "none" }}
    >
      <Container maxW="7xl" px={{ base: "4", md: "8" }}>
        <Flex h="16" align="center" justify="space-between">
          <Text fontFamily="mono" fontWeight="bold" fontSize="lg" color={scrolled ? "navy.800" : "white"}>
            <Text as="span" color="blue.400">&lt;</Text>
            {profile.name}
            <Text as="span" color="blue.400">/&gt;</Text>
          </Text>
          <HStack gap="6" display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <Text
                key={link.href} as="a" href={link.href} fontSize="sm" fontWeight="medium"
                color={scrolled ? "gray.600" : "gray.200"}
                _hover={{ color: scrolled ? "navy.800" : "white" }}
                transition="color 0.2s" style={{ textDecoration: "none" }}
              >
                {link.label}
              </Text>
            ))}
          </HStack>
          <Button
            as="a" href="#contact" size="sm"
            colorPalette="blue"
            variant={scrolled ? "solid" : "outline"}
            style={!scrolled ? { borderColor: "rgba(255,255,255,0.4)", color: "white", background: "transparent" } : {}}
          >
            联系我
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />

      {/* HERO */}
      <Box
        id="home" pos="relative" minH="100vh" overflow="hidden"
        style={{ background: "linear-gradient(135deg, #071224 0%, #0f2040 30%, #1a365d 60%, #1e3d75 100%)" }}
      >
        <TechCanvas />
        <Box
          pos="absolute" inset="0"
          style={{
            backgroundImage: "linear-gradient(rgba(90,129,191,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,129,191,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <Container maxW="7xl" px={{ base: "4", md: "8" }} pos="relative" zIndex="1">
          <Flex
            minH="100vh" align="center" justify="space-between" gap="12"
            flexDir={{ base: "column", lg: "row" }} py="32"
          >
            <VStack align="start" gap="6" flex="1" maxW="2xl">
              <HStack
                gap="2" px="4" py="2" rounded="full"
                style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
              >
                <Box
                  w="2" h="2" rounded="full" bg="green.400"
                  css={{ animation: "pulse 2s infinite" }}
                />
                <Text fontSize="xs" color="blue.300" fontFamily="mono">
                  {profile.status}
                </Text>
              </HStack>

              <VStack align="start" gap="1">
                <Text fontSize={{ base: "sm", md: "md" }} color="blue.300" fontFamily="mono" letterSpacing="wider">
                  Hi, I&apos;m
                </Text>
                <Heading size={{ base: "4xl", md: "5xl" }} color="white" lineHeight="shorter" fontWeight="bold">
                  {profile.name}
                </Heading>
                <Heading size={{ base: "xl", md: "2xl" }} color="blue.300" fontWeight="medium" fontFamily="mono">
                  {profile.title}
                </Heading>
              </VStack>

              <Flex gap="2" flexWrap="wrap">
                {profile.tags.map((tag) => (
                  <Badge
                    key={tag} size="md"
                    style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", color: "#93c5fd" }}
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>

              <Text color="gray.300" fontSize={{ base: "md", md: "lg" }} lineHeight="tall" maxW="xl">
                {profile.heroIntro.prefix}
                <Text as="span" color="blue.300" fontWeight="medium">{profile.heroIntro.highlight1}</Text>{profile.heroIntro.mid}
                <Text as="span" color="blue.300" fontWeight="medium">{profile.heroIntro.highlight2}</Text>{profile.heroIntro.suffix}
              </Text>

              <HStack gap="3" flexWrap="wrap">
                <Button
                  as="a" href="#projects" size="lg"
                  style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "white", border: "none" }}
                  _hover={{ opacity: 0.9, transform: "translateY(-1px)" }} transition="all 0.2s"
                >
                  <Icon as={LuCode} />查看项目
                </Button>
                <Button
                  as="a" href="#contact" size="lg" variant="outline"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "white", background: "transparent" }}
                  _hover={{ background: "rgba(255,255,255,0.08)", transform: "translateY(-1px)" }} transition="all 0.2s"
                >
                  <Icon as={LuMail} />联系我
                </Button>
              </HStack>

              <HStack gap="4">
                {[
                  { icon: LuGithub, href: social.github.url, label: "GitHub" },
                  { icon: LuLinkedin, href: social.linkedin.url, label: "LinkedIn" },
                  { icon: LuMail, href: social.email.address, label: "Email" },
                ].map(({ icon, href, label }) => (
                  <Box
                    key={label} as="a" href={href} target="_blank"
                    p="2.5" rounded="lg" color="gray.300"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                    _hover={{ color: "white", background: "rgba(59,130,246,0.2)", borderColor: "rgba(59,130,246,0.4)" }}
                    transition="all 0.2s"
                  >
                    <Icon as={icon} boxSize="5" />
                  </Box>
                ))}
              </HStack>
            </VStack>

            {/* Code card */}
            <Box flex="0 0 auto" w="420px" display={{ base: "none", lg: "block" }}>
              <Box
                rounded="2xl" overflow="hidden"
                style={{
                  background: "rgba(15,32,64,0.7)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                <HStack
                  px="4" py="3" gap="2"
                  style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(59,130,246,0.15)" }}
                >
                  <Box w="3" h="3" rounded="full" bg="red.400" opacity="0.8" />
                  <Box w="3" h="3" rounded="full" bg="yellow.400" opacity="0.8" />
                  <Box w="3" h="3" rounded="full" bg="green.400" opacity="0.8" />
                  <Text fontSize="xs" color="gray.500" ml="2" fontFamily="mono">profile.py</Text>
                </HStack>
                <Box px="5" py="5">
                  <Text fontFamily="mono" fontSize="sm" lineHeight="tall" whiteSpace="pre-wrap">
                    <Text as="span" color="blue.400">{"class "}</Text>
                    <Text as="span" color="cyan.300">{codeCard.className}</Text>
                    <Text as="span" color="gray.300">{":\n"}</Text>
                    <Text as="span" color="gray.500">{`  ${codeCard.comment}\n\n`}</Text>
                    <Text as="span" color="blue.400">{"  def "}</Text>
                    <Text as="span" color="yellow.300">{"__init__"}</Text>
                    <Text as="span" color="gray.300">{"(self):\n"}</Text>
                    <Text as="span" color="gray.300">{"    self."}</Text>
                    <Text as="span" color="cyan.200">{"university"}</Text>
                    <Text as="span" color="gray.300">{" = "}</Text>
                    <Text as="span" color="green.300">{`\"${codeCard.university}\"\n`}</Text>
                    <Text as="span" color="gray.300">{"    self."}</Text>
                    <Text as="span" color="cyan.200">{"major"}</Text>
                    <Text as="span" color="gray.300">{" = "}</Text>
                    <Text as="span" color="green.300">{`\"${codeCard.major}\"\n`}</Text>
                    <Text as="span" color="gray.300">{"    self."}</Text>
                    <Text as="span" color="cyan.200">{"gpa"}</Text>
                    <Text as="span" color="gray.300">{" = "}</Text>
                    <Text as="span" color="orange.300">{`${codeCard.gpa}\n\n`}</Text>
                    <Text as="span" color="gray.300">{"    self."}</Text>
                    <Text as="span" color="cyan.200">{"skills"}</Text>
                    <Text as="span" color="gray.300">{" = [\n"}</Text>
                    <Text as="span" color="green.300">{`      \"${codeCard.skills[0]}\"`}</Text>
                    <Text as="span" color="gray.300">{", "}</Text>
                    <Text as="span" color="green.300">{`\"${codeCard.skills[1]}\"`}</Text>
                    <Text as="span" color="gray.300">{",\n"}</Text>
                    <Text as="span" color="green.300">{`      \"${codeCard.skills[2]}\"`}</Text>
                    <Text as="span" color="gray.300">{", "}</Text>
                    <Text as="span" color="green.300">{`\"${codeCard.skills[3]}\"\n`}</Text>
                    <Text as="span" color="gray.300">{"    ]\n\n"}</Text>
                    <Text as="span" color="blue.400">{"  def "}</Text>
                    <Text as="span" color="yellow.300">{"seeking"}</Text>
                    <Text as="span" color="gray.300">{"(self):\n"}</Text>
                    <Text as="span" color="blue.400">{"    return "}</Text>
                    <Text as="span" color="green.300">{`\"${codeCard.seeking}\"`}</Text>
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>

        <Box
          pos="absolute" bottom="8" left="50%" zIndex="1"
          style={{ transform: "translateX(-50%)" }}
          color="gray.400"
          css={{ animation: "bounce 2s infinite" }}
        >
          <Icon as={LuChevronDown} boxSize="6" />
        </Box>
      </Box>

      {/* ABOUT */}
      <Box id="about" py={{ base: "16", md: "24" }} bg="white">
        <Container maxW="7xl" px={{ base: "4", md: "8" }}>
          <SectionHeading
            icon={<Icon as={LuCode} boxSize="5" />}
            title="关于我"
            subtitle={about.subtitle}
          />
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="12" alignItems="center">
            <VStack align="start" gap="5">
              <Text color="fg.muted" fontSize="md" lineHeight="tall">
                {about.paragraphs[0].before}<Text as="span" fontWeight="semibold" color="navy.800">{about.paragraphs[0].name}</Text>{about.paragraphs[0].after}
                <Text as="span" color="blue.600" fontWeight="medium">{about.paragraphs[0].hl1}</Text>{about.paragraphs[0].mid}<Text as="span" color="blue.600" fontWeight="medium">{about.paragraphs[0].hl2}</Text>{about.paragraphs[0].end}
              </Text>
              <Text color="fg.muted" fontSize="md" lineHeight="tall">
                {about.paragraphs[1].text}
              </Text>
              <Text color="fg.muted" fontSize="md" lineHeight="tall">
                {about.paragraphs[2].before}<Text as="span" fontWeight="semibold" color="navy.800">{about.paragraphs[2].highlight}</Text>{about.paragraphs[2].after}
              </Text>
              <HStack gap="3" flexWrap="wrap" mt="2">
                {[
                  { icon: LuMapPin, text: about.badges[0].text },
                  { icon: LuGraduationCap, text: about.badges[1].text },
                  { icon: LuBriefcase, text: about.badges[2].text },
                ].map(({ icon, text }) => (
                  <HStack key={text} gap="1.5" px="3" py="1.5" bg="gray.50" rounded="full" border="1px solid" borderColor="gray.200">
                    <Icon as={icon} boxSize="3.5" color="blue.500" />
                    <Text fontSize="xs" color="gray.600" fontWeight="medium">{text}</Text>
                  </HStack>
                ))}
              </HStack>
            </VStack>

            <SimpleGrid columns={2} gap="4">
              {[
                { value: about.stats[0].value, label: about.stats[0].label, icon: LuStar, colorPalette: about.stats[0].colorPalette },
                { value: about.stats[1].value, label: about.stats[1].label, icon: LuCode, colorPalette: about.stats[1].colorPalette },
                { value: about.stats[2].value, label: about.stats[2].label, icon: LuTrophy, colorPalette: about.stats[2].colorPalette },
                { value: about.stats[3].value, label: about.stats[3].label, icon: LuScrollText, colorPalette: about.stats[3].colorPalette },
              ].map(({ value, label, icon, colorPalette }) => (
                <Box
                  key={label} p="6" bg="gray.50" rounded="2xl" border="1px solid" borderColor="gray.100"
                  textAlign="center" transition="all 0.2s"
                  _hover={{ bg: "blue.50", borderColor: "blue.200" }}
                >
                  <Icon as={icon} boxSize="6" color={`${colorPalette}.500`} mb="2" />
                  <Heading size="2xl" color="navy.800" fontFamily="mono" fontWeight="bold">{value}</Heading>
                  <Text fontSize="xs" color="fg.muted" mt="1">{label}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Grid>
        </Container>
      </Box>

      {/* EDUCATION */}
      <Box id="education" py={{ base: "16", md: "24" }} bg="gray.50">
        <Container maxW="7xl" px={{ base: "4", md: "8" }}>
          <SectionHeading
            icon={<Icon as={LuGraduationCap} boxSize="5" />}
            title="教育背景"
            subtitle={education.subtitle}
          />
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="12">
            <Box>
              <Text fontSize="sm" fontFamily="mono" color="blue.500" fontWeight="semibold" mb="6" letterSpacing="wider">
                {"// 正式教育"}
              </Text>
              {education.timeline.map((item, i) => (
                <TimelineItem
                  key={item.title}
                  period={item.period}
                  title={item.title}
                  institution={item.institution}
                  description={item.description}
                  tags={item.tags}
                  isLast={i === education.timeline.length - 1}
                />
              ))}
            </Box>
            <Box>
              <Text fontSize="sm" fontFamily="mono" color="blue.500" fontWeight="semibold" mb="6" letterSpacing="wider">
                {"// 在线课程 & 证书"}
              </Text>
              <VStack gap="3" align="stretch">
                {education.certificates.map((cert) => (
                  <HStack
                    key={cert.title} p="4" bg="white" rounded="xl" border="1px solid" borderColor="gray.100"
                    justify="space-between" gap="3" transition="all 0.2s"
                    _hover={{ borderColor: "blue.200", shadow: "sm" }}
                  >
                    <Box flex="1">
                      <Text fontSize="sm" fontWeight="medium" color="navy.800">{cert.title}</Text>
                      <Text fontSize="xs" color="fg.muted">{cert.org} · {cert.date}</Text>
                    </Box>
                    <Badge size="xs" colorPalette="green" variant="subtle">{cert.badge}</Badge>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* SKILLS */}
      <Box id="skills" py={{ base: "16", md: "24" }} bg="white">
        <Container maxW="7xl" px={{ base: "4", md: "8" }}>
          <SectionHeading
            icon={<Icon as={LuCpu} boxSize="5" />}
            title="专业技能"
            subtitle="技术栈覆盖 AI 算法研究到工程落地的全链路。"
          />
          {/* SIMPLIFIED: Removed detailed skill subcategories, keeping only tech tags and consolidated skill bars */}
          <Box p="6" rounded="2xl" style={{ background: "#1a365d" }} mb="8">
            <Text fontSize="sm" fontFamily="mono" color="blue.300" fontWeight="semibold" mb="4">
              {"// 技术栈"}
            </Text>
            <Flex gap="2" flexWrap="wrap">
              {skillTechStack.map((label, i) => {
                const colors = ["blue", "teal", "cyan"]
                const c = colors[i % 3]
                return (
                  <Badge
                    key={label} size="md"
                    style={{
                      background: c === "blue" ? "rgba(59,130,246,0.12)" : c === "teal" ? "rgba(20,184,166,0.12)" : "rgba(6,182,212,0.12)",
                      border: c === "blue" ? "1px solid rgba(59,130,246,0.25)" : c === "teal" ? "1px solid rgba(20,184,166,0.25)" : "1px solid rgba(6,182,212,0.25)",
                      color: c === "blue" ? "#93c5fd" : c === "teal" ? "#5eead4" : "#67e8f9",
                    }}
                  >
                    {label}
                  </Badge>
                )
              })}
            </Flex>
          </Box>

        </Container>
      </Box>

      {/* PROJECTS */}
      <Box id="projects" py={{ base: "16", md: "24" }} bg="gray.50">
        <Container maxW="7xl" px={{ base: "4", md: "8" }}>
          <SectionHeading
            icon={<Icon as={LuCodeXml} boxSize="5" />}
            title="项目实战"
            subtitle="将理论付诸实践，构建有价值的 AI 产品。"
          />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
            {projectsList.map((proj) => {
              const iconMap: Record<string, React.ElementType> = {
                database: LuDatabase, bot: LuBot, chart: LuChartNetwork,
                sparkles: LuSparkles, wand: LuWandSparkles, layers: LuLayers,
              }
              const IconComp = iconMap[proj.iconName] || LuCode
              return (
                <ProjectCard
                  key={proj.title}
                  title={proj.title}
                  description={proj.description}
                  tags={proj.tags}
                  icon={<Icon as={IconComp} boxSize="5" />}
                  gradient={proj.gradient}
                />
              )
            })}
          </SimpleGrid>
          <Box textAlign="center" mt="10">
            <Button as="a" href="https://github.com" target="_blank" variant="outline" colorPalette="blue" size="lg">
              <Icon as={LuGithub} />
              查看更多项目 on GitHub
              <Icon as={LuArrowRight} />
            </Button>
          </Box>
        </Container>
      </Box>

      {/* RESEARCH */}
      <Box id="research" py={{ base: "16", md: "24" }} bg="white">
        <Container maxW="7xl" px={{ base: "4", md: "8" }}>
          <SectionHeading
            icon={<Icon as={LuFlaskConical} boxSize="5" />}
            title="毕设研究"
            subtitle={researchData.subtitle}
          />
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8">
            <Box p="8" rounded="2xl" color="white" pos="relative" overflow="hidden" style={{ background: "#1a365d" }}>
              <Box pos="absolute" top="-40px" right="-40px" w="160px" h="160px" rounded="full" style={{ background: "rgba(59,130,246,0.12)" }} />
              <Box pos="absolute" bottom="-20px" left="-20px" w="100px" h="100px" rounded="full" style={{ background: "rgba(20,184,166,0.08)" }} />
              <Badge colorPalette="blue" variant="subtle" mb="4" size="sm">毕业设计</Badge>
              <Heading size="lg" mb="3" lineHeight="shorter">
                {researchData.thesis.title}
              </Heading>
              <Text color="gray.300" fontSize="sm" lineHeight="tall" mb="5">
                {researchData.thesis.description}
              </Text>
              <VStack align="start" gap="2" mb="6">
                {researchData.thesis.details.map((item) => (
                  <HStack key={item} gap="2">
                    <Box w="1.5" h="1.5" rounded="full" bg="blue.400" flexShrink={0} />
                    <Text fontSize="sm" color="gray.300">{item}</Text>
                  </HStack>
                ))}
              </VStack>
              <Flex gap="2" flexWrap="wrap">
                {researchData.thesis.tags.map((tag) => (
                  <Badge
                    key={tag} size="sm"
                    style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#93c5fd" }}
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Box>

            <VStack gap="5" align="stretch">
              <Text fontSize="sm" fontFamily="mono" color="blue.500" fontWeight="semibold" letterSpacing="wider">
                {"// 论文 & 研究成果"}
              </Text>
              {researchData.papers.map((paper) => (
                <Box
                  key={paper.title} p="5" bg="gray.50" rounded="xl" border="1px solid" borderColor="gray.100"
                  transition="all 0.2s" _hover={{ borderColor: "blue.200", shadow: "sm" }}
                >
                  <HStack justify="space-between" mb="2" align="start">
                    <Badge size="xs" colorPalette={paper.typeColor} variant="subtle">{paper.type}</Badge>
                    <Text fontSize="xs" color="blue.500" fontWeight="semibold" textAlign="right">{paper.venue}</Text>
                  </HStack>
                  <Text fontSize="sm" fontWeight="semibold" color="navy.800" mb="1.5" lineHeight="short">{paper.title}</Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="tall">{paper.desc}</Text>
                </Box>
              ))}
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* ACHIEVEMENTS */}
      <Box id="achievements" py={{ base: "16", md: "24" }} bg="gray.50">
        <Container maxW="7xl" px={{ base: "4", md: "8" }}>
          <SectionHeading
            icon={<Icon as={LuTrophy} boxSize="5" />}
            title="荣誉经历"
            subtitle={achievementsList.length > 0 ? "竞技场上的历练，课外实践的积累。" : ""}
          />
          {/* SIMPLIFIED: Removed subcategories - unified single section layout */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
            {achievementsList.map((a) => {
              const aIconMap: Record<string, React.ElementType> = {
                trophy: LuTrophy, medal: LuMedal, star: LuStar, binary: LuBinary,
                graduation: LuGraduationCap, university: LuUniversity, zap: LuZap, scroll: LuScrollText,
              }
              const AIcon = aIconMap[a.iconName] || LuStar
              return (
                <AchievementCard key={a.title} icon={<Icon as={AIcon} boxSize="5" />} title={a.title} org={a.org} date={a.date} description={a.description} />
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CONTACT */}
      <Box
        id="contact" py={{ base: "16", md: "24" }} pos="relative" overflow="hidden"
        style={{ background: "linear-gradient(135deg, #071224 0%, #0f2040 40%, #1a365d 100%)" }}
      >
        <Box
          pos="absolute" inset="0"
          style={{
            backgroundImage: "linear-gradient(rgba(90,129,191,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(90,129,191,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <Container maxW="4xl" px={{ base: "4", md: "8" }} pos="relative" zIndex="1">
          <VStack gap="12" align="center" textAlign="center">
            <VStack gap="4">
              <Badge
                size="md"
                style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#93c5fd" }}
              >
                OPEN TO OPPORTUNITIES
              </Badge>
              <Heading size={{ base: "2xl", md: "4xl" }} color="white" lineHeight="shorter">
                让我们开始一段<Text as="span" color="blue.400"> 对话</Text>
              </Heading>
              <Text color="gray.400" fontSize="lg" maxW="lg" lineHeight="tall">
                {contact.subtitle}
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 3 }} gap="5" w="full">
              {[
                { icon: LuMail, label: "邮箱", value: social.email.display, href: social.email.address, color: "#3b82f6" },
                { icon: LuGithub, label: "GitHub", value: social.github.display, href: social.github.url, color: "#6ee7b7" },
                { icon: LuLinkedin, label: "LinkedIn", value: social.linkedin.display, href: social.linkedin.url, color: "#38bdf8" },
              ].map(({ icon, label, value, href, color }) => (
                <Box
                  key={label} as="a" href={href} target="_blank" p="6" rounded="2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none" }}
                  _hover={{ background: "rgba(59,130,246,0.1)", transform: "translateY(-4px)" }}
                  transition="all 0.2s" display="block"
                >
                  <VStack gap="3">
                    <Box p="3" rounded="xl" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                      <Icon as={icon} boxSize="6" style={{ color }} />
                    </Box>
                    <VStack gap="0.5">
                      <Text fontSize="xs" color="gray.500" fontWeight="semibold" letterSpacing="wider">{label}</Text>
                      <Text fontSize="sm" color="gray.300" fontFamily="mono">{value}</Text>
                    </VStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            <HStack gap="4">
              {[
                { icon: LuGlobe, href: social.blog, label: "个人博客" },
                { icon: LuScrollText, href: profile.resumePdf, label: "简历 PDF" },
              ].map(({ icon, href, label }) => (
                <Button
                  key={label} as="a" href={href} target="_blank" rel="noopener noreferrer" variant="outline" size="lg"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "white", background: "transparent" }}
                  _hover={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  <Icon as={icon} />{label}
                </Button>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box py="6" style={{ background: "#071224" }}>
        <Container maxW="7xl" px={{ base: "4", md: "8" }}>
          <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }} gap="3">
            <Text fontFamily="mono" fontSize="sm" color="gray.600">
              <Text as="span" color="blue.900">&lt;</Text>
              {profile.nameEn}
              <Text as="span" color="blue.900">/&gt;</Text>
            </Text>
            <Text fontSize="xs" color="gray.600">{footer.copyright}</Text>
            <HStack gap="4">
              {[LuGithub, LuLinkedin, LuMail].map((Ico, i) => (
                <Box key={i} as="a" href="#" cursor="pointer">
                  <Icon as={Ico} boxSize="4" color="gray.700" _hover={{ color: "gray.500" }} />
                </Box>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
