// Microfrontend Footer - Exposição para carregamento remoto
(function() {
  'use strict';
  
  if (typeof window !== 'undefined') {
    window.footerMicrofrontend = {
      mount: function(element) {
        console.log('Footer MF: Mount chamado', element);
        
        element.innerHTML = `
          <div style="background-color: #1976d2; color: white; padding: 32px 0; margin-top: 48px;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px; margin-bottom: 24px;">
                
                <!-- Coluna 1: Sobre -->
                <div>
                  <h3 style="margin-bottom: 16px; color: #fff;">Micro-Frontend App</h3>
                  <p style="color: #bbdefb; line-height: 1.6; font-size: 14px;">
                    Aplicação demonstrativa de arquitetura micro-frontend com Next.js, Material UI e Single-SPA.
                  </p>
                  <p style="color: #bbdefb; line-height: 1.6; font-size: 14px; margin-top: 16px;">
                    Cada componente é independente e pode ser desenvolvido separadamente.
                  </p>
                </div>
                
                <!-- Coluna 2: Links -->
                <div>
                  <h3 style="margin-bottom: 16px; color: #fff;">Links Úteis</h3>
                  <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 8px;">
                      <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 14px;">🏠 Home</a>
                    </li>
                    <li style="margin-bottom: 8px;">
                      <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 14px;">📖 Documentação</a>
                    </li>
                    <li style="margin-bottom: 8px;">
                      <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 14px;">💻 GitHub</a>
                    </li>
                    <li style="margin-bottom: 8px;">
                      <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 14px;">ℹ️ Sobre</a>
                    </li>
                  </ul>
                </div>
                
                <!-- Coluna 3: Tecnologias -->
                <div>
                  <h3 style="margin-bottom: 16px; color: #fff;">Tecnologias</h3>
                  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      Next.js
                    </span>
                    <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      React
                    </span>
                    <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      TypeScript
                    </span>
                    <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      Material UI
                    </span>
                    <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      Single-SPA
                    </span>
                    <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      Vercel
                    </span>
                  </div>
                </div>
                
                <!-- Coluna 4: Social -->
                <div>
                  <h3 style="margin-bottom: 16px; color: #fff;">Social</h3>
                  <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                    <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 20px;">📧</a>
                    <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 20px;">🔗</a>
                    <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 20px;">🐦</a>
                    <a href="#" style="color: #bbdefb; text-decoration: none; font-size: 20px;">📺</a>
                  </div>
                  <p style="color: #bbdefb; font-size: 12px; margin: 0;">
                    Desenvolvido remotamente ✨
                  </p>
                </div>
                
              </div>
              
              <!-- Divider -->
              <div style="border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0; padding-top: 24px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                  <p style="color: #bbdefb; font-size: 14px; margin: 0;">
                    © 2024 Micro-Frontend App. Todos os direitos reservados.
                  </p>
                  <div style="display: flex; gap: 16px;">
                    <span style="color: #bbdefb; font-size: 12px;">Shell: :3000</span>
                    <span style="color: #bbdefb; font-size: 12px;">Footer: :3004</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      },
      
      unmount: function(element) {
        console.log('Footer MF: Unmount chamado', element);
        if (element) {
          element.innerHTML = '';
        }
      }
    };
  }
})(); 