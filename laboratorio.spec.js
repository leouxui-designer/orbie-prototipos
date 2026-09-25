import { test, expect } from '@playwright/test';

test('fluxo completo do laboratório', async ({ page }) => {
  // Abre a tela inicial
  await page.goto('file:///C:/Kiro%20Projeto/Mocks/laboratorio-figma-fiel/index.html');

  // Verifica que o título existe
  await expect(page.locator('h1')).toBeVisible();

  // Clica em uma trilha
  await page.click('.trilha-card:first-child');

  // Espera a próxima tela carregar
  await expect(page).toHaveURL(/trilha-nao-iniciada/);

  // Tira screenshot para revisão
  await page.screenshot({ path: 'screenshots/trilha-aberta.png' });
});