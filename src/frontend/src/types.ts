export interface Session {
  id: string;
  url: string;
  tabCount: number;
  speed: number;
  startedAt: number;
  logs: string[];
}
