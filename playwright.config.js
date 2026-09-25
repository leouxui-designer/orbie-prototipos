import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'file:///C:/Kiro%20Projeto/Mocks',
    headless: false, // false = você vê o browser abrindo
    slowMo: 500,     // 500ms de delay entre ações — ótimo pra visualizar
  },
});