'use client'
import React from 'react'
import { 
  Box, 
  Typography, 
  Container, 
  Link,
  Divider,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
})

export default function FooterMicroFrontend() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          py: 4,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Informações da empresa */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Micro-Frontend App
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#e3f2fd' }}>
                Uma demonstração completa de arquitetura micro-frontend usando Next.js, 
                Single-SPA e Material UI. Cada seção é um microfrontend independente.
              </Typography>
            </Box>

            {/* Links úteis */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Links Úteis
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  Documentação
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  API Reference
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Exemplos
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Suporte
                </Link>
              </Box>
            </Box>

            {/* Tecnologias */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Tecnologias
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="https://nextjs.org" color="inherit" underline="hover" target="_blank">
                  Next.js
                </Link>
                <Link href="https://single-spa.js.org" color="inherit" underline="hover" target="_blank">
                  Single-SPA
                </Link>
                <Link href="https://mui.com" color="inherit" underline="hover" target="_blank">
                  Material UI
                </Link>
                <Link href="https://vercel.com" color="inherit" underline="hover" target="_blank">
                  Vercel
                </Link>
              </Box>
            </Box>

            {/* Redes sociais */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Conecte-se
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <GitHub />
                </Link>
                <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LinkedIn />
                </Link>
                <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Email />
                </Link>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3, backgroundColor: '#e3f2fd' }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="#e3f2fd">
              © {new Date().getFullYear()} Micro-Frontend App. Desenvolvido com ❤️ usando Next.js e Single-SPA.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
