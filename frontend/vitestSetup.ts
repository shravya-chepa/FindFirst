import { vi } from "vitest";
import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env'
import './app/globals.css'
loadEnvConfig(process.cwd())

vi.mock("next/navigation", () => {
  const actual = vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});