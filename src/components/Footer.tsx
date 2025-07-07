'use client'
import React from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Link, 
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          backgroundColor: '#1976d2', 
          color: 'white', 
          padding: '32px 0', 
          marginTop: '48px' 
        }}
      >
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Grid container spacing={4} sx={{ marginBottom: '24px' }}>
            {/* Coluna 1: Sobre */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ marginBottom: '16px', color: '#fff' }}>
                🦶 Footer MF Remote
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbdefb', lineHeight: 1.6 }}>
                Componente Footer carregado remotamente via Module Federation. 
                Independente e deployado separadamente.
              </Typography>
            </Grid>
            
            {/* Coluna 2: Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ marginBottom: '16px', color: '#fff' }}>
                Links Úteis
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '14px' }}>
                  🏠 Home
                </Link>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '14px' }}>
                  📖 Documentação
                </Link>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '14px' }}>
                  💻 GitHub
                </Link>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '14px' }}>
                  ℹ️ Sobre
                </Link>
              </Box>
            </Grid>
            
            {/* Coluna 3: Tecnologias */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ marginBottom: '16px', color: '#fff' }}>
                Tecnologias
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip 
                  label="Next.js" 
                  size="small" 
                  sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
                <Chip 
                  label="Module Federation" 
                  size="small" 
                  sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
                <Chip 
                  label="React" 
                  size="small" 
                  sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
                <Chip 
                  label="Material UI" 
                  size="small" 
                  sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
                <Chip 
                  label="Webpack" 
                  size="small" 
                  sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
              </Box>
            </Grid>
            
            {/* Coluna 4: Social */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ marginBottom: '16px', color: '#fff' }}>
                Social
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, marginBottom: '16px' }}>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '20px' }}>
                  📧
                </Link>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '20px' }}>
                  🔗
                </Link>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '20px' }}>
                  🐦
                </Link>
                <Link href="#" sx={{ color: '#bbdefb', textDecoration: 'none', fontSize: '20px' }}>
                  📺
                </Link>
              </Box>
              <Typography variant="body2" sx={{ color: '#bbdefb', fontSize: '12px' }}>
                Carregado remotamente ✨
              </Typography>
            </Grid>
          </Grid>
          
          {/* Divider */}
          <Box 
            sx={{ 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              marginTop: '24px',
              paddingTop: '24px' 
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="body2" sx={{ color: '#bbdefb' }}>
                © 2024 Module Federation App. Todos os direitos reservados.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography variant="caption" sx={{ color: '#bbdefb' }}>
                  Shell: :3000
                </Typography>
                <Typography variant="caption" sx={{ color: '#bbdefb' }}>
                  Footer: :3004
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Footer 