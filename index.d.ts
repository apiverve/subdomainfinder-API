declare module '@apiverve/subdomainfinder' {
  export interface subdomainfinderOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface subdomainfinderResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class subdomainfinderWrapper {
    constructor(options: subdomainfinderOptions);

    execute(callback: (error: any, data: subdomainfinderResponse | null) => void): Promise<subdomainfinderResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: subdomainfinderResponse | null) => void): Promise<subdomainfinderResponse>;
    execute(query?: Record<string, any>): Promise<subdomainfinderResponse>;
  }
}
