// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    MtExpand: typeof import('mortise-tenon-design')['MtExpand']
    MtSort: typeof import('mortise-tenon-design')['MtSort']
    MtTable: typeof import('mortise-tenon-design')['MtTable']
  }
}

export { };
